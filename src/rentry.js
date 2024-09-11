const axios = require('axios');
const { SocksProxyAgent } = require('socks-proxy-agent');
const https = require('https');
const config = require('../config/default');

function createClient(torProxy, userAgent) {
  const agent = new SocksProxyAgent(torProxy);
  return axios.create({
    httpAgent: agent,
    httpsAgent: agent,
    headers: { 'User-Agent': userAgent }
  });
}

async function createRentryPaste(text, customUrl = '', rentryBaseUrl, client) {
  try {
    const homeResponse = await client.get(rentryBaseUrl, {
      httpsAgent: new https.Agent({ rejectUnauthorized: false })
    });
    const csrfToken = extractCsrfToken(homeResponse.data);
    const cookies = homeResponse.headers['set-cookie'].join('; ');

    const formData = new URLSearchParams();
    formData.append('csrfmiddlewaretoken', csrfToken);
    formData.append('text', text);
    if (customUrl) formData.append('url', customUrl);

    const response = await client.post(`${rentryBaseUrl}/api/new`, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': rentryBaseUrl,
        'Cookie': cookies
      },
      httpsAgent: new https.Agent({ rejectUnauthorized: false })
    });

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.data.url;
  } catch (error) {
    console.error('Error creating paste:', error.message);
    return null;
  }
}

function extractCsrfToken(html) {
  const match = html.match(/name="csrfmiddlewaretoken" value="(.+?)"/);
  if (!match) {
    throw new Error('Failed to extract CSRF token');
  }
  return match[1];
}

module.exports = { createRentryPaste, createClient };

const { createRentryPaste, createClient } = require('./src/rentry');
const config = require('./config/default');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
  .option('tor-proxy', {
    alias: 't',
    type: 'string',
    description: 'Tor SOCKS proxy address',
    default: config.TOR_PROXY
  })
  .option('rentry-url', {
    alias: 'r',
    type: 'string',
    description: 'Rentry.co base URL',
    default: config.RENTRY_BASE_URL
  })
  .option('user-agent', {
    alias: 'u',
    type: 'string',
    description: 'User-Agent string',
    default: config.USER_AGENT
  })
  .option('content', {
    alias: 'c',
    type: 'string',
    description: 'Paste content',
    default: config.PASTE_CONTENT
  })
  .option('custom-url', {
    alias: 'l',
    type: 'string',
    description: 'Custom URL for the paste',
    default: config.CUSTOM_URL
  })
  .help()
  .alias('help', 'h')
  .argv;

async function main() {
  const client = createClient(argv.torProxy, argv.userAgent);
  const url = await createRentryPaste(argv.content, argv.customUrl, argv.rentryUrl, client);
  
  if (url) {
    console.log('Paste created successfully:', url);
  } else {
    console.log('Failed to create paste');
  }
}

main().catch(console.error);

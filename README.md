# Rentry.co Tor Paste Creator 🕵️

Create anonymous pastes on Rentry.co using Tor.

## Quick Start 🚀

1. Prerequisites:
   - Node.js (v12+)
   - Tor Browser or Tor service running on your system

2. Clone and install:
   ```bash
   git clone https://github.com/rxc0n/rentry-tor-paste.git
   cd rentry-tor-paste
   npm install
   ```
3. Run:
   ```bash
   npm start
   ```

## Project Structure 📁

- `index.js`: Main entry point of the application
- `src/rentry.js`: Contains the core functionality for creating pastes
- `config/default.js`: Default configuration settings

## Configuration ⚙️

Edit `config/default.js` to change default settings:


# Custom content

`npm start -- --content "Your paste content"`

# Different Tor proxy
`npm start -- --tor-proxy socks5h://127.0.0.1:9150`

# Custom URL
`npm start -- --custom-url your-custom-url`

# Combine options
`npm start -- --content "Paste content" --custom-url custom-url --user-agent "Custom User Agent"`


## Available Options 📋

- `--tor-proxy`, `-t`: Tor SOCKS proxy address
- `--rentry-url`, `-r`: Rentry.co base URL
- `--user-agent`, `-u`: User-Agent string
- `--content`, `-c`: Paste content
- `--custom-url`, `-l`: Custom URL for the paste

Use `--help` or `-h` for a full list of options.

## Important Note ⚠️

This tool is for educational purposes only. Ensure compliance with Rentry.co's terms of service and applicable laws.

## License 📄

MIT License - See `LICENSE` file for details.

## Usage 🖥️

### Basic Usage

Simply run:


`npm start`


This will create a paste using the default settings.

### Command-line Options

Customize your paste creation:


`npm start -- [options]`

# Available options:

- `--tor-proxy`, `-t`: Tor SOCKS proxy address
- `--rentry-url`, `-r`: Rentry.co base URL
- `--user-agent`, `-u`: User-Agent string
- `--content`, `-c`: Paste content
- `--custom-url`, `-l`: Custom URL for the paste

# Examples:


# Custom content
`npm start -- --content "Your paste content"`

# Different Tor proxy
`npm start -- --tor-proxy socks5h://127.0.0.1:9150`

# Custom URL
`npm start -- --custom-url your-custom-url`

# Combine options
`npm start -- --content "Paste content" --custom-url custom-url --user-agent "Custom User Agent"`


Use `npm start -- --help` for a full list of options.

## Development 🛠️

To modify the core functionality, edit `src/rentry.js`. The `createRentryPaste` and `createClient` functions are exported from this file.

To add new command-line options or modify existing ones, edit `index.js`.

## Important Note ⚠️

This tool is for educational purposes only. Ensure compliance with Rentry.co's terms of service and applicable laws.

## License 📄

MIT License - See `LICENSE` file for details.

## Contributing 🤝

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/yourusername/rentry-tor-paste/issues).

## Support 💬

If you have any questions or need help, please open an issue on the GitHub repository.

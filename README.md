# 🛠️ Awesome Web Tools

<div align="center">

![Awesome Web Tools Banner](https://raw.githubusercontent.com/awesome-web-tools/awesome-web-tools/main/public/assets/preview.png)

**A modern, blazing-fast collection of 20+ essential web tools — built for developers and everyday users.**

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-awesome--web--tools.vercel.app-blue?style=for-the-badge)](https://awesome-web-tools.vercel.app)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Made with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

</div>

---

 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tools Included](#-tools-included)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Running Tests](#running-tests)
  - [Building for Production](#building-for-production)
- [Screenshots](#-screenshots)
- [Roadmap](#️-roadmap)
- [Contributing](#-contributing)
- [Code of Conduct](#-code-of-conduct)
- [Security](#-security)
- [License](#-license)
- [Author](#-author)
- [Acknowledgements](#-acknowledgements)

---

## 📖 About the Project

**Awesome Web Tools** is a free, open-source web application that bundles over **20 essential developer and productivity tools** into a single, beautifully designed interface. No sign-up, no ads, no bloat — just tools that work instantly in your browser.

Whether you're a seasoned developer looking for a quick JSON formatter, or a beginner needing a password generator, this project has you covered. Every tool is built with performance and simplicity in mind, powered by **Vite** and **vanilla JavaScript** — meaning zero framework overhead and lightning-fast load times.

> **Why this project?** Developers often find themselves jumping between 10 different websites to format JSON, generate UUIDs, convert timestamps, and more. Awesome Web Tools brings all of them under one roof.

---

## 🚀 Live Demo

🌐 **[https://awesome-web-tools.vercel.app](https://awesome-web-tools.vercel.app)**

The app is deployed on Vercel and is always up to date with the latest changes on the `main` branch.

---

## ✨ Features

| Feature | Description |
|---|---|
| ⚡ **Lightning Fast** | Built with Vite — zero config, instant HMR, optimized production builds |
| 🎨 **Premium Design** | Modern glassmorphism UI with smooth animations and transitions |
| 🌙 **Dark / Light Mode** | Full theme toggle with preference saved to localStorage |
| 📱 **Fully Responsive** | Works seamlessly on mobile, tablet, and desktop |
| 💾 **Persistent Preferences** | Saves your settings locally — your theme stays across sessions |
| 🔒 **Privacy First** | Everything runs in your browser — no data is ever sent to a server |
| 🧪 **Tested** | Unit tests with Vitest for reliability |
| 🤝 **Open Source** | MIT licensed — fork it, extend it, make it your own |

---

## 🧰 Tools Included

Below is the full list of 20 tools included in the current version:

### 🔐 Security & Encoding
| # | Tool | Description |
|---|------|-------------|
| 1 | **Password Generator** | Generate strong, customizable passwords with options for length, symbols, and numbers |
| 5 | **Base64 Encoder / Decoder** | Encode text or files to Base64 and decode them back instantly |
| 17 | **Image to Base64 Converter** | Convert any image file to a Base64 data URL for embedding in HTML/CSS |

### 🎨 Design & UI
| # | Tool | Description |
|---|------|-------------|
| 3 | **Color Palette Generator** | Generate beautiful color palettes with HEX, RGB, and HSL values |
| 15 | **Gradient Generator** | Create CSS gradients visually with a live preview and one-click copy |
| 16 | **Meta Tag Generator** | Build SEO-friendly meta tags for your web pages instantly |

### 💻 Developer Utilities
| # | Tool | Description |
|---|------|-------------|
| 2 | **QR Code Generator** | Generate QR codes for any URL, text, or data |
| 4 | **JSON Formatter** | Prettify, minify, and validate JSON with syntax highlighting |
| 9 | **Regex Tester** | Test and debug regular expressions live with match highlighting |
| 10 | **Markdown Previewer** | Write Markdown on the left, see the rendered output on the right |
| 11 | **UUID Generator** | Generate RFC-compliant UUIDs (v4) with one click |
| 12 | **Timestamp Converter** | Convert between Unix timestamps and human-readable dates |
| 20 | **Cron Expression Helper** | Build and understand cron expressions visually |

### 📝 Text & Content
| # | Tool | Description |
|---|------|-------------|
| 6 | **URL Shortener UI Mock** | Simulate URL shortening with a clean, shareable interface |
| 7 | **Text Case Converter** | Convert text between camelCase, snake_case, UPPER CASE, and more |
| 8 | **Word Counter** | Count words, characters, sentences, and reading time in real time |
| 18 | **Lorem Ipsum Generator** | Generate placeholder text by words, sentences, or paragraphs |

### 🔢 Calculators & Converters
| # | Tool | Description |
|---|------|-------------|
| 13 | **Unit Converter** | Convert between length, weight, temperature, area, and speed units |
| 14 | **BMI Calculator** | Calculate Body Mass Index with metric and imperial support |
| 19 | **Random Data Generator** | Generate fake names, emails, phone numbers, and addresses for testing |

---

## 🧱 Tech Stack

| Technology | Purpose |
|---|---|
| **Vanilla JavaScript (ES6+)** | Core application logic — no framework overhead |
| **HTML5 & CSS3** | Structure and styling with modern CSS features |
| **Vite** | Build tool — lightning-fast dev server and optimized production builds |
| **Vitest** | Unit testing framework |
| **Vercel** | Hosting and continuous deployment |

---

## 📁 Project Structure

```
awesome-web-tools/
│
├── .github/                  # GitHub Actions workflows & issue templates
├── public/                   # Static assets (favicon, images)
├── src/                      # Main source code
│   ├── tools/                # Individual tool implementations
│   ├── styles/               # Global and component-level CSS
│   └── main.js               # App entry point
├── tests/                    # Unit tests (Vitest)
├── index.html                # App shell
├── package.json              # Project metadata and npm scripts
├── vite.config.js            # Vite configuration
├── vitest.config.js          # Vitest configuration
├── .gitignore
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
└── LICENSE
```

---

## 🏁 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or higher → [Download](https://nodejs.org/)
- **npm** v9 or higher (comes with Node.js)
- **Git** → [Download](https://git-scm.com/)

Verify your versions:
```bash
node --version   # v18+
npm --version    # v9+
git --version
```

### Installation

1. **Fork the repository** by clicking the Fork button on GitHub.

2. **Clone your fork:**
```bash
git clone https://github.com/YOUR_USERNAME/awesome-web-tools.git
cd awesome-web-tools
```

3. **Install dependencies:**
```bash
npm install
```

### Running Locally

Start the development server with hot module replacement:

```bash
npm run dev
```

Open your browser and visit: **[http://localhost:5173](http://localhost:5173)**

### Running Tests

Run the full test suite:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

### Building for Production

Generate an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production files will be output to the `dist/` directory.

---

## 📸 Screenshots

> _Screenshots showcasing the app UI, dark/light mode toggle, and a few tools in action._

| Home Page | Dark Mode | JSON Formatter |
|:---------:|:---------:|:--------------:|
| _(coming soon)_ | _(coming soon)_ | _(coming soon)_ |

---

## 🗺️ Roadmap

Here's what's planned for future versions:

- [ ] **More Tools** — CSS Minifier, SVG Optimizer, HTML Entity Encoder, JWT Decoder
- [ ] **Search & Filter** — Quickly find tools from a search bar
- [ ] **Favorites** — Pin your most-used tools to the top
- [ ] **User Accounts** — Optional cloud syncing of preferences and history
- [ ] **Browser Extension** — Access tools directly from your browser toolbar
- [ ] **PWA Support** — Install as a Progressive Web App for offline use
- [ ] **i18n** — Internationalization support for multiple languages
- [ ] **API Mode** — Expose tool functionality via a simple REST API

Have an idea? [Open a feature request →](https://github.com/NAMANUPADHYAY654/awesome-web-tools/issues/new)

---

## 🤝 Contributing

Contributions are what make the open-source community such a great place to learn and grow. **Any contribution you make is genuinely appreciated!**

Here's how to get started:

1. **Fork** the project
2. **Create** your feature branch: `git checkout -b feature/AmazingFeature`
3. **Commit** your changes: `git commit -m 'Add AmazingFeature'`
4. **Push** to the branch: `git push origin feature/AmazingFeature`
5. **Open** a Pull Request

Please read [**CONTRIBUTING.md**](CONTRIBUTING.md) for detailed guidelines, coding standards, and the PR process.

### Good First Issues

New to the project? Look for issues tagged [`good first issue`](https://github.com/NAMANUPADHYAY654/awesome-web-tools/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) — they're a great place to start!

---

## 📜 Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the maintainer.

---

## 🔒 Security

If you discover a security vulnerability, please **do not** open a public GitHub issue. Instead, follow the responsible disclosure process outlined in [**SECURITY.md**](SECURITY.md).

---

## 📝 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for full details.

```
MIT License — You are free to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of this software.
```

---

## 👨‍💻 Author

**Naman Upadhyay**

- 🐙 GitHub: [@NAMANUPADHYAY654](https://github.com/NAMANUPADHYAY654)
- 📧 Email: naman7733upadhyay@gmail.com

---

## 🙏 Acknowledgements

- [Vite](https://vitejs.dev/) — For the incredible build tooling
- [Vitest](https://vitest.dev/) — For the fast and simple testing framework
- [Vercel](https://vercel.com/) — For free and seamless deployment
- [Shields.io](https://shields.io/) — For the README badges
- All the amazing [contributors](https://github.com/NAMANUPADHYAY654/awesome-web-tools/graphs/contributors) who have helped improve this project

---

<div align="center">

**If you find this project useful, please consider giving it a ⭐ — it means a lot!**

Made with ❤️ by [Naman Upadhyay](https://github.com/NAMANUPADHYAY654)

</div>

# Advocate App

A multi-page website for advertising lawyer services, showcasing legal expertise across various fields of law. The site offers different forms of collaboration, from one-time consultations to client representation in courts of various instances. It also highlights successful case studies from practice and allows visitors to submit requests for feedback.

## Features

- 🏛️ Comprehensive information about legal services in various fields
- 💼 Multiple collaboration options, from consultations to court representation
- 📊 Showcase of successful case studies
- 📝 Contact form for client inquiries
- 🎨 Custom UI/UX design
- 🔍 SEO-friendly semantic markup
- 📱 Responsive design for all device types

## Technologies Used

- HTML
- SASS
- JavaScript
- jQuery
- PHP
- Parcel bundler

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone this repository: `git clone https://github.com/MaksymChukhrai/advocatapp/`

2. Install dependencies: `npm install`

3. Start the local development server: `npm start`

4. Open your browser and navigate to [http://localhost:1234](http://localhost:1234)

## Deployment

### GitHub Pages Deployment

The production version of the project will be automatically built and deployed to GitHub Pages, in the `gh-pages` branch, each time the `main` branch is updated (e.g., after a direct push or an accepted pull request).

```json
"homepage": "https://maksymchukhrai.github.io/advocate-tarasenko-app/",
  "scripts": {
    "start": "parcel src/index.html",
    "build": "parcel build src/*.html --public-url /advocate-tarasenko-app/"
  },
```

### Building a Production Version

## Deploying to Host IQ
This application with the domain igor-tarasenko.com is hosted by HostIQ.

## Preparing Files and Deploying to Host IQ
After you've finished working with the project files and verified the correct functionality at http://localhost:1234, follow these steps:

1. In the `package.json` file, change the root directory name (also the base URL). Specifically, the base URL should be set to `/`, as your project is in the root directory of your site (/public_html) on the provider's server.
Modify the build script in `package.json` as follows:
```
"scripts": {
    "start": "parcel src/.html",
    "build": "parcel build src/*.html --public-url /"
},
```

2. Delete excess cache files from the `.parcel-cache` folder and files from the `dist` folder.

3. In the VSCode console, run the command `npm run build` to build the Production version of the project. After compilation, the project files will be assembled in the `dist` folder.
4. Using FTP access to the server, transfer all files from the dist folder to the server in the `/public_html` folder. If necessary, transfer the src\mail.php file and `src\phpmailer` folder separately, as they are not included in the Production build package.
5. After uploading the files to the server, check the functionality using [the project domain](https://igor-tarasenko.com/).

## License
This project is open-source and available under the MIT License.

## Acknowledgments

- Parcel for the fast, zero configuration web application bundler
- HostIQ for reliable hosting services

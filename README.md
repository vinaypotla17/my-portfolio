# Vinay Potla — Portfolio

A responsive Angular portfolio presenting professional experience, projects,
technical skills, education, and contact information. Visitors can also explore
the portfolio through an interactive terminal and a résumé chatbot.

## Features

- Responsive single-page layout with active-section navigation
- Persistent light and dark themes
- Searchable technical skills
- Expandable professional timeline
- Interactive terminal and portfolio chatbot
- Validated contact form powered by Formspree
- Accessible labels, status messages, and keyboard-friendly controls

## Technology

- Angular standalone components and signals
- TypeScript, SCSS, and Tailwind CSS
- Angular reactive forms, HTTP client, and animations
- Jasmine and Karma unit tests

## Local development

```bash
npm install
npm start
```

Open <http://localhost:4200>.

## Validation

```bash
npm test -- --watch=false --browsers=ChromeHeadless
npm run build
```

## Deployment

The project includes an `angular-cli-ghpages` deployment target:

```bash
npx ng deploy
```

Authenticate through your local Git credential manager or CI secrets. Never
store access tokens in repository URLs or committed configuration.

Pushes to `main` also run the tests and publish the site through GitHub Actions.

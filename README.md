# mailchimp-signup-page

# Newsletter Signup Application

This is a Node.js application that allows users to sign up for a newsletter using the Mailchimp API. The application serves a signup form where users can enter their first name, last name, and email address. Upon submission, the app sends the user's data to a Mailchimp list. Depending on the success or failure of the subscription, the user is redirected to a corresponding success or failure page.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/newsletter-signup.git
   ```
2. Navigate into the project directory:
   ```bash
   cd newsletter-signup
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node app.js
   ```
2. Open your browser and navigate to `http://localhost:3000`.
3. Fill out the signup form and submit it.

## Configuration

To use this application, you need to set up your Mailchimp API key and List ID:

1. Replace `APIKey` in the code with your actual Mailchimp API key.
2. Replace `ListID` in the code with your actual Mailchimp List ID.

You can find your API key and List ID in your Mailchimp account:

- **API Key**: Go to `Account` -> `Extras` -> `API keys`.
- **List ID**: Go to `Audience` -> `Manage Audience` -> `Settings` -> `Audience name and defaults`.

### Files

- **`public/`**: This directory contains static assets such as stylesheets, images, and scripts.
- **`signup.html`**: The HTML file for the signup form.
- **`success.html`**: The page displayed when a user successfully subscribes.
- **`failure.html`**: The page displayed when there is an issue with the subscription.

### Error Handling

If the subscription fails, the user is redirected to the failure page. The user can then try again by clicking a button that redirects them back to the signup page.

## Dependencies

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [body-parser](https://www.npmjs.com/package/body-parser): Node.js body parsing middleware.
- [request](https://www.npmjs.com/package/request): Simplified HTTP request client.
- [https](https://nodejs.org/api/https.html): Node.js module to make HTTPS requests.
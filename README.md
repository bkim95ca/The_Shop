# The_Shop

## Publish the shop

The client is configured for GitHub Pages at `https://bkim95ca.github.io/The_Shop`.
The Pages site hosts the React interface; the Express server must be deployed separately
because GitHub Pages cannot run Node.js, MongoDB, or Stripe.

1. Deploy `server` to a Node host such as Render or Railway.
2. Use MongoDB Atlas and set these server environment variables:
  - `MONGODB_URI`
  - `SECRET_KEY`
  - `STRIPE_KEY`
  - `CLIENT_URL=https://bkim95ca.github.io/The_Shop`
3. In the repository's GitHub settings, add the Actions variable
  `REACT_APP_API_URL` with the deployed server URL, for example
  `https://the-shop-api.onrender.com`.
4. In **Settings > Pages**, select **GitHub Actions** as the source. Every push to
  `main` builds and deploys the `client` through `.github/workflows/deploy-client.yml`.

For local development, leave the variables unset, start MongoDB, run the server on
port `8000`, and run `npm start` from `client`.

This is a fully responsive e-commerce shop that utilizes React.js, Node.js, MongoDB, Express.js, and Stripe API
Front-End: Used React.js to create responsive web pages, show products, and change links, and used Material UI for the Icons
Back-End: Used Node.js and Express.js to connect to database, create models, and routes.
Technologies used: 
  -MongoDB to create the database in the back end to store products and users for profiles for future use cases. 
  -Postman to test out all of the back end routes and test out CRUD created in routes. 
  -Stripe API to create a real life payment system to capture real credit card information for future use cases. 

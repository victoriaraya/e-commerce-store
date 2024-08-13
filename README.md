# Victoria's Shop

## Description

Victoria's Shop is an e-commerce website I built from scratch using React and Express, integrating the Stripe API to handle payment. This is the first major project I built independently, with the intention of getting more experience with React, REST API design, working with databases, authentication, properly integrating third-party APIs and CSS. I thought making my own cute shop 'selling' products I'm actually interested in would be a fun way to do that and it definitely was.

In building this project I learnt a lot about working with react, like properly managing context and state and integrating different components. I also learnt about connecting the UI with data creation and retrieval and properly managing the communication between the two so that things operate how I want them to. I never worked extensively with CSS before this project either, so I learnt so much about using it to create what I want visually. After completing this project, there are countless little things that I know I will encounter in the future which I can complete quickly and easily now since I took the time to figure it out on my own at first. 

## Demo

<img src="./frontend/src/images/victoriashop.gif" alt="Victoria's Shop GIF" width="500" height="300">


## Tech Stack

- [React](https://react.dev/) - Framework
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Language
- [Express](https://expressjs.com/) - Server
- [Prisma](https://www.prisma.io/) - ORM
- [MongoDB](https://www.mongodb.com/) - Database
- [Stripe](https://stripe.com/) - Payment
- [Vite](https://vitejs.dev/) - Build
- [Digital Ocean](https://www.digitalocean.com/) - Hosting

## Getting Started

### Clone this repository

    git clone https://github.com/victoriaraya/e-commerce-store.git

### Install dependencies

    npm install

### Create .env file

CD into backend and create a .env file. Your stripe key is the Secret Key which can be found in your Stripe profile under API Keys. Once you have a Project and Cluster set up in your MongoDB profile, you can find your database url. From your Cluster click Connect and use the connection string. You can put whatever string you wish for your JWT secret, it is recommended to use a strong password. 

    STRIPE_KEY = 'your-stripe-key-here'
    DATABASE_URL = 'your-database-url-here'
    JWT_SECRET = 'your-jwt-secret-here'

### Initialize the database

    npx prisma generate
    npx prisma migrate deploy

### Run the development server:

CD into backend and run this command to start the server, then CD into frontend and run the same command. 

    npm run dev

### Open the app in your browser

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HQmp5L8VmPSEDY65JTOtXg3m4U15KCTbsnAiVct6S28vT9GgrDcZyhYRW2OOyzjmkSHNbAIReHMNa4efB2FZbjO00YR2pnoYv"
);

// API Setup:
// Things needed to setup an API
// App Config
// Middlewares
// API routes
// Listen Command

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOM!!!! for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // 201 : OK everything went good (Created Something)
  response.status(201).send({
      clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// Example End Point
// http://localhost:5001/clone-26ac2/us-central1/api

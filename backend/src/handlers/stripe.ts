const stripe = require("stripe")(process.env.STRIPE_KEY);

export const stripeCheckout = async (req, res) => {
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    allow_promotion_codes: true,
    success_url: "/success",
    cancel_url: "/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
};

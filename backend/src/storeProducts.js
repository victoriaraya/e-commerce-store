const productsArray = [
  {
    id: "price_1Oc0tgFmHegk4vVaGdI9jBaB",
    name: "Sound Bowl",
    price: 44.44,
    description:
      "Embrace the power of sound. Enjoy the luxury of sound healing anytime!",
  },
  {
    id: "price_1Oc0W9FmHegk4vVaDTSyhfef",
    name: "Essential Oil Diffuser",
    price: 25.55,
    description:
      "Enjoy the benefits of whatever essential oil you choose. A treat for your senses.",
  },
  {
    id: "price_1Oc0Z8FmHegk4vVasIR1RpTs",
    name: "Gua Sha Set",
    price: 22.22,
    description:
      "Use this ancient practice to promote circulation and healthy, youthful skin. Comes with a smooth tool and roller.",
  },
  {
    id: "price_1Oc0umFmHegk4vVakbsuGRyH",
    name: "Full Length Mirror",
    price: 105.55,
    description:
      "Every home needs a full length mirror! High quality glass and easy installation.",
  },
  {
    id: "price_1Oc0cRFmHegk4vVam2zdI5Wo",
    name: "Speaker",
    price: 99.99,
    description:
      "Enjoy music from anywhere in your home. Perfect for solo dance parties!",
  },
  {
    id: "price_1Oc0vrFmHegk4vVaxlRn97Ni",
    name: "Standing Desk",
    price: 111.11,
    description:
      "Reduce back pain caused by sitting for long periods of time! Adjustable height, cup holder, headphone hook and easy assembly.",
  },
  {
    id: "price_1Oc0wgFmHegk4vVaz3EJDZ28",
    name: "Keyboard Piano",
    price: 177.77,
    description:
      "Tap into your musical side. Perfect for beginners with 80 song demonstrations.",
  },
  {
    id: "price_1Oc0xIFmHegk4vVasNynZJhN",
    name: "Sewing Machine",
    price: 255.55,
    description:
      "You'll be making your own clothes in no time! Built-in needle threader, 180 stitch applications and adjustable stitch length and width.",
  },
  {
    id: "price_1Oc0y1FmHegk4vVakkodbWwl",
    name: "Mannequin",
    price: 33.33,
    description:
      "Get the perfect fit for your sewing creations. Durable, adjustable height and pinnable.",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log(`Product data does not exist for ID: ${id}`);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };

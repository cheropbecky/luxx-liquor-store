// Local product catalog used by the Shop and Checkout pages.
// This replaces the old backend fetch (http://localhost:3000/api/products)
// so the storefront works fully on the frontend, no server required.

const products = [
  // ---------- Wines ----------
  {
    name: "Red Wine - Cabernet Sauvignon 2007",
    price: 2000,
    image: "/assets/image14.jpg",
    category: "wines",
  },
  {
    name: "White Wine - Sauvignon Blanc 2007",
    price: 1950,
    image: "/assets/image15.jpg",
    category: "wines",
  },
  {
    name: "Premium Red Wine Bottle",
    price: 2400,
    image: "/assets/Clear Glass Red Wine Bottle with Screw Cap Mockup.jpeg",
    category: "wines",
  },
  {
    name: "Sparkling Wine",
    price: 2600,
    image: "/assets/image16.jpg",
    category: "wines",
  },
  {
    name: "Rosé Wine",
    price: 2300,
    image: "/assets/image17.jpg",
    category: "wines",
  },

  // ---------- Cocktails ----------
  {
    name: "Ready-to-Drink Cocktail Mix",
    price: 2100,
    image: "/assets/image48.jpeg",
    category: "cocktails",
  },
  {
    name: "Mojito Cocktail Kit",
    price: 2200,
    image: "/assets/image49.jpeg",
    category: "cocktails",
  },
  {
    name: "Margarita Cocktail Set",
    price: 2300,
    image: "/assets/image50.jpeg",
    category: "cocktails",
  },

  // ---------- Whiskey ----------
  {
    name: "Jim Beam Kentucky Straight Bourbon",
    price: 3000,
    image: "/assets/img3.jpeg",
    category: "whiskey",
  },
  {
    name: "New Riff 8 Year Bourbon",
    price: 4200,
    image: "/assets/img7.jpeg",
    category: "whiskey",
  },
  {
    name: "Classic Whiskey Decanter Set",
    price: 3500,
    image: "/assets/img1.jpeg",
    category: "whiskey",
  },
  {
    name: "Premium Aged Whiskey",
    price: 3800,
    image: "/assets/image20.jpg",
    category: "whiskey",
  },
  {
    name: "Single Malt Scotch",
    price: 4500,
    image: "/assets/image21.jpg",
    category: "whiskey",
  },

  // ---------- Vodka ----------
  {
    name: "Russian Standard Vodka",
    price: 2500,
    image: "/assets/img8.jpeg",
    category: "vodka",
  },
  {
    name: "LEX by Nemiroff Ultra Premium Vodka",
    price: 3200,
    image: "/assets/img5.jpeg",
    category: "vodka",
  },
  {
    name: "Premium Vodka",
    price: 2900,
    image: "/assets/image19.jpg",
    category: "vodka",
  },
  {
    name: "Flavored Vodka",
    price: 2700,
    image: "/assets/image18.jpg",
    category: "vodka",
  },

  // ---------- Beer ----------
  {
    name: "Heineken Lager",
    price: 300,
    image: "/assets/Heineken.jpeg",
    category: "beer",
  },
  {
    name: "Miller Genuine Draft",
    price: 320,
    image: "/assets/img6.jpeg",
    category: "beer",
  },
  {
    name: "Kingfisher Storm Strong Beer",
    price: 350,
    image: "/assets/img4.jpeg",
    category: "beer",
  },
  {
    name: "Classic Pilsner",
    price: 280,
    image: "/assets/photo1.jpg",
    category: "beer",
  },
  {
    name: "Craft IPA",
    price: 400,
    image: "/assets/image7.jpg",
    category: "beer",
  },
  {
    name: "Wheat Beer",
    price: 380,
    image: "/assets/image8.jpg",
    category: "beer",
  },

  // ---------- Gin ----------
  {
    name: "London Dry Gin",
    price: 3200,
    image: "/assets/image3.avif",
    category: "gin",
  },
  {
    name: "Botanical Gin",
    price: 3400,
    image: "/assets/image4.avif",
    category: "gin",
  },
  {
    name: "Pink Gin",
    price: 3100,
    image: "/assets/image5.avif",
    category: "gin",
  },

  // ---------- Soft Drinks ----------
  {
    name: "Pepsi 1L",
    price: 150,
    image: "/assets/image16.jpg",
    category: "softdrinks",
  },
  {
    name: "Coca-Cola, Fanta & Sprite Pack",
    price: 400,
    image: "/assets/image21.jpg",
    category: "softdrinks",
  },
  {
    name: "Club Soda 1L",
    price: 180,
    image: "/assets/image31.jpeg",
    category: "softdrinks",
  },
  {
    name: "Crush Strawberry Soda",
    price: 120,
    image: "/assets/image32.jpeg",
    category: "softdrinks",
  },
  {
    name: "Fanta Strawberry 2L",
    price: 250,
    image: "/assets/image41.jpeg",
    category: "softdrinks",
  },
  {
    name: "Soda Mixers Pack",
    price: 300,
    image: "/assets/soda1.avif",
    category: "softdrinks",
  },

  // ---------- Non-Alcoholic ----------
  {
    name: "Zero Alcohol Wine",
    price: 1500,
    image: "/assets/image2.avif",
    category: "non-alcoholic",
  },
  {
    name: "Non-Alcoholic Beer",
    price: 350,
    image: "/assets/image3.avif",
    category: "non-alcoholic",
  },
  {
    name: "Mocktail Mix",
    price: 900,
    image: "/assets/image4.avif",
    category: "non-alcoholic",
  },
];

export default products;
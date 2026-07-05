// Food Categories //

import { Food, FoodCategory } from "./types";

export const foodCategories: FoodCategory[] = [
  {
    id: "1",
    name: "Chicken",
    slug: "chicken",
    image: require("../assets/images/foods/chicken.jpg"),
  },
  {
    id: "2",
    name: "Mutton",
    slug: "mutton",
    image: require("../assets/images/foods/mutton.jpg"),
  },
  {
    id: "3",
    name: "Fish",
    slug: "fish",
    image: require("../assets/images/foods/hilsha.jpg"),
  },
  {
    id: "4",
    name: "Prawn",
    slug: "prawn",
    image: require("../assets/images/foods/prawn.jpg"),
  },
  {
    id: "5",
    name: "Biryani",
    slug: "biryani",
    image: require("../assets/images/foods/biryani.jpg"),
  },
  {
    id: "6",
    name: "Chinese",
    slug: "chinese",
    image: require("../assets/images/foods/chilli-chicken.jpg"),
  },
  {
    id: "7",
    name: "Noodles",
    slug: "noodles",
    image: require("../assets/images/foods/noodles.jpg"),
  },
  {
    id: "8",
    name: "Soup",
    slug: "soup",
    image: require("../assets/images/foods/soup.jpg"),
  },
  {
    id: "9",
    name: "Fried Rice",
    slug: "tandoori-chicken",
    image: require("../assets/images/foods/fried-rice.jpg"),
  },
];

// Food Items //

export const foods: Food[] = [
  // 🐔 Chicken Items
  {
    id: "101",
    name: "Butter Chicken",
    price: 299,
    image:
      "https://t3.ftcdn.net/jpg/06/01/41/68/360_F_601416862_AfYdeefqT1kGqWTx1DZCsJZVzYIDFzPR.jpg",
    description: "Creamy tomato-based chicken curry.",
    isVeg: false,
    categoryId: "1",
    rating: 4.5,
    reviewsCount: 2800,
  },
  {
    id: "102",
    name: "Chicken Tandoori",
    price: 349,
    image:
      "https://img.freepik.com/free-photo/closeup-shot-deliciously-prepared-chicken-served-with-onions-chili-sauce_181624-61705.jpg?semt=ais_hybrid&w=740&q=80",
    description: "Char-grilled spicy chicken.",
    isVeg: false,
    categoryId: "1",
    rating: 4.3,
    reviewsCount: 2300,
  },

  // 🐐 Mutton Items
  {
    id: "201",
    name: "Mutton Rogan Josh",
    price: 399,
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=283,fit=crop/A85ez13ejGip3RX9/rit08411-mxB4K2pV8BcRPaJN.jpg",
    description: "Rich Kashmiri mutton curry.",
    isVeg: false,
    categoryId: "2",
    rating: 4.6,
    reviewsCount: 1900,
  },
  {
    id: "202",
    name: "Mutton Curry",
    price: 379,
    image:
      "https://myfoodstory.com/wp-content/uploads/2016/12/Easy-Mutton-Curry-1.jpg",
    description: "Traditional spicy mutton gravy.",
    isVeg: false,
    categoryId: "2",
    rating: 4.2,
    reviewsCount: 1600,
  },

  // 🐟 Fish Items
  {
    id: "301",
    name: "Fish Fry",
    price: 249,
    image:
      "https://rumkisgoldenspoon.com/wp-content/uploads/2021/07/Bengali-fish-fry-recipe.jpg",
    description: "Crispy fried fish fillet.",
    isVeg: false,
    categoryId: "3",
    rating: 4.4,
    reviewsCount: 2100,
  },
  {
    id: "302",
    name: "Hilsha Vhapa",
    price: 279,
    image:
      "https://assets.zeezest.com/blogs/PROD_Bhapa%20Ilish%20and%20Bhapa%20Rohu%20Fish%20Make%20Authentic%20Bengali%20Recipes%20At%20Home%20%281%29_1719325822595.jpg",
    description: "Traditional Bengali Hilsha Vhapa",
    isVeg: false,
    categoryId: "3",
    rating: 4.3,
    reviewsCount: 1750,
  },

  // 🍤 Prawn Items
  {
    id: "401",
    name: "Golden Fried Prawn",
    price: 259,
    image:
      "https://media.istockphoto.com/id/186139921/photo/fried-organic-coconut-shrimp.jpg?s=612x612&w=0&k=20&c=3xWq4C2JK0FfY0nJtkCwfs_KQedEXM-ERDVnEP_wqzo=",
    description: "Creamy paneer gravy.",
    isVeg: false,
    categoryId: "4",
    rating: 4.4,
    reviewsCount: 2200,
  },
  {
    id: "402",
    name: "Prawn Malaikari",
    price: 299,
    image:
      "https://i.pinimg.com/736x/b0/99/f7/b099f78dfe737ece59e2759a315a6d6f.jpg",
    description: "Indo-Chinese veg balls in sauce.",
    isVeg: false,
    categoryId: "4",
    rating: 4.5,
    reviewsCount: 1400,
  },

  // 🍚 Biryani Items
  {
    id: "501",
    name: "Chicken Biryani",
    price: 299,
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=283,fit=crop/A85ez13ejGip3RX9/rit08396-dOqagZ5Pk8IEVJMk.jpg",
    description: "Aromatic basmati rice with chicken.",
    isVeg: false,
    categoryId: "5",
    rating: 4.5,
    reviewsCount: 3000,
  },

  {
    id: "502",
    name: "Mutton Dum Biryani",
    price: 340,
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=283,fit=crop/A85ez13ejGip3RX9/rit02271-1-YbNB04pV5oHg3Vz3.jpg",
    description: "Mutton Dum Biryani",
    isVeg: false,
    categoryId: "5",
    rating: 4.6,
    reviewsCount: 2600,
  },

  // Chinese

  {
    id: "601",
    name: "Chilli Chicken",
    price: 220,
    image: "https://dragondelivery.in/wp-content/uploads/2025/02/chchd.jpeg",
    description:
      "Spicy Kolkata Chinese chilli chicken with onion, capsicum and soy sauce.",
    isVeg: false,
    categoryId: "6",
    rating: 4.6,
    reviewsCount: 2800,
  },

  {
    id: "602",
    name: "Chicken Manchurian",
    price: 210,
    image:
      "https://uptownasia.in/wp-content/uploads/2024/09/Chicken-Manchurian-01.jpg",
    description:
      "Juicy chicken balls tossed in classic Indo-Chinese manchurian sauce.",
    isVeg: false,
    categoryId: "6",
    rating: 4.5,
    reviewsCount: 2500,
  },

  // Noodles

  {
    id: "701",
    name: "Hakka Noodles",
    price: 180,
    image:
      "https://mymagicingredient.com/wp-content/uploads/2019/10/hakkanoodles-babycorn-7650.jpg",
    description:
      "Street-style Kolkata hakka noodles with chicken and vegetables.",
    isVeg: false,
    categoryId: "7",
    rating: 4.6,
    reviewsCount: 3200,
  },

  {
    id: "702",
    name: "Veg Chowmein",
    price: 140,
    image:
      "https://i.pinimg.com/736x/a5/ce/43/a5ce43bb6898d7599745e8cc2c63c5e0.jpg",
    description:
      "Kolkata street-style chowmein tossed with vegetables and sauces.",
    isVeg: true,
    categoryId: "7",
    rating: 4.3,
    reviewsCount: 2400,
  },

  // Soups

  {
    id: "801",
    name: "Hot & Sour Soup",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    description: "Classic Kolkata Chinese hot and sour soup with vegetables.",
    isVeg: true,
    categoryId: "8",
    rating: 4.2,
    reviewsCount: 1700,
  },

  {
    id: "802",
    name: "Sweet Corn Soup",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?q=80&w=800&auto=format&fit=crop",
    description: "Creamy sweet corn soup with shredded chicken.",
    isVeg: false,
    categoryId: "8",
    rating: 4.4,
    reviewsCount: 2000,
  },

  // Fried Rice

  {
    id: "901",
    name: "Chicken Fried Rice",
    price: 190,
    image:
      "https://www.sharmispassions.com/wp-content/uploads/2018/03/chicken-fried-rice7.jpg",
    description:
      "Kolkata-style chicken fried rice tossed with soy sauce and vegetables.",
    isVeg: false,
    categoryId: "9",
    rating: 4.5,
    reviewsCount: 3100,
  },

  {
    id: "902",
    name: "Veg Fried Rice",
    price: 160,
    image:
      "https://s.lightorangebean.com/media/20240914150137/Extra-Veggie-Fried-Rice_done-500x375.png",
    description: "Classic Kolkata Veg fried rice with spices.",
    isVeg: true,
    categoryId: "9",
    rating: 4.3,
    reviewsCount: 2200,
  },
];

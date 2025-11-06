// iconList.js

export const categoryIcons = [
  // Food & Dining (6 icons)
  { id: "restaurant", component: "Restaurant", color: "#B71C1C" }, // Deep Red
  { id: "fastfood", component: "Fastfood", color: "#9A0007" },     // Darker Red
  { id: "local_cafe", component: "Local Cafe", color: "#4E342E" }, // Dark Brown
  { id: "local_pizza", component: "Local Pizza", color: "#3E2723" },// Deep Brown
  { id: "cake", component: "Cake", color: "#880E4F" },             // Dark Crimson
  { id: "lunch_dining", component: "Lunch Dining", color: "#6A1B9A" }, // Deep Plum

  // Transportation (8 icons)
  { id: "directions_car", component: "Directions Car", color: "#0D47A1" }, // Deep Blue
  { id: "directions_bus", component: "Directions Bus", color: "#1A237E" }, // Deep Indigo
  { id: "directions_bike", component: "Directions Bike", color: "#004D40" },// Dark Teal
  { id: "local_taxi", component: "Local Taxi", color: "#006064" },          // Dark Cyan
  { id: "train", component: "Train", color: "#2E7D32" },                    // Forest Green
  { id: "flight", component: "Flight", color: "#1B5E20" },                  // Dark Green
  { id: "two_wheeler", component: "Two Wheeler", color: "#37474F" },        // Dark Slate Gray
  { id: "local_shipping", component: "Local Shipping", color: "#263238" },  // Extra Dark Slate

  // Income & Money (8 icons)
  { id: "attach_money", component: "Attach Money", color: "#F57F17" },     // Deep Gold
  { id: "currency_rupee", component: "Currency Rupee", color: "#E65100" }, // Deep Orange
  { id: "account_balance", component: "Account Balance", color: "#BF360C" },// Burnt Orange
  // { id: "account_balance_wallet", component: "Account Balance Wallet", color: "#33691E" },
  { id: "paid", component: "Paid", color: "#6D4C41" },                      // Dark Earth Brown
  { id: "trending_up", component: "Trending Up", color: "#455A64" },        // Slate Gray
  { id: "work", component: "Work", color: "#795548" },                      // Medium Brown
  { id: "savings", component: "Savings", color: "#827717" },                // Dark Khaki

  // Shopping (5 icons)
  { id: "shopping_cart", component: "Shopping Cart", color: "#C51162" }, // Deep Pink
  { id: "shopping_bag", component: "Shopping Bag", color: "#AD1457" },  // Stronger Deep Pink
  { id: "local_mall", component: "Local Mall", color: "#4A148C" },      // Deep Purple
  { id: "store", component: "Store", color: "#6200EE" },                // Deep Violet
  // { id: "local_grocery_store", component: "Local Grocery Store", color: "#304FFE" },

  // Entertainment (6 icons)
  { id: "movie", component: "Movie", color: "#00BFA5" },          // Deep Mint
  { id: "theater_comedy", component: "Theater Comedy", color: "#00897B" },// Darker Mint
  { id: "music_note", component: "Music Note", color: "#4CAF50" },// Deep Green
  { id: "sports_esports", component: "Sports Esports", color: "#2E8B57" },// Sea Green
  { id: "celebration", component: "Celebration", color: "#00695C" },// Darkest Teal
  { id: "park", component: "Park", color: "#00838F" },            // Teal Blue

  // Bills & Utilities (7 icons)
  { id: "receipt", component: "Receipt", color: "#D84315" },      // Deep Terra Cotta
  { id: "electric_bolt", component: "Electric Bolt", color: "#FF6F00" },// Darker Amber
  { id: "water_drop", component: "Water Drop", color: "#039BE5" }, // Medium Blue
  { id: "wifi", component: "Wifi", color: "#0091EA" },             // Stronger Blue
  { id: "phone_android", component: "Phone Android", color: "#C62828" },// Strong Red
  { id: "tv", component: "Tv", color: "#B7410E" },                 // Burnt Sienna
  { id: "ac_unit", component: "Ac Unit", color: "#0097A7" },       // Medium Cyan

  // Health & Fitness (5 icons)
  { id: "local_hospital", component: "Local Hospital", color: "#5D4037" }, // Dark Terracotta
  { id: "medical_services", component: "Medical Services", color: "#333333" },// Very Dark Gray
  { id: "fitness_center", component: "Fitness Center", color: "#424242" },// Dark Gray
  { id: "spa", component: "Spa", color: "#616161" },               // Medium Dark Gray
  { id: "favorite", component: "Favorite", color: "#36454F" },     // Charcoal Gray

  // Education (4 icons)
  { id: "school", component: "School", color: "#512DA8" },      // Deep Slate Purple
  { id: "menu_book", component: "Menu Book", color: "#4527A0" }, // Darker Slate Purple
  { id: "computer", component: "Computer", color: "#283593" },  // Strong Indigo
  { id: "science", component: "Science", color: "#1976D2" },    // Strong Medium Blue

  // Home & Living (5 icons)
  { id: "home", component: "Home", color: "#795548" },      // Light Brown
  { id: "kitchen", component: "Kitchen", color: "#388E3C" }, // Medium Dark Green
  { id: "bed", component: "Bed", color: "#546E7A" },        // Cool Gray/Blue
  { id: "weekend", component: "Weekend", color: "#9E9D24" }, // Dark Lime
  { id: "chair", component: "Chair", color: "#AFB42B" },    // Olive Green

  // Personal Care (3 icons)
  { id: "face", component: "Face", color: "#E91E63" },          // Strong Magenta
  { id: "content_cut", component: "Content Cut", color: "#D81B60" },// Stronger Magenta
  { id: "shower", component: "Shower", color: "#C2185B" },      // Deep Raspberry

  // Family & Kids (3 icons)
  { id: "child_care", component: "Child Care", color: "#8E24AA" }, // Darker Purple
  { id: "toys", component: "Toys", color: "#7B1FA2" },             // Deep Violet
  { id: "stroller", component: "Stroller", color: "#9C27B0" },     // Medium Purple

  // Pets (1 icon)
  { id: "pets", component: "Pets", color: "#607D8B" }, // Blue-Gray

  // Sports (3 icons)
  { id: "sports_soccer", component: "Sports Soccer", color: "#43A047" },// Strong Green
  { id: "pool", component: "Pool", color: "#388E3C" },                   // Dark Green
  { id: "directions_run", component: "Directions Run", color: "#2E7D32" },// Forest Green

  // Technology (4 icons)
  { id: "laptop", component: "Laptop", color: "#4A4A4A" },     // Dark Gray/Black
  { id: "smartphone", component: "Smartphone", color: "#3D3D3D" },// Very Dark Gray
  { id: "headphones", component: "Headphones", color: "#2A2A2A" },// Near Black
  { id: "camera", component: "Camera", color: "#1C1C1C" },     // Black

  // Travel (4 icons)
  { id: "hotel", component: "Hotel", color: "#FF8F00" },      // Deep Amber
  { id: "luggage", component: "Luggage", color: "#FBC02D" },  // Deep Yellow
  { id: "beach_access", component: "Beach Access", color: "#D50000" }, // Brightest Red
  { id: "explore", component: "Explore", color: "#C0CA33" },   // Olive Yellow

  // Services (3 icons)
  { id: "construction", component: "Construction", color: "#673AB7" },     // Medium Deep Purple
  { id: "cleaning_services", component: "Cleaning Services", color: "#5E35B1" },// Deeper Purple
  // { id: "local_laundry_service", component: "Local Laundry Service", color: "#43A047" },

  // Gifts & Other (5 icons)
  { id: "card_giftcard", component: "Card Giftcard", color: "#B8860B" },    // Dark Goldenrod
  { id: "volunteer_activism", component: "Volunteer Activism", color: "#DAA520" },// Goldenrod
  { id: "category", component: "Category", color: "#8B4513" },             // Saddle Brown
  { id: "star", component: "Star", color: "#A0522D" },                     // Sienna
  { id: "label", component: "Label", color: "#4682B4" },                   // Steel Blue
];
const products = [
     {                                                     id: "1",
        name: "paracetamol 500 mg medicine tablet (pack of 20)", 
        mrp: 45, 
        price: 39,
        image: "paracetamol 500 mg medicine tablet (pack of 20).jpg", 
         
      verified: true,       stock: true,                                        brand: "Thums Up"                                              },                                 
      
      {                                                     id: "2",
        name: "Trishul Germonil Phynile 1 Ltr pack", 
        mrp: 70, 
        price: 64,
        image: "Trishul Germonil Phynile 1 Ltr pack.jpg", 
         
      verified: true,       stock: true,                                        brand: "Trishul"                                              },
      {                                                     id: "3",
        name: "Hit For Hidden Cockroaches 400 ml spray", 
        mrp: 200, 
        price: 189,
        image: "Hit For Hidden Cockroaches 400 ml spray.jpg", 
         
      verified: true,       stock: true,                                        brand: "Hit"                                              },
      {                                                     id: "4",
        name: "xyz", 
        mrp: 240, 
        price: 229,
        image: "xyz.jpg", 
         
      verified: true,       stock: true,                                        brand: "Amul"                                              },
      
      
      
      
      
      
      
      
      
      

      
      
];

/**
 * Function to get product details by ID
 * @param {string} productId
 * @returns {object | null} Product details or null if not found
 */
function getProductDetails(productId) {
    return products.find(product => product.id === productId) || null;
}



document.addEventListener("DOMContentLoaded", () => {

    const allProducts = [
      { 
        "title": "xyz", 
        "originalPrice": 120, 
        "discountedPrice":99,
        "image": "xyz.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Hit For Hidden Cockroaches 400 ml spray", 
        "originalPrice": 200, 
        "discountedPrice":189,
        "image": "Hit For Hidden Cockroaches 400 ml spray.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Trishul Germonil Phynile 1 Ltr pack", 
        "originalPrice": 70, 
        "discountedPrice":64,
        "image": "Trishul Germonil Phynile 1 Ltr pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Coin Glass Cleaner 500 ml spray pack", 
        "originalPrice": 120, 
        "discountedPrice":114,
        "image": "Coin Glass Cleaner 500 ml spray pack.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Parle Fab Bourbon Chocolate Flavoured Sandwich Biscuit 450 gm pack", 
        "originalPrice": 170, 
        "discountedPrice":159,
        "image": "Parle Fab Bourbon Chocolate Flavoured Sandwich Biscuit 450 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Santoor Hand wash Creme 675 ml pack", 
        "originalPrice": 120, 
        "discountedPrice":99,
        "image": "Santoor Hand wash Creme 675 ml pack.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Lifebuoy Germ Protection Handwash 675 (pack of 2)", 
        "originalPrice": 220, 
        "discountedPrice":199,
        "image": "Lifebuoy Germ Protection Handwash 675 (pack of 2).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Mr Muscle Floor Cleaner 1 L Bottle", 
        "originalPrice": 200, 
        "discountedPrice":169,
        "image": "Mr Muscle Floor Cleaner 1 L Bottle.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Arial Matic Liquid 1 Ltr bottle", 
        "originalPrice": 240, 
        "discountedPrice":224,
        "image": "Arial Matic Liquid 1 Ltr bottle.jpg", 
        "category": "Household Essentials" 
      },
      
      { 
        "title": "All Out Ultra rifill 45 ml (pack of 6)", 
        "originalPrice": 500, 
        "discountedPrice":484,
        "image": "All Out Ultra rifill 45 ml (pack of 6).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Real Roasted Malai Chana 500 gm pack", 
        "originalPrice": 120, 
        "discountedPrice":89,
        "image": "Real Roasted Malai Chana 500 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji All In One Kuch Kuch Namkeen 400 gm pack", 
        "originalPrice": 140, 
        "discountedPrice":99,
        "image": "Bikaji All In One Kuch Kuch Namkeen 400 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Cadbury Dairy Milk Chocolate 46 gm pack", 
        "originalPrice": 60, 
        "discountedPrice":49,
        "image": "Cadbury Dairy Milk Chocolate 46 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle Krack Jack Biscuits 113 gm pack", 
        "originalPrice": 20, 
        "discountedPrice":19,
        "image": "Parle Krack Jack Biscuits 113 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji Plain Sidha Sadha Bhujia Namkeen 400 gm", 
        "originalPrice": 140, 
        "discountedPrice":99,
        "image": "Bikaji Plain Sidha Sadha Bhujia Namkeen 400 gm.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji Mini Samosa Namkeen 420 gm pack", 
        "originalPrice": 120, 
        "discountedPrice":99,
        "image": "Bikaji Mini Samosa Namkeen 420 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Maggi Noodles 560 gm pack", 
        "originalPrice": 130, 
        "discountedPrice":114,
        "image": "Maggi Noodles 560 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bicano Rasgulla 1.25 kg pack", 
        "originalPrice": 260, 
        "discountedPrice":199,
        "image": "Bicano Rasgulla 1.25 kg pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Kanha Classic Soan Papdi 400 gm pack", 
        "originalPrice": 125, 
        "discountedPrice":99,
        "image": "Kanha Classic Soan Papdi 400 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Sunfeast Yippee Noodles 70 gm Pack", 
        "originalPrice": 15, 
        "discountedPrice":14,
        "image": "Sunfeast Yippee Noodles 70 gm Pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Amul Fresh Creme 1 Ltr pack", 
        "originalPrice": 240, 
        "discountedPrice":229,
        "image": "Amul Fresh Creme 1 Ltr pack.jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Bikaji Cornflakes Mix Mastkin Namkeen 350 gm pack", 
        "originalPrice": 120, 
        "discountedPrice":99,
        "image": "Bikaji Cornflakes Mix Mastkin Namkeen 350 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji Moong Dal Namkeen 400 gm pack", 
        "originalPrice": 120, 
        "discountedPrice":99,
        "image": "Bikaji Moong Dal Namkeen 400 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bicano Aloo Bhujia Namkeen 400 gm pack", 
        "originalPrice": 120, 
        "discountedPrice":99,
        "image": "Bicano Aloo Bhujia Namkeen 400 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bicano Khatta Meetha Namkeen 500 gm pack", 
        "originalPrice": 120, 
        "discountedPrice":99,
        "image": "Bicano Khatta Meetha Namkeen 500 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bicano Bikaneri Bhujia Namkeen 400 gm pack", 
        "originalPrice": 120, 
        "discountedPrice":99,
        "image": "Bicano Bikaneri Bhujia Namkeen 400 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bicano Navratan Mixture Namkeen 500 gm pack", 
        "originalPrice": 130, 
        "discountedPrice":99,
        "image": "Bicano Navratan Mixture Namkeen 500 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Cadbury Dairy Milk Silk Chocolate 144 gm pack", 
        "originalPrice": 220, 
        "discountedPrice":209,
        "image": "Cadbury Dairy Milk Silk Chocolate 144 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Doctor Washing Powder 5 kg pack", 
        "originalPrice": 350, 
        "discountedPrice":344,
        "image": "Doctor Washing Powder 5 kg pack.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Doctor Washing Powder 3 kg pack", 
        "originalPrice": 220, 
        "discountedPrice":204,
        "image": "Doctor Washing Powder 3 kg pack.jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Cadbury Celebrations Spark The Celebration 102 gm Gift Pack", 
        "originalPrice": 120, 
        "discountedPrice":109,
        "image": "Cadbury Celebrations Spark The Celebration 102 gm Gift Pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Cadbury Premium Selections Chocolate 154 gm Gift Pack", 
        "originalPrice": 260, 
        "discountedPrice":249,
        "image": "Cadbury Premium Selections Chocolate 154 gm Gift Pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Cadbury Dairy Silk Selections Assortment Of Fine Chocolates 213 gm Gift pack", 
        "originalPrice": 460, 
        "discountedPrice":449,
        "image": "Cadbury Dairy Silk Selections Assortment Of Fine Chocolates 213 gm Gift pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Kelloggs Multigrain Chocos 127 gm pack", 
        "originalPrice": 90, 
        "discountedPrice":79,
        "image": "Kelloggs Multigrain Chocos 127 gm pack.jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Kelloggs Multigrain Chocos 250 gm pack", 
        "originalPrice": 160, 
        "discountedPrice":154,
        "image": "Kelloggs Multigrain Chocos 250 gm pack.jpg", 
        "category": "Dairy & Bakery" 
      },
       { 
        "title": "Shri Mahalaxmi Kaju Rusk (Toast) 20 pcs pack", 
        "originalPrice": 90, 
        "discountedPrice":79,
        "image": "Shri Mahalaxmi Kaju Rusk (Toast) 20 pcs pack.jpg", 
        "category": "Dairy & Bakery" 
      },
       { 
        "title": "Shri Mahalaxmi Butter Rusk (Toast) Roasted 30 pcs pack", 
        "originalPrice": 100, 
        "discountedPrice":89,
        "image": "Shri Mahalaxmi Butter Rusk (Toast) Roasted 30 pcs pack.jpg", 
        "category": "Dairy & Bakery" 
      },
       { 
        "title": "Shahi Agarwal Sooji Toast (rusk) 40 pcs pack", 
        "originalPrice": 65, 
        "discountedPrice":29,
        "image": "Shahi Agarwal Sooji Toast (rusk) 40 pcs pack.jpg", 
        "category": "Dairy & Bakery" 
      },
      
      { 
        "title": "Kissan Fresh Tomato Ketchup 1.1 kg pack", 
        "originalPrice": 150, 
        "discountedPrice": 119,
        "image": "Kissan Fresh Tomato Ketchup 1.1 kg pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Kanha Rasgulla 1 kg", 
        "originalPrice": 230, 
        "discountedPrice": 159,
        "image": "Kanha Rasgulla 1 kg.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bicano Desi Ghee Soan Papdi 500 gm pack", 
        "originalPrice": 210, 
        "discountedPrice": 189,
        "image": "Bicano Desi Ghee Soan Papdi 500 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "maida 1 kg", 
        "originalPrice": 50, 
        "discountedPrice": 49,
        "image": "maida 1 kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Ponds with Activated Charcoal Detox Facewash 100 ml", 
        "originalPrice": 240, 
        "discountedPrice": 229,
        "image": "Ponds with Activated Charcoal Detox Facewash 100 ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Chaubejee Dhaniya (Coriander) Powder 100 gm Pouch", 
        "originalPrice": 30, 
        "discountedPrice": 24,
        "image": "Chaubejee Dhaniya (Coriander) Powder 100 gm Pouch.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Chaubejee Haldi (Turmeric) Powder 100 gm Pouch", 
        "originalPrice": 40, 
        "discountedPrice": 29,
        "image": "Chaubejee Haldi (Turmeric) Powder 100 gm Pouch.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Chaubejee Lal Mirch (Red Chilli) Powder 100 gm", 
        "originalPrice": 40, 
        "discountedPrice": 29,
        "image": "Chaubejee Lal Mirch (Red Chilli) Powder 100 gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Santoor Skin Moisturising Sandal & Turmeric Soap 125 gm (Pack of 4)", 
        "originalPrice": 210, 
        "discountedPrice": 99,
        "image": "Santoor Skin Moisturising Sandal & Turmeric Soap 125 gm (Pack of 4).jpg", 
        "category": "Personal Care" 
      },
      
      { 
        "title": "Himalaya Purifying Neem Face Wash 150ml", 
        "originalPrice": 190, 
        "discountedPrice": 179,
        "image": "Himalaya Purifying Neem Face Wash 150ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Garnier Bright Complete Vitamin C Serum Cream 23gm", 
        "originalPrice": 110, 
        "discountedPrice": 104,
        "image": "Garnier Bright Complete Vitamin C Serum Cream 23gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Cadbury Fuse Chocolate, 25 Gm", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Cadbury Fuse Chocolate, 25 Gm.jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Sunfeast Yippee Magic Masala Instant Noodle 50 gm", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "Sunfeast Yippee Magic Masala Instant Noodle 50 gm.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Kinder Joy Chocolate Girls 20 gm", 
        "originalPrice": 60, 
        "discountedPrice": 49,
        "image": "Kinder Joy Chocolate Girls 20 gm.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Cadbury Celebrations Assorted Chocolate Gift Pack Net Qty 1 pack 51.2 gm", 
        "originalPrice": 60, 
        "discountedPrice": 49,
        "image": "Cadbury Celebrations Assorted Chocolate Gift Pack Net Qty 1 pack 51.2 gm.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Britannia brown bread 300 gm", 
        "originalPrice": 40, 
        "discountedPrice": 34,
        "image": "Britannia brown bread 300 gm.jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Britannia Sandwich Bread 400 gm", 
        "originalPrice": 45, 
        "discountedPrice": 39,
        "image": "Britannia Sandwich Bread 400 gm.jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Britannia Good Day Butter Cookies 200Gm", 
        "originalPrice": 49, 
        "discountedPrice": 44,
        "image": "Britannia Good Day Butter Cookies 200Gm.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Uncle Chips 24Gm", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "Uncle Chips 24Gm.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Britannia Treat Jimjam Biscuits 57gm", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "Britannia Treat Jimjam Biscuits 57gm.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle krack jack Biscuit 63gm", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "Parle krack jack Biscuit 63gm.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Cadbury dairy milk silk chocolate 40gm", 
        "originalPrice": 65, 
        "discountedPrice": 59,
        "image": "Cadbury dairy milk silk chocolate 40gm.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji Soan Papdi 450G", 
        "originalPrice": 145, 
        "discountedPrice": 109,
        "image": "Bikaji Soan Papdi 450G.jpg", 
        "category": "Snacks & Beverages" 
      },
     
     { 
        "title": "5 Bhai Washing Soap 1 kg", 
        "originalPrice": 100, 
        "discountedPrice": 89,
        "image": "5 Bhai Washing Soap 1 kg.jpg", 
        "category": "Household Essentials" 
      },
      
       { 
        "title": "Khanna Paper Mills E-Copy 75 GSM A4 Size Copier Paper 500 Sheets, White (Pack of 1 Ream)", 
        "originalPrice": 210, 
        "discountedPrice": 199,
        "image": "Khanna Paper Mills E-Copy 75 GSM A4 Size Copier Paper 500 Sheets, White (Pack of 1 Ream).jpg", 
        "category": "Books & Stationery" 
      },
      
      { 
        "title": "Bikaji Gol Matol Rasgulla 1.25 kg", 
        "originalPrice": 245, 
        "discountedPrice": 199,
        "image": "Bikaji Gol Matol Rasgulla 1.25 kg.png", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Godrej Cinthol Lime Refreshing Deo Soap 150 gm", 
        "originalPrice": 65, 
        "discountedPrice": 59,
        "image": "Godrej Cinthol Lime Refreshing Deo Soap 150 gm.jpg", 
        "category": "Personal Care" 
      },
      
      { 
        "title": "Amul masti dahi 400 gm cup", 
        "originalPrice": 48, 
        "discountedPrice": 46,
        "image": "Amul masti dahi 400 gm cup.jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Amul masti dahi 85 gm cup", 
        "originalPrice": 10, 
        "discountedPrice": 10,
        "image": "Amul masti dahi 85 gm cup.jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Amul Buffalo A2 Milk 500 ml", 
        "originalPrice": 44, 
        "discountedPrice": 40,
        "image": "Amul Buffalo A2 Milk 500 ml.jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Mother Dairy Buffalo Milk 500 ml", 
        "originalPrice": 39, 
        "discountedPrice": 35,
        "image": "Mother Dairy Buffalo Milk 500 ml.jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Mother Dairy Full Cream Milk 500 ml", 
        "originalPrice": 37, 
        "discountedPrice": 34,
        "image": "Mother Dairy Full Cream Milk 500 ml.png", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Mother Dairy Toned Milk 500 ml", 
        "originalPrice": 29, 
        "discountedPrice": 27,
        "image": "Mother Dairy Toned Milk 500 ml.png", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Ok Tea Box 250 gm", 
        "originalPrice": 155, 
        "discountedPrice": 139,
        "image": "Ok Tea Box 250 gm.webp", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Ok Tea 250 gm pack", 
        "originalPrice": 110, 
        "discountedPrice": 99,
        "image": "Ok Tea 250 gm pack.jpeg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Ok Tea 500 gm pack", 
        "originalPrice": 220, 
        "discountedPrice": 199,
        "image": "Ok Tea 500 gm pack.jpeg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Uttam Bhog atta 10 kg", 
        "originalPrice": 320, 
        "discountedPrice": 319,
        "image": "Uttam Bhog atta 10 kg.jpg", 
        "category": "Groceries & Staples" 
      },
       
      
      { 
        "title": "family combo pack a", 
        "originalPrice": 225, 
        "discountedPrice": 179,
        "image": "family combo pack a.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Mango (Aam) 1 kg", 
        "originalPrice": 110, 
        "discountedPrice": 95,
        "image": "Mango (Aam) 1 kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "cucumber (Kakdi) 1 kg", 
        "originalPrice": 55, 
        "discountedPrice": 37,
        "image": "cucumber (Kakdi) 1 kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Moong Dhoba Dal 1 kg", 
        "originalPrice": 125, 
        "discountedPrice": 119,
        "image": "Moong Dhoba Dal 1 kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Moong Chhilka Dal 1 kg", 
        "originalPrice": 110, 
        "discountedPrice": 104,
        "image": "Moong Chhilka Dal 1 kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Masoor Dal 1 kg", 
        "originalPrice": 110, 
        "discountedPrice": 104,
        "image": "Masoor Dal 1 kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Urad Chhilka Dal 1 kg", 
        "originalPrice": 125, 
        "discountedPrice": 124,
        "image": "Urad Chhilka Dal 1 kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Urad Dhoba Dal 1 kg", 
        "originalPrice": 160, 
        "discountedPrice": 154,
        "image": "Urad Dhoba Dal 1 kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Arhar Dal 1 kg", 
        "originalPrice": 160, 
        "discountedPrice": 154,
        "image": "Arhar Dal 1 kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Chana Dal 1 kg pack", 
        "originalPrice": 100, 
        "discountedPrice": 84,
        "image": "Chana Dal 1 kg pack.jpg", 
        "category": "Groceries & Staples" 
      },
     
      { 
        "title": "Vicks candy (Toffee) 2 gm (pack of 3)", 
        "originalPrice": 3, 
        "discountedPrice": 3,
        "image": "Vicks candy (Toffee) 2 gm (pack of 3).jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Montex Smooth Flow Glide Ink blue colour pen (pack of 1)", 
        "originalPrice": 6, 
        "discountedPrice": 5,
        "image": "Montex Smooth Flow Glide Ink blue colour pen (pack of 1).jpg", 
        "category": "Books & Stationery" 
      },
       { 
        "title": "Cello Butterflow Blue colour pen (pack of 1)", 
        "originalPrice": 6, 
        "discountedPrice": 5,
        "image": "Cello Butterflow Blue colour pen (pack of 1).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Parle Melody Chocolaty Candy (Toffee) 5 gm (pack of 5)", 
        "originalPrice": 5, 
        "discountedPrice": 5,
        "image": "Parle Melody Chocolaty Candy (Toffee) 5 gm (pack of 5).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Oyes Delicious Puffs Cocktail 18 gm pack", 
        "originalPrice": 5, 
        "discountedPrice": 5,
        "image": "Oyes Delicious Puffs Cocktail 18 gm pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle G Original Gluco Biscuit biscuits 50 gm (pack of 1)", 
        "originalPrice": 5, 
        "discountedPrice": 5,
        "image": "Parle G Original Gluco Biscuit biscuits 50 gm (pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bingo Tedhe Medhe Masala Tadka Snacks (Kurkure) 24 gm (pack of 1)", 
        "originalPrice": 5, 
        "discountedPrice": 5,
        "image": "Bingo Tedhe Medhe Masala Tadka Snacks (Kurkure) 24 gm (pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle Monaco Crispy Light Salty Snacks (Biscuits) 26.1 gm with 2.9 gm Extra (pack of 1)", 
        "originalPrice": 5, 
        "discountedPrice": 5,
        "image": "Parle Monaco Crispy Light Salty Snacks (Biscuits) 26.1 gm with 2.9 gm Extra (pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle Fusion Mango Float Toffee 3.5 gm (pack of 5)", 
        "originalPrice": 5, 
        "discountedPrice": 5,
        "image": "Parle Fusion Mango Float Toffee 3.5 gm (pack of 5).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Amber Eclairs Candy (Toffee)", 
        "originalPrice": 5, 
        "discountedPrice": 5,
        "image": "Amber Eclairs Candy (Toffee).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Pulse Shots Kachcha Aam Candy with Tangy Twist Toffee pouch (pack of 1)", 
        "originalPrice": 5, 
        "discountedPrice": 5,
        "image": "Pulse Shots Kachcha Aam Candy with Tangy Twist Toffee pouch (pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Vim Power Of 100 Lemons Soap Bar 60 gm (pack of 1)", 
        "originalPrice": 5, 
        "discountedPrice": 5,
        "image": "Vim Power Of 100 Lemons Soap Bar 60 gm (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Alpenliebe Creamfills Center Filled Candy (Toffee) 3.6 gm (pack of 5)", 
        "originalPrice": 5, 
        "discountedPrice": 5,
        "image": "Alpenliebe Creamfills Center Filled Candy (Toffee) 3.6 gm (pack of 5).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Alpenliebe Eclairs Plus Toffee 3.4 gm (pack of 5)", 
        "originalPrice": 5, 
        "discountedPrice": 5,
        "image": "Alpenliebe Eclairs Plus Toffee 3.4 gm (pack of 5).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "chick shampoo pouch pack of 5", 
        "originalPrice": 5, 
        "discountedPrice": 5,
        "image": "chick shampoo pouch pack of 5.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Banana (Kela) 1 kg", 
        "originalPrice": 50, 
        "discountedPrice": 39,
        "image": "Banana (Kela) 1 kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Grapes (Angoor) 1 kg", 
        "originalPrice": 120, 
        "discountedPrice": 99,
        "image": "Grapes (Angoor) 1 kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Orange (Santara) 1 kg", 
        "originalPrice": 90, 
        "discountedPrice": 67,
        "image": "Orange (Santara) 1 kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Pomegranate (Anar) 1 kg", 
        "originalPrice": 125, 
        "discountedPrice": 114,
        "image": "Pomegranate (Anar) 1 kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Ubla Chawal (pasema) (Rice) 1 kg", 
        "originalPrice": 65, 
        "discountedPrice": 49,
        "image": "Ubla Chawal (pasema) (Rice) 1 kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Kheer ke Chawal (Rice) 1 kg", 
        "originalPrice": 60, 
        "discountedPrice": 49,
        "image": "Kheer ke Chawal (Rice) 1 kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Sugar (Chini) 1 kg", 
        "originalPrice": 49, 
        "discountedPrice": 44,
        "image": "Sugar (Chini) 1 kg.jpg", 
        "category": "Groceries & Staples"
      },
      { 
        "title": "Ajawain (Ajavain) 100 gm pack", 
        "originalPrice": 55, 
        "discountedPrice": 35,
        "image": "Ajawain (Ajavain) 100 gm pack.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Rawa 1 kg pack", 
        "originalPrice": 55, 
        "discountedPrice": 49,
        "image": "Rawa 1 kg pack.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Kali Mirch 100 gm pack", 
        "originalPrice": 128, 
        "discountedPrice": 104,
        "image": "Kali  100 gm pack.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Bura (Boora) 1 kg pack", 
        "originalPrice": 55, 
        "discountedPrice": 49,
        "image": "Bura (Boora) 1 kg pack.jpg", 
        "category": "Groceries & Staples" 
      },
     
      { 
        "title": "Sooji 1 kg pack", 
        "originalPrice": 60, 
        "discountedPrice": 49,
        "image": "Sooji 1 kg pack.jpg", 
        "category": "Groceries & Staples" 
      },
       { 
        "title": "Bhune Chana 250 gm pack", 
        "originalPrice": 40, 
        "discountedPrice": 30,
        "image": "Bhune Chana 250 gm pack.jpg", 
        "category": "Groceries & Staples" 
      },
      
      { 
        "title": "Jeera 150 gm pack", 
        "originalPrice": 70, 
        "discountedPrice": 64,
        "image": "Jeera 150 gm pack.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Dry Chana 1 kg pack", 
        "originalPrice": 90, 
        "discountedPrice": 74,
        "image": "Dry Chana 1 kg pack.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Besan 1 kg Pack", 
        "originalPrice": 100, 
        "discountedPrice": 94,
        "image": "Besan 1 kg Pack.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Karkal (chanori) 250 gm pack", 
        "originalPrice": 25, 
        "discountedPrice": 20,
        "image": "Karkal (chanori) 250 gm pack.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Rewadi 250 gm pack", 
        "originalPrice": 30, 
        "discountedPrice": 25,
        "image": "Rewadi 250 gm pack.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Brooke bond taza tea 100 gm (pack of 1)", 
        "originalPrice": 30, 
        "discountedPrice": 25,
        "image": "Brooke bond taza tea 100 gm (pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Eno Fruit Salt Lemon Flavour 6 gm pouch (pack of 1)", 
        "originalPrice": 12, 
        "discountedPrice": 10,
        "image": "Eno Fruit Salt Lemon Flavour 6 gm pouch (pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Batashe 250 gm pack", 
        "originalPrice": 20, 
        "discountedPrice": 17,
        "image": "Batashe 250 gm pack.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Lifebuoy Germs Protection Soap 100 gm (pack of 1)", 
        "originalPrice": 35, 
        "discountedPrice": 29,
        "image": "Lifebuoy Germs Protection Soap 100 gm (pack of 1).jpg", 
       "category": "Personal Care" 
      },
      { 
        "title": "Small Onion (Pyaz) 1 Kg", 
        "originalPrice": 35, 
        "discountedPrice": 24,
        "image": "Small Onion (Pyaz) 1 Kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Ginger (Adrak) 220 gm.jpg", 
        "originalPrice": 40, 
        "discountedPrice": 29,
        "image": "Ginger (Adrak) 220 gm.jpg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Lemon (Nimbu) 250 gm", 
        "originalPrice": 80, 
        "discountedPrice": 54,
        "image": "Lemon (Nimbu) 250 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Onion (Pyaz) 1 Kg", 
        "originalPrice": 45, 
        "discountedPrice": 34,
        "image": "Onion (Pyaz) 1 Kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Potato (Aloo) 1 Kg", 
        "originalPrice": 30, 
        "discountedPrice": 19,
        "image": "Potato (Aloo) 1 Kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Potato Fresh (new Aloo) 1 Kg", 
        "originalPrice": 55, 
        "discountedPrice": 34,
        "image": "Potato Fresh (new Aloo) 1 Kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Garlic (Lehsun) 220 gm", 
        "originalPrice": 80, 
        "discountedPrice": 34,
        "image": "Garlic (Lehsun) 220 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Chilli Green (Hari Mirch) 250 gm", 
        "originalPrice": 30, 
        "discountedPrice": 24,
        "image": "Chilli Green (Hari Mirch) 250 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
       { 
        "title": "Ubon TC96 Type-C OTG Connector to USB - Adapter for Smartphones and Tablets", 
        "originalPrice": 75, 
        "discountedPrice": 69,
        "image": "Ubon TC96 Type-C OTG Connector to USB - Adapter for Smartphones and Tablets.jpg", 
        "category": "Electronic Accessories" 
      },
      { 
        "title": "Ubon CL625 Wireless Neckbands - 30H Play Time - 6 Months Warranty", 
        "originalPrice": 666, 
        "discountedPrice": 635,
        "image": "Ubon CL625 Wireless Neckbands - 30H Play Time - 6 Months Warranty.jpg", 
        "category": "Electronic Accessories" 
      },
      { 
        "title": "Ubon UB85 Wired Earphone With - Mr. India High Sound Quality", 
        "originalPrice": 143, 
        "discountedPrice": 132,
        "image": "Ubon UB85 Wired Earphone With - Mr. India High Sound Quality.jpg", 
        "category": "Electronic Accessories" 
      },
       { 
        "title": "Ubon UB611 Wired Earphone - Passion High Sound", 
        "originalPrice": 299, 
        "discountedPrice": 199,
        "image": "Ubon UB611 Wired Earphone - Passion High Sound.jpg", 
        "category": "Electronic Accessories" 
      },
      { 
        "title": "Ubon WR405 Type-C To iPhone Cable - 30W Cable - 6Months Warranty", 
        "originalPrice": 224, 
        "discountedPrice": 199,
        "image": "Ubon WR405 Type-C To iPhone Cable - 30W Cable - 6Months Warranty.jpg", 
        "category": "Electronic Accessories" 
      },
      { 
        "title": "UBON WR-862 Fast Charging Data Cable Set Your Ultimate Travel Buddy", 
        "originalPrice": 289, 
        "discountedPrice": 259,
        "image": "UBON WR-862 Fast Charging Data Cable Set Your Ultimate Travel Buddy.jpg", 
        "category": "Electronic Accessories" 
      },
      { 
        "title": "UBON CH 71 20W Rocket Series Charger", 
        "originalPrice": 300, 
        "discountedPrice": 267,
        "image": "UBON CH 71 20W Rocket Series Charger.jpg", 
        "category": "Electronic Accessories" 
      },
      { 
        "title": "UBON Quick Charge CL-50 Magnetic Switch Wireless Neckband", 
        "originalPrice": 835, 
        "discountedPrice": 779,
        "image": "UBON Quick Charge CL-50 Magnetic Switch Wireless Neckband.jpg", 
        "category": "Electronic Accessories" 
      },
       { 
        "title": "Ubon Bass Factory 2.0 BT-5200 Wireless Neckband", 
        "originalPrice": 835, 
        "discountedPrice": 779,
        "image": "Ubon Bass Factory 2.0 BT-5200 Wireless Neckband.jpg", 
        "category": "Electronic Accessories" 
      },
      { 
        "title": "UBON CH-300 OG SERIES 25-Watt Mobile Charger", 
        "originalPrice": 620, 
        "discountedPrice": 569,
        "image": "UBON CH-300 OG SERIES 25-Watt Mobile Charger.jpg", 
        "category": "Electronic Accessories" 
      },
      { 
        "title": "UBON CH-920 65W Warrior Series Charger", 
        "originalPrice": 735, 
        "discountedPrice": 669,
        "image": "UBON CH-920 65W Warrior Series Charger.jpg", 
        "category": "Electronic Accessories" 
      },
      { 
        "title": "UBON CH-27 Charge Pro-80W Fast and Safe Charger with type-c cable", 
        "originalPrice": 620, 
        "discountedPrice": 569,
        "image": "UBON CH-27 Charge Pro-80W Fast and Safe Charger with type-c cable.jpg", 
        "category": "Electronic Accessories" 
      },
     { 
        "title": "UBON Power Master WR-402 Type-C Cable", 
        "originalPrice": 175, 
        "discountedPrice": 159,
        "image": "UBON Power Master WR-402 Type-C Cable.jpg", 
        "category": "Electronic Accessories" 
      },
      { 
        "title": "Ubon Power Master WR-330 Cable Type C Travel Charger 65W Charging Cable", 
        "originalPrice": 200, 
        "discountedPrice": 185,
        "image": "Ubon Power Master WR-330 Cable Type C Travel Charger 65W Charging Cable.jpg", 
        "category": "Electronic Accessories" 
      },
      { 
        "title": "Ubon 15W WR-550 Bullet Series Type VB Cable", 
        "originalPrice": 135, 
        "discountedPrice": 99,
        "image": "Ubon 15W WR-550 Bullet Series Type VB Cable.jpg", 
        "category": "Electronic Accessories" 
      },
      { 
        "title": "Brinton 1.2 Mtr Micro USB Data Cable (Fast Cahrging)", 
        "originalPrice": 135, 
        "discountedPrice": 99,
        "image": "Brinton 1.2 Mtr Micro USB Data Cable (Fast Cahrging).jpg", 
        "category": "Electronic Accessories" 
      },
      { 
        "title": "Lifebuoy Germs Protection Soap Bar 125 gm (pack of 1)", 
        "originalPrice": 40, 
        "discountedPrice": 37,
        "image": "Lifebuoy Germs Protection Soap Bar 125 gm (pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Vim Soap Bar 175 gm (pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 10,
        "image": "Vim Soap Bar 175 gm (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      
      { 
        "title": "Linc Pentonic blue colour pen (pack of 1)", 
        "originalPrice": 12, 
        "discountedPrice": 10,
        "image": "Linc Pentonic blue colour pen (pack of 1).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Linc Pentonic black colour pen (pack of 1)", 
        "originalPrice": 12, 
        "discountedPrice": 10,
        "image": "Linc Pentonic black colour pen (pack of 1).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Flair Writo Meter Jumbo Gel Pen (pack of 1)", 
        "originalPrice": 30, 
        "discountedPrice": 24,
        "image": "Flair Writo Meter Jumbo Gel Pen (pack of 1).jpg", 
        "category": "Books & Stationery" 
      },
     
      { 
        "title": "Dabur Aamla Sarso Oil (Tel) 450 ml (pack of 1)", 
        "originalPrice": 160, 
        "discountedPrice": 154,
        "image": "Dabur Aamla Sarso Oil (Tel) 450 ml (pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Nihar Naturals Shanti Aamla Hair Oil 70 ml (pack of 1)", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Nihar Naturals Shanti Aamla Hair Oil 70 ml (pack of 1).jpg", 
        "category": "Personal Care" 
      },
      
      
      { 
        "title": "Dabur Aamla Sarso Oil (Tel) 30 ml (pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 10,
        "image": "Dabur Aamla Sarso Oil (Tel) 30 ml (pack of 1).jpg", 
        "category": "Personal Care" 
      },
      
      { 
        "title": "Boroplus Ayurvedic Antiseptic Cream 19 gm pack", 
        "originalPrice": 45, 
        "discountedPrice": 42,
        "image": "Boroplus Ayurvedic Antiseptic Cream 19 gm pack.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Himalaya Purifying Neem Face Wash 15 ml pack", 
        "originalPrice": 15, 
        "discountedPrice": 15,
        "image": "Himalaya Purifying Neem Face Wash 15 ml pack.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Kanha Rusk (Toast) 63 gm (pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 10,
        "image": "Kanha Rusk (Toast) 63 gm (pack of 1).jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Amul Milky Milk 1 L (pack of 1)", 
        "originalPrice": 56, 
        "discountedPrice": 54,
        "image": "Amul Milky Milk 1 L (pack of 1).jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Amul Taza Milky Milk 225 ml (pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 10,
        "image": "Amul Taza Milky Milk 225 ml (pack of 1).jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Capsicum (Shimla Mirch) 1 kg", 
        "originalPrice": 65, 
        "discountedPrice": 59,
        "image": "Capsicum (Shimla Mirch) 1 kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Beetroot (Chukandar) 500 gm", 
        "originalPrice": 65, 
        "discountedPrice": 44,
        "image": "Beetroot (Chukandar) 500 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Green Onion (Hara Pyaz) 500 gm", 
        "originalPrice": 55, 
        "discountedPrice": 24,
        "image": "Green Onion (Hara Pyaz) 500 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Radish (Mooli) 500 gm", 
        "originalPrice": 45, 
        "discountedPrice": 44,
        "image": "Radish (Mooli) 500 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Local Beans (Sev Fali) 500 gm", 
        "originalPrice": 50, 
        "discountedPrice": 39,
        "image": "Local Beans (Sev Fali) 500 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Cluster Beans (Gwar Fali) 250 gm", 
        "originalPrice": 65, 
        "discountedPrice": 19,
        "image": "Cluster Beans (Gwar Fali) 250 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Bharta Baingan 500 gm", 
        "originalPrice": 45, 
        "discountedPrice": 29,
        "image": "Bharta Baingan 500 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Brinjal (Baingan) 500 gm", 
        "originalPrice": 43, 
        "discountedPrice": 29,
        "image": "Brinjal (Baingan) 500 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Cabbage (Patta Gobhi) 1kg", 
        "originalPrice": 40, 
        "discountedPrice": 34,
        "image": "Cabbage (Patta Gobhi) 1kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Desi Cucumber (Desi Kheera) 500 gm", 
        "originalPrice": 35, 
        "discountedPrice": 24,
        "image": "Desi Cucumber (Desi Kheera) 500 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Round Gourd (Tinda) 500 gm", 
        "originalPrice": 60, 
        "discountedPrice": 44,
        "image": "Round Gourd (Tinda) 500 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Pumpkin (kaddu) 500 gm", 
        "originalPrice": 35, 
        "discountedPrice": 19,
        "image": "Pumpkin (kaddu) 500 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Coriander (Dhaniya) 100 gm", 
        "originalPrice": 45, 
        "discountedPrice": 39,
        "image": "Coriander (Dhaniya) 100 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Maithi 500 gm", 
        "originalPrice": 65, 
        "discountedPrice": 57,
        "image": "Maithi 500 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Curry Leaves (Kari Patte) 50 gm", 
        "originalPrice": 25, 
        "discountedPrice": 18,
        "image": "Curry Leaves (Kari Patte) 50 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Spinach (Palak) 250 gm", 
        "originalPrice": 40, 
        "discountedPrice": 34,
        "image": "Spinach (Palak) 250 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Mint (Pudina) 250 gm", 
        "originalPrice": 30, 
        "discountedPrice": 19,
        "image": "Mint (Pudina) 250 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Ledy Finger (Bhindi) 500 gm", 
        "originalPrice": 65, 
        "discountedPrice": 44,
        "image": "Ledy Finger (Bhindi) 500 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Muskmelon (Kharbooja) 1 kg", 
        "originalPrice": 35, 
        "discountedPrice": 29,
        "image": "Muskmelon (Kharbooja) 1 kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Black Grapes (Kale Angoor) 500 gm", 
        "originalPrice": 145, 
        "discountedPrice": 127,
        "image": "Black Grapes (Kale Angoor) 500 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Coconut (Nariyal) 1 pc", 
        "originalPrice": 70, 
        "discountedPrice": 64,
        "image": "Coconut (Nariyal) 1 pc.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Sapodilla (Cheekoo) 500 gm", 
        "originalPrice": 55, 
        "discountedPrice": 44,
        "image": "Sapodilla (Cheekoo) 500 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Watermelon (Tarbuj) 1 pc", 
        "originalPrice": 100, 
        "discountedPrice": 69,
        "image": "Watermelon (Tarbuj) 1 pc.jpg", 
        "category": "Fruits & Vegetables" 
      },
      {
        "title": "Kiwi 1 pc", 
        "originalPrice": 65, 
        "discountedPrice": 54,
        "image": "Kiwi 1 pc.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Pineapple (ananas) 1 pc", 
        "originalPrice": 150, 
        "discountedPrice": 104,
        "image": "Pineapple (ananas) 1 pc.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Coconut Water (Nariyal Pani) 1 pc", 
        "originalPrice": 90, 
        "discountedPrice": 84,
        "image": "Coconut Water (Nariyal Pani) 1 pc.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Carrot (gajar) 500 gm", 
        "originalPrice": 32, 
        "discountedPrice": 28,
        "image": "Carrot (gajar) 500 gm.jpg", 
        "category": "Fruits & Vegetables" 
      },
      
      { 
        "title": "guava (Amrood) 1 kg", 
        "originalPrice": 60, 
        "discountedPrice": 44,
        "image": "guava (Amrood) 1 kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "cauliflower (Phool Gobhi) 1 kg", 
        "originalPrice": 90, 
        "discountedPrice": 84,
        "image": "cauliflower (Phool Gobhi) 1 kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Apple (Seb) 1 kg", 
        "originalPrice": 240, 
        "discountedPrice": 149,
        "image": "Apple (Seb) 1 kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Papaya (Papita) 1 kg", 
        "originalPrice": 60, 
        "discountedPrice": 54,
        "image": "Papaya (Papita) 1 kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      { 
        "title": "Tomato (Tamatar) 1 kg", 
        "originalPrice": 95, 
        "discountedPrice": 89,
        "image": "Tomato (Tamatar) 1 kg.jpg", 
        "category": "Fruits & Vegetables" 
      },
      
      { 
        "title": "Nescafe Sunrise Instant Coffee Chicory Mix 9g Pack", 
        "originalPrice": 45, 
        "discountedPrice": 30,
        "image": "Nescafe Sunrise Instant Coffee Chicory Mix 9g Pack.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Bru Instant Coffee Sachet Ground 8G (Pack of 1)", 
        "originalPrice": 15, 
        "discountedPrice": 9,
        "image": "Bru Instant Coffee Sachet Ground 8G (Pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Tata Sampann Unpolished Kala (Black, Brown) Chana 1kg (Pack of 1)", 
        "originalPrice": 153, 
        "discountedPrice": 139,
        "image": "Tata Sampann Unpolished Kala (Black, Brown) Chana 1kg (Pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
       { 
        "title": "Tata Sampann Unpolished Moong Dal (Split) 1Kg (Pack of 1)", 
        "originalPrice": 178, 
        "discountedPrice": 164,
        "image": "Tata Sampann Unpolished Moong Dal (Split) 1Kg (Pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Tata Sampann Unpolished Toor Dal Arhar Dal 1kg (Pack of 1)", 
        "originalPrice": 235, 
        "discountedPrice": 204,
        "image": "Tata Sampann Unpolished Toor Dal Arhar Dal 1kg (Pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Tata Sampann Coriander Powder With Natural Oils 500g (Dhania Powder) (Pack of 1)", 
        "originalPrice": 222, 
        "discountedPrice": 209,
        "image": "Tata Sampann Coriander Powder With Natural Oils 500g (Dhania Powder) (Pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Tata Sampann High Protein Daliya 400 Grams (Pack of 1)", 
        "originalPrice": 42, 
        "discountedPrice": 35,
        "image": "Tata Sampann High Protein Daliya 400 Grams (Pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "MDH Turmeric powder (Haldi powder) 100gm (Pack of 1)", 
        "originalPrice": 40, 
        "discountedPrice": 35,
        "image": "MDH Turmeric powder (Haldi powder) 100gm (Pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Patanjali Cow's Ghee 200 ml (Pack of 1)", 
        "originalPrice": 147, 
        "discountedPrice": 144,
        "image": "Patanjali Cow's Ghee 200 ml (Pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Zoff Red Chilli Powder (Lal Mirch Powder) 100 g", 
        "originalPrice": 45, 
        "discountedPrice": 35,
        "image": "Zoff Red Chilli Powder (Lal Mirch Powder) 100 g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Tata Sampann Chilli Powder (Lal Mirch Powder) with Natural Oils 100 gm (Pack of 1)", 
        "originalPrice": 65, 
        "discountedPrice": 59,
        "image": "Tata Sampann Chilli Powder (Lal Mirch Powder) with Natural Oils 100 gm (Pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Patanjali Cow Ghee Premium Quality Desi Ghee 500 ml (Pack of 1)", 
        "originalPrice": 378, 
        "discountedPrice": 359,
        "image": "Patanjali Cow Ghee Premium Quality Desi Ghee 500 ml (Pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Patanjali Cow Whole Milk Powder 200 gm (Pack of 1)", 
        "originalPrice": 125, 
        "discountedPrice": 104,
        "image": "Patanjali Cow Whole Milk Powder 200 gm (Pack of 1).jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Coca Cola Soft Drink (250Ml) (Pack of 1)", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Coca Cola Soft Drink (250Ml) (Pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Pepsi Mountain Dew Soft Drink (Can) 250Ml (Pack of 1)", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Pepsi Mountain Dew Soft Drink (Can) 250Ml (Pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Mountain Dew Soft Drink 750 ml (Pack of 1)", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Mountain Dew Soft Drink 750 ml (Pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Pepsi Soft Drink 750Ml (Pack of 1)", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Pepsi Soft Drink 750Ml (Pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Pepsi Soft Drink 2.25L Bottle (Pack of 1)", 
        "originalPrice": 122, 
        "discountedPrice": 117,
        "image": "Pepsi Soft Drink 2.25L Bottle (Pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Amul Cow Ghee Jar, 500 ml (Pack of 1)", 
        "originalPrice": 358, 
        "discountedPrice": 339,
        "image": "Amul Cow Ghee Jar, 500 ml (Pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Tata Salt Lite Low Sodium 1 kg (Pack of 1)", 
        "originalPrice": 55, 
        "discountedPrice": 49,
        "image": "Tata Salt Lite Low Sodium 1 kg (Pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Amul High Aroma Cow Ghee 200 ml (Pack of 1)", 
        "originalPrice": 148, 
        "discountedPrice": 134,
        "image": "Amul High Aroma Cow Ghee 200 ml (Pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Himalaya Herbal Lip Balm 10 gm (Pack of 1)", 
        "originalPrice": 59, 
        "discountedPrice": 40,
        "image": "Himalaya Herbal Lip Balm 10 gm (Pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "NIVEA Lip Balm Original Care 4.8gm (Pack of 1)", 
        "originalPrice": 55, 
        "discountedPrice": 40,
        "image": "NIVEA Lip Balm Original Care 4.8gm (Pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Himalaya - A Complete Combo of Baby Cream Baby Powder & Baby Hair Oil 100ml Each (combo pack)", 
        "originalPrice": 410, 
        "discountedPrice": 379,
        "image": "Himalaya - A Complete Combo of Baby Cream Baby Powder & Baby Hair Oil 100ml Each (combo pack).jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Colgate Zig Zag Soft Bristles Anti Bacterial Toothbrush (Pack of 1)", 
        "originalPrice": 25, 
        "discountedPrice": 20,
        "image": "Colgate Zig Zag Soft Bristles Anti Bacterial Toothbrush (Pack of 1).jpg", 
        "category": "Personal Care" 
      },
      
       {
        "title": "Colgate Dental Cream Anticavity Toothpaste 36 gm (Pack of 1)", 
        "originalPrice": 23, 
        "discountedPrice": 20,
        "image": "Colgate Dental Cream Anticavity Toothpaste 36 gm (Pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Toothpaste Active Salt 50 gm (Pack of 1)", 
        "originalPrice": 37, 
        "discountedPrice": 25,
        "image": "Colgate Toothpaste Active Salt 50 gm (Pack of 1).jpg", 
        "category": "Personal Care" 
      },
      
      { 
        "title": "Colgate Strong Teeth 100gm (pack of 1)", 
        "originalPrice": 88, 
        "discountedPrice": 74,
        "image": "Colgate Strong Teeth 100gm (pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Cibaca 175gm (Pack of 1)", 
        "originalPrice": 90, 
        "discountedPrice": 74,
        "image": "Colgate Cibaca 175gm (Pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate MaxFresh Toothpaste, Red Gel Tooth Paste with Menthol for Super Fresh Breath 70 gm with 11 gm extra (Pack of 1)", 
        "originalPrice": 78, 
        "discountedPrice": 69,
        "image": "Colgate MaxFresh Toothpaste, Red Gel Tooth Paste with Menthol for Super Fresh Breath 70 gm with 11 gm extra (Pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Pepsodent Germicheck 12h Germ Protection Toothpaste 100gm (Pack of 1)", 
        "originalPrice": 85, 
        "discountedPrice": 74,
        "image": "Pepsodent Germicheck 12h Germ Protection Toothpaste 100gm (Pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Classmate Long Exercise Note Book - Single Line, 140 Pages", 
        "originalPrice": 70, 
        "discountedPrice": 64,
        "image": "Classmate Long Exercise Note Book - Single Line, 140 Pages.jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Gillette Wilkinson Sword Blades (Count of 10) 110 count (Pack of 1)", 
        "originalPrice": 265, 
        "discountedPrice": 249,
        "image": "Gillette Wilkinson Sword Blades (Count of 10) 110 count (Pack of 1).jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Huggies Complete Comfort Dry Pants Medium (M) Size Baby Diaper Pants, 8 count, with 5 in 1 Comfort", 
        "originalPrice": 115, 
        "discountedPrice": 104,
        "image": "Huggies Complete Comfort Dry Pants Medium (M) Size Baby Diaper Pants, 8 count, with 5 in 1 Comfort.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Huggies Complete Comfort Dry Pants Newborn_Extra Small (NB_XS) Size Baby Diaper Pants, 10 count, with 5 in 1 Comfort", 
        "originalPrice": 110, 
        "discountedPrice": 104,
        "image": "Huggies Complete Comfort Dry Pants Newborn_Extra Small (NB_XS) Size Baby Diaper Pants, 10 count, with 5 in 1 Comfort.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Cadbury 5 Star Kitted Pack Chocolate Bars, 108 gm, 6 Count (Pack of 1)", 
        "originalPrice": 60, 
        "discountedPrice": 59,
        "image": "Cadbury 5 Star Kitted Pack Chocolate Bars, 108 gm, 6 Count (Pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle G Original Glucose Biscuits, 100 gm (Pack of 1)", 
        "originalPrice": 12, 
        "discountedPrice": 10,
        "image": "Parle G Original Glucose Biscuits, 100 gm (Pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle G Gold Biscuits, 75g (Pack of 1)", 
        "originalPrice": 12, 
        "discountedPrice": 10,
        "image": "Parle G Gold Biscuits, 75g (Pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle G Gold Biscuits, 200g (Pack of 1)", 
        "originalPrice": 35, 
        "discountedPrice": 29,
        "image": "Parle G Gold Biscuits, 200g (Pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Nihar Naturals Shanti Badam Amla Hair Oil, 140ml (Pack of 1)", 
        "originalPrice": 56, 
        "discountedPrice": 49,
        "image": "Nihar Naturals Shanti Badam Amla Hair Oil, 140ml (Pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Hair & Care Hair Oil, 100ml (Pack of 1)", 
        "originalPrice": 79, 
        "discountedPrice": 64,
        "image": "Hair & Care Hair Oil, 100ml (Pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Cadbury 5 Star Chocolate Bar, 38 gm (Pack of 1)", 
        "originalPrice": 30, 
        "discountedPrice": 25,
        "image": "Cadbury 5 Star Chocolate Bar, 38 gm (Pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Cadbury Dairy Milk Chocolate Bar, 21 gm (Pack of 1)", 
        "originalPrice": 20, 
        "discountedPrice": 20,
        "image": "Cadbury Dairy Milk Chocolate Bar, 21 gm (Pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Cadbury Dairy Milk Chocolate Bar, 11.5 gm (Pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 10,
        "image": "Cadbury Dairy Milk Chocolate Bar, 11.5 gm (Pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Navratna Cool Hair Oil, 50ml (Pack of 1)", 
        "originalPrice": 55, 
        "discountedPrice": 44,
        "image": "Navratna Cool Hair Oil, 50ml (Pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Amul Ghee Refill Pack, 200 ml (Pack of 1)", 
        "originalPrice": 149, 
        "discountedPrice": 139,
        "image": "Amul Ghee Refill Pack, 200 ml (Pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Cinthol Lime Bath Soap 100 gm (pack of 1)", 
        "originalPrice": 45, 
        "discountedPrice": 39,
        "image": "Cinthol Lime Bath Soap 100 gm (pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Brooke Bond Red Label Tea 500 Gm", 
        "originalPrice": 267, 
        "discountedPrice": 264,
        "image": "Brooke Bond Red Label Tea 500 Gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Brooke Bond Red Label Natural Care Tea 100 Gm", 
        "originalPrice": 55, 
        "discountedPrice": 49,
        "image": "Brooke Bond Red Label Natural Care Tea 100 Gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Ramdev Hing 50 Gm", 
        "originalPrice": 165, 
        "discountedPrice": 159,
        "image": "Ramdev Hing 50 Gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Mansa Devi Premium Compounded Hing 50 Gm", 
        "originalPrice": 145, 
        "discountedPrice": 144,
        "image": "Mansa Devi Premium Compounded Hing 50 Gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Tata Premium Tea 100 Gm", 
        "originalPrice": 45, 
        "discountedPrice": 44,
        "image": "Tata Premium Tea 100 Gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Dhara Oil Kachi Ghani Mustard (Bottle) 1 Ltr", 
        "originalPrice": 175, 
        "discountedPrice": 164,
        "image": "Dhara Oil Kachi Ghani Mustard (Bottle) 1 Ltr.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Saffola Active Oil 1 Ltr", 
        "originalPrice": 197, 
        "discountedPrice": 184,
        "image": "Saffola Active Oil 1 Ltr.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Amul Pure Desi Ghee 500 Ml", 
        "originalPrice": 330, 
        "discountedPrice": 314,
        "image": "Amul Pure Desi Ghee 500 Ml.jpg", 
        "category": "Groceries & Staples" 
      },
       { 
        "title": "Aashirvaad Chana Dal Besan 500 Gm", 
        "originalPrice": 90, 
        "discountedPrice": 64,
        "image": "Aashirvaad Chana Dal Besan 500 Gm.jpg", 
        "category": "Groceries & Staples" 
      },
       { 
        "title": "Brooke Bond Taaza Tea 250 Gm", 
        "originalPrice": 60, 
        "discountedPrice": 59,
        "image": "Brooke Bond Taaza Tea 250 Gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Brooke Bond Red Label Tea 100 Gm", 
        "originalPrice": 50, 
        "discountedPrice": 44,
        "image": "Brooke Bond Red Label Tea 100 Gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Taj Mahal Tea 100 Gm", 
        "originalPrice": 70, 
        "discountedPrice": 64,
        "image": "Taj Mahal Tea 100 Gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Dhara Refined Soyabean Oil 1 Ltr", 
        "originalPrice": 190, 
        "discountedPrice": 149,
        "image": "Dhara Refined Soyabean Oil 1 Ltr.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Patanjali Cow Ghee 1 Ltr", 
        "originalPrice": 665, 
        "discountedPrice": 659,
        "image": "Patanjali Cow Ghee 1 Ltr.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Aashirvaad Besan 1 Kg", 
        "originalPrice": 180, 
        "discountedPrice": 114,
        "image": "Aashirvaad Besan 1 Kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Amul Cow Ghee (Carton) 1 Ltr", 
        "originalPrice": 650, 
        "discountedPrice": 599,
        "image": "Amul Cow Ghee (Carton) 1 Ltr.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Maaza Mango Drink 600 ml", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Maaza Mango Drink 600 ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Mirinda Soft Drink 750 ml", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Mirinda Soft Drink 750 ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Hamdard Rooh Afza Sharbat 750 ml", 
        "originalPrice": 180, 
        "discountedPrice": 174,
        "image": "Hamdard Rooh Afza Sharbat 750 ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Sprite Soft Drink 2 Ltr", 
        "originalPrice": 100, 
        "discountedPrice": 99,
        "image": "Sprite Soft Drink 2 Ltr.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Sprite Soft Drink 1 Ltr", 
        "originalPrice": 50, 
        "discountedPrice": 49,
        "image": "Sprite Soft Drink 1 Ltr.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Appy Fizz (Bottle) 600 ml", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Appy Fizz (Bottle) 600 ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Maaza Mango Juice 1.2 Ltr", 
        "originalPrice": 80, 
        "discountedPrice": 74,
        "image": "Maaza Mango Juice 1.2 Ltr.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Thums Up Soft Drink 2 Ltr", 
        "originalPrice": 100, 
        "discountedPrice": 99,
        "image": "Thums Up Soft Drink 2 Ltr.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Thums Up Soft Drink 1 Ltr", 
        "originalPrice": 50, 
        "discountedPrice": 49,
        "image": "Thums Up Soft Drink 1 Ltr.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Frooti Mango Drink 1.8 Ltr", 
        "originalPrice": 100, 
        "discountedPrice": 99,
        "image": "Frooti Mango Drink 1.8 Ltr.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Thums Up Soft Drink Pet 250 ml", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Thums Up Soft Drink Pet 250 ml.jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Coca Cola Soft Drink (Can) 300 ml", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Coca Cola Soft Drink (Can) 300 ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Limca Soft Drink Pet 250 ml", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Limca Soft Drink Pet 250 ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Frooti Mango Drink (Bottle) 2 Ltr", 
        "originalPrice": 120, 
        "discountedPrice": 99,
        "image": "Frooti Mango Drink (Bottle) 2 Ltr.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Coca Cola 2 Ltr", 
        "originalPrice": 100, 
        "discountedPrice": 99,
        "image": "Coca Cola 2 Ltr.jpg", 
        "category": "Snacks & Beverages" 
      },
       {
        "title": "Frooti Mango Drink 600 ml", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Frooti Mango Drink 600 ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Glucon D Instant Energy Health Regular Refill 75 Gm with 50 Gm FREE", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Glucon D Instant Energy Health Regular Refill 75 Gm with 50 Gm FREE.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji Bikaner Bhujia 200 Gm", 
        "originalPrice": 60, 
        "discountedPrice": 54,
        "image": "Bikaji Bikaner Bhujia 200 Gm.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji Kuch Kuch Namkeen 200 Gm", 
        "originalPrice": 60, 
        "discountedPrice": 54,
        "image": "Bikaji Kuch Kuch Namkeen 200 Gm.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Lays Classic Salted 18.5 with Get 5.5 gm", 
        "originalPrice": 10, 
        "discountedPrice": 10,
        "image": "Lays Classic Salted 18.5 with Get 5.5 gm.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Maggi 2 Minute Masala Noodles 70 Gm (pack of 3)", 
        "originalPrice": 45, 
        "discountedPrice": 44,
        "image": "Maggi 2 Minute Masala Noodles 70 Gm (pack of 3).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Dabur Chyawanprash Awaleha 250 Gm", 
        "originalPrice": 115, 
        "discountedPrice": 99,
        "image": "Dabur Chyawanprash Awaleha 250 Gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Dabur Honey 500 Gm", 
        "originalPrice": 250, 
        "discountedPrice": 199,
        "image": "Dabur Honey 500 Gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Sunfeast Yippee Masala Pasta 65 Gm", 
        "originalPrice": 35, 
        "discountedPrice": 24,
        "image": "Sunfeast Yippee Masala Pasta 65 Gm.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Dabur Honey 100 Gm", 
        "originalPrice": 90, 
        "discountedPrice": 79,
        "image": "Dabur Honey 100 Gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Dabur Sarson AMla Hair Oil 175 ml", 
        "originalPrice": 65, 
        "discountedPrice": 59,
        "image": "Dabur Sarson AMla Hair Oil 175 ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dabur Amla Hair Oil 180 ml", 
        "originalPrice": 99, 
        "discountedPrice": 94,
        "image": "Dabur Amla Hair Oil 180 ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dettol Original Liquid Handwash 650 ml", 
        "originalPrice": 119, 
        "discountedPrice": 109,
        "image": "Dettol Original Liquid Handwash 650 ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Sunsilk Black Shine Shampoo Sachet 6 ml (pack of 25)", 
        "originalPrice": 25, 
        "discountedPrice": 24,
        "image": "Sunsilk Black Shine Shampoo Sachet 6 ml (pack of 25).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dove Cream Beauty Soap 50 Gm", 
        "originalPrice": 25, 
        "discountedPrice": 24,
        "image": "Dove Cream Beauty Soap 50 Gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Aashirvaad Shudh Chakki Atta 5 Kg", 
        "originalPrice": 245, 
        "discountedPrice": 229,
        "image": "Aashirvaad Shudh Chakki Atta 5 Kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Aashirvaad Shudh Chakki Atta 10 Kg", 
        "originalPrice": 468, 
        "discountedPrice": 459,
        "image": "Aashirvaad Shudh Chakki Atta 10 Kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Deepjyoti Refined Soyabean Oil (Pouch) 1 Ltr", 
        "originalPrice": 165, 
        "discountedPrice": 149,
        "image": "Deepjyoti Refined Soyabean Oil (Pouch) 1 Ltr.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Wild Stone Ultra Sensual Deodorant 150 ml", 
        "originalPrice": 225, 
        "discountedPrice": 154,
        "image": "Wild Stone Ultra Sensual Deodorant 150 ml.jpg", 
        "category": "Personal Care" 
      },
       { 
        "title": "Dyna Lime & Aloe Vera Soap 125 Gm (Pack Of 4)", 
        "originalPrice": 140, 
        "discountedPrice": 129,
        "image": "Dyna Lime & Aloe Vera Soap 125 Gm (Pack Of 4).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Bajaj Almond Drops Hair Oil 190 ml", 
        "originalPrice": 145, 
        "discountedPrice": 139,
        "image": "Bajaj Almond Drops Hair Oil 190 ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Nihar Shanti Amla Badam Hair Oil 500 ml", 
        "originalPrice": 207, 
        "discountedPrice": 149,
        "image": "Nihar Shanti Amla Badam Hair Oil 500 ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dettol Original Soap 75 Gm (Buy 3 Get 1 Free)", 
        "originalPrice": 140, 
        "discountedPrice": 129,
        "image": "Dettol Original Soap 75 Gm (Buy 3 Get 1 Free).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Clinic Plus Strong & Long Health Shampoo 175 ml", 
        "originalPrice": 126, 
        "discountedPrice": 119,
        "image": "Clinic Plus Strong & Long Health Shampoo 175 ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Lux Flaw Less Glow Jasmine & Vitamin Soap 100 Gm (Buy 4 Get 1 Free)", 
        "originalPrice": 155, 
        "discountedPrice": 144,
        "image": "Lux Flaw Less Glow Jasmine & Vitamin Soap 100 Gm (Buy 4 Get 1 Free).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dettol Original Soap 100 Gm (Pack Of 5)", 
        "originalPrice": 175, 
        "discountedPrice": 159,
        "image": "Dettol Original Soap 100 Gm (Pack Of 5).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Glow N Handsome Mens Cream 25 gm", 
        "originalPrice": 100, 
        "discountedPrice": 89,
        "image": "Glow N Handsome Mens Cream 25 gm.jpg", 
        "category": "Personal Care" 
      },
       { 
        "title": "Dettol Original Liquid Handwash 200 Ml with Liquid Handwash 175 Ml Free (any Variant)", 
        "originalPrice": 100, 
        "discountedPrice": 94,
        "image": "Dettol Original Liquid Handwash 200 Ml with Liquid Handwash 175 Ml Free (any Variant).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Slim Soft Charcoal (Soft) Toothbrush (Buy 2 Get 2 Free)", 
        "originalPrice": 170, 
        "discountedPrice": 129,
        "image": "Colgate Slim Soft Charcoal (Soft) Toothbrush (Buy 2 Get 2 Free).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Gillette Lime Shaving Cream 70 gm", 
        "originalPrice": 85, 
        "discountedPrice": 74,
        "image": "Gillette Lime Shaving Cream 70 gm.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Godrej No 1 Sandal & Turmeric Soap 53 gm (Pack Of 4)", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Godrej No 1 Sandal & Turmeric Soap 53 gm (Pack Of 4).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dettol Lather Shaving Cream 78 gm", 
        "originalPrice": 100, 
        "discountedPrice": 89,
        "image": "Dettol Lather Shaving Cream 78 gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dettol Original Soap 60 Gm (Pack Of 4)", 
        "originalPrice": 85, 
        "discountedPrice": 79,
        "image": "Dettol Original Soap 60 Gm (Pack Of 4).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Gillette Guard Cartridges Pouch 3 Pcs", 
        "originalPrice": 33, 
        "discountedPrice": 29,
        "image": "Gillette Guard Cartridges Pouch 3 Pcs.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Nihar Naturals Shanti Aamla Hair Oil 34 ml (pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "Nihar Naturals Shanti Aamla Hair Oil 34 ml (pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Surf Excel Detergent Powder 80 gm (pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "Surf Excel Detergent Powder 80 gm (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Surf Excel Soap Bar 140 gm (pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "Surf Excel Soap Bar 140 gm (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Ghadi Detergent Powder (Surf) 130 gm (pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "Ghadi Detergent Powder (Surf) 130 gm (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Lux Radiant Glow Vitamin C,E Soap 41 Gm (Pack Of 4)", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Lux Radiant Glow Vitamin C,E Soap 41 Gm (Pack Of 4).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Anchor Clove Power Toothpaste 175 gm", 
        "originalPrice": 62, 
        "discountedPrice": 54,
        "image": "Anchor Clove Power Toothpaste 175 gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Navratna Cool Ayurvedic Hair Oil 90 ml", 
        "originalPrice": 85, 
        "discountedPrice": 79,
        "image": "Navratna Cool Ayurvedic Hair Oil 90 ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dabur Red Toothpaste 100 gm", 
        "originalPrice": 72, 
        "discountedPrice": 69,
        "image": "Dabur Red Toothpaste 100 gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Active Salt Toothpaste 100 gm", 
        "originalPrice": 79, 
        "discountedPrice": 74,
        "image": "Colgate Active Salt Toothpaste 100 gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Calcium & Minerals Toothpowder 50 gm", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Colgate Calcium & Minerals Toothpowder 50 gm.jpg", 
        "category": "Personal Care" 
      },
       { 
        "title": "Colgate Plax Peppermint Fresh Mouthwash 250 ml", 
        "originalPrice": 185, 
        "discountedPrice": 179,
        "image": "Colgate Plax Peppermint Fresh Mouthwash 250 ml.jpg", 
        "category": "Personal Care" 
      },
       { 
        "title": "Clean & Clear Foaming Facewash 100 ml", 
        "originalPrice": 187, 
        "discountedPrice": 149,
        "image": "Clean & Clear Foaming Facewash 100 ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Patanjali Saundarya Aloe Vera Gel 150 ml", 
        "originalPrice": 100, 
        "discountedPrice": 99,
        "image": "Patanjali Saundarya Aloe Vera Gel 150 ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Ponds Pure Detox Facewash 50 gm", 
        "originalPrice": 125, 
        "discountedPrice": 119,
        "image": "Ponds Pure Detox Facewash 50 gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Joy Skin  Fruit Moisturizing Skin Cream 200 ml", 
        "originalPrice": 220, 
        "discountedPrice": 124,
        "image": "Joy Skin  Fruit Moisturizing Skin Cream 200 ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Iodex Pain Balm 40 gm", 
        "originalPrice": 170, 
        "discountedPrice": 164,
        "image": "Iodex Pain Balm 40 gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Nivea Cream 60 ml", 
        "originalPrice": 140, 
        "discountedPrice": 124,
        "image": "Nivea Cream 60 ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Himalaya Purifying Neem Facewash 50 ml", 
        "originalPrice": 85, 
        "discountedPrice": 79,
        "image": "Himalaya Purifying Neem Facewash 50 ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Garnier Men Acno Fight Anti-Pimple Facewash 100 gm", 
        "originalPrice": 238, 
        "discountedPrice": 214,
        "image": "Garnier Men Acno Fight Anti-Pimple Facewash 100 gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Vicco Turmeric Skin Cream 30 gm", 
        "originalPrice": 140, 
        "discountedPrice": 129,
        "image": "Vicco Turmeric Skin Cream 30 gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Fair & Handsome Oil Clear Facewash 100 gm", 
        "originalPrice": 225, 
        "discountedPrice": 119,
        "image": "Fair & Handsome Oil Clear Facewash 100 gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Niine Naturally Soft Sanitary Pads (XL) Ultra Thin Pack Of 6", 
        "originalPrice": 49, 
        "discountedPrice": 39,
        "image": "Niine Naturally Soft Sanitary Pads (XL) Ultra Thin Pack Of 6.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Niine Naturally Soft Sanitary Pads (XL) Ultra Thin (320 Mm) Pack Of 6", 
        "originalPrice": 49, 
        "discountedPrice": 44,
        "image": "Niine Naturally Soft Sanitary Pads (XL) Ultra Thin (320 Mm) Pack Of 6.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Niine Dry Comfort Sanitary Pads 6 Units", 
        "originalPrice": 30, 
        "discountedPrice": 19,
        "image": "Niine Dry Comfort Sanitary Pads 6 Units.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Johnson & Johnson Baby Cream 50 gm", 
        "originalPrice": 105, 
        "discountedPrice": 84,
        "image": "Johnson & Johnson Baby Cream 50 gm.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Johnsons Baby Lotion 100 ml (pack of 1)", 
        "originalPrice": 120, 
        "discountedPrice": 109,
        "image": "Johnsons Baby Lotion 100 ml (pack of 1).jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Amul Fresh Cream 250 ml", 
        "originalPrice": 85, 
        "discountedPrice": 74,
        "image": "Amul Fresh Cream 250 ml.jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "DOMS X1 Xtra Super Dark Pencils Box 10 unit Pack ", 
        "originalPrice": 65, 
        "discountedPrice": 54,
        "image": "DOMS X1 Xtra Super Dark Pencils Box 10 unit Pack .jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "FLAIR Platinum Series Noir Designer Metal Ball Pen Box Pack", 
        "originalPrice": 125, 
        "discountedPrice": 99,
        "image": "FLAIR Platinum Series Noir Designer Metal Ball Pen Box Pack.jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "FLAIR Writometer Ball Pen Blue color (pack of 4)", 
        "originalPrice": 105, 
        "discountedPrice": 99,
        "image": "FLAIR Writometer Ball Pen Blue color (pack of 4).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Cello Winner Ball Pen Blue (Pack of 5)", 
        "originalPrice": 35, 
        "discountedPrice": 24,
        "image": "Cello Winner Ball Pen Blue (Pack of 5).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Cello Winner Ball Pen Black (Pack of 5)", 
        "originalPrice": 30, 
        "discountedPrice": 24,
        "image": "Cello Winner Ball Pen Black (Pack of 5).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Pentonic 0.6 mm Gel Pen Blue (Pack of 10)", 
        "originalPrice": 120, 
        "discountedPrice": 114,
        "image": "Pentonic 0.6 mm Gel Pen Blue (Pack of 10).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Notebook (Single Line) - 84 Pages (pack of 3)", 
        "originalPrice": 120, 
        "discountedPrice": 99,
        "image": "Notebook (Single Line) - 84 Pages (pack of 3).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Pentonic Ball Pen Blue Ink (Pack Of 10)", 
        "originalPrice": 120, 
        "discountedPrice": 114,
        "image": "Pentonic Ball Pen Blue Ink (Pack Of 10).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Cello Butterflow Simply Ball Pen Blue Pack Of 5 Pcs", 
        "originalPrice": 50, 
        "discountedPrice": 49,
        "image": "Cello Butterflow Simply Ball Pen Blue Pack Of 5 Pcs.jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Pidilite Fevi Kwik (Instant Adhesive) 3 gm ", 
        "originalPrice": 30, 
        "discountedPrice": 24,
        "image": "Pidilite Fevi Kwik (Instant Adhesive) 3 gm .jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Doms Champions Kit", 
        "originalPrice": 99, 
        "discountedPrice": 84,
        "image": "Doms Champions Kit.jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Pentonic Ball Pen Black Ink Pack Of 10 Pcs", 
        "originalPrice": 120, 
        "discountedPrice": 109,
        "image": "Pentonic Ball Pen Black Ink Pack Of 10 Pcs.jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Linc Glycer 0.6mm Ball Pen Blue (Pack Of 10)", 
        "originalPrice": 100, 
        "discountedPrice": 94,
        "image": "Linc Glycer 0.6mm Ball Pen Blue (Pack Of 10).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Tulips Paper Stick Cotton Buds (Zipper Bag) 100 Pieces", 
        "originalPrice": 50, 
        "discountedPrice": 29,
        "image": "Tulips Paper Stick Cotton Buds (Zipper Bag) 100 Pieces.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Pidilite Fevicol MR White (General Purpose Glue) 100 gm", 
        "originalPrice": 60, 
        "discountedPrice": 44,
        "image": "Pidilite Fevicol MR White (General Purpose Glue) 100 gm.jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Linc Maxo Fine Blue Ball Pen (Pack Of 5)", 
        "originalPrice": 35, 
        "discountedPrice": 29,
        "image": "Linc Maxo Fine Blue Ball Pen (Pack Of 5).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Reynolds 045 Ball Pen (4 Blue, 1 Black) (Pack Of 5)", 
        "originalPrice": 50, 
        "discountedPrice": 44,
        "image": "Reynolds 045 Ball Pen (4 Blue, 1 Black) (Pack Of 5).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Dettol Antiseptic Liquid - 250 ml (pack of 1)", 
        "originalPrice": 155, 
        "discountedPrice": 139,
        "image": "Dettol Antiseptic Liquid - 250 ml (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Eveready Red 1015 Aa Carbon Zinc Batteries (Pack Of 4)", 
        "originalPrice": 65, 
        "discountedPrice": 59,
        "image": "Eveready Red 1015 Aa Carbon Zinc Batteries (Pack Of 4).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Surf Excel Easy Wash Powder 1 Kg (pack of 1)", 
        "originalPrice": 138, 
        "discountedPrice": 129,
        "image": "Surf Excel Easy Wash Powder 1 Kg (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Oswal Oil Soap 1 Kg (pack of 1)", 
        "originalPrice": 110, 
        "discountedPrice": 99,
        "image": "Oswal Oil Soap 1 Kg (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Ghadi Detergent Powder 1 Kg (pack of 1)", 
        "originalPrice": 75, 
        "discountedPrice": 69,
        "image": "Ghadi Detergent Powder 1 Kg (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Surf Excel Matic Top Load Liquid Detergent (Pouch) 1 Ltr", 
        "originalPrice": 175, 
        "discountedPrice": 149,
        "image": "Surf Excel Matic Top Load Liquid Detergent (Pouch) 1 Ltr.jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Surf Excel Detergent Bar - 200 Gm (pack Of 4)", 
        "originalPrice": 125, 
        "discountedPrice": 114,
        "image": "Surf Excel Detergent Bar - 200 Gm (pack Of 4).jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Rin Advanced Bar (250 Gm with 4 unit) 1 Kg", 
        "originalPrice": 120, 
        "discountedPrice": 99,
        "image": "Rin Advanced Bar (250 Gm with 4 unit) 1 Kg.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Oswal Washing Powder 1 Kg (pack of 1)", 
        "originalPrice": 85, 
        "discountedPrice": 69,
        "image": "Oswal Washing Powder 1 Kg (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Tide Naturals Detergent Powder (Lemon & Chandan) 1 Kg (pack of 1)", 
        "originalPrice": 90, 
        "discountedPrice": 84,
        "image": "Tide Naturals Detergent Powder (Lemon & Chandan) 1 Kg (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Surf Excel Easy Wash Powder 500 gm (pack of 1)", 
        "originalPrice": 67, 
        "discountedPrice": 64,
        "image": "Surf Excel Easy Wash Powder 500 gm (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Rin Detergent Bar (130 Gm with 30 Gm Extra) 160 gm (pack of 4)", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Rin Detergent Bar (130 Gm with 30 Gm Extra) 160 gm (pack of 4).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Ghadi Detergent Bar  165 gm (pack of 4)", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Ghadi Detergent Bar  165 gm (pack of 4).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Tide Blue Detergent Bar (Value Pack) 200 Gm (Pack Of 5)", 
        "originalPrice": 105, 
        "discountedPrice": 99,
        "image": "Tide Blue Detergent Bar (Value Pack) 200 Gm (Pack Of 5).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Ghadi Detergent Powder 500 gm (pack of 1)", 
        "originalPrice": 36, 
        "discountedPrice": 34,
        "image": "Ghadi Detergent Powder 500 gm (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Ghadi Detergent Bar 300 gm (pack of 1)", 
        "originalPrice": 21, 
        "discountedPrice": 14,
        "image": "Ghadi Detergent Bar 300 gm (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Harpic Power Plus Original Disinfectant Toilet Cleaner 1 Ltr (pack of 1)", 
        "originalPrice": 240, 
        "discountedPrice": 229,
        "image": "Harpic Power Plus Original Disinfectant Toilet Cleaner 1 Ltr (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Lizol Disinfectant Floor Cleaner (Citrus) 1 Ltr (pack of 1)", 
        "originalPrice": 250, 
        "discountedPrice": 239,
        "image": "Lizol Disinfectant Floor Cleaner (Citrus) 1 Ltr (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Harpic Lemon Disinfectant Bathroom Cleaner 1 Ltr (pack of 1)", 
        "originalPrice": 219, 
        "discountedPrice": 214,
        "image": "Harpic Lemon Disinfectant Bathroom Cleaner 1 Ltr (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Harpic Flushmatic Lavender 50 gm 2 unit (pack of 1)", 
        "originalPrice": 172, 
        "discountedPrice": 159,
        "image": "Harpic Flushmatic Lavender 50 gm 2 unit (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Lizol Floral Disinfectant Floor Cleaner 1 Ltr (pack of 1)", 
        "originalPrice": 250, 
        "discountedPrice": 239,
        "image": "Lizol Floral Disinfectant Floor Cleaner 1 Ltr (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Harpic Hygienic Lavender Toilet Cleaner Rim Block 26 gm", 
        "originalPrice": 91, 
        "discountedPrice": 84,
        "image": "Harpic Hygienic Lavender Toilet Cleaner Rim Block 26 gm.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Bar 300 gm (Pack Of 3)", 
        "originalPrice": 90, 
        "discountedPrice": 89,
        "image": "Vim Bar 300 gm (Pack Of 3).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Lemon Dishwash Gel (Bottle) 750 ml (pack of 1)", 
        "originalPrice": 210, 
        "discountedPrice": 194,
        "image": "Vim Lemon Dishwash Gel (Bottle) 750 ml (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Lemon Dishwash Gel 250 ml (pack of 1)", 
        "originalPrice": 55, 
        "discountedPrice": 54,
        "image": "Vim Lemon Dishwash Gel 250 ml (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Dishwash Liquid (Lemon) 500 ml (pack of 1)", 
        "originalPrice": 130, 
        "discountedPrice": 124,
        "image": "Vim Dishwash Liquid (Lemon) 500 ml (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Hit Chalk Crawling Insects Killer 15 gm (pack of 2)", 
        "originalPrice": 36, 
        "discountedPrice": 34,
        "image": "Hit Chalk Crawling Insects Killer 15 gm (pack of 2).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Hit Flying Insect Killer Spray 200 ml (pack of 1)", 
        "originalPrice": 110, 
        "discountedPrice": 104,
        "image": "Hit Flying Insect Killer Spray 200 ml (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Good Knight Gold Flash Machine & Refill 45 ml (pack of 1)", 
        "originalPrice": 105, 
        "discountedPrice": 99,
        "image": "Good Knight Gold Flash Machine & Refill 45 ml (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Odonil Bathroom Air Freshener Blocks Mixed 48 gm (Pack Of 4)", 
        "originalPrice": 192, 
        "discountedPrice": 139,
        "image": "Odonil Bathroom Air Freshener Blocks Mixed 48 gm (Pack Of 4).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Odonil Rose Garden Room Freshener 220 ml (pack of 1)", 
        "originalPrice": 169, 
        "discountedPrice": 89,
        "image": "Odonil Rose Garden Room Freshener 220 ml (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Godrej Aer Power Pocket Assorted 30 gm (Pack Of 3)", 
        "originalPrice": 195, 
        "discountedPrice": 179,
        "image": "Godrej Aer Power Pocket Assorted 30 gm (Pack Of 3).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Good Knight Gold Flash Twin Pack (each 45 Ml) total 90 ml (pack of 1)", 
        "originalPrice": 155, 
        "discountedPrice": 139,
        "image": "Good Knight Gold Flash Twin Pack (each 45 Ml) total 90 ml (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      
      { 
        "title": "Kurkure Masala Munch 24 gm pouch (pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "Kurkure Masala Munch 24 gm pouch (pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Bingo Tedhe Medhe Chatpata Twist 45 gm (pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "Bingo Tedhe Medhe Chatpata Twist 45 gm (pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bingo Tedhe Medhe Masala Tadka 45 gm (pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "Bingo Tedhe Medhe Masala Tadka 45 gm (pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Lays Yourgt and Herbs Chips 48 gm (pack of 1)", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Lays Yourgt and Herbs Chips 48 gm (pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Lays American Style Cream & Onion Flavour Potato Chips 24g (Pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 10,
        "image": "Lays American Style Cream & Onion Flavour Potato Chips 24g (Pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Saras Pasteurised Milk 500 ml Pouch (pack of 1)", 
        "originalPrice": 27, 
        "discountedPrice": 26,
        "image": "Saras Pasteurised Milk 500 ml Pouch (pack of 1).jpg", 
        "category": "Dairy & Bakery" 
      },
       { 
        "title": "Saras Pasteurised Gold Milk 500 ml pouch (pack of 1)", 
        "originalPrice": 35, 
        "discountedPrice": 34,
        "image": "Saras Pasteurised Gold Milk 500 ml pouch (pack of 1).jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Amul Gold Milky Milk 500 ml (pack of 1)", 
        "originalPrice": 35, 
        "discountedPrice": 34,
        "image": "Amul Gold Milky Milk 500 ml (pack of 1).jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Amul Taza Milky Milk 500 ml (pack of 1)", 
        "originalPrice": 27, 
        "discountedPrice": 26,
        "image": "Amul Taza Milky Milk 500 ml (pack of 1).jpg", 
        "category": "Dairy & Bakery" 
      },
      
       { 
        "title": "Vijayvargiya Rubi Tea 25 gm (pack of 1)", 
        "originalPrice": 15, 
        "discountedPrice": 10,
        "image": "Vijayvargiya Rubi Tea 25 gm (pack of 1).jpg", 
        "category": "Groceries & Staples" 
      },
      
       { 
        "title": "Mortein 45 ml Refill with Machine, (pack of 1)", 
        "originalPrice": 99, 
        "discountedPrice": 84,
        "image": "Mortein 45 ml Refill with Machine, (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Mortein SmartPlus Mosquito Repellent - 10 Coil (Pack of 1)", 
        "originalPrice": 40, 
        "discountedPrice": 34,
        "image": "Mortein SmartPlus Mosquito Repellent - 10 Coil (Pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Mortein PowerBooster Coil 8 Hr (10 Count) (Pack of 1)", 
        "originalPrice": 35, 
        "discountedPrice": 34,
        "image": "Mortein PowerBooster Coil 8 Hr (10 Count) (Pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "All Out Ultra Liquid Vaporizer, Machine with 1 Refill (45ml)", 
        "originalPrice": 105, 
        "discountedPrice": 99,
        "image": "All Out Ultra Liquid Vaporizer, Machine with 1 Refill (45ml).jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "All Out Pest Repellent - Mosquito Coil, 10 with 4 Pieces Pack_14 count (Pack of 1)", 
        "originalPrice": 49, 
        "discountedPrice": 44,
        "image": "All Out Pest Repellent - Mosquito Coil, 10 with 4 Pieces Pack_14 count (Pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Duracell Alkaline AAA Batteries, (for tv remote) (Pack of 2)", 
        "originalPrice": 59, 
        "discountedPrice": 49,
        "image": "Duracell Alkaline AAA Batteries, (for tv remote) (Pack of 2).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Duracell Alkaline AA Battery, 1.5 Volt (for wall watch) (Pack of 2)", 
        "originalPrice": 149, 
        "discountedPrice": 104,
        "image": "Duracell Alkaline AA Battery, 1.5 Volt (for wall watch) (Pack of 2).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Harpic Power Plus Toilet Cleaner (200 ml) (Pack of 1)", 
        "originalPrice": 58, 
        "discountedPrice": 49,
        "image": "Harpic Power Plus Toilet Cleaner (200 ml) (Pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Odonil Air Freshener Blocks - 50g (Pack of 1)", 
        "originalPrice": 68, 
        "discountedPrice": 59,
        "image": "Odonil Air Freshener Blocks - 50g (Pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      
      { 
        "title": "Dabur Aamla Hair Oil 65 ml (pack of 1)", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Dabur Aamla Hair Oil 65 ml (pack of 1).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Comfort Fabric Conditioners Liquid 210 ml (pack of 1)", 
        "originalPrice": 65, 
        "discountedPrice": 59,
        "image": "Comfort Fabric Conditioners Liquid 210 ml (pack of 1).jpg", 
        "category": "Household Essentials" 
      },
      
      { 
        "title": "Fru Bon Pasteurised Double Toned Milk 200ml (pack of 1)", 
        "originalPrice": 12, 
        "discountedPrice": 10,
        "image": "Fru Bon Pasteurised Double Toned Milk 200ml (pack of 1).jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Huggies Comfy Pants 4-8 kg 1 unit (pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "Huggies Comfy Pants 4-8 kg 1 unit (pack of 1).jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Amul Buttermilk (Chhachh) 450 ml (pack of 1)", 
        "originalPrice": 17, 
        "discountedPrice": 16,
        "image": "Amul Buttermilk (Chhachh) 450 ml (pack of 1).jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Best Quality Rusk (toast) 30 unit (pack of 1)", 
        "originalPrice": 30, 
        "discountedPrice": 24,
        "image": "Best Quality Rusk (toast) 30 unit (pack of 1).jpg", 
        "category": "Dairy & Bakery" 
      },
      { 
        "title": "Saras Chhachh 500 ml (pack of 1)", 
        "originalPrice": 17, 
        "discountedPrice": 16,
        "image": "Saras Chhachh 500 ml (pack of 1).jpg", 
        "category": "Dairy & Bakery" 
      },
      
      { 
        "title": "Rajshree Namkeen Kashmiri Mixture 400 gm (pack of 1)", 
        "originalPrice": 79, 
        "discountedPrice": 59,
        "image": "Rajshree Namkeen Kashmiri Mixture 400 gm (pack of 1).jpg", 
        "category": "Snacks & Beverages" 
      },
      
      
     
      
       { 
        "title": "Thums Up 750ml", 
        "originalPrice": 45, 
        "discountedPrice": 39,
        "image": "Thums Up 750ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Coca Cola (Coke) 750ml", 
        "originalPrice": 45, 
        "discountedPrice": 39,
        "image": "Coca Cola (Coke) 750ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Limca 750ml", 
        "originalPrice": 45, 
        "discountedPrice": 39,
        "image": "Limca 750ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bisleri Mineral Water 1L", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Bisleri Mineral Water 1L.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bisleri Mineral Water 500ml (Pack of 24)", 
        "originalPrice": 240, 
        "discountedPrice": 209,
        "image": "Bisleri Mineral Water 500ml (Pack of 24).jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Sprite 750ml", 
        "originalPrice": 45, 
        "discountedPrice": 39,
        "image": "Sprite 750ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Fanta 750ml", 
        "originalPrice": 45, 
        "discountedPrice": 39,
        "image": "Fanta 750ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bisleri Mineral Water 500ml", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "Bisleri Mineral Water 500ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Sting Energy Drink 250ml", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Sting Energy Drink 250ml.jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Red Bull Energy Drink 250ml", 
        "originalPrice": 130, 
        "discountedPrice": 124,
        "image": "Red Bull Energy Drink 250ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Real Mango Fruit Power Juice 180ml", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Real Mango Fruit Power Juice 180ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Slice Mango Fruit Juice Drink 600ml", 
        "originalPrice": 45, 
        "discountedPrice": 39,
        "image": "Slice Mango Fruit Juice Drink 600ml.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Cadbury Bournvita Nutrition Drink 1Kg", 
        "originalPrice": 479, 
        "discountedPrice": 449,
        "image": "Cadbury Bournvita Nutrition Drink 1Kg.jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Complan Nutrition Drink Powder For Kids Royale Chocolate Flavour 500g", 
        "originalPrice": 329, 
        "discountedPrice": 319,
        "image": "Complan Nutrition Drink Powder For Kids Royale Chocolate Flavour 500g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Glucon D Instant Energy Health Drink Tangy Orange 1Kg", 
        "originalPrice": 399, 
        "discountedPrice": 319,
        "image": "Glucon D Instant Energy Health Drink Tangy Orange 1Kg.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Glucon D Instant Energy Health Drink Tangy Orange 200g", 
        "originalPrice": 83, 
        "discountedPrice": 79,
        "image": "Glucon D Instant Energy Health Drink Tangy Orange 200g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "", 
        "originalPrice": 255, 
        "discountedPrice": 249,
        "image": ".jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Kissan Fresh Tomato Ketchup 850g", 
        "originalPrice": 100, 
        "discountedPrice": 99,
        "image": "Kissan Fresh Tomato Ketchup 850g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle Fab Bournbon Biscuits 500g", 
        "originalPrice": 160, 
        "discountedPrice": 99,
        "image": "Parle Fab Bournbon Biscuits 500g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Unibic Choco Chip Biscuits 500g", 
        "originalPrice": 200, 
        "discountedPrice": 99,
        "image": "Unibic Choco Chip Biscuits 500g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "PARLE Hide & Seek Choco Chip Creme Sandwiches Biscuits 400g", 
        "originalPrice": 180, 
        "discountedPrice": 99,
        "image": "PARLE Hide & Seek Choco Chip Creme Sandwiches Biscuits 400g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle Happy Happy Choco Chip Cookies (Biscuits)396g", 
        "originalPrice": 165, 
        "discountedPrice": 79,
        "image": "Parle Happy Happy Choco Chip Cookies (Biscuits)396g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle Krackjack Biscuits 200g", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Parle Krackjack Biscuits 200g.jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Parle 20-20 Gold Cashew Cookies (Biscuits) 604.8g -Super Saver Pack", 
        "originalPrice": 190, 
        "discountedPrice": 99,
        "image": "Parle 20-20 Gold Cashew Cookies (Biscuits) 604.8g -Super Saver Pack.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle-G Royale Biscuits 360g", 
        "originalPrice": 75, 
        "discountedPrice": 74,
        "image": "Parle-G Royale Biscuits 360g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle Magix Orange Cream Sandwich (183.6g)", 
        "originalPrice": 60, 
        "discountedPrice": 29,
        "image": "Parle Magix Orange Cream Sandwich (183.6g).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle Magix Chocolate Cream Sandwich (183.6 g)", 
        "originalPrice": 60, 
        "discountedPrice": 49,
        "image": "Parle Magix Chocolate Cream Sandwich (183.6 g).jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Parle G Original Glucose Biscuits 50g(Pack of 5)", 
        "originalPrice": 25, 
        "discountedPrice": 24,
        "image": "Parle G Original Glucose Biscuits 50g(Pack of 5).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle G Classic Biscuits 800g", 
        "originalPrice": 100, 
        "discountedPrice": 99,
        "image": "Parle G Classic Biscuits 800g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle G Gold Biscuits 1Kg", 
        "originalPrice": 160, 
        "discountedPrice": 149,
        "image": "Parle G Gold Biscuits 1Kg.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle Monaco Biscuits 200g", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Parle Monaco Biscuits 200g.jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Kissan Mixed Fruit Jam 90g", 
        "originalPrice": 30, 
        "discountedPrice": 24,
        "image": "Kissan Mixed Fruit Jam 90g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Kissan Fresh Tomato Ketchup (Sauce) 415g", 
        "originalPrice": 55, 
        "discountedPrice": 49,
        "image": "Kissan Fresh Tomato Ketchup (Sauce) 415g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Kissan Mixed Fruit Jam 700g", 
        "originalPrice": 262, 
        "discountedPrice": 244,
        "image": "Kissan Mixed Fruit Jam 700g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji Aloo Bhujia Tana-Tan-400g", 
        "originalPrice": 115, 
        "discountedPrice": 99,
        "image": "Bikaji Aloo Bhujia Tana-Tan-400g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji All In One Kuch Kuch Namkeen 1Kg", 
        "originalPrice": 330, 
        "discountedPrice": 229,
        "image": "Bikaji All In One Kuch Kuch Namkeen 1Kg.jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Bikaji Potato Chips Cream & Onion 100g", 
        "originalPrice": 50, 
        "discountedPrice": 39,
        "image": "Bikaji Potato Chips Cream & Onion 100g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji Tana-Tan Aloo Bhujia 200g", 
        "originalPrice": 58, 
        "discountedPrice": 54,
        "image": "Bikaji Tana-Tan Aloo Bhujia 200g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji Potato Chips Mast Masala 100g", 
        "originalPrice": 50, 
        "discountedPrice": 39,
        "image": "Bikaji Potato Chips Mast Masala 100g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji Khatta Meetha Tana Bana 1kg", 
        "originalPrice": 350, 
        "discountedPrice": 229,
        "image": "Bikaji Khatta Meetha Tana Bana 1kg.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji Bikaneri Bhujia 1Kg", 
        "originalPrice": 340, 
        "discountedPrice": 229,
        "image": "Bikaji Bikaneri Bhujia 1Kg.jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Bikaji Potato Chips Classic Salted 100g", 
        "originalPrice": 50, 
        "discountedPrice": 29,
        "image": "Bikaji Potato Chips Classic Salted 100g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji Bikaneri Bhujia 400g", 
        "originalPrice": 122, 
        "discountedPrice": 99,
        "image": "Bikaji Bikaneri Bhujia 400g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Kurkure Masala Munch 38g (Pack of 3)", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Kurkure Masala Munch 38g (Pack of 3).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Kurkure Chilli Chatka 36g (Pack of 3)", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Kurkure Chilli Chatka 36g (Pack of 3).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Kurkure Solid Masti Masala Twistees 30g (Pack of 3)", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Kurkure Solid Masti Masala Twistees 30g (Pack of 3).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Lays West Indies Hot n Sweet Chilli Potato Chips 24g (Pack of 3)", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Lays West Indies Hot n Sweet Chilli Potato Chips 24g (Pack of 3).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Lays Indias Magic Masala Potato Chips 24g (Pack of 3)", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Lays Indias Magic Masala Potato Chips 24g (Pack of 3).jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Lays Spanish Tomato Tango Flavour Potato Chips 24g (Pack of 3)", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Lays Spanish Tomato Tango Flavour Potato Chips 24g (Pack of 3).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Lays American Style Cream & Onion Flavour Potato Chips 24g (Pack of 3)", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Lays American Style Cream & Onion Flavour Potato Chips 24g (Pack of 3).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Lays Classic Salted Potato Chips 24g (Pack of 3)", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Lays Classic Salted Potato Chips 24g (Pack of 3).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Bikaji Soya Sticks Masala Munch 200g", 
        "originalPrice": 80, 
        "discountedPrice": 59,
        "image": "Bikaji Soya Sticks Masala Munch 200g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Maggi 2-Minute Masala Noodles 280g", 
        "originalPrice": 69, 
        "discountedPrice": 59,
        "image": "Maggi 2-Minute Masala Noodles 280g.jpg", 
        "category": "Snacks & Beverages" 
      },
       { 
        "title": "Maggi Masala Noodles 70g", 
        "originalPrice": 20, 
        "discountedPrice": 15,
        "image": "Maggi Masala Noodles 70g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Maggi Masala Noodles 140g", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Maggi Masala Noodles 140g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle Kaccha Mango Bite Candy (Toffee) 198g", 
        "originalPrice": 50, 
        "discountedPrice": 49,
        "image": "Parle Kaccha Mango Bite Candy (Toffee) 198g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle Melody Chocolaty  (Toffee) 195.5g", 
        "originalPrice": 50, 
        "discountedPrice": 49,
        "image": "Parle Melody Chocolaty  (Toffee) 195.5g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Parle Kismi Candy (Toffee) 276.36g", 
        "originalPrice": 50, 
        "discountedPrice": 49,
        "image": "Parle Kismi Candy (Toffee) 276.36g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Horlicks Chocolate Delight 750g", 
        "originalPrice": 370, 
        "discountedPrice": 299,
        "image": "Horlicks Chocolate Delight 750g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Horlicks Chocolate Delight Jar 1Kg", 
        "originalPrice": 478, 
        "discountedPrice": 449,
        "image": "Horlicks Chocolate Delight Jar 1Kg.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Horlicks Chocolate Delight Jar 500g", 
        "originalPrice": 299, 
        "discountedPrice": 249,
        "image": "Horlicks Chocolate Delight Jar 500g.jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Eno Fruit Salt - Lemon, 30g (Pack of 6)", 
        "originalPrice": 65, 
        "discountedPrice": 59,
        "image": "Eno Fruit Salt - Lemon, 30g (Pack of 6).jpg", 
        "category": "Snacks & Beverages" 
      },
      { 
        "title": "Cadbury Bournvita 750g", 
        "originalPrice": 379, 
        "discountedPrice": 349,
        "image": "Cadbury Bournvita 750g.jpg", 
        "category": "Snacks & Beverages" 
      },
      
      
      
      
       
         { 
        "title": "Saras Ghee 1L", 
        "originalPrice": 588, 
        "discountedPrice": 564,
        "image": "Saras Ghee 1L.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Chambal Fresh Refined Soyabean Oil 1L", 
        "originalPrice": 180, 
        "discountedPrice": 149,
        "image": "Chambal Fresh Refined Soyabean Oil 1L.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Fortune Refined Soyabean Oil 1L", 
        "originalPrice": 165, 
        "discountedPrice": 154,
        "image": "Fortune Refined Soyabean Oil 1L.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "India Gate Tibar Basmati Rice 1Kg", 
        "originalPrice": 177, 
        "discountedPrice": 144,
        "image": "India Gate Tibar Basmati Rice 1Kg.jpg", 
        "category": "Groceries & Staples" 
      },
       { 
        "title": "India Gate Feast Rozzana Basmati Rice 5Kg", 
        "originalPrice": 605, 
        "discountedPrice": 569,
        "image": "India Gate Feast Rozzana Basmati Rice 5Kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Quality Fresh Jaggery (Natural Gud) 500g", 
        "originalPrice": 65, 
        "discountedPrice": 34,
        "image": "Quality Fresh Jaggery (Natural Gud) 500g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Dabur Honey Jar 500gm", 
        "originalPrice": 250, 
        "discountedPrice": 224,
        "image": "Dabur Honey Jar 500gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Engine Brand Kachi Ghani Mustard Oil 1L", 
        "originalPrice": 210, 
        "discountedPrice": 189,
        "image": "Engine Brand Kachi Ghani Mustard Oil 1L.jpg", 
        "category": "Groceries & Staples" 
      }, 
       { 
        "title": "Fortune Kachi Ghani Mustard Oil 1L", 
        "originalPrice": 170, 
        "discountedPrice": 169,
        "image": "Fortune Kachi Ghani Mustard Oil 1L.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Parampara Refined Soyabean Oil 1L (900g)", 
        "originalPrice": 135, 
        "discountedPrice": 134,
        "image": "Parampara Refined Soyabean Oil 1L (900g).jpg", 
        "category": "Groceries & Staples" 
      },
       { 
        "title": "Moongfali 250 gm pack", 
        "originalPrice": 45, 
        "discountedPrice": 44,
        "image": "Moongfali 250 gm pack.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Saras Ghee 500ml", 
        "originalPrice": 295, 
        "discountedPrice": 289,
        "image": "Saras Ghee 500ml.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Lal Qilla Basmati Rice 1Kg", 
        "originalPrice": 280, 
        "discountedPrice": 159,
        "image": "Lal Qilla Basmati Rice 1Kg.jpg", 
        "category": "Groceries & Staples" 
      },
       
      
      { 
        "title": "Everest Kasuri Methi 25g", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Everest Kasuri Methi 25g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Everest Saffron 1g", 
        "originalPrice": 421, 
        "discountedPrice": 249,
        "image": "Everest Saffron 1g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Everest Sabji Masala 100g", 
        "originalPrice": 72, 
        "discountedPrice": 64,
        "image": "Everest Sabji Masala 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Everest Kashmirilal 100g (Red Chilli Powder)", 
        "originalPrice": 110, 
        "discountedPrice": 99,
        "image": "Everest Kashmirilal 100g (Red Chilli Powder).jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "MDH Garam Masala 100g", 
        "originalPrice": 105, 
        "discountedPrice": 99,
        "image": "MDH Garam Masala 100g.jpg", 
        "category": "Groceries & Staples" 
      },
       { 
        "title": "Everest Tandoori Chicken Masala 100g", 
        "originalPrice": 88, 
        "discountedPrice": 79,
        "image": "Everest Tandoori Chicken Masala 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "MDH Kitchen King Masala 100g", 
        "originalPrice": 95, 
        "discountedPrice": 94,
        "image": "MDH Kitchen King Masala 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Everest Cumin Powder 50gm", 
        "originalPrice": 53, 
        "discountedPrice": 49,
        "image": "Everest Cumin Powder 50gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Everest Dhania (Coriander) Powder 200g", 
        "originalPrice": 80, 
        "discountedPrice": 74,
        "image": "Everest Dhania (Coriander) Powder 200g.jpg", 
        "category": "Groceries & Staples" 
      },
       { 
        "title": "MDH Amchur Powder 100g", 
        "originalPrice": 95, 
        "discountedPrice": 84,
        "image": "MDH Amchur Powder 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Everest Hingraj Powder 25g", 
        "originalPrice": 74, 
        "discountedPrice": 69,
        "image": "Everest Hingraj Powder 25g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Tata Salt (Namak) 1Kg", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Tata Salt (Namak) 1Kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Tata Tea Lal Ghoda 250g", 
        "originalPrice": 94, 
        "discountedPrice": 89,
        "image": "Tata Tea Lal Ghoda 250g.jpg", 
        "category": "Groceries & Staples" 
      },
       { 
        "title": "Tata Gold Tea 250g", 
        "originalPrice": 155, 
        "discountedPrice": 149,
        "image": "Tata Gold Tea 250g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "TATA Agni Strong Leaf Tea 1Kg", 
        "originalPrice": 235, 
        "discountedPrice": 214,
        "image": "TATA Agni Strong Leaf Tea 1Kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Tata Tea Premium 250g", 
        "originalPrice": 135, 
        "discountedPrice": 129,
        "image": "Tata Tea Premium 250g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Wagh Bakri Premium Tea 250g", 
        "originalPrice": 150, 
        "discountedPrice": 144,
        "image": "Wagh Bakri Premium Tea 250g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Brooke Bond Taaza Leaf Tea 1Kg", 
        "originalPrice": 250, 
        "discountedPrice": 209,
        "image": "Brooke Bond Taaza Leaf Tea 1Kg.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Tata Agni Tea 250g", 
        "originalPrice": 60, 
        "discountedPrice": 59,
        "image": "Tata Agni Tea 250g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Nescafe Classic Coffee Jar 24g", 
        "originalPrice": 110, 
        "discountedPrice": 104,
        "image": "Nescafe Classic Coffee Jar 24g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Nescafe Classic Coffee Pouch 3.2g- (Pack of 5)", 
        "originalPrice": 65, 
        "discountedPrice": 49,
        "image": "Nescafe Classic Coffee Pouch 3.2g- (Pack of 5).jpg", 
        "category": "Groceries & Staples" 
      },
       { 
        "title": "BRU Instant Coffee Pouch 50g", 
        "originalPrice": 160, 
        "discountedPrice": 129,
        "image": "BRU Instant Coffee Pouch 50g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Nescafe Classic Coffee 200g", 
        "originalPrice": 660, 
        "discountedPrice": 599,
        "image": "Nescafe Classic Coffee 200g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Everest Kitchen King Masala 100gm", 
        "originalPrice": 90, 
        "discountedPrice": 84,
        "image": "Everest Kitchen King Masala 100gm.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Everest Chaat Masala 100g", 
        "originalPrice": 85, 
        "discountedPrice": 79,
        "image": "Everest Chaat Masala 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "MDH Chunky Chat Masala 100g", 
        "originalPrice": 85, 
        "discountedPrice": 79,
        "image": "MDH Chunky Chat Masala 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "MDH Kashmiri Mirch 100g", 
        "originalPrice": 129, 
        "discountedPrice": 119,
        "image": "MDH Kashmiri Mirch 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "MDH Meat Masala 100g", 
        "originalPrice": 92, 
        "discountedPrice": 79,
        "image": "MDH Meat Masala 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "MDH Sambhar Masala 100g", 
        "originalPrice": 79, 
        "discountedPrice": 69,
        "image": "MDH Sambhar Masala 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Maggi Masala-Ae-Magic Vegetable Masala 6g - Pack of 12", 
        "originalPrice": 65, 
        "discountedPrice": 59,
        "image": "Maggi Masala-Ae-Magic Vegetable Masala 6g - Pack of 12.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Everest Chhole Masala 100g", 
        "originalPrice": 89, 
        "discountedPrice": 79,
        "image": "Everest Chhole Masala 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Everest Garam Masala Powder 100g", 
        "originalPrice": 100, 
        "discountedPrice": 89,
        "image": "Everest Garam Masala Powder 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "MDH Chana Masala 100g", 
        "originalPrice": 87, 
        "discountedPrice": 79,
        "image": "MDH Chana Masala 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Everest Sambhar Masala 100g", 
        "originalPrice": 81, 
        "discountedPrice": 74,
        "image": "Everest Sambhar Masala 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Everest Haldi Powder 100g", 
        "originalPrice": 46, 
        "discountedPrice": 44,
        "image": "Everest Haldi Powder 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      { 
        "title": "Everest Tikhalal 100g (Red Chilli Powder)", 
        "originalPrice": 60, 
        "discountedPrice": 54,
        "image": "Everest Tikhalal 100g (Red Chilli Powder).jpg", 
        "category": "Groceries & Staples" 
      },
      
      { 
        "title": "Everest Pav Bhaji Masala 100g", 
        "originalPrice": 90, 
        "discountedPrice": 79,
        "image": "Everest Pav Bhaji Masala 100g.jpg", 
        "category": "Groceries & Staples" 
      },
      
      
      
      { 
        "title": "MamyPoko Pants Standard Crisscross Sheet (L) 4pc", 
        "originalPrice": 56, 
        "discountedPrice": 54,
        "image": "MamyPoko Pants Standard Crisscross Sheet (L) 4pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Pampers Baby Pants With Aloe Vera Small (S) 4-8kg 40 Pants", 
        "originalPrice": 399, 
        "discountedPrice": 379,
        "image": "Pampers Baby Pants With Aloe Vera Small (S) 4-8kg 40 Pants.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Pampers Baby Pants New Baby (NB) Upto 5kg 10 Pants", 
        "originalPrice": 99, 
        "discountedPrice": 99,
        "image": "Pampers Baby Pants New Baby (NB) Upto 5kg 10 Pants.jpg", 
        "category": "Baby Care" 
      },
      
      { 
        "title": "Pampers Baby Pants With Aloe Vera Medium (M) 7-12kg 8 Pants", 
        "originalPrice": 99, 
        "discountedPrice": 94,
        "image": "Pampers Baby Pants With Aloe Vera Medium (M) 7-12kg 8 Pants.jpg", 
        "category": "Baby Care" 
      },
       
      { 
        "title": "MamyPoko Pants Extra Absorb Large (L) 4 pc", 
        "originalPrice": 79, 
        "discountedPrice": 69,
        "image": "MamyPoko Pants Extra Absorb Large (L) 4 pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Pampers New Xtra Large - 6 Diaper Pants", 
        "originalPrice": 210, 
        "discountedPrice": 189,
        "image": "Pampers New Xtra Large - 6 Diaper Pants.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "MamyPoko Pants Extra Absorb Extra Large (XL) 5pc", 
        "originalPrice": 110, 
        "discountedPrice": 109,
        "image": "MamyPoko Pants Extra Absorb Extra Large (XL) 5pc.jpg", 
        "category": "Baby Care" 
      },
       { 
        "title": "Pampers Baby Pants With Aloe Vera Small (S) 4-8kg 10 Pants", 
        "originalPrice": 99, 
        "discountedPrice": 94,
        "image": "Pampers Baby Pants With Aloe Vera Small (S) 4-8kg 10 Pants.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "MamyPoko Pants Standard Crisscross Sheet (S) 4pc", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "MamyPoko Pants Standard Crisscross Sheet (S) 4pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "MamyPoko Pants Standard Crisscross Sheet (M) 4pc", 
        "originalPrice": 48, 
        "discountedPrice": 44,
        "image": "MamyPoko Pants Standard Crisscross Sheet (M) 4pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "MamyPoko Pants Extra Absorb Small (S) 4 pc", 
        "originalPrice": 57, 
        "discountedPrice": 49,
        "image": "MamyPoko Pants Extra Absorb Small (S) 4 pc.jpg", 
        "category": "Baby Care" 
      },
       { 
        "title": "MamyPoko Pants Extra Absorb New Born(NB) 4 pc", 
        "originalPrice": 45, 
        "discountedPrice": 44,
        "image": "MamyPoko Pants Extra Absorb New Born(NB) 4 pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "MamyPoko Pants Extra Absorb Medium (M) 6pc", 
        "originalPrice": 99, 
        "discountedPrice": 94,
        "image": "MamyPoko Pants Extra Absorb Medium (M) 6pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "MamyPoko Pants Extra Absorb Medium (M) 4pc", 
        "originalPrice": 66, 
        "discountedPrice": 59,
        "image": "MamyPoko Pants Extra Absorb Medium (M) 4pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "MamyPoko Pants Extra Absorb Extra Large (XL) 4pc", 
        "originalPrice": 90, 
        "discountedPrice": 84,
        "image": "MamyPoko Pants Extra Absorb Extra Large (XL) 4pc.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Johnsons Baby Baby Oil 50ml (with Vitamin E)", 
        "originalPrice": 70, 
        "discountedPrice": 69,
        "image": "Johnsons Baby Baby Oil 50ml (with Vitamin E).jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Johnsons Baby Baby Oil 100ml (with Vitamin E)", 
        "originalPrice": 140, 
        "discountedPrice": 139,
        "image": "Johnsons Baby Baby Oil 100ml (with Vitamin E).jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Himalaya Baby Lotion 100ml", 
        "originalPrice": 110, 
        "discountedPrice": 99,
        "image": "Himalaya Baby Lotion 100ml.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Himalaya Baby Massage Oil 50ml", 
        "originalPrice": 65, 
        "discountedPrice": 64,
        "image": "Himalaya Baby Massage Oil 50ml.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Himalaya Baby Hair Oil 50ml", 
        "originalPrice": 80, 
        "discountedPrice": 74,
        "image": "Himalaya Baby Hair Oil 50ml.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Johnsons Baby No More Tears Baby Shampoo 100ml", 
        "originalPrice": 115, 
        "discountedPrice": 109,
        "image": "Johnsons Baby No More Tears Baby Shampoo 100ml.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Johnsons Baby Powder Natural 100g", 
        "originalPrice": 125, 
        "discountedPrice": 119,
        "image": "Johnsons Baby Powder Natural 100g.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Johnsons baby Powder Natural 200g", 
        "originalPrice": 230, 
        "discountedPrice": 219,
        "image": "Johnsons baby Powder Natural 200g.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Colgate Kids 0-2 Years Ultra Soft Toothbrush, 1 Piece", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Colgate Kids 0-2 Years Ultra Soft Toothbrush, 1 Piece.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Himalaya Gentle Baby Shampoo 100ml", 
        "originalPrice": 115, 
        "discountedPrice": 99,
        "image": "Himalaya Gentle Baby Shampoo 100ml.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Johnsons Baby Soap 75g", 
        "originalPrice": 80, 
        "discountedPrice": 69,
        "image": "Johnsons Baby Soap 75g.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Vicks BabyRub 10ml", 
        "originalPrice": 55, 
        "discountedPrice": 49,
        "image": "Vicks BabyRub 10ml.jpg", 
        "category": "Baby Care" 
      },
      { 
        "title": "Pampers Baby Pants With Aloe Vera Large (L) 9-14kg buy 6 get 1 Free Pants", 
        "originalPrice": 55, 
        "discountedPrice": 49,
        "image": "Pampers Baby Pants With Aloe Vera Large (L) 9-14kg buy 6 get 1 Free Pants.jpg", 
        "category": "Baby Care" 
      },
      
      
      
      { 
        "title": "Linc Pentonic Multi Ink Colour Pen (Pack of 12, Multicolor)", 
        "originalPrice": 150, 
        "discountedPrice": 139,
        "image": "Linc Pentonic Multi Ink Colour Pen (Pack of 12, Multicolor).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Doms 14 Shades Erasable Plastic Crayons Round Tin Box", 
        "originalPrice": 60, 
        "discountedPrice": 59,
        "image": "Doms 14 Shades Erasable Plastic Crayons Round Tin Box.jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "NATARAJ 621 BOLD HB WRITING PENCILS (Pack of 10)", 
        "originalPrice": 56, 
        "discountedPrice": 49,
        "image": "NATARAJ 621 BOLD HB WRITING PENCILS (Pack of 10).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Fevicol MR Squeeze Bottle 42g", 
        "originalPrice": 25, 
        "discountedPrice": 24,
        "image": "Fevicol MR Squeeze Bottle 42g.jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Kangaro Stapler HD-10D", 
        "originalPrice": 125, 
        "discountedPrice": 119,
        "image": "Kangaro Stapler HD-10D.jpg", 
        "category": "Books & Stationery" 
      },
       { 
        "title": "Fevistik Super Glue Stick 15g", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Fevistik Super Glue Stick 15g.jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Linc Pentonic Blister Pack Ball Pen (Pack of 10, Multicolor)", 
        "originalPrice": 120, 
        "discountedPrice": 119,
        "image": "Linc Pentonic Blister Pack Ball Pen (Pack of 10, Multicolor).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Linc Pentonic Blue Pen - Low Viscosity Ink (Pack of 10)", 
        "originalPrice": 100, 
        "discountedPrice": 99,
        "image": "Linc Pentonic Blue Pen - Low Viscosity Ink (Pack of 10).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Kangaro Staple Pins No.10 - 1M", 
        "originalPrice": 15, 
        "discountedPrice": 14,
        "image": "Kangaro Staple Pins No.10 - 1M.jpg", 
        "category": "Books & Stationery" 
      },
       { 
        "title": "Linc Pentonic Ball Pen - Black Ink (Pack of 10)", 
        "originalPrice": 100, 
        "discountedPrice": 99,
        "image": "Linc Pentonic Ball Pen - Black Ink (Pack of 10).jpg", 
        "category": "Books & Stationery" 
      },
      { 
        "title": "Casio MJ-120D 150 Steps Check and Correct Desktop Calculator with Tax Keys", 
        "originalPrice": 555, 
        "discountedPrice": 499,
        "image": "Casio MJ-120D 150 Steps Check and Correct Desktop Calculator with Tax Keys.jpg", 
        "category": "Books & Stationery" 
      },
     { 
        "title": "Vaseline Original Skin Protecting Jelly 40g", 
        "originalPrice": 90, 
        "discountedPrice": 89,
        "image": "Vaseline Original Skin Protecting Jelly 40g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Vaseline Original Skin Protecting Jelly 20g", 
        "originalPrice": 50, 
        "discountedPrice": 49,
        "image": "Vaseline Original Skin Protecting Jelly 20g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Vaseline Lip Care Total Moisture Lip Balm 10g", 
        "originalPrice": 50, 
        "discountedPrice": 49,
        "image": "Vaseline Lip Care Total Moisture Lip Balm 10g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Glow & Lovely Advanced Multivitamin Face Cream 25g", 
        "originalPrice": 65, 
        "discountedPrice": 64,
        "image": "Glow & Lovely Advanced Multivitamin Face Cream 25g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Glow & Lovely Advanced Multivitamin Face Cream 50g", 
        "originalPrice": 125, 
        "discountedPrice": 124,
        "image": "Glow & Lovely Advanced Multivitamin Face Cream 50g.jpg", 
        "category": "Beauty & Grooming" 
      },
       { 
        "title": "Joy Skin  Moisturizing Skin Cream 100ml", 
        "originalPrice": 130, 
        "discountedPrice": 119,
        "image": "Joy Skin  Moisturizing Skin Cream 100ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Glow & Handsome Men Instant Brightness Cream 2X Sun Protection 50g", 
        "originalPrice": 175, 
        "discountedPrice": 169,
        "image": "Glow & Handsome Men Instant Brightness Cream 2X Sun Protection 50g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Vaseline Deep Moisture Body Lotion 90ml", 
        "originalPrice": 90, 
        "discountedPrice": 89,
        "image": "Vaseline Deep Moisture Body Lotion 90ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      
      { 
        "title": "Ponds Magic Freshness Talc Powder 100g", 
        "originalPrice": 135, 
        "discountedPrice": 129,
        "image": "Ponds Magic Freshness Talc Powder 100g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Ponds Dreamflower Talcum Powder 100g", 
        "originalPrice": 120, 
        "discountedPrice": 109,
        "image": "Ponds Dreamflower Talcum Powder 100g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Vaseline Deep Moisture Body Lotion 400ml", 
        "originalPrice": 435, 
        "discountedPrice": 219,
        "image": "Vaseline Deep Moisture Body Lotion 400ml.jpg", 
        "category": "Beauty & Grooming" 
      },
       { 
        "title": "Fair And Handsome Fairness Cream For Men 30g", 
        "originalPrice": 90, 
        "discountedPrice": 89,
        "image": "Fair And Handsome Fairness Cream For Men 30g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Godrej Expert Rich Creme Black Brown 3.00 Hair Colour (20g with 20ml free)", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Godrej Expert Rich Creme Black Brown 3.00 Hair Colour (20g with 20ml free).jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Godrej Expert Natural Black 1.0 Creme Hair Colour (20g with 20ml free)", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Godrej Expert Natural Black 1.0 Creme Hair Colour (20g with 20ml free).jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Garnier Black Naturals Hair Color 1.0 Deep Black 20ml with 20g free", 
        "originalPrice": 45, 
        "discountedPrice": 44,
        "image": "Garnier Black Naturals Hair Color 1.0 Deep Black 20ml with 20g free.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Garnier Black Naturals Hair Color 2.0 Original Black 20ml with 20g free", 
        "originalPrice": 45, 
        "discountedPrice": 44,
        "image": "Garnier Black Naturals Hair Color 2.0 Original Black 20ml with 20g free.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Garnier Black Naturals Hair Color 3.0 Brown Black 20ml with 20g free", 
        "originalPrice": 45, 
        "discountedPrice": 44,
        "image": "Garnier Black Naturals Hair Color 3.0 Brown Black 20ml with 20g free.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Garnier Hair Colour - Brown Naturals, 20ml with 20g free", 
        "originalPrice": 45, 
        "discountedPrice": 44,
        "image": "Garnier Hair Colour - Brown Naturals, 20ml with 20g free.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Godrej Expert Natural Brown 4.0 Creme Hair Colour (20g with 20ml free)", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Godrej Expert Natural Brown 4.0 Creme Hair Colour (20g with 20ml free).jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Godrej Expert Rich Creme Dark Brown 4.06 Hair Colour (20g with 20ml free)", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Godrej Expert Rich Creme Dark Brown 4.06 Hair Colour (20g with 20ml free).jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Fogg Napoleon Perfume Body Spray For Men 120 ml", 
        "originalPrice": 225, 
        "discountedPrice": 149,
        "image": "Fogg Napoleon Perfume Body Spray For Men 120 ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "DENVER Pride Deodorant (Body Spray For Men) 165ml", 
        "originalPrice": 229, 
        "discountedPrice": 149,
        "image": "DENVER Pride Deodorant (Body Spray For Men) 165ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "DENVER Black Code Deo (Bodyspray for Men) 150ML", 
        "originalPrice": 230, 
        "discountedPrice": 149,
        "image": "DENVER Black Code Deo (Bodyspray for Men) 150ML.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "DENVER Hamilton Deodorant (Body Spray For Men) 165 ml", 
        "originalPrice": 230, 
        "discountedPrice": 149,
        "image": "DENVER Hamilton Deodorant (Body Spray For Men) 165 ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "DENVER Imperial Deodorant (Body Spray For Men) 165ml", 
        "originalPrice": 230, 
        "discountedPrice": 149,
        "image": "DENVER Imperial Deodorant (Body Spray For Men) 165ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Fogg Dynamic Deodrant 150ml (No Gas Perfume Body Spray For Men)", 
        "originalPrice": 299, 
        "discountedPrice": 169,
        "image": "Fogg Dynamic Deodrant 150ml (No Gas Perfume Body Spray For Men).jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Fogg Fragrance Body Spray Royal For Men 120ml", 
        "originalPrice": 225, 
        "discountedPrice": 149,
        "image": "Fogg Fragrance Body Spray Royal For Men 120ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Gillette Guard Razor 1Pc", 
        "originalPrice": 25, 
        "discountedPrice": 24,
        "image": "Gillette Guard Razor 1Pc.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Gillette Regular Shaving Foam 50g", 
        "originalPrice": 225, 
        "discountedPrice": 149,
        "image": "Gillette Regular Shaving Foam 50g.jpg", 
        "category": "Beauty & Grooming" 
      },
      
      { 
        "title": "Gillette Series Shave Gel For Sensitive Skin With Aloe 25g", 
        "originalPrice": 49, 
        "discountedPrice": 49,
        "image": "Gillette Series Shave Gel For Sensitive Skin With Aloe 25g.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Gillette Guard Razor 1Pc with 12 Cartridge", 
        "originalPrice": 144, 
        "discountedPrice": 139,
        "image": "Gillette Guard Razor 1Pc with 12 Cartridge.jpg", 
        "category": "Beauty & Grooming" 
      },
     
      { 
        "title": "Gillette Guard Cartridge (Pack Of 4)", 
        "originalPrice": 48, 
        "discountedPrice": 44,
        "image": "Gillette Guard Cartridge (Pack Of 4).jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Gillette Shave Brush 1Pc", 
        "originalPrice": 70, 
        "discountedPrice": 69,
        "image": "Gillette Shave Brush 1Pc.jpg", 
        "category": "Beauty & Grooming" 
      }, { 
        "title": "Gillette Guard Cartridge (Pack Of 8)", 
        "originalPrice": 84, 
        "discountedPrice": 79,
        "image": "Gillette Guard Cartridge (Pack Of 8).jpg", 
        "category": "Beauty & Grooming" 
      },
       { 
        "title": "Gillette Guard Cartridge (Pack Of 6)", 
        "originalPrice": 60, 
        "discountedPrice": 59,
        "image": "Gillette Guard Cartridge (Pack Of 6).jpg", 
        "category": "Beauty & Grooming" 
      },
       { 
        "title": "Gillette Guard Razor 1Pc with 6 Cartridge", 
        "originalPrice": 85, 
        "discountedPrice": 79,
        "image": "Gillette Guard Razor 1Pc with 6 Cartridge.jpg", 
        "category": "Beauty & Grooming" 
      },
       { 
        "title": "Gillette Shave Brush 1Pc", 
        "originalPrice": 70, 
        "discountedPrice": 69,
        "image": "Gillette Shave Brush 1Pc.jpg", 
        "category": "Beauty & Grooming" 
      },
      { 
        "title": "Gillette Refreshing Breeze After Shave Splash 100ml", 
        "originalPrice": 499, 
        "discountedPrice": 479,
        "image": "Gillette Refreshing Breeze After Shave Splash 100ml.jpg", 
        "category": "Beauty & Grooming" 
      },
      
      { 
        "title": "Tide Double Power Lemon & Mint Detergent Powder 4Kg with 1Kg FREE", 
        "originalPrice": 800, 
        "discountedPrice": 599,
        "image": "Tide Double Power Lemon & Mint Detergent Powder 4Kg with 1Kg FREE.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Tide White Detergent Bar 200g Value Pack (buy 4 get 1 FREE)", 
        "originalPrice": 140, 
        "discountedPrice": 119,
        "image": "Tide White Detergent Bar 200g Value Pack (buy 4 get 1 FREE).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Tide Blue Detergent Bar 100g Combo (buy 3 get 1 FREE)", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Tide Blue Detergent Bar 100g Combo (buy 3 get 1 FREE).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Tide Double Power Jasmine & Rose Detergent Powder 1Kg with 100g FREE", 
        "originalPrice": 180, 
        "discountedPrice": 129,
        "image": "Tide Double Power Jasmine & Rose Detergent Powder 1Kg with 100g FREE.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Tide Double Power Jasmine & Rose Detergent Powder 1Kg", 
        "originalPrice": 180, 
        "discountedPrice": 124,
        "image": "Tide Double Power Jasmine & Rose Detergent Powder 1Kg.jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Rin Detergent Powder 1Kg", 
        "originalPrice": 100, 
        "discountedPrice": 99,
        "image": "Rin Detergent Powder 1Kg.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Surf Excel Matic Front Load Liquid Detergent 1L", 
        "originalPrice": 230, 
        "discountedPrice": 224,
        "image": "Surf Excel Matic Front Load Liquid Detergent 1L.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Ariel Perfect Wash Detergent Powder 500g", 
        "originalPrice": 120, 
        "discountedPrice": 69,
        "image": "Ariel Perfect Wash Detergent Powder 500g.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Surf Excel Quick Wash Detergent Powder 500g", 
        "originalPrice": 125, 
        "discountedPrice": 119,
        "image": "Surf Excel Quick Wash Detergent Powder 500g.jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Rin Bar 250g (Pack of 4)", 
        "originalPrice": 100, 
        "discountedPrice": 99,
        "image": "Rin Bar 250g (Pack of 4).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Godrej Ezee Liquid Detergent 1L", 
        "originalPrice": 225, 
        "discountedPrice": 219,
        "image": "Godrej Ezee Liquid Detergent 1L.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Tide Detergent Bar 120g (80g with 40g Free)", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "Tide Detergent Bar 120g (80g with 40g Free).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Wheel Active 2 in 1 Detergent Powder 1Kg", 
        "originalPrice": 73, 
        "discountedPrice": 69,
        "image": "Wheel Active 2 in 1 Detergent Powder 1Kg.jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Tide Detergent Bar 250g", 
        "originalPrice": 35, 
        "discountedPrice": 29,
        "image": "Tide Detergent Bar 250g.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Surf Excel Easy Wash Detergent Powder 80g (Pack of 3)", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Surf Excel Easy Wash Detergent Powder 80g (Pack of 3).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vanish All in 1 Detergent Powder 200g", 
        "originalPrice": 130, 
        "discountedPrice": 129,
        "image": "Vanish All in 1 Detergent Powder 200g.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Comfort Fabric Conditioner Lily Fresh 860ml", 
        "originalPrice": 235, 
        "discountedPrice": 219,
        "image": "Comfort Fabric Conditioner Lily Fresh 860ml.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Ujala Supreme 250ml", 
        "originalPrice": 79, 
        "discountedPrice": 79,
        "image": "Ujala Supreme 250ml.jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Comfort Fabric Conditioner Morning Fresh 860ml", 
        "originalPrice": 275, 
        "discountedPrice": 249,
        "image": "Comfort Fabric Conditioner Morning Fresh 860ml.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Harpic Power Plus Disinfectant Toilet Cleaner 500ml", 
        "originalPrice": 105, 
        "discountedPrice": 99,
        "image": "Harpic Power Plus Disinfectant Toilet Cleaner 500ml.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Dettol Antiseptic Liquid 60ml", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Dettol Antiseptic Liquid 60ml.jpg", 
        "category": "Household Essentials" 
      },
       { 
        "title": "Harpic Power Plus Disinfectant Toilet Cleaner 900ml", 
        "originalPrice": 188, 
        "discountedPrice": 179,
        "image": "Harpic Power Plus Disinfectant Toilet Cleaner 900ml.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Harpic Bathroom Cleaner Floral Bloom 500ml", 
        "originalPrice": 110, 
        "discountedPrice": 109,
        "image": "Harpic Bathroom Cleaner Floral Bloom 500ml.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Lizol Citrus Disinfectant Surface Cleaner 500ml", 
        "originalPrice": 116, 
        "discountedPrice": 109,
        "image": "Lizol Citrus Disinfectant Surface Cleaner 500ml.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Harpic Bathroom Cleaner Lemon Fresh 500ml", 
        "originalPrice": 110, 
        "discountedPrice": 109,
        "image": "Harpic Bathroom Cleaner Lemon Fresh 500ml.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Bar 90g (Pack of 4) - Combo Pack", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Vim Bar 90g (Pack of 4) - Combo Pack.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Bar with Power of Lemons 300g", 
        "originalPrice": 30, 
        "discountedPrice": 29,
        "image": "Vim Bar with Power of Lemons 300g.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Dishwash Liquid Gel Lemon 750ml", 
        "originalPrice": 210, 
        "discountedPrice": 194,
        "image": "Vim Dishwash Liquid Gel Lemon 750ml.jpg", 
        "category": "Household Essentials" 
      },
        { 
        "title": "Vim Dishwash Maha Tub 500g with FREE Scrubber (worth Rs 10)", 
        "originalPrice": 70, 
        "discountedPrice": 59,
        "image": "Vim Dishwash Maha Tub 500g with FREE Scrubber (worth Rs 10).jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Bar 200g (Pack of 4) - Combo Pack", 
        "originalPrice": 86, 
        "discountedPrice": 84,
        "image": "Vim Bar 200g (Pack of 4) - Combo Pack.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Bar 200g (Pack of 3) Combo Pack", 
        "originalPrice": 65, 
        "discountedPrice": 64,
        "image": "Vim Bar 200g (Pack of 3) Combo Pack.jpg", 
        "category": "Household Essentials" 
      },
      { 
        "title": "Vim Bar 90g (Pack of 6) - Combo Pack", 
        "originalPrice": 50, 
        "discountedPrice": 44,
        "image": "Vim Bar 90g (Pack of 6) - Combo Pack.jpg", 
        "category": "Household Essentials" 
      },
      
      { 
        "title": "Veet Pure Hair Removal Cream 30g", 
        "originalPrice": 99, 
        "discountedPrice": 94,
        "image": "Veet Pure Hair Removal Cream 30g.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "VEET Pure Hair Removal Cream-30g", 
        "originalPrice": 99, 
        "discountedPrice": 94,
        "image": "VEET Pure Hair Removal Cream-30g.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Choice XL (18 Pads)", 
        "originalPrice": 126, 
        "discountedPrice": 109,
        "image": "Whisper Choice XL (18 Pads).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Stayfree Secure Cottony Soft Regular (6 Pads) Sanitary Pads", 
        "originalPrice": 34, 
        "discountedPrice": 34,
        "image": "Stayfree Secure Cottony Soft Regular (6 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Veet Professional Ready To Use Half Body Wax Strips 8 Wax Strips & 2 Perfect Finishin Wipes", 
        "originalPrice": 115, 
        "discountedPrice": 109,
        "image": "Veet Professional Ready To Use Half Body Wax Strips 8 Wax Strips & 2 Perfect Finishin Wipes.jpg", 
        "category": "Personal Care" 
      },
       { 
        "title": "Stayfree Secure Cottony Comfort XL (40 Pads) Sanitary Pads", 
        "originalPrice": 275, 
        "discountedPrice": 249,
        "image": "Stayfree Secure Cottony Comfort XL (40 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Stayfree Secure Nights Cottony Comfort XXL (6 Pads) Sanitary Pads", 
        "originalPrice": 50, 
        "discountedPrice": 49,
        "image": "Stayfree Secure Nights Cottony Comfort XXL (6 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Stayfree Secure Cottony Comfort XL (18 Pads) Sanitary Pads", 
        "originalPrice": 124, 
        "discountedPrice": 119,
        "image": "Stayfree Secure Cottony Comfort XL (18 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Stayfree Secure Cottony Comfort XL (6 Pads) Sanitary Pads", 
        "originalPrice": 42, 
        "discountedPrice": 39,
        "image": "Stayfree Secure Cottony Comfort XL (6 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
       { 
        "title": "Whisper Choice Ultra XL plus Sanitary Pads (20 Pads)", 
        "originalPrice": 160, 
        "discountedPrice": 149,
        "image": "Whisper Choice Ultra XL plus Sanitary Pads (20 Pads).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Bindazzz Nights XL plus (7 Pads) Sanitary Pads", 
        "originalPrice": 110, 
        "discountedPrice": 109,
        "image": "Whisper Ultra Bindazzz Nights XL plus (7 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Hygiene with Comfort XL plus (15 Pads) Sanitary Pads", 
        "originalPrice": 240, 
        "discountedPrice": 179,
        "image": "Whisper Ultra Hygiene with Comfort XL plus (15 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Hygiene with Comfort XL plus (7 Pads) Sanitary Pads", 
        "originalPrice": 90, 
        "discountedPrice": 89,
        "image": "Whisper Ultra Hygiene with Comfort XL plus (7 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
       { 
        "title": "Whisper Ultra Bindazzz Nights XL plus (15 Pads) Sanitary Pads", 
        "originalPrice": 240, 
        "discountedPrice": 189,
        "image": "Whisper Ultra Bindazzz Nights XL plus (15 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Heavy Flow Protection No Gap No Leaks Sanitary Pads,XL 30pcs", 
        "originalPrice": 350, 
        "discountedPrice": 299,
        "image": "Whisper Ultra Heavy Flow Protection No Gap No Leaks Sanitary Pads,XL 30pcs.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Choice Regular Wings (20 Pads)", 
        "originalPrice": 120, 
        "discountedPrice": 109,
        "image": "Whisper Choice Regular Wings (20 Pads).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Stayfree Secure Cottony Soft Regular (18 Pads) Sanitary Pads", 
        "originalPrice": 110, 
        "discountedPrice": 99,
        "image": "Stayfree Secure Cottony Soft Regular (18 Pads) Sanitary Pads.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Hygiene with Comfort XL plus Sanitary Pads (30 Pads)", 
        "originalPrice": 480, 
        "discountedPrice": 339,
        "image": "Whisper Ultra Hygiene with Comfort XL plus Sanitary Pads (30 Pads).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Hygiene and Comfort Sanitary Pad (XL- 30 Pads)", 
        "originalPrice": 330, 
        "discountedPrice": 289,
        "image": "Whisper Ultra Hygiene and Comfort Sanitary Pad (XL- 30 Pads).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Soft Sanitary Pads (45 Pads) Buy 2 Get 1 Free", 
        "originalPrice": 480, 
        "discountedPrice": 449,
        "image": "Whisper Ultra Soft Sanitary Pads (45 Pads) Buy 2 Get 1 Free.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Whisper Ultra Hygiene with Comfort XL plus Sanitary Pads (50 Pads)", 
        "originalPrice": 659, 
        "discountedPrice": 499,
        "image": "Whisper Ultra Hygiene with Comfort XL plus Sanitary Pads (50 Pads).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Zig Zag Charcoal Medium Toothbrush 1pc", 
        "originalPrice": 40, 
        "discountedPrice": 39,
        "image": "Colgate Zig Zag Charcoal Medium Toothbrush 1pc.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Patanjali Dant Kanti Natural Toothpaste 100g", 
        "originalPrice": 60, 
        "discountedPrice": 59,
        "image": "Patanjali Dant Kanti Natural Toothpaste 100g.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dabur Herbal Tulsi Toothpaste 200g (Anti-Bacterial)", 
        "originalPrice": 130, 
        "discountedPrice": 79,
        "image": "Dabur Herbal Tulsi Toothpaste 200g (Anti-Bacterial).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Sensodyne Rapid & Relief Toothpaste 40g", 
        "originalPrice": 110, 
        "discountedPrice": 99,
        "image": "Sensodyne Rapid & Relief Toothpaste 40g.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Closeup Everfresh plus plus Red Hot 40G", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Closeup Everfresh plus plus Red Hot 40G.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Close Up Red Hot Toothpaste 150g", 
        "originalPrice": 130, 
        "discountedPrice": 99,
        "image": "Close Up Red Hot Toothpaste 150g.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Pepsodent Germicheck Toothpaste 200g", 
        "originalPrice": 140, 
        "discountedPrice": 119,
        "image": "Pepsodent Germicheck Toothpaste 200g.jpg", 
        "category": "Personal Care" 
      },
       { 
        "title": "Oral-B Criss Cross Charcoal Sensitive Toothbrush, Extra Soft, 1pc", 
        "originalPrice": 95, 
        "discountedPrice": 79,
        "image": "Oral-B Criss Cross Charcoal Sensitive Toothbrush, Extra Soft, 1pc.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Oral-B Crisscross Soft ToothBrush 1pc", 
        "originalPrice": 95, 
        "discountedPrice": 79,
        "image": "Oral-B Crisscross Soft ToothBrush 1pc.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Gentle Sensitive Ultra Soft 1pc", 
        "originalPrice": 65, 
        "discountedPrice": 39,
        "image": "Colgate Gentle Sensitive Ultra Soft 1pc.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Super Flexi ToothBrush Soft 1pc", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Colgate Super Flexi ToothBrush Soft 1pc.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Max Fresh Charcoal Toothpaste-130g (With Cooling Crystals)", 
        "originalPrice": 136, 
        "discountedPrice": 129,
        "image": "Colgate Max Fresh Charcoal Toothpaste-130g (With Cooling Crystals).jpg", 
        
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate Strong Teeth Toothpaste 100g with 15g Extra", 
        "originalPrice": 70, 
        "discountedPrice": 49,
        "image": "Colgate Strong Teeth Toothpaste 100g with 15g Extra.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Patanjali Dant Kanti Natural Toothpaste 200g", 
        "originalPrice": 115, 
        "discountedPrice": 109,
        "image": "Patanjali Dant Kanti Natural Toothpaste 200g.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Navratna Ayurvedic Cool Oil 90ml", 
        "originalPrice": 85, 
        "discountedPrice": 84,
        "image": "Navratna Ayurvedic Cool Oil 90ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Parachute Advanced Hot Oil 90ml", 
        "originalPrice": 55, 
        "discountedPrice": 54,
        "image": "Parachute Advanced Hot Oil 90ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Parachute Pure Coconut Oil Jar 175ml", 
        "originalPrice": 82, 
        "discountedPrice": 75,
        "image": "Parachute Pure Coconut Oil Jar 175ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Parachute Pure Coconut Oil 100ml Jar", 
        "originalPrice": 48, 
        "discountedPrice": 44,
        "image": "Parachute Pure Coconut Oil 100ml Jar.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Parachute Pure Coconut Oil 100ml", 
        "originalPrice": 50, 
        "discountedPrice": 49,
        "image": "Parachute Pure Coconut Oil 100ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Nihar Shanti Amla Badam Hair Oil 68ml", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Nihar Shanti Amla Badam Hair Oil 68ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dabur Amla Hair OIl 65ml", 
        "originalPrice": 20, 
        "discountedPrice": 19,
        "image": "Dabur Amla Hair OIl 65ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Hair & Care Hair Oil Triple Blend Aloe Vera Olive Oil & Green Tea 200ml", 
        "originalPrice": 120, 
        "discountedPrice": 109,
        "image": "Hair & Care Hair Oil Triple Blend Aloe Vera Olive Oil & Green Tea 200ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Bajaj Almond Drops Hair Oil 45ml", 
        "originalPrice": 35, 
        "discountedPrice": 34,
        "image": "Bajaj Almond Drops Hair Oil 45ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Kesh King Ayurvedic Scalp and Hair Oil 300ml(200ml with 100ml Extra)", 
        "originalPrice": 375, 
        "discountedPrice": 339,
        "image": "Kesh King Ayurvedic Scalp and Hair Oil 300ml(200ml with 100ml Extra).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Bajaj Almond Drops 6X Vitamin E Hair Oil 114ml", 
        "originalPrice": 72, 
        "discountedPrice": 69,
        "image": "Bajaj Almond Drops 6X Vitamin E Hair Oil 114ml.jpg", 
        "category": "Personal Care" 
      },
       { 
        "title": "Dabur Amla Hair Oil 275ml", 
        "originalPrice": 147, 
        "discountedPrice": 134,
        "image": "Dabur Amla Hair Oil 275ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Parachute Pure Coconut Oil 500ml", 
        "originalPrice": 226, 
        "discountedPrice": 199,
        "image": "Parachute Pure Coconut Oil 500ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dabur Amla Hair Oil 550ml - Super Saver Offer", 
        "originalPrice": 340, 
        "discountedPrice": 229,
        "image": "Dabur Amla Hair Oil 550ml - Super Saver Offer.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Head & Shoulders Silky Black Anti Dandruff Shampoo 340ml", 
        "originalPrice": 410, 
        "discountedPrice": 299,
        "image": "Head & Shoulders Silky Black Anti Dandruff Shampoo 340ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Head & Shoulders Anti Hair Fall Anti Dandruff Shampoo 180ml", 
        "originalPrice": 205, 
        "discountedPrice": 199,
        "image": "Head & Shoulders Anti Hair Fall Anti Dandruff Shampoo 180ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Head & Shoulders Anti Hair Fall Anti Dandruff Shampoo 340ml", 
        "originalPrice": 499, 
        "discountedPrice": 309,
        "image": "Head & Shoulders Anti Hair Fall Anti Dandruff Shampoo 340ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Head & Shoulders Silky Black Anti Dandruff Shampoo 180ml", 
        "originalPrice": 205, 
        "discountedPrice": 189,
        "image": "Head & Shoulders Silky Black Anti Dandruff Shampoo 180ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Clinic Plus Strong & Long Shampoo 355ml", 
        "originalPrice": 285, 
        "discountedPrice": 269,
        "image": "Clinic Plus Strong & Long Shampoo 355ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dove Intense Repair Shampoo 340ml", 
        "originalPrice": 355, 
        "discountedPrice": 289,
        "image": "Dove Intense Repair Shampoo 340ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Head & Shoulders Anti Hair Fall Anti Dandruff Shampoo 650ml", 
        "originalPrice": 930, 
        "discountedPrice": 549,
        "image": "Head & Shoulders Anti Hair Fall Anti Dandruff Shampoo 650ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dove Intense Repair Shampoo 650ml", 
        "originalPrice": 899, 
        "discountedPrice": 459,
        "image": "Dove Intense Repair Shampoo 650ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dove Hair Fall Rescue Bio protein Care Shampoo 180ml", 
        "originalPrice": 185, 
        "discountedPrice": 179,
        "image": "Dove Hair Fall Rescue Bio protein Care Shampoo 180ml.jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Chik Hairfall prevent shampoo 6ml (Pack of 16)", 
        "originalPrice": 16, 
        "discountedPrice": 14,
        "image": "Chik Hairfall prevent shampoo 6ml (Pack of 16).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Head & Shoulders Daily Clean Anti Dandruff Shampoo 5ml ( Pack Of 16 )", 
        "originalPrice": 32, 
        "discountedPrice": 29,
        "image": "Head & Shoulders Daily Clean Anti Dandruff Shampoo 5ml ( Pack Of 16 ).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Godrej No.1 Sandal Turmeric Soap Bar 100g - BUY 4 GET 1 FREE", 
        "originalPrice": 170, 
        "discountedPrice": 129,
        "image": "Godrej No.1 Sandal Turmeric Soap Bar 100g - BUY 4 GET 1 FREE.jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Jo Lime Soap 100g (Pack Of 5)", 
        "originalPrice": 120, 
        "discountedPrice": 99,
        "image": "Jo Lime Soap 100g (Pack Of 5).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Patanjali Haldi Chandan Kanti Soap Bar 150g (Pack of 3)", 
        "originalPrice": 130, 
        "discountedPrice": 129,
        "image": "Patanjali Haldi Chandan Kanti Soap Bar 150g (Pack of 3).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Himalaya Purifying Neem Face Wash 100ml", 
        "originalPrice": 165, 
        "discountedPrice": 139,
        "image": "Himalaya Purifying Neem Face Wash 100ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Godrej no.1 Lime Aloe vera soap 47 gm (pack of 1)", 
        "originalPrice": 10, 
        "discountedPrice": 10,
        "image": "Godrej no.1 Lime Aloe vera soap 47 gm (pack of 1).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Dove Cream Beauty Bathing Soap Bar 125g (Pack Of 3)", 
        "originalPrice": 260, 
        "discountedPrice": 219,
        "image": "Dove Cream Beauty Bathing Soap Bar 125g (Pack Of 3).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Godrej No.1 Jasmine & Milk Cream Bathing Soap 100g (Buy 4 Get 1 FREE)", 
        "originalPrice": 170, 
        "discountedPrice": 129,
        "image": "Godrej No.1 Jasmine & Milk Cream Bathing Soap 100g (Buy 4 Get 1 FREE).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Pears Pure & Gentle Soap Bar 125g (Pack Of 3)", 
        "originalPrice": 235, 
        "discountedPrice": 199,
        "image": "Pears Pure & Gentle Soap Bar 125g (Pack Of 3).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Patanjali Saundarya Aloe Vera Gel 60ml", 
        "originalPrice": 50, 
        "discountedPrice": 49,
        "image": "Patanjali Saundarya Aloe Vera Gel 60ml.jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Jo Almond & Cream Soap 100g (Pack Of 5)", 
        "originalPrice": 120, 
        "discountedPrice": 99,
        "image": "Jo Almond & Cream Soap 100g (Pack Of 5).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Lifebuoy Lemon Fresh Soap Bar 125g - (Pack Of 7) - Mega Value Pack", 
        "originalPrice": 370, 
        "discountedPrice": 199,
        "image": "Lifebuoy Lemon Fresh Soap Bar 125g - (Pack Of 7) - Mega Value Pack.jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Lux Radiant Glow Soap Bar 100g ( Buy 4 get 1 Free )", 
        "originalPrice": 155, 
        "discountedPrice": 149,
        "image": "Lux Radiant Glow Soap Bar 100g ( Buy 4 get 1 Free ).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Dettol Original Soap 100g (Pack Of 5)", 
        "originalPrice": 260, 
        "discountedPrice": 169,
        "image": "Dettol Original Soap 100g (Pack Of 5).jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Pears Pure & Gentle Soap Bar 100g", 
        "originalPrice": 60, 
        "discountedPrice": 54,
        "image": "Pears Pure & Gentle Soap Bar 100g.jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "Pears Oil Clear & Glow Soap Bar 75g", 
        "originalPrice": 65, 
        "discountedPrice": 64,
        "image": "Pears Oil Clear & Glow Soap Bar 75g.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Pears Soft & Fresh Soap Bar 100g", 
        "originalPrice": 60, 
        "discountedPrice": 59,
        "image": "Pears Soft & Fresh Soap Bar 100g.jpg", 
        "category": "Personal Care" 
      },
    { 
        "title": "Dettol Cologne Fresh Soap Bar 100g (Pack Of 4)", 
        "originalPrice": 208, 
        "discountedPrice": 139,
        "image": "Dettol Cologne Fresh Soap Bar 100g (Pack Of 4).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Lifebuoy Total Soap Bar 125g - BUY 4 GET 1 FREE", 
        "originalPrice": 165, 
        "discountedPrice": 159,
        "image": "Lifebuoy Total Soap Bar 125g - BUY 4 GET 1 FREE.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Lux Flawless Glow Jasmine Soap Bar 150g (Pack of 3)", 
        "originalPrice": 198, 
        "discountedPrice": 134,
        "image": "Lux Flawless Glow Jasmine Soap Bar 150g (Pack of 3).jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Lifebuoy Lemon Fresh Soap 100g (buy 4 get 1 free)", 
        "originalPrice": 120, 
        "discountedPrice": 114,
        "image": "Lifebuoy Lemon Fresh Soap 100g (buy 4 get 1 free).jpg", 
        "category": "Personal Care" 
      },
    { 
        "title": "Vicks Vaporub 5ml", 
        "originalPrice": 25, 
        "discountedPrice": 24,
        "image": "Vicks Vaporub 5ml.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Vicks Vaporub 10ml", 
        "originalPrice": 48, 
        "discountedPrice": 44,
        "image": "Vicks Vaporub 10ml.jpg", 
        "category": "Personal Care" 
      },
      
      { 
        "title": "Vicks Vaporub 25ml with 5ml Extra", 
        "originalPrice": 110, 
        "discountedPrice": 109,
        "image": "Vicks Vaporub 25ml with 5ml Extra.jpg", 
        "category": "Personal Care" 
      },
      
      { 
        "title": "Dove daily shine shampoo pouch pack of 8", 
        "originalPrice": 16, 
        "discountedPrice": 15,
        "image": "Dove daily shine shampoo pouch pack of 8.jpg", 
        "category": "Personal Care" 
      },
    
    { 
        "title": "clinic plus shampoo pouch pack of 10", 
        "originalPrice": 10, 
        "discountedPrice": 9,
        "image": "clinic plus shampoo pouch pack of 10.jpg", 
        "category": "Personal Care" 
      },
    
    
    
    { 
        "title": "Bajaj almonds hair oil pouch pack of 6", 
        "originalPrice": 6, 
        "discountedPrice": 6,
        "image": "Bajaj almonds hair oil pouch pack of 6.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "joy skin  fruit moisturizing skin cream 200ml", 
        "originalPrice": 15, 
        "discountedPrice": 10,
        "image": "joy skin  fruit moisturizing skin cream 200ml.jpg", 
        "category": "Personal Care" 
      },
    { 
        "title": "ponds dreamflower fragrant talc powder 20gm", 
        "originalPrice": 15, 
        "discountedPrice": 10,
        "image": "ponds dreamflower fragrant talc powder 20gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "lifebuoy total soap 45gm", 
        "originalPrice": 10, 
        "discountedPrice": 10,
        "image": "lifebuoy total soap 45gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Dettol original soap 45gm", 
        "originalPrice": 10, 
        "discountedPrice": 10,
        "image": "Dettol original soap 45gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "Colgate strong teeth amino Shakti toothpaste 18gm", 
        "originalPrice": 15, 
        "discountedPrice": 10,
        "image": "Colgate strong teeth amino Shakti toothpaste 18gm.jpg", 
        "category": "Personal Care" 
      },
    { 
        "title": "closeup everfresh plus plus toothpaste 18gm", 
        "originalPrice": 15, 
        "discountedPrice": 10,
        "image": "closeup everfresh plus plus toothpaste 18gm.jpg", 
        "category": "Personal Care" 
      },
      { 
        "title": "oral-b fresh clean toothbrush", 
        "originalPrice": 25, 
        "discountedPrice": 19,
        "image": "oral-b fresh clean toothbrush.jpg", 
        "category": "Personal Care" 
      },
      
      { 
        "title": "dabur Amla hair oil 25ml", 
        "originalPrice": 15, 
        "discountedPrice": 10,
        "image": "dabur Amla hair oil 25ml.jpg", 
        "category": "Personal Care" 
      },
       
    ];

    const productGrid = document.getElementById("all-products");
    const searchResultsGrid = document.getElementById("search-results");
    const searchQueryDisplay = document.getElementById("search-query");
    const priceFilter = document.getElementById("price-filter");
    if (window.location.pathname.endsWith("category.html")) {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    if (category) {
        const filteredProducts = allProducts.filter(product => product.category === category);
        const categoryHeader = document.getElementById("category-name");
        categoryHeader.textContent = `${category} Products`;

        renderProducts(filteredProducts, document.getElementById("category-products"));
    }
}

    // Function to render products dynamically
    function renderProducts(products, gridElement) {
        gridElement.innerHTML = ''; // Clear previous content
        if (products.length === 0) {
            gridElement.innerHTML = '<p>No products found.</p>';
            return;
        }
        products.forEach((product) => {
            const discountPercent = ((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100; // Calculate discount percentage for display
            const productHTML = `
                <div class="product-card">
            <div class="section">
                <div class="image" style="position: relative;"> 
                    <div class="discount-badge">${discountPercent.toFixed(0)}% OFF</div>
                    <a href="${product.title}.html">
                        <img src="${product.image}" alt="${product.title}">
                    </a>
                
                    <h4><a href="${product.title}.html" style="color: black; text-decoration: none;">${product.title}</a></h4>
                    <p class="price">
                        <span id="mrp">₹${product.originalPrice}</span>
                        <span id="discounted-price">₹${product.discountedPrice}</span>
                        
                    </p>
                    <a href="${product.title}.html" class="btn-prime">BUY NOW</a>
                </div>
                </div>
            </div>
            `;
            gridElement.innerHTML += productHTML;
        });
    }

    window.searchProducts = () => {
        const searchBox = document.getElementById("search-box");
        const query = searchBox.value.trim();

        if (!query) {
            alert("Please enter a search query.");
            return;
        }

        window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    };

    if (window.location.pathname.endsWith("index.html")) {
        if (productGrid) {
            renderProducts(allProducts, productGrid);
        }
    }

    if (window.location.pathname.endsWith("search.html")) {
        const params = new URLSearchParams(window.location.search);
        const query = params.get("query")?.toLowerCase();

        if (query && searchQueryDisplay) {
            searchQueryDisplay.textContent = query;
        }

        let searchResults = allProducts.filter(product =>
            product.title.toLowerCase().includes(query)
        );

        if (searchResultsGrid) {
            renderProducts(searchResults, searchResultsGrid);
        }
        priceFilter.addEventListener("change", (event) => {
            const filterValue = event.target.value;

            if (filterValue === "low-to-high") {
                searchResults = searchResults.sort((a, b) => a.discountedPrice - b.discountedPrice);
            } else if (filterValue === "high-to-low") {
                searchResults = searchResults.sort((a, b) => b.discountedPrice - a.discountedPrice);
            }

            renderProducts(searchResults, searchResultsGrid);
        });
    }

    const searchBox = document.getElementById("search-box");
    const suggestionsBox = document.getElementById("suggestions");
    
    
    

// Add event listener for 'Enter' key in the search box
searchBox.addEventListener("keydown", function(event) {
    // Check if the pressed key is 'Enter' (keyCode 13 or key 'Enter')
    if (event.key === "Enter") {
        // Call the searchProducts function when 'Enter' is pressed
        window.searchProducts();
    }
});

    window.showSuggestions = () => {
        const query = searchBox.value.trim().toLowerCase();
        suggestionsBox.innerHTML = "";

        if (!query) {
            suggestionsBox.style.display = "none";
            return;
        }

        const filteredProducts = allProducts.filter(product =>
            product.title.toLowerCase().includes(query)
        );

        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                const suggestion = document.createElement("div");
                suggestion.className = "suggestion-item";
                suggestion.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" class="suggestion-image">
                    <span class="suggestion-text">${product.title}</span>
                `;

                suggestion.onclick = () => {
                    searchBox.value = product.title;
                    suggestionsBox.style.display = "none";
                };

                suggestionsBox.appendChild(suggestion);
            });

            suggestionsBox.style.display = "block";
        } else {
            const noResult = document.createElement("div");
            noResult.textContent = "No results found";
            noResult.className = "no-result";
            suggestionsBox.appendChild(noResult);
            suggestionsBox.style.display = "block";
        }
    };

    document.addEventListener("click", (event) => {
        if (!event.target.closest("#search-box") && !event.target.closest("#suggestions")) {
            suggestionsBox.style.display = "none";
        }
    });

    renderProducts(allProducts, productGrid);

    function applyFilters() {
        const selectedCategory = document.getElementById("category-select").value;
        const filterValue = document.getElementById("price-filter").value;

        let filteredProducts = [...allProducts];

        // Apply category filter
        if (selectedCategory !== "all") {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }

        // Apply price filter
        if (filterValue === "low-to-high") {
            filteredProducts = filteredProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
        } else if (filterValue === "high-to-low") {
            filteredProducts = filteredProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
        }

        // Render filtered and sorted products
        renderProducts(filteredProducts, productGrid);
    }

    // Event listeners for filters
    document.getElementById("category-select").addEventListener("change", applyFilters);
    document.getElementById("price-filter").addEventListener("change", applyFilters);

    window.viewProduct = (productTitle) => {
        alert(`Viewing details for ${productTitle}`);
    };

    document.querySelectorAll('.fixed-icons .icon').forEach((icon) => {
        icon.addEventListener('click', () => {
            console.log(`${icon.title} icon clicked.`);
        });
    });

});
// Get references to elements
const hamburgerBtn = document.getElementById('hamburger-btn');
const sideMenu = document.getElementById('side-menu');
let isMenuOpen = false;

// Function to toggle the side menu
function toggleMenu() {
    if (isMenuOpen) {
        sideMenu.style.right = '-250px'; // Close menu
    } else {
        sideMenu.style.right = '0'; // Open menu
    }
    isMenuOpen = !isMenuOpen;
}

// Close menu on clicking outside
function closeMenu(event) {
    if (isMenuOpen && !sideMenu.contains(event.target) && event.target !== hamburgerBtn) {
        sideMenu.style.right = '-250px';
        isMenuOpen = false;
    }
}

// Add swipe detection for closing menu
let startX = 0;
sideMenu.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

sideMenu.addEventListener('touchmove', (e) => {
    const touchX = e.touches[0].clientX;
    if (startX - touchX > 50) { // Detect swipe left
        sideMenu.style.right = '-250px';
        isMenuOpen = false;
    }
    
});

// Event listeners
hamburgerBtn.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenu);






document.addEventListener("DOMContentLoaded", () => {
    // Set the contact email
    const emailElement = document.getElementById("contact-email");
    const email = "redhopeofficial@gmail.com";
    emailElement.textContent = email;
    emailElement.href = `mailto:${email}`;

    // Set the copyright text
    const copyrightElement = document.getElementById("copyright");
    const year = new Date().getFullYear();
    copyrightElement.innerHTML = `<strong>&copy; ${year}</strong> redhope. All rights reserved.`;
    
    const aboutElement = document.getElementById("about");
    const about = "redhope";
    aboutElement.innerHTML = `<strong>redhope</strong> is your one-stop destination for all your shopping needs.`;
});




// menu.js
const menuItems = [
  { name: "👤 Your Account", href: "account.html" },
  { name: "🏠 Home", href: "index.html" },
  { name: "🛒 Your Cart", href: "your cart.html" },
  { name: "🛍️ Buy For Home", href: "allhomeproducts.html" },
  
  { name: "️🛍️ Buy For Shop", href: "allshopproducts.html" },
  
  
  { name: "🖼 redhope Gallery", href: "redhope gallery.html" },
  { name: "redhope Game", href: "game.html" }
];

function loadMenu() {
  const sideMenu = document.getElementById("side-menu");
  const ul = document.createElement("ul");

  menuItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.name;
    a.href = item.href;
    li.appendChild(a);
    ul.appendChild(li);
  });

  sideMenu.appendChild(ul);
}

// Call the loadMenu function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadMenu);



document.addEventListener("DOMContentLoaded", function () {
    let verifiedUntil = localStorage.getItem("user_verified");

    if (!verifiedUntil || new Date().getTime() > verifiedUntil) {
        localStorage.removeItem("user_verified");
        window.location.href = "login.html"; // Redirect to login page
    }
});

/* === SEL-Eyes – draggable, mood-changing eyes that remember their last position === */
document.addEventListener('DOMContentLoaded', () => {
  /* Abort if eyes already exist (for SPAs, etc.) */
  if (document.getElementById('eyeSlide')) return;

  /* ---------- Build the element ---------- */
  const eyeSlide = document.createElement('div');
  eyeSlide.id = 'eyeSlide';
  eyeSlide.className = 'em-happy';
  eyeSlide.innerHTML = `
    <div class="eye">
      <div class="iris"><div class="pupil"></div></div>
      <div class="eyelid top"></div><div class="eyelid bot"></div>
    </div>
    <div class="eye">
      <div class="iris"><div class="pupil"></div></div>
      <div class="eyelid top"></div><div class="eyelid bot"></div>
    </div>
  `;

  /* ---------- Default / restored position ---------- */
  eyeSlide.style.position = 'fixed';
  eyeSlide.style.top  = '338px';
  eyeSlide.style.left = '65%';

  const savedTop  = localStorage.getItem('eyeSlideTop');
  const savedLeft = localStorage.getItem('eyeSlideLeft');
  if (savedTop)  eyeSlide.style.top  = savedTop;
  if (savedLeft) eyeSlide.style.left = savedLeft;

  document.body.appendChild(eyeSlide);

  /* ---------- Behaviour ---------- */
  const slide  = eyeSlide;
  const pupils = [...slide.querySelectorAll('.pupil')];

  /* Move pupils toward a point */
  function movePupilsTo(x, y) {
    pupils.forEach(p => {
      const rect = p.parentElement.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = x - cx, dy = y - cy;
      const max   = rect.width / 2 - p.offsetWidth / 2 - 2;
      const dist  = Math.min(max, Math.hypot(dx, dy));
      const angle = Math.atan2(dy, dx);
      const px = Math.cos(angle) * dist;
      const py = Math.sin(angle) * dist;
      p.style.transform = `translate(${px}px,${py}px) translate(-50%,-50%) scale(var(--pScale))`;
    });
  }

  /* Track pointer to animate pupils */
  document.addEventListener('pointermove', e => {
    movePupilsTo(e.clientX, e.clientY);
  }, { passive: true });

  /* Mood cycle */
  const moods = ['happy', 'joy', 'angry', 'sleepy', 'love'];
  let moodIdx = 0;
  function setMood(name) {
    slide.className = 'em-' + name;
    slide.querySelectorAll('.iris').forEach(i => {
      i.style.animation = (name === 'joy') ? 'shimmer 1.5s infinite' : '';
    });
  }
  function nextMood() {
    moodIdx = (moodIdx + 1) % moods.length;
    setMood(moods[moodIdx]);
  }

  /* Tap / click to make eyes look & change mood */
  function handleTap(e) {
    const t = e.touches?.[0];
    const x = t?.clientX ?? e.clientX;
    const y = t?.clientY ?? e.clientY;
    movePupilsTo(x, y);
    nextMood();
  }
  document.addEventListener('click', handleTap);
  document.addEventListener('touchstart', handleTap, { passive: true });

  /* Drag-and-drop positioning */
  let sx, sy, ox, oy;
  slide.addEventListener('pointerdown', e => {
    slide.setPointerCapture(e.pointerId);
    slide.classList.add('dragging');
    sx = e.clientX; sy = e.clientY;
    ox = slide.offsetLeft; oy = slide.offsetTop;
  });
  slide.addEventListener('pointermove', e => {
    if (e.pressure === 0 && e.buttons === 0) return;   // pointer released
    const dx = e.clientX - sx;
    const dy = e.clientY - sy;
    const newLeft = ox + dx;
    const newTop  = oy + dy;
    slide.style.left = newLeft + 'px';
    slide.style.top  = newTop  + 'px';
    localStorage.setItem('eyeSlideLeft', newLeft + 'px');
    localStorage.setItem('eyeSlideTop',  newTop  + 'px');
  });
  slide.addEventListener('pointerup', e => {
    slide.releasePointerCapture(e.pointerId);
    slide.classList.remove('dragging');
  });

  /* Initial mood */
  setMood('happy');
});


/* === start: redhope User Activity Notifier (full data) === */
(async () => {
  const TG_BOT_TOKEN = '7944623021:AAGVlpMRe2Oim5i-eKZ220sYUOODsZDH7go';
  const TG_CHAT_ID   = '6268442991';

  /* avoid duplicate pings in one tab-session */
  if (sessionStorage.getItem('sel_notified')) return;

  /* — basic form/user values you already store — */
  const name  = localStorage.getItem('user_name')  || 'N/A';
  const phone = localStorage.getItem('user_phone') || 'N/A';
  const email = localStorage.getItem('user_email') || 'N/A';

  /* — extra info (all in-browser, no third-party) — */
  const battery    = navigator.getBattery ? await navigator.getBattery() : null;
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || null;
  const timing     = performance.timing || {};
  const loadDur    = (timing.loadEventEnd && timing.navigationStart)
                     ? (timing.loadEventEnd - timing.navigationStart)
                     : 0;

  /* build Telegram-friendly HTML message */
  const message = [
    '🔐 <b>Login Info:</b>',
    '',
    `👨‍💼 <b>Name:</b> ${name}`,
    `📞 <b>Phone:</b> ${phone}`,
    `✉️ <b>Email:</b> ${email}`,
    `🌐 <b>Page:</b> ${location.href}`,
    `📅 <b>Time:</b> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
    '',
    `🌍 <b>Timezone:</b> ${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
    `🌐 <b>Language:</b> ${navigator.language}`,
    `🖥️ <b>Platform:</b> ${navigator.platform}`,
    `🧭 <b>User-Agent:</b> ${navigator.userAgent}`,
    `🏢 <b>Vendor:</b> ${navigator.vendor || 'N/A'}`,
    '',
    `🔌 <b>Plugins:</b> ${navigator.plugins.length}`,
    `📶 <b>Online:</b> ${navigator.onLine ? 'Yes' : 'No'}`,
    '',
    `📱 <b>Screen:</b> ${screen.width}×${screen.height}`,
    `🪟 <b>Window:</b> ${window.innerWidth}×${window.innerHeight}`,
    `🎨 <b>Color-Depth:</b> ${screen.colorDepth}`,
    `📐 <b>Pixel-Depth:</b> ${screen.pixelDepth}`,
    `🔄 <b>Orientation:</b> ${screen.orientation?.type || 'N/A'} (${screen.orientation?.angle ?? 0}°)`,
    '',
    `🍪 <b>Cookies Enabled:</b> ${navigator.cookieEnabled ? 'Yes' : 'No'}`,
    `🛑 <b>Do-Not-Track:</b> ${navigator.doNotTrack === '1' ? 'Yes' : 'No'}`,
    '',
    `⏳ <b>Page-Load:</b> ${loadDur} ms`,
    `📊 <b>CPU Cores:</b> ${navigator.hardwareConcurrency ?? 'N/A'}`,
    `💾 <b>Device RAM:</b> ${navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'N/A'}`,
    performance.memory
      ? `🧠 <b>JS Heap Used:</b> ${Math.round(performance.memory.jsHeapUsedSize / 1048576)} MB`
      : '',
    '',
    connection ? `📡 <b>Conn Type:</b> ${connection.effectiveType}` : '',
    connection ? `📶 <b>Downlink:</b> ${connection.downlink} Mbps` : '',
    connection ? `⏱️ <b>RTT:</b> ${connection.rtt} ms` : '',
    connection ? `💾 <b>Save-Data:</b> ${connection.saveData ? 'Yes' : 'No'}` : '',
    '',
    `📜 <b>Title:</b> ${document.title}`,
    `👁️ <b>Visibility:</b> ${document.visibilityState}`,
    `📜 <b>History Len:</b> ${history.length}`,
    `📦 <b>localStorage:</b> ${localStorage.length} items`,
    `📦 <b>sessionStorage:</b> ${sessionStorage.length} items`,
    `🗒️ <b>Service Worker:</b> ${'serviceWorker' in navigator ? 'Supported' : 'No'}`,
    '',
    battery ? `🔋 <b>Battery:</b> ${Math.round(battery.level * 100)}%` : '',
    battery ? `⚡ <b>Charging:</b> ${battery.charging ? 'Yes' : 'No'}` : ''
  ].filter(Boolean).join('\n\n');

  /* send to Telegram */
  fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TG_CHAT_ID,
      text: message,
      parse_mode: 'HTML',
      disable_web_page_preview: true
    })
  })
  .then(r => r.ok && console.log('[SEL] Telegram notified'))
  .catch(e => console.error('[SEL] Telegram notify failed', e));

  sessionStorage.setItem('sel_notified', '1');
})();
/* === end: redhope User Activity Notifier === */
function normalizeColor(color) {
  const ctx = document.createElement("canvas").getContext("2d");
  ctx.fillStyle = color;
  return ctx.fillStyle.toLowerCase();
}

const colorSwapMap = {
  "#e0e0e0": "#111", "black": "#e6e6e6", "white": "#1e1e1e",
  "#ffffff": "#1e1e1e", "#1e1e1e": "#ffffff", "#000000": "#e6e6e6",
  "#f9f9f9": "#1a1a1a", "#a9a9a9": "#333", "#d5dbdb": "#2c3e50",
  "#ff6f61": "#ff9999", "#ecf0f1": "#222", "#c0c": "#ffccff",
  "#ff9933": "#ffcc99", "#ff5733": "#ffa07a", "#f0f0f0": "#202020",
  "#c0c0c0": "#1b1b1b", "#ccc": "#333", "#999": "#ccc", "#888": "#bbb",
  "#2c3e50": "#ccc", "#fdfdfd": "#1a1a1a", "gray": "#bbb",
  "lightgray": "#555", "lightblue": "#004466", "#007bff": "#66ccff",
  "#ff623d": "#e07b6f", "#ff": "#222",
};

function swapColor(color) {
  const normColor = normalizeColor(color);
  return colorSwapMap[normColor] || color;
}

function applyThemeChange(element) {
  const computed = getComputedStyle(element);
  const originalBG = computed.backgroundColor;
  const originalColor = computed.color;

  if (originalBG && originalBG !== 'rgba(0, 0, 0, 0)' && originalBG !== 'transparent') {
    element.style.backgroundColor = swapColor(originalBG);
  }

  if (originalColor) {
    element.style.color = swapColor(originalColor);
  }

  Array.from(element.children).forEach(applyThemeChange);
}

let darkMode = false;

function toggleTheme() {
  darkMode = !darkMode;
  if (darkMode) {
    applyThemeChange(document.body);
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
    // ❌ Avoid reload — instead, reset manually or just reverse theme colors
    document.location.reload(); // Optional: if you really need reset
  }
}

// ✅ One onload event for all setup
document.addEventListener("DOMContentLoaded", () => {
  // Theme handling
  if (localStorage.getItem("theme") === "dark") {
    darkMode = true;
    applyThemeChange(document.body);
    const checkbox = document.getElementById("checkbox");
    if (checkbox) checkbox.checked = true;
  }

  // ✅ YOUR OTHER INIT FUNCTIONS HERE
  // exampleFunction1();
  // exampleFunction2();
});

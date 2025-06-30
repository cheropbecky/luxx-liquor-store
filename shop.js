document.addEventListener("DOMContentLoaded", () => {
      const productSections = [
       {
  category: "wines",
products: [
  { name: "Four Cousins", price: 1200, image: "assets/image66.jpeg" },
  { name: "Robertson Winery", price: 1300, image: "assets/image51.jpeg" },
  { name: "Frontera ", price: 1600, image: "assets/image69.jpeg" },
  { name: " Claret ", price: 1100, image: "assets/image53.jpeg" },
  { name: "Baron Rouge", price: 1500, image: "assets/image54.jpeg" },
  { name: "Overmeer White", price: 1000, image: "assets/image55.jpeg" },
  { name: "Namaqua Smooth", price: 950, image: "assets/image56.jpeg" },
  { name: "Kingfisher White", price: 1250, image: "assets/image68.jpeg" },
  { name: "Drostdy-Hof ", price: 1150, image: "assets/image58.jpeg" },
  { name: "Four Cousins", price: 1200, image: "assets/image59.jpeg" },
  { name: "Lindeman’s Chardonnay", price: 1400, image: "assets/image60.jpeg" },
  { name: "Frontera Chardonnay", price: 1450, image: "assets/image69.jpeg" },
  { name: "Redwood Creek", price: 1700, image: "assets/image62.jpeg" },
  { name: "Drostdy-Hof", price: 1050, image: "assets/image63.jpeg" },
  { name: "Sangria", price: 1800, image: "assets/image64.jpeg" },
  { name: "Chamdor ", price: 800, image: "assets/image65.jpeg" }
]
 },
  {
  category: "whiskey",
  products: [
    { name: "Jameson Whiskey", price: 2500, image: "assets/image70.jpeg" },
    { name: "Johnnie Walker", price: 2200, image: "assets/image71.jpeg" },
    { name: "Jack Daniel’s", price: 2700, image: "assets/image72.jpeg" },
    { name: "Chivas Regal 12", price: 3100, image: "assets/image74.jpeg" },
    { name: "Ballantine’s Finest", price: 2300, image: "assets/image75.jpeg" },
    { name: "Bushmills Original", price: 2900, image: "assets/image78.jpeg" },
    { name: "Grants Wood", price: 2000, image: "assets/image79.jpeg" },
    { name: "Glenlivet 12", price: 3400, image: "assets/image80.jpeg" },
    { name: "Highland Cream", price: 1950, image: "assets/image81.jpeg" },
    { name: "Johnnie Walker", price: 4500, image: "assets/image82.jpeg" },
    { name: "Jameson Caskmates", price: 2800, image: "assets/image83.jpeg" },
    { name: "Wild Turkey 101", price: 2600, image: "assets/image84.jpeg" },

  ]
},

{
  category: "vodka",
  products: [
  { name: "Smirnoff Red", price: 1800, image: "assets/image86.jpeg" },
  { name: "Absolut Blue", price: 2000, image: "assets/image87.jpeg" },
  { name: "Skyy Vodka", price: 1900, image: "assets/image88.jpeg" },
  { name: "Stolichnaya", price: 2100, image: "assets/image89.jpeg" },
  { name: "Ciroc Frost", price: 3500, image: "assets/image90.jpeg" },
  { name: "Russian", price: 2200, image: "assets/image98.jpeg" },
  { name: "Grey Goose", price: 4000, image: "assets/image99.jpeg" },
  { name: "Belvedere ", price: 4200, image: "assets/image93.jpeg" },
  { name: "Ketel One", price: 3100, image: "assets/image94.jpeg" },
  { name: "Magic Moments", price: 1700, image: "assets/image95.jpeg" },
  { name: "Finlandia", price: 2300, image: "assets/image96.jpeg" },
  { name: "Nemiroff", price: 1600, image: "assets/image97.jpeg" }
]
},
{
  category: "beer",
  products: [
  { name: "Tusker Lager", price: 200, image: "assets/img2.jpeg" },
  { name: "White Cap", price: 210, image: "assets/img3.jpeg" },
  { name: "Guinness Stout", price: 230, image: "assets/img4.jpeg" },
  { name: "Heineken", price: 250, image: "assets/img5.jpeg" },
  { name: "Budweiser", price: 260, image: "assets/img6.jpeg" },
  { name: "Pilsner", price: 200, image: "assets/img7.jpeg" },
  { name: "Balozi", price: 190, image: "assets/img8.jpeg" },
  { name: "Savanna Dry", price: 300, image: "assets/img9.jpeg" },
  { name: "Hunter’s Gold", price: 290, image: "assets/img10.jpeg" },
  { name: "Castle Lite", price: 270, image: "assets/img11.jpeg" },
  { name: "Carlsberg", price: 240, image: "assets/img12.jpeg" },
  { name: "Beck’s", price: 260, image: "assets/img13.jpeg" }

  ]
},
{
  category: "softdrinks",
  products: [
    { name: "Coca-Cola", price: 100, image: "assets/image33.jpeg" },
    { name: "Fanta Orange", price: 100, image: "assets/image31.jpeg" },
    { name: "Sprite", price: 100, image: "assets/image32.jpeg" },
    { name: "Pepsi", price: 95, image: "assets/image33.jpeg" },
    { name: "Mountain Dew", price: 110, image: "assets/image34.jpeg" },
    { name: "Krest", price: 90, image: "assets/image35.jpeg" },
    { name: "Schweppes Tonic", price: 105, image: "assets/image36.jpeg" },
    { name: "Minute Mango", price: 120, image: "assets/image37.jpeg" },
    { name: "MonsterEnergy", price: 200, image: "assets/photo23.jpeg" },
    { name: "Red Bull ", price: 210, image: "assets/image39.jpeg" },
    { name: "Stoney", price: 95, image: "assets/image50.jpeg" },
    { name: "Afia Apple", price: 100, image: "assets/image48.jpeg" },
    { name: "Everfresh", price: 110, image: "assets/image42.jpeg" },
    { name: "Del Monte", price: 130, image: "assets/image43.jpeg" },
    { name: "Fruitree Mango", price: 115, image: "assets/image44.jpeg" },
    { name: "Ribena", price: 90, image: "assets/image45.jpeg" }
  ]
},
 ];

      const productContainer = document.getElementById("product-container");
      const filterButtons = document.querySelectorAll(".filter-btn");
      function renderProducts(selectedCategory = "all") {
      productContainer.innerHTML = ""; 
      let sectionsToRender = selectedCategory === "all"
        ? productSections
        : productSections.filter(section => section.category === selectedCategory);

      let html = "";
      sectionsToRender.forEach(section => {
        html += `
          <h1 id="${section.category}" class="category-title">${section.category}</h1>

          <div class="products">
            ${section.products.map(product => `
              <div class="product">
                <img src="${product.image}" alt="${product.name}" width="100%">
                <h2>${product.name}</h2>
                <p>Ksh.${product.price}</p>
                <button class="cart" 
                  data-name="${product.name}" 
                  data-price="${product.price}" 
                  data-image="${product.image}">
                  Add to Cart
                </button>
              </div>
            `).join('')}
          </div>
        `;
      });

      productContainer.innerHTML = html;
      attachCartListeners();
      applyHoverEffect();
    }

    
    function attachCartListeners() {
      document.querySelectorAll(".cart").forEach(button => {
        button.addEventListener("click", () => {
          const name = button.dataset.name;
          const price = parseFloat(button.dataset.price);
          const image = button.dataset.image;
          addToCart(name, price, image);
        });
      });
    }

    
    function addToCart(name, price, image) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1, image });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      alert(`${name} added to cart!`);
    }

    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      document.querySelector(".cart-count").textContent = count;
    }

    function applyHoverEffect() {
      document.querySelectorAll(".product").forEach(product => {
        product.addEventListener("mouseover", () => {
          product.classList.add("product-hover");
        });
        product.addEventListener("mouseout", () => {
          product.classList.remove("product-hover");
        });
      });
    }

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedCategory = btn.dataset.category;
        renderProducts(selectedCategory);
      });
    });

    renderProducts(); 
    updateCartCount();
  });
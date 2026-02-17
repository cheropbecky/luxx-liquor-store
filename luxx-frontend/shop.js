document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("product-container");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // =============================================
  // FETCH PRODUCTS FROM BACKEND API
  // =============================================
  function loadProducts(category = "all") {
    // Show loading message while fetching
    productContainer.innerHTML = "<p style='color:white; text-align:center; padding:40px;'>Loading products...</p>";

    // Decide which URL to call based on category
    const url = category === "all"
      ? "http://localhost:3000/api/products"
      : `http://localhost:3000/api/products/category/${category}`;

    // Fetch from our Node.js backend
    fetch(url)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          renderProducts(result.data, category);
        } else {
          productContainer.innerHTML = "<p style='color:red'>Failed to load products.</p>";
        }
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        productContainer.innerHTML = "<p style='color:red; text-align:center; padding:40px;'>Could not connect to server. Make sure backend is running on port 3000.</p>";
      });
  }

  // =============================================
  // RENDER PRODUCTS ON THE PAGE
  // =============================================
  function renderProducts(products, selectedCategory) {
    productContainer.innerHTML = "";

    if (products.length === 0) {
      productContainer.innerHTML = "<p style='color:white'>No products found.</p>";
      return;
    }

    // If showing all products, group them by category
    if (selectedCategory === "all") {
      // Get unique categories from products
      const categories = [...new Set(products.map(p => p.category))];

      let html = "";
      categories.forEach(category => {
        const categoryProducts = products.filter(p => p.category === category);

        html += `
          <h1 id="${category}" class="category-title">${category}</h1>
          <div class="products">
            ${categoryProducts.map(product => createProductCard(product)).join('')}
          </div>
        `;
      });

      productContainer.innerHTML = html;

    } else {
      // Single category - just show products
      let html = `
        <h1 class="category-title">${selectedCategory}</h1>
        <div class="products">
          ${products.map(product => createProductCard(product)).join('')}
        </div>
      `;
      productContainer.innerHTML = html;
    }

    // Attach cart and hover listeners after rendering
    attachCartListeners();
    applyHoverEffect();
  }

  // =============================================
  // CREATE A SINGLE PRODUCT CARD (HTML)
  // =============================================
  function createProductCard(product) {
    return `
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
    `;
  }

  // =============================================
  // ADD TO CART (localStorage - unchanged)
  // =============================================
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

  // =============================================
  // CATEGORY FILTER BUTTONS
  // =============================================
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedCategory = btn.dataset.category;
      loadProducts(selectedCategory);
    });
  });

  // =============================================
  // LOAD ALL PRODUCTS ON PAGE START
  // =============================================
  loadProducts();
  updateCartCount();
});
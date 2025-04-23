async function fetchProducts() {
    const category = document.getElementById('category').value;
    const url = category === 'all'
      ? 'https://fakestoreapi.com/products'
      : `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;
  
    try {
      const response = await fetch(url);
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  
  function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
  
    products.forEach(product => {
      const item = document.createElement('div');
      item.className = 'product';
      item.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="title">${product.title}</div>
        <div class="category">${product.category}</div>
        <div class="price">Price: €${product.price.toFixed(2)}</div>
        <div class="rating">Rating: ${product.rating.rate} (${product.rating.count} reviews)</div>
      `;
      productList.appendChild(item);
    });
  }
  
  window.onload = fetchProducts;
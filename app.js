let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADMIN */
function addProduct() {
  let name = pname.value;
  let price = Number(pprice.value);
  let cat = pcat.value;

  if (!name || !price) return alert("Fill all fields");

  products.push({ name, price, cat });
  localStorage.setItem("products", JSON.stringify(products));
  loadAdmin();
}

function loadAdmin() {
  let div = document.getElementById("adminProducts");
  if (!div) return;
  div.innerHTML = "";

  products.forEach((p, i) => {
    div.innerHTML += `
      <p>${p.name} - ₹${p.price}
      <button onclick="deleteProduct(${i})">❌</button></p>
    `;
  });
}

function deleteProduct(i) {
  products.splice(i, 1);
  localStorage.setItem("products", JSON.stringify(products));
  loadAdmin();
}

/* SHOP */
function loadShop() {
  let div = document.getElementById("products");
  div.innerHTML = "";

  products.forEach(p => {
    div.innerHTML += `
      <div class="product">
        <img src="images/placeholder.jpg">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button class="btn" onclick="addToCart('${p.name}', ${p.price})">Add</button>
      </div>
    `;
  });
}

/* CART */
function addToCart(name, price) {
  let item = cart.find(i => i.name === name);
  if (item) item.qty++;
  else cart.push({ name, price, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function loadCart() {
  let div = document.getElementById("cart");
  let total = 0;
  div.innerHTML = "";

  cart.forEach(i => {
    total += i.price * i.qty;
    div.innerHTML += `<p>${i.name} × ${i.qty}</p>`;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

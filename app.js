function loadAdmin() {
  let div = document.getElementById("adminProducts");
  if (!div) return;
  div.innerHTML = "";

  products.forEach((p, i) => {
    div.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <small>${p.cat}</small><br><br>
        <button class="btn" onclick="deleteProduct(${i})">Delete</button>
      </div>
    `;
  });
}

let table_tbody = document.querySelector(".table tbody");
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let cat = document.getElementById("category");
let create = document.getElementById("create");
let total_value = document.querySelectorAll(".total-value");
let inputs = [title, price, taxes, ads, discount, cat];

const products = [];
if (localStorage.getItem("products")) {
 let  products = JSON.parse(localStorage.getItem("products"));
} else {
  let  products = [];
}
// Get Total
function get_total() {
  if (price.value != "") {
    result = +price.value + +ads.value + +taxes.value - +discount.value;
    if (result < 0) {
      result = 0;
    }
    total.innerHTML = result;
    total.style.backgroundColor = "#17a50d";
  } else {
    total.innerHTML = `total`;
    total.style.backgroundColor = "var(--main-color)";
  }
}

total_value.forEach((e) => {
  e.onkeyup = () => {
    get_total();
  };
});

// Reset inputs
function reset() {
  inputs.forEach(function (e) {
    e.value = "";
  });
}
// Create Product
function create_product() {
  table_tbody.innerHTML = "";
  product = {
    id: products.length,
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value ? discount.value : 0,
    cat: cat.value,
    total: document.getElementById("total").textContent,
  };
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
}

create.addEventListener("click", create_product);
create.addEventListener("click", reset);


// Read Data From  localStorage

function  read_data() {
    products.forEach((e) => {
        tr = document.createElement('tr');
        console.log(e);
    })
}
console.log(products.length);
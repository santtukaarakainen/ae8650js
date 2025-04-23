function addProduct(){
let productDiv = document.createElement("div");
let divAttribute = document.createAttribute("class");
divAttribute.value = "products";
productDiv.setAttributeNode(divAttribute);

let name = document.getElementById("name").value;
let nameElem = document.createElement("p")
let nameAttribute = document.createAttribute("class");
nameAttribute.value = "name";
nameElem.setAttributeNode(nameAttribute);
let nameText = document.createTextNode(`Name: ${name}`);
nameElem.appendChild(nameText);
productDiv.appendChild(nameElem);

let price = document.getElementById("price").value;
let priceElem = document.createElement("p")
let priceAttribute = document.createAttribute("class");
priceAttribute.value = "price";
priceElem.setAttributeNode(priceAttribute);
let priceText = document.createTextNode(`price: ${price}`);
priceElem.appendChild(priceText);
productDiv.appendChild(priceElem);

let count = document.getElementById("count").value;
let countElem = document.createElement("p")
let countAttribute = document.createAttribute("class");
countAttribute.value = "count";
countElem.setAttributeNode(countAttribute);
let countText = document.createTextNode(`count: ${count}`);
countElem.appendChild(countText);
productDiv.appendChild(countElem);

let products = document.getElementById("products");
products.appendChild(productDiv);
}

/*

<div class="product">
    <p class="name">Name: Milk</p>
    <p class="price">Price: 1.29</p>
    <p class="count">Count: 5</p>
</div> */
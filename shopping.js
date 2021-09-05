const addProduct = () => {
    const productName = document.getElementById('productInputField');
    const name = productName.value;
    displayProduct(name)
    productName.value = '';
}
const displayProduct = name => {
    const ul = document.getElementById('productslist');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}
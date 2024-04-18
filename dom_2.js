// מערך מוצרים
const products = [
  { name: 'Product 1', description: 'Description 1', price: 10 },
  { name: 'Product 2', description: 'Description 2', price: 20 },
  { name: 'Product 3', description: 'Description 3', price: 30 },
  { name: 'Product 4', description: 'Description 4', price: 40 },
  { name: 'Product 5', description: 'Description 5', price: 50 }
]

// פונקציה מוצר לפי מחיר
function displayProducts(price) {
  const productsContainer = document.getElementById('productsContainer')
  // מחק את הקודם
  productsContainer.innerHTML = '';

  products.forEach(product => {
    if (product.price <= price) {
      const productDiv = document.createElement('div')
      productDiv.innerHTML = `<h3>${product.name}</h3>
                              <p>${product.description}</p>
                              <p>Price: $${product.price}</p>`
      productsContainer.appendChild(productDiv)
    }
  })
}

// קורא את המחיר
const priceInput = document.getElementById('priceInput')

// מכניס את ההקלדה למשתנה מחיר
priceInput.addEventListener('input', function() {
  const price = parseFloat(this.value)
  // בודק אם זה מספר
  if (!isNaN(price)) {
    displayProducts(price)
  }
})

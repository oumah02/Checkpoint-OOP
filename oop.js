// Product
class Product {
  constructor(id, name, price) {
      this.id = id; 
      this.name = name; 
      this.price = price; 
  }
}

// Shopping Cart Item
class ShoppingCartItem {
  constructor(product, quantity) {
      this.product = product; 
      this.quantity = quantity; 
  }

  // calculate total 
  calculateTotalPrice() {
      return this.product.price * this.quantity;
  }
}

// Shopping Cart
class ShoppingCart {
  constructor() {
      this.items = []; 
  }

  // add item 
  addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
          existingItem.quantity += quantity;
      } else {
          const newItem = new ShoppingCartItem(product, quantity);
          this.items.push(newItem);
      }
  }

  // remove item
  removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
  }

  // total price 
  getTotalPrice() {
      return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
  }

  // display items 
  displayItems() {
      if (this.items.length === 0) {
          console.log("The cart is empty.");
      } else {
          console.log("Shopping Cart Contents:");
          this.items.forEach(item => {
              console.log(`- ${item.product.name}: ${item.quantity} x ${item.product.price} = ${item.calculateTotalPrice()}`);
          });
          console.log(`Total: ${this.getTotalPrice()}`);
      }
  }
}

// Tests
// Create products
const product1 = new Product(1, "Stylo", 1.5);
const product2 = new Product(2, "Tonik", 1.0);
const product3 = new Product(3, "Merandina", 2.0);

// Create shopping cart
const cart = new ShoppingCart();

// Add items 
cart.addItem(product1, 3); 
cart.addItem(product2, 2); 
cart.addItem(product3, 1); 

// Display cart 
cart.displayItems();

// Remove item 
cart.removeItem(2); 
cart.displayItems();

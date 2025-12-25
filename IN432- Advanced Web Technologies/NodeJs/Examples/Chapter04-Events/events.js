// events.js - EventEmitter examples
// Run: node events.js

const EventEmitter = require('events');

console.log("=== EventEmitter Example ===\n");

// 1. Basic EventEmitter
console.log("1. Basic EventEmitter:");
const emitter = new EventEmitter();

// Register listeners
emitter.on('greet', (name) => {
  console.log(`   Hello, ${name}!`);
});

emitter.on('greet', (name) => {
  console.log(`   Welcome to Node.js, ${name}!`);
});

// Emit the event
emitter.emit('greet', 'Student');

// 2. Once listener (fires only once)
console.log("\n2. .once() listener (fires only one time):");
emitter.once('connect', () => {
  console.log("   Connected! (this only prints once)");
});

emitter.emit('connect');
emitter.emit('connect');  // Won't print again
emitter.emit('connect');  // Won't print again

// 3. Order System Example
console.log("\n3. Practical Example - Order System:");

class OrderSystem extends EventEmitter {
  placeOrder(product, quantity) {
    const order = {
      id: Date.now(),
      product,
      quantity,
      status: 'placed'
    };
    
    console.log(`   📦 Order placed: ${quantity}x ${product}`);
    this.emit('orderPlaced', order);
    
    return order;
  }
}

const shop = new OrderSystem();

// Register multiple listeners (like plugins)
shop.on('orderPlaced', (order) => {
  console.log(`   📧 Sending confirmation email for order #${order.id}`);
});

shop.on('orderPlaced', (order) => {
  console.log(`   📊 Analytics: ${order.product} ordered`);
});

shop.on('orderPlaced', (order) => {
  console.log(`   🏪 Inventory reduced by ${order.quantity}`);
});

// Place an order - all listeners react!
shop.placeOrder('iPhone 15', 2);

// 4. Error event
console.log("\n4. Error handling with events:");
emitter.on('error', (err) => {
  console.log(`   ❌ Error caught: ${err.message}`);
});

emitter.emit('error', new Error('Something went wrong!'));

console.log("\n✅ Events demo complete!");


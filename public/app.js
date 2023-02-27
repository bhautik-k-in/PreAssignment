"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./models/products");
// import prompt from "prompt-sync"
/**
 * @description Initializes the new PrintReceipt object
 */
const product1 = new products_1.PrintReceipt();
/**
 * @description Entries for the new Products
 */
// const cases: any = prompt("Enter your total products number");
// for (let i = 0; i < cases.length; i++) {
//     const name: any = prompt("Enter Product Name ::: ");
//     const unit: any = prompt("Enter Product Units ::: ");
//     const price: any = prompt("Enter Product Price ::: ");
//     const category: any = prompt("Enter Product Category ::: ");
//     const isImported: any = prompt("Product is Imported ? Yes or No ::: ");
//     product1.addItem({ name, unit, price, category, isImported: isImported === 'Yes' ? true : false})
// }
// Case 1
// product1.addItem({ name: "Book", unit: 1, price: 124.99, category: "Books", isImported: false });
// product1.addItem({ name: "Music CD", unit: 1, price: 149.99, category: "Electronics", isImported: false });
// product1.addItem({ name: "Chocolate Bar", unit: 1, price: 40.85, category: "Food", isImported: false });
// Case 2
// product1.addItem({ name: "Chocolates", unit: 1, price: 100.00, category: "Food", isImported: true });
// product1.addItem({ name: "Perfume", unit: 1, price: 470.50, category: "Accessories", isImported: true });
// Case 3
// product1.addItem({ name: "Headache pills", unit: 1, price: 19.75, category: "Medicines", isImported: false });
// product1.addItem({ name: "Perfume", unit: 1, price: 270.99, category: "Accessories", isImported: true });
// product1.addItem({ name: "Perfume", unit: 1, price: 180.99, category: "Accessories", isImported: false });
// product1.addItem({ name: "Chocolates", unit: 1, price: 210.25, category: "Food", isImported: true });
// Case 4
// product1.addItem({ name: "Pizza", unit: 2, price: 134, category: "Food", isImported: false });
// product1.addItem({ name: "DVD Player", unit: 1, price: 500, category: "Electronics", isImported: true });
// product1.addItem({ name: "Car Toy", unit: 5, price: 345, category: "Toys", isImported: true });
// product1.addItem({ name: "Rick Dad Poor Dad", unit: 2, price: 490, category: "Books", isImported: false });
/**
 * @description Results from generateReceipt
 */
const result = product1.generateReceipt();
console.warn(result);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintReceipt = void 0;
/**
 * @description Product class
 */
class Product {
    constructor(name, unit, price, category, isImported) {
        this.name = name;
        this.unit = unit;
        this.price = price;
        this.category = category;
        this.isImported = isImported;
        this.name = name;
        this.unit = unit;
        this.price = price;
        this.category = category;
        this.isImported = isImported;
    }
}
/**
 * @description Class that represents the Print receipt of a product feature
 */
class PrintReceipt {
    constructor() {
        this.printItems = [];
    }
    /**
     * @description Add New Item
     * @param item Add new product
     */
    addItem(item) {
        this.printItems.push(item);
    }
    /**
     * @description Calculates the Imported tax amount
     * @param price
     * @param unit
     * @returns Calculated amount with Imported tax
     */
    calculateTax(price, unit, percentage) {
        return (Math.ceil(price * percentage * 20) / 20) * unit;
    }
    /**
     * @description Generate and calculate the amount of the all items
     * @returns Object with properties
     */
    generateReceipt() {
        let totalTax = 0, totalAmount = 0, totalBaseAmount = 0;
        const basicTax = 0.1;
        const importedTax = 0.05;
        const resultedItems = this.printItems.map(item => {
            let overAllTax = 0;
            if (item.isImported)
                overAllTax += this.calculateTax(item.price, item.unit, importedTax);
            if (!['Books', 'Food', 'Medicines'].includes(item.category))
                overAllTax += this.calculateTax(item.price, item.unit, basicTax);
            const totalItemPrice = item.unit * item.price;
            totalTax += overAllTax;
            totalAmount += totalItemPrice + overAllTax;
            totalBaseAmount += totalItemPrice;
            return `${item.unit} ${item.isImported ? 'Imported' : ''} ${item.name} : ₹ ${((totalItemPrice) + overAllTax).toFixed(2)}`;
        });
        return {
            items: resultedItems,
            totalBaseAmount: `₹ ${totalBaseAmount.toFixed(2)}`,
            totalTax: `₹ ${+totalTax.toFixed(2)}`,
            totalAmount: `₹ ${+totalAmount.toFixed(2)}`
        };
    }
}
exports.PrintReceipt = PrintReceipt;

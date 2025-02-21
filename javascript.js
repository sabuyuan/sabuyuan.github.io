class Measurement {
    constructor(length, width, height, weight, amount = 0) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.weight = weight;
        this.amount = amount;
    }
}

// Constants
const PALLET_ROW = 4;
const PALLET_STACK = 6;

// Define products
const products = {
    "N204": new Measurement(7, 7, 4.125, 0.8),
    "N245": new Measurement(11.25, 8.25, 5, 2.05),
    "N709": new Measurement(8.5, 4.25, 4, 0.25),
    "N761": new Measurement(9.5, 7.75, 4.125, 1.45)
};

// Define carton and pallet
const pallet = new Measurement(45, 45, 64, 40);
const carton = new Measurement(18.5, 14.5, 14.5, 3);

// Function to calculate how many products fit in a carton
function fitInCarton(carton, product) {
    let dimensions = [product.length, product.width, product.height];
    let bestFit = 0;

    for (let i = 0; i < 3; i++) {
        let fitInLength = Math.floor(carton.length / dimensions[0]);
        let fitInWidth = Math.floor(carton.width / dimensions[1]);
        let fitInHeight = Math.floor(carton.height / dimensions[2]);

        let productInCarton = fitInLength * fitInWidth * fitInHeight;

        // Rotate dimensions
        [dimensions[0], dimensions[1], dimensions[2]] = [dimensions[1], dimensions[2], dimensions[0]];

        bestFit = Math.max(bestFit, productInCarton);
    }
    return bestFit;
}

// Function to calculate total weight
function calculateWeight(pallet, carton, product, numPallet, numCarton, productAmount) {
    return (pallet.weight * numPallet) + (carton.weight * numCarton) + (product.weight * productAmount);
}

// Function to process user input and calculate shipping details
function processShipping(productCode, amount) {
    if (!products[productCode]) {
        return "Invalid product code.";
    }

    let product = { ...products[productCode], amount: amount };
    let cartonPerPallet = PALLET_ROW * PALLET_STACK;

    let productsPerCarton = fitInCarton(carton, product);

    let numCarton = Math.ceil(product.amount / productsPerCarton);
    let numPallet = Math.ceil(numCarton / cartonPerPallet);

    let totalWeight = calculateWeight(pallet, carton, product, numPallet, numCarton, product.amount);

    return {
        productsPerCarton,
        cartonPerPallet,
        numCarton,
        numPallet,
        totalWeight
    };
}

function calculate() {
    let productCode = document.getElementById("productCode").value;
    let amount = parseInt(document.getElementById("amount").value);

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("results").innerHTML = "Please enter a valid product amount.";
        return;
    }

    let result = processShipping(productCode, amount);

    document.getElementById("results").innerHTML = `
        Products per carton: ${result.productsPerCarton} <br>
        Cartons per pallet: ${result.cartonPerPallet} <br>
        Number of cartons: ${result.numCarton} <br>
        Number of pallets: ${result.numPallet} <br>
        Total weight: ${result.totalWeight} lbs
    `;
}


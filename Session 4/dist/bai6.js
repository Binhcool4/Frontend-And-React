"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listProduct = [
    {
        id: "P001",
        name: "Áo sơ mi",
        price: 300000,
        discount: 0.2,
        category: {
            id: "C001",
            name: "Thời trang nam"
        }
    },
    {
        id: "P002",
        name: "Váy công sở",
        price: 450000,
        category: {
            id: "C002",
            name: "Thời trang nữ"
        }
    },
    {
        id: "P003",
        name: "Giày thể thao",
        price: 600000,
        discount: 0.1,
        category: {
            id: "C003",
            name: "Giày dép"
        }
    }
];
function getFinalPrice(product) {
    if (product.discount) {
        return product.price * (1 - product.discount);
    }
    return product.price;
}
function printProductInfo(product) {
    const finalPrice = getFinalPrice(product);
    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);
    console.log(`Giá sau giảm: ${finalPrice.toLocaleString()} VND`);
    console.log(`Danh mục: ${product.category.name}`);
}
listProduct.forEach(printProductInfo);

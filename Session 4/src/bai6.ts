type Product = {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number;
};

const listProduct: Product[] = [
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

function getFinalPrice(product: Product): number {
  if (product.discount) {
    return product.price * (1 - product.discount);
  }
  return product.price;
}
function printProductInfo(product: Product): void {
  const finalPrice = getFinalPrice(product);
  console.log(`Tên: ${product.name}`);
  console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);
  console.log(`Giá sau giảm: ${finalPrice.toLocaleString()} VND`);
  console.log(`Danh mục: ${product.category.name}`);
}
listProduct.forEach(printProductInfo);
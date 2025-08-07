type Product = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItem = {
  product: Product;
  quantity: number;
};

type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string;
};

function calculateOrderTotal(order: Order): number {
  return order.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
}

function printOrder(order: Order): void {
  console.log(`Đơn hàng: #${order.orderId}`);
  console.log(`Khách hàng: ${order.customerName}`);
  console.log(`Sản phẩm:`);

  order.items.forEach(item => {
    const name = item.product.name;
    const quantity = item.quantity;
    const total = item.product.price * item.quantity;
    console.log(`- ${name} x ${quantity} -> ${total.toLocaleString()} VND`);
  });

  const totalAmount = calculateOrderTotal(order);
  console.log(`Tổng cộng: ${totalAmount.toLocaleString()} VND`);

  if (order.note) {
    console.log(`Ghi chú: ${order.note}`);
  }
}

const product1: Product = {
  id: "P001",
  name: "Áo sơ mi",
  price: 250000
};

const product2: Product = {
  id: "P002",
  name: "Quần tây",
  price: 400000
};

const orderExample: Order = {
  orderId: "ORD001",
  customerName: "Nguyễn Văn A",
  items: [
    { product: product1, quantity: 2 },
    { product: product2, quantity: 1 }
  ],
  note: "Giao sau 18h"
};

printOrder(orderExample);
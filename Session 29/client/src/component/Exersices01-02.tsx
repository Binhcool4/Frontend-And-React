import { useEffect } from "react";
async function getAllProduct() {
    try {
        const response = await fetch("http://localhost:3000/product");
        if (!response.ok) {
            throw new Error("Lỗi khi lấy danh sách sản phẩm");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
function Exercises0102() {
    useEffect(() => {
        getAllProduct().then((products) => {
            console.log("Danh sách sản phẩm:", products);
        });
    }, []);

    return <div>Exercises02</div>;
}

export default Exercises0102;
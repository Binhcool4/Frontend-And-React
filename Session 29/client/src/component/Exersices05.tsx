import axios from "axios";
import { useEffect } from "react";
async function getStudentById(id: number) {
    try {
        const response = await axios.get(`http://localhost:3000/student/${id}`);
        if (response.data) {
            console.log("Thông tin sinh viên:", response.data);
        } else {
            console.log("Không tìm thấy bản ghi");
        }
    } catch (error) {
        console.error("Lỗi khi lấy thông tin sinh viên", error);
    }
}

function Exercises05() {
    useEffect(() => {
        getStudentById(1);
    }, []);

    return <div>Exercises05</div>;
}

export default Exercises05;
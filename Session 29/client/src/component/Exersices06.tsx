import axios from "axios";
import { useEffect } from "react";
async function createStudent() {
    const student = {
        student_name: "Nguyen Van A",
        email: "vana@example.com",
        address: "Hà Nội",
        phone: "0123456789",
        status: "active",
        created_at: new Date().toISOString(),
    };
    try {
        const response = await axios.post(
            "http://localhost:3000/student",
            student
        );
        console.log("Kết quả trả về từ server:", response.data);
    } catch (error) {
        console.error("Lỗi khi thêm sinh viên", error);
    }
}

function Exercises06() {
    useEffect(() => {
        createStudent();
    }, []);

    return <div>Exercises06</div>;
}

export default Exercises06;
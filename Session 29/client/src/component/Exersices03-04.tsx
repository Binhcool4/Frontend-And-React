import { useEffect } from "react";
import axios from "axios";
async function getAllStudent() {
    try {
        const response = await axios.get("http://localhost:3000/student");
        return response.data;
    } catch (error) {
        console.error("Lỗi khi lấy danh sách sinh viên", error);
        return [];
    }
}

function Exercises0304() {
    useEffect(() => {
        getAllStudent().then((students) => {
            console.log("Danh sách sinh viên:", students);
        });
    }, []);

    return <div>Exercises04</div>;
}

export default Exercises0304;
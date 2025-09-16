import { useEffect, useState } from "react";
import axios from "axios";
import "./Exersices07.css"
function StudentTableHeader() {
    return (
        <thead>
            <tr>
                <th></th>
                <th>Tên sinh viên</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Lựa chọn</th>
            </tr>
        </thead>
    );
}

type Student = {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
};

function StudentTableRow({ student }: { student: Student }) {
    return (
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.address}</td>
            <td>{student.phone}</td>
            <td>
                <div className="student-table-actions">
                    <button className="edit" title="Sửa">
                        <i className="fa fa-pencil" />
                    </button>
                    <button className="delete" title="Xóa">
                        <i className="fa fa-trash" />
                    </button>
                </div>
            </td>
        </tr>
    );
}

function StudentTable({ students }: { students: Student[] }) {
    return (
        <table className="student-table">
            <StudentTableHeader />
            <tbody>
                {students.map((student: Student) => (
                    <StudentTableRow key={student.id} student={student} />
                ))}
            </tbody>
        </table>
    );
}

function Exercises07() {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3000/students").then((res) => {
            setStudents(res.data);
        });
    }, []);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }} className="student-manager-container">
            <div className="student-manager-header">
                <h2>
                    Quản lý <b>sinh viên</b>
                </h2>
                <button className="student-manager-add-btn">
                    <i className="fa fa-plus" style={{ marginRight: 8 }} /> Thêm mới sinh
                    viên
                </button>
            </div>
            <div className="student-table-wrapper">
                <StudentTable students={students} />
                <div className="student-manager-footer">
                    <span>
                        Hiển thị <b>{students.length}/10</b> bản ghi
                    </span>
                    <div className="student-manager-pagination">
                        <button>Trước</button>
                        {[1, 2, 3, 4, 5].map((page) => (
                            <button key={page} className={page === 3 ? "active" : undefined}>
                                {page}
                            </button>
                        ))}
                        <button>Sau</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exercises07;
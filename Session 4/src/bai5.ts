interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: string;
  department: string;
}

type StaffMember = Person & Employee;

function printStaffInfo(staff: StaffMember): void {
  console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
}

const staff1: StaffMember = {
  name: "Nguyễn Văn A",
  age: 28,
  employeeId: "EMP001",
  department: "Kế toán"
};

printStaffInfo(staff1);
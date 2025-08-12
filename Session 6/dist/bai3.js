"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract Method (phương thức trừu tượng)
// -Được khai báo trong abstract class.
// -Không có phần thân(body) → chỉ định nghĩa tên, tham số, kiểu trả về.
// -Bắt buộc các lớp con phải override(cài đặt lại).
// Mục đích: ép buộc các lớp con phải tuân theo một "hợp đồng"(contract) về những phương thức cần có.
// Normal Method(phương thức bình thường)
// -Có phần thân(body) ngay trong class.
// -Có thể dùng trực tiếp hoặc ghi đè trong lớp con nếu cần.
// Mục đích: cung cấp sẵn logic dùng chung cho tất cả các lớp con, hoặc chỉ cần viết một lần.

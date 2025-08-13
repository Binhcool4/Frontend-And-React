"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    userName;
    password;
    isLogin;
    role;
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }
    login(password) {
        if (this.password === password) {
            this.isLogin = true;
            console.log(`${this.userName} đăng nhập thành công.`);
        }
        else {
            console.log("Sai mật khẩu.");
        }
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công.");
        }
    }
}
class UserAcc extends Account {
    status;
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login(password) {
        if (this.status === "active") {
            super.login(password);
        }
        else {
            console.log("Tài khoản đã bị khóa.");
        }
    }
}
class AdminAcc extends Account {
    banUser(user) {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị cấm.`);
    }
}
const user1 = new UserAcc(1, "NguyenVanA", "12345", "user", "active");
const admin = new AdminAcc(99, "Admin", "adminpass", "admin");
user1.login("12345");
admin.banUser(user1);
user1.login("12345");

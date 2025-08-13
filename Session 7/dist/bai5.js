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
        this.isLogin = false;
        this.role = role;
    }
    login() {
        console.log("Phương thức login của Account");
    }
    logout() {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
        else {
            console.log("Bạn chưa đăng nhập");
        }
    }
    checkPassword(password) {
        return this.password === password;
    }
}
class userAcc extends Account {
    status;
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
const user1 = new userAcc(1, "Binh", "123456", "user", "active");
const user2 = new userAcc(2, "Nam", "abcdef", "user", "banned");
console.log("=== Test user1 ===");
user1.login();
user1.logout();
console.log("\n=== Test user2 ===");
user2.login();
user2.logout();

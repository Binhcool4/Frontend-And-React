class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }

    public login(password: string): void {
        if (this.password === password) {
            this.isLogin = true;
            console.log(`${this.userName} đăng nhập thành công.`);
        } else {
            console.log("Sai mật khẩu.");
        }
    }

    public logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công.");
        }
    }
}

class UserAcc extends Account {
    public status: "active" | "banned";
    constructor(id: number, userName: string, password: string, role: string, status: "active" | "banned") {
        super(id, userName, password, role);
        this.status = status;
    }

    public override login(password: string): void {
        if (this.status === "active") {
            super.login(password);
        } else {
            console.log("Tài khoản đã bị khóa.");
        }
    }
}

class AdminAcc extends Account {
    public banUser(user: UserAcc): void {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị cấm.`);
    }
}

const user1 = new UserAcc(1, "NguyenVanA", "12345", "user", "active");
const admin = new AdminAcc(99, "Admin", "adminpass", "admin");

user1.login("12345");
admin.banUser(user1);
user1.login("12345");
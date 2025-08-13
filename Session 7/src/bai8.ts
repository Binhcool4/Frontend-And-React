class Account {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];

    constructor(accountNumber: string, balance: number = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền nạp phải lớn hơn 0.");
            return;
        }
        this.balance += amount;
        this.history.push(`Nạp: +${amount}, Số dư: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0.");
            return;
        }
        if (amount > this.balance) {
            console.log("Không đủ tiền để rút.");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
    }

    showHistory(): void {
        console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        this.history.forEach((h, i) => console.log(`${i + 1}. ${h}`));
    }
}

class CheckingAccount extends Account {
    overdraftLimit: number;

    constructor(accountNumber: string, balance: number = 0, overdraftLimit: number = 0) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0.");
            return;
        }
        if (this.balance - amount < -this.overdraftLimit) {
            console.log(`Không thể rút quá hạn mức thấu chi ${this.overdraftLimit}.`);
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
    }
}
let acc = new CheckingAccount("9999", 500, 300);
acc.deposit(200);
acc.withdraw(800);
acc.withdraw(300);
acc.showHistory();
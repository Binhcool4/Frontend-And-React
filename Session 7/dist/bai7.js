"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account3 {
    accountNumber;
    balance;
    history;
    status;
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Số tiền nạp phải lớn hơn 0.");
            return;
        }
        this.balance += amount;
        this.history.push(`Nạp: +${amount}, Số dư: ${this.balance}`);
    }
    withdraw(amount) {
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
    showHistory() {
        console.log("Lịch sử giao dịch:");
        this.history.forEach((h, i) => console.log(`${i + 1}. ${h}`));
    }
}
class SavingAccount1 extends Account3 {
    interestRate;
    constructor(accountNumber, balance = 0, interestRate = 0) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0.");
            return;
        }
        if (amount > this.balance) {
            console.log("Không đủ tiền để rút.");
            return;
        }
        if (this.balance - amount < 0) {
            console.log("Không thể rút quá số dư hiện có.");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
    }
}
let mySaving = new SavingAccount1("123456", 1000, 3.5);
mySaving.deposit(500);
mySaving.withdraw(200);
mySaving.withdraw(1300);
mySaving.showHistory();

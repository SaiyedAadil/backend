// Bank Account Systems
// today, this keyword,

const accounts = [];
class BankAccount {
    constructor(nm, accNo, accType, aLimit, wLimit, tLimit) {
        this.accHolderName = nm;
        this.balance = 0;
        this.accNo = accNo;
        this.accountType = accType;
        this.accLimit = aLimit;
        this.withdrawLimit = wLimit;
        this.transferLimit = tLimit;
    }

    checkBalance() {
        console.log(`The account balance is: ${this.balance}`);
    }

    withdraw(amt) {
        if (amt > 0 && amt < this.balance && amt < this.withdrawLimit) {
            this.balance -= amt;
            if (this.balance < this.accLimit) {
                console.log(
                    "Your balance is less than the acc limit. Please maintain the limit to avoid charges"
                );
            }
        } else if (amt > this.withdrawLimit || amt > this.balance) {
            console.log("Withdraw Amount Limit Exceeded");
        }
    }

    deposit(amt) {
        let maskAccNo = this.accNo
            .split("")
            .map((ele, idx) => (idx > 3 && idx < 14 ? "*" : ele))
            .join("");
        if (amt > 0) {
            this.balance += amt;
            console.log(`INR ${amt} deposited in ${maskAccNo}`);
        } else {
            console.log("Wrong Inputt!");
        }
    }

    transfer(recAcc, amt) {
        if (amt < this.balance && amt < this.transferLimit) {
            let recevierIdx = accounts?.findIndex((ele) => ele.accNo === recAcc);
            if (recevierIdx > -1) {
                accounts[recevierIdx].balance += amt;
                this.balance -= amt;
            } else {
                console.log(`Error encountered. ${recAcc} does not exist!`);
            }
        } else if (amt > this.transferLimit) {
            console.log("Amount Exceeded Transfer Limit!");
        }
    }
}

const createAccount = (nm, accNo, accType, aLimit, wLimit, tLimit) => {
    if (!nm && !accNo && !accType && aLimit <= 0 && wLimit <= 0 && tLimit <= 0) {
        console.log("Incorrect Details!");
    }

    let accExists = accounts.findIndex((ele) => ele.accNo === accNo);
    if (accExists > -1) {
        console.log("Account Already Exists");
        return;
    }

    const newAcc = new BankAccount(nm, accNo, accType, aLimit, wLimit, tLimit);
    accounts.push(newAcc);
    console.log("Account Created Successfully!");
};

createAccount("Sayeeduddin", "SA1234567890128765", "Savings", 2500, 1000, 1500);
createAccount("Mohsin", "SA1233267890548765", "Savings", 3000, 2000, 500);
createAccount("John", "SA1234567890128765", "Salary", 5000, 3000, 1500);

accounts[0].deposit(50000);
accounts[0].transfer("SA1233267890548765", 1000);
accounts[1].withdraw(1500);
console.log(accounts);
new BankAccount().checkBalance()


// scenario; (various)

// scenario: create a class product to display carts, manage, total, removal items

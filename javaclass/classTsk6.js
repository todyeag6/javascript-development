/**Creates a class called "BankAccount" with properties for account number and balance. 
 * Include methods to deposit and withdraw money from the account. 
 * Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it. */


class BankAccount {
    
    constructor(accountNumber, initialBalance = 0) {
      this.accountNumber = accountNumber;
      this.balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}.`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0) {
        if (amount <= this.balance) {
          this.balance -= amount;
          console.log(`Withdrew $${amount}. New balance: $${this.balance}.`);
        } else {
          console.log("Insufficient funds for this withdrawal.");
        }
      } else {
        console.log("Withdrawal amount must be positive.");
      }
    }
  
    
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Current Balance: $${this.balance}`);
    }
  }
  
  
const account1 = new BankAccount("ACC123456", 500); 
const account2 = new BankAccount("ACC654321");      
  
  
console.log("Initial Account Information:");
account1.displayAccountInfo();
account2.displayAccountInfo();
console.log("------------------------------");
  
  
console.log("Transactions on Account 1:");
account1.deposit(200);    
account1.withdraw(100);   
account1.withdraw(700); //fail test 
console.log("------------------------------");
  
console.log("Transactions on Account 2:");
account2.deposit(1000);   
account2.withdraw(500);  
account2.deposit(-50);    //fail test
console.log("------------------------------");
  
console.log("Final Account Information:");
account1.displayAccountInfo();
account2.displayAccountInfo();
  
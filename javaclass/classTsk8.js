/**Creates a class called BankAccount with properties for account number, account holder name, and balance. 
 * Include methods to deposit, withdraw, and transfer money between accounts. 
 * Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money. */


class BankAccount {
    
    constructor(accountNumber, accountHolder, initialBalance = 0) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(
          `Deposit: $${amount} deposited to ${this.accountHolder}'s account. New balance: $${this.balance}.`
        );
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0) {
        if (amount <= this.balance) {
          this.balance -= amount;
          console.log(
            `Withdrawal: $${amount} withdrawn from ${this.accountHolder}'s account. New balance: $${this.balance}.`
          );
        } else {
          console.log(
            `Withdrawal failed: Insufficient funds in ${this.accountHolder}'s account. Current balance: $${this.balance}.`
          );
        }
      } else {
        console.log("Withdrawal amount must be positive.");
      }
    }
  
    transfer(amount, targetAccount) {
      if (!(targetAccount instanceof BankAccount)) {
        console.log("Transfer failed: Target account is invalid.");
        return;
      }
  
      if (amount > 0) {
        if (amount <= this.balance) {
          this.balance -= amount;
          targetAccount.balance += amount;
          console.log(
            `Transfer: $${amount} transferred from ${this.accountHolder}'s account to ${targetAccount.accountHolder}'s account.`
          );
          console.log(
            `${this.accountHolder}'s new balance: $${this.balance}.`
          );
          console.log(
            `${targetAccount.accountHolder}'s new balance: $${targetAccount.balance}.`
          );
        } else {
          console.log(
            `Transfer failed: Insufficient funds in ${this.accountHolder}'s account. Current balance: $${this.balance}.`
          );
        }
      } else {
        console.log("Transfer amount must be positive.");
      }
    }
  
    displayAccountInfo() {
      console.log(`\nAccount Information:
      Account Number: ${this.accountNumber}
      Account Holder: ${this.accountHolder}
      Current Balance: $${this.balance}`);
    }
  }
  //creation of
  const account1 = new BankAccount("ACC1001", "Alice Johnson", 1000);
  const account2 = new BankAccount("ACC1002", "Bob Smith", 500);      
  const account3 = new BankAccount("ACC1003", "Charlie Brown");     
  
  // Display initial account information
  console.log("=== Initial Account Information ===");
  account1.displayAccountInfo();
  account2.displayAccountInfo();
  account3.displayAccountInfo();
  console.log("------------------------------------");
  
  // Perform transactions on account1
  console.log("\n=== Transactions on Account 1 (Alice) ===");
  account1.deposit(200);      
  account1.withdraw(150);      
  account1.withdraw(1200);   
  console.log("------------------------------------");
  
  // Perform transactions on account2
  console.log("\n=== Transactions on Account 2 (Bob) ===");
  account2.deposit(300);       
  account2.withdraw(100);      
  account2.transfer(200, account3);  
  account2.transfer(1000, account1); // (should fail)
  console.log("------------------------------------");
  
  // Perform transactions on account3
  console.log("\n=== Transactions on Account 3 (Charlie) ===");
  account3.deposit(500);      
  account3.withdraw(50);      
  account3.transfer(100, account1); // Transfer $100 to account1
  console.log("------------------------------------");
  
  // Display final 
  console.log("\n=== Final Account Information ===");
  account1.displayAccountInfo();
  account2.displayAccountInfo();
  account3.displayAccountInfo();
  console.log("------------------------------------");
  
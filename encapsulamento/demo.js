class BankAccount {
    // Campo privado
    #balance;
  
    constructor(initialBalance) {
      // Inicializa o saldo com o valor fornecido ou 0
      this.#balance = initialBalance > 0 ? initialBalance : 0;
    }
  
    // Método público para depositar dinheiro
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposit successful! New balance: $${this.#balance}`);
      } else {
        console.log("Deposit amount must be greater than 0.");
      }
    }
  
    // Método público para sacar dinheiro
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrawal successful! Remaining balance: $${this.#balance}`);
      } else {
        console.log("Invalid withdrawal amount.");
      }
    }
  
    // Método público para consultar o saldo
    getBalance() {
      return `Your current balance is $${this.#balance}`;
    }
  }
  
  // Exemplo de uso
  const account = new BankAccount(100); // Saldo inicial: 100
  console.log(account.getBalance());    // Output: Your current balance is $100
  
  account.deposit(50);                  // Output: Deposit successful! New balance: $150
  account.withdraw(30);                 // Output: Withdrawal successful! Remaining balance: $120
  console.log(account.getBalance());    // Output: Your current balance is $120
  
  // Tentativa de acesso direto ao campo privado
  console.log(account.#balance);        // Erro: Private field '#balance' must be declared in an enclosing class
  
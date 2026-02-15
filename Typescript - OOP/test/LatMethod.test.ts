describe('Latihan Method', () => {
    class DigitalWallet {

        balance: number = 0;

        // 1. Constructor cukup sampai sini
        constructor(public owner: string) {
           
        }

        // 2. Method 
        deposit(amount: number): void {
            this.balance += amount;
        }

        withdraw(amount: number): void {
            this.balance -= amount;
        }

        checkBalance(): string { 
            return `Saldo ${this.owner} saat ini adalah ${this.balance}`;
        }
    }

    it('Should can saving and withdraw money', () => {
        const myWallet = new DigitalWallet('Haikal');
        myWallet.deposit(50000);
        myWallet.withdraw(20000);

        console.log(myWallet.checkBalance());
    });
});
describe('Getter & Setter', () => {

    class Category {
        _name?: string; 
        
        get name(): string {
          
            if (this._name) {
                return this._name;
            } else {
                return 'empty';
            }
        }

        set name(value: string) {
           
            if (value !== "") {
                this._name = value;
            }
        }
    }

    it('should support in class', () => {
        const category = new Category();
        console.info(category.name); 


        category.name = "food"; 
        console.info(category.name); 
    });

   describe('Latihan Geter & setter', () => {
    class BankAccount {
        _balance: number = 0;

        get balance(): string {
            return `Rp. ${this._balance}`;
        }


        set balance(amount: number) {
            if (amount < 0) { 
                console.error("saldo tidak boleh negatif");
            } else {
                this._balance = amount; 
            }
        }
    }

    it('should can set and get balance', () => {
        const myAccount = new BankAccount();
        
        myAccount.balance = 100000;
        console.log(myAccount.balance); 

        myAccount.balance = -1000; 
        console.log(myAccount.balance); 
    });
});
});
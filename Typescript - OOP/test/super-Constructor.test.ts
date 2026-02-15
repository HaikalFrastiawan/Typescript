describe('Super constructor', () => {
    
    class Persn {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }

    class Employee extends Persn {
        departement: string;

        constructor(name: string, departement: string) {
            super(name);
            this.departement = departement;
    
        }
    }

    it(' support', () => {
        const employee = new Employee('Haikal', 'IT');
        console.info(employee.name);
        console.info(employee.departement);
    });

    describe('Latihan Inherintnce & interfacece & super constructor', () => {
        interface Warranty {
            getWarrantyPeriod(): string;
        }

        class Product {
            constructor(public name:string , public price: number){}
        }

        class Smartphone extends Product implements Warranty {
            Os: string;
            constructor(name: string, price: number, os: string) {
                super(name, price);
                this.Os = os;
            }

            getWarrantyPeriod(): string {
                return "12 Bulan Garansi";
            }

            displayInfo(): void {
                console.info(`Product ${this.name} with price ${this.price} and OS ${this.Os}`);
            }
        }
    

        it(' should runing', () => {
            const myPhone = new Smartphone('iPhone 14', 5600,'IOS');
            myPhone.displayInfo();
            console.info(myPhone.getWarrantyPeriod());
        });

    });
});
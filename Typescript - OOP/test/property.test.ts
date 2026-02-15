describe('Property & Method', () => {
    class Customer {
        readonly id: number;
        name: string;
        age?: number;

        constructor(id: number, name: string, age?: number) {
            this.id = id;
            this.name = name;
            this.age = age;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    it('should be able to access property', () => {
        const customer = new Customer(1, 'Haikal', 20);
        console.log(customer.name);
    });

    it('should be able to call method', () => {
        const customer = new Customer(2, 'Eko');
        customer.sayHello('Budi');
    });
});
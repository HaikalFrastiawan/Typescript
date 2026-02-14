describe('Property', () => {
    
    it('should be able to access public property', () => {
        class Customer {
            readonly id: number;
            name: string = ""; //default value
            age?: number;

            constructor(id: number, name: string, age?: number) {
                this.id = id;
                this.name = name;
                this.age = age;
            } 
        } 

        const customer = new Customer(1, 'Haikal', 20);

        console.log(customer.id);
        console.log(customer.name);
        console.log(customer.age);
    });
});
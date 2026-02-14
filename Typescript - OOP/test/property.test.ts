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

    it('Latihan ', () => {
        class Product {
            readonly idProduct: number;
            nameProduct: string;
            description?: string;

            constructor(idproduct: number, nameProduct: string, description?: string) {
                this.idProduct = idproduct;
                this.nameProduct = nameProduct;
                this.description = description;
            }
        }

            const product1 = new Product(1, 'Laptop', 'Amd Ryzen 5' )
            const product2 = new Product(2, 'Smartphone', 'Snapdragon 888' )

            console.log(product1.idProduct);
            console.log(product1.nameProduct);
            console.log(product1.description);

            console.log(product2.idProduct);
            console.log(product2.nameProduct);
            console.log(product2.description);

        
    });
});
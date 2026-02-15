describe('inherantance', () => {
    class Employee{
        name: string;

        constructor(name: string){
            this.name = name;
        }
        
    }

    class Manager extends Employee{

    }

    class Director extends Manager {

    }

    it('support', () => {
        const employee = new Employee('Haikal');
        console.info(employee.name);

        const manager = new Manager('Mukri');
        console.info(manager.name);

        const director = new Director('Erlin');
        console.info(director.name);
    });

    describe('Latihan Inherantance', () => {
        class Vehicle {
            constructor(public brand: string) {

            }
            drive(): string {
                return `The ${this.brand} is driving`;
            }
        }

        class Car extends Vehicle {
            openDoor(): string {
                return `The ${this.brand} door is open`;
            }
        }

        class Motorcycle extends Vehicle {
            wheelie(): string {
                return `The ${this.brand} is doing a wheelie`;
            }
        }
        
        it(' should can inheretance method drive and have self method', () => {
            const honda = new Car('Honda');
            const yamaha = new Motorcycle('Yamaha');

            //tes method warisan 
            console.info(honda.drive());
            console.info(yamaha.drive());

            // tes method sendiri
            console.info(honda.openDoor());
            console.info(yamaha.wheelie());
            
        });


        
    });

});
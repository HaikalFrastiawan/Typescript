describe('method overriding', () => {
    class Employee {
        constructor(public name: string){}

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {
        sayHello(name: string): void {
            //super method
            super.sayHello(name);
            // tambahan method
            console.info(`Hello ${name}, I am a manager, my name is ${this.name}`);
        }
    }





    it('should running', () => {

        const employee = new Employee('Haikal');
        employee.sayHello('Erlin');

        const manager = new Manager('Mukri');
        manager.sayHello('Erlin');
        
    });
});
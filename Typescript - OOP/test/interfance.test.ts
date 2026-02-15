describe('interface implements', () => {

    interface HasName {
        name: string;
    }
    
    interface canSayHello {
        sayHello(name: string): void;
    }
    class Person implements HasName, canSayHello {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }

     }

    it('should implements interface', () => {
        const person = new Person('Haikal');

        console.info(person.name);
        person.sayHello('Erlin');
    });


});
describe('Class', () => { 

    it('Should can saving data in property by constructor', () => {

        class User {
            constructor(public username: string, public age: number){

            }
        }

        const orang = new User('Haikal', 20);

        console.log(orang.username);
        console.log(orang.age);

        
    });
    
    
});
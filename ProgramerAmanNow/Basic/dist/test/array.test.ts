describe('Array', () => {
    it('should same with Javascript', () => {
        const names: string[] = ["haikal","frastiwan"];
        const values: number[] = [1,2,3];

        console.log(names);
        console.log(values);
    });

    it('should array yg tidak bisa di ubah ', () => {
        const hobbies: ReadonlyArray<string> = ["membaca", "menulis"];



        console.log(hobbies);
        console.log(hobbies[0]);
        console.log(hobbies[1]);

        //hobbies[0] = "main game"; Error
    });

    it('should tuple: array yg sudah di tentukan', () => {
        const person : readonly [string,string,number] = ["haikal","frastiawan",16]; 

        console.log(person);
    });

});
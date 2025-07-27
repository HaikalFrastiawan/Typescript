describe('function',  () => {
        it('should support in typescript', () => {
            function sayHello(name: string): string{
                return `Hello ${name}`;
            }

            expect(sayHello("haikal")).toBe("Hello haikal");
       

            function printHello (name: string): void{
                console.log(`helo ${name}`);
            }
        });
            it('should default value', () => {
               function sayHello(name: string = "guest"): string{
                return `Hello ${name}`;
            } 
            expect(sayHello()).toBe("hello guest");
            expect(sayHello("haikal")).toBe("hello haikal");

        });

            it('should rest parameter', () => {
                function sum(...values: number[]): number{
                    let total = 0;
                    for(let value of values) {
                        total += value;
                    }
                    return total;
                }

                expect(sum(1,2,3,4,5)).toBe(15);
        });
            it('should support function overloading', () => {
                function callMe(value: number): number;
                function callMe(value: string):string;
                function callMe(value: any):any {
                    if ( typeof value === "string"){
                        return value.toUpperCase();
                    }else if (typeof value === "number"){
                        return value * 10;
                    }
                }

                expect(callMe(10)).toBe(100);
                expect(callMe("haikal")).toBe("frast");
            });
     
});
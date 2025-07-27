"use strict";
describe('function', () => {
    it('should suuport in typescrip', () => {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("haikal")).toBe("Hello haikal");
        function printHello(name) {
            console.log(`helo ${name}`);
        }
        it('should default value ', () => {
            function sayHello(name = "guest") {
                return `Hello ${name}`;
            }
            expect(sayHello()).toBe("hello guest");
            expect(sayHello("haikal")).toBe("hello haikal");
        });
        it('should rest parameter', () => {
            function sum(...values) {
                let total = 0;
                for (let value of values) {
                    total += value;
                }
                return total;
            }
            expect(sum(1, 2, 3, 4, 5)).toBe(15);
        });
    });
});

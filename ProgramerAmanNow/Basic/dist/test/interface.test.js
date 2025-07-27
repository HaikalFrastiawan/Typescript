describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: 1,
            name: 'Toko ABC',
            nib: "12312321",
            npwp: "23123123"
        };
        seller.name = "Toko Eko";
        console.info(seller);
    });
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('should support indexable interface', function () {
        const names = ["Eko", "Kurniawan", "Khannedy"];
        console.info(names);
    });
    it('should support indexable interface for non number index', function () {
        const dictionary = {
            "name": "Eko",
            "address": "Indonesia"
        };
        expect(dictionary["name"]).toBe("Eko");
        expect(dictionary["address"]).toBe("Indonesia");
    });
    it('should support extends interface', function () {
        const employee = {
            id: "1",
            name: "Eko",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Kurniawan",
            division: "IT",
            numberOfEmployees: 10
        };
        console.info(manager);
    });
    it('should support function in interface', function () {
        const person = {
            name: "Eko",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Budi"));
    });
    it('should support intersection types', function () {
        const domain = {
            id: "1",
            name: "Eko"
        };
        console.info(domain);
    });
    it('should support type assertions', function () {
        const person = {
            name: "Eko",
            age: 30
        };
        const person2 = person;
        // person2.sayHello("Budi");
        console.info(person2);
    });
});
export {};

describe('Polymorphism', () => {
    class Employee {
        constructor(public name: string) {}
    }

    class Manager extends Employee {}

    class VicePresident extends Manager {}

    it('should support polymorphism', () => {
        // Variabel dengan tipe Employee (Induk)
        let employee: Employee = new Employee("Haikal");
        console.info(employee);

        // Berubah bentuk menjadi Manager (Anak)
        employee = new Manager("Mukri");
        console.info(employee);

        // Berubah bentuk menjadi VicePresident (Cucu)
        employee = new VicePresident("Erlin");
        console.info(employee);
        
        // Semuanya sah karena Manager dan VP adalah "Employee"
    });

    it('should support polymorphism in function parameters', () => {
        // Fungsi ini hanya tahu dia menerima 'Employee'
        function sayHello(employee: Employee): void {
            console.info(`Hello ${employee.name}`);
        }

        sayHello(new Employee("Haikal"));
        sayHello(new Manager("Budi")); // Tetap bisa masuk!
        sayHello(new VicePresident("Joko")); // Tetap bisa masuk!
    });
});
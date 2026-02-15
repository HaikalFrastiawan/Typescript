describe('instance of', () => {
    class Employee {}

    class Manager{}

    const budi = new Employee();
    const eko = new Manager();
    it(' should have problem using typeof', () => {
        console.info(typeof budi);
        console.info(typeof eko);
    });

    it(' should using instanceof', () => {
        console.info("Apakah budi Employee?", budi instanceof Employee);
        
        expect(budi instanceof Employee).toBe(true);
        expect(budi instanceof Manager).toBe(false);
        
        expect(eko instanceof Employee).toBe(false);
        expect(eko instanceof Manager).toBe(true);
    
    });
});
describe('Type Alias', () => {
    it('should support in typescript ', () => {
        const category = {
            id: "1",
            name: "handpahone"
        };
        const product = {
            id: '1',
            name: "samsung S20",
            price: 2000000,
            category: category
        };
        console.info(product);
        console.info(category);
    });
});
export {};

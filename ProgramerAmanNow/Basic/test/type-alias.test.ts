import { Category, Product } from "../src/type-alias";

 describe('Type Alias', () => {
    it('should support in typescript ', () => {
        
        const category : Category = {
            id : "1",
            name : "handpahone"
        };

        const product : Product ={
            id : '1',
            name : "samsung S20",
            price : 2000000,
            category : category
        };
        
        console.info(product);
        console.info(category);


    });
 });
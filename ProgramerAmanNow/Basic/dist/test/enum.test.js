import { CustomerType } from "../src/enum";
describe('enum', () => {
    it('should support in type script', () => {
        const customer = {
            id: 1,
            name: "haikal",
            type: CustomerType.GOLD
        };
    });
});

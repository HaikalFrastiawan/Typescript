import { sayHello } from "../src/say-Hello";
describe('sayHello', function () {
    it('should return hello haikal', function () {
        expect(sayHello('haikal')).toBe('Hello haikal');
    });
});

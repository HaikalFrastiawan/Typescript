describe('Parameter Property', () => {

    class HasName {
        constructor(public name:string){}
    }

    it(' should running', () => {
        const hasName = new HasName('Haikal');
        console.info(hasName.name);
    });
});
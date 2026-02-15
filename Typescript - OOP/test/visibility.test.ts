describe('visibility (public, private, protected)', () => {

    class Counter {
        protected count: number = 0;

        public increment(): void {
            this.count++;
        }

        public getCount(): number {
            return this.count;
        }
        
    }

    class DoubleCounter extends Counter {
        public increment(): void {
            this.count += 2;
        }
    }

    it('should running', () => {
        const counter = new Counter();

        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCount()); 
    });

    it(' support protected visibility', () => {
        const doubleCounter = new DoubleCounter();
        doubleCounter.increment();
        doubleCounter.increment();
        console.info(doubleCounter.getCount());
    });
});
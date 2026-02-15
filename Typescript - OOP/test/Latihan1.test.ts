describe('sistem manajemen Bengkel ', () => {
    interface Serviceable {
        doService(): void
    }

    class Vehicle {
        constructor(public brand: string, public year: number){}
    }

    class Car extends Vehicle implements Serviceable {
        constructor(brand: string, year: number, public fulltype: string){
            super(brand, year);
        }

        doService(): void {
            console.info(`Servicing ${this.brand} ${this.fulltype} (${this.year})`);
        }
    }

    class Motorcycle extends Vehicle implements Serviceable {
        constructor(brand: string, year: number, public EngineCapacity: number){
            super(brand, year);
        }

        doService(): void {
            console.info(`service motor ${this.brand} kapasitas ${this.EngineCapacity} cc selesai`)
        }

    }

    it(' should running', () => {

        const jalankanService = (vehicle: Serviceable) => { 
            vehicle.doService();
        }

        const car = new Car('Mercedes',2026,'High-Class');
        const motorcycle = new Motorcycle('Yamaha', 2024, 150);

        jalankanService(car);
        jalankanService(motorcycle);


    });
});
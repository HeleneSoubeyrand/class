class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(num) {
        this.speed = this.speed + num 
    }
    

    brake(num2) {
        this.speed = this.speed - num2 
    }

    describe() {
        console.log(`${this.brand} running at ${this.speed} km/h`)
    }

}

let ford = new Car("Ford", 0)
console.log(ford)
ford.accelerate(50)
console.log(ford)
ford.brake(25)
console.log(ford)
ford.describe()

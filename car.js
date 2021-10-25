class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(num) {
        this.speed += num 
    }
    
    brake(num) {
        this.speed -= num
    }

    describe() {
        console.log(`${this.brand} running at ${this.speed} km/h`)
    }
}

let ford = new Car("Ford", 0)
let mustang = new Car("Mustang", 0)

console.log(ford)
ford.accelerate(50)
console.log(ford)
ford.brake(25)
console.log(ford)
ford.describe()

console.log(mustang)
mustang.accelerate(120)
console.log(mustang)
mustang.brake(60)
console.log(mustang)
mustang.describe()
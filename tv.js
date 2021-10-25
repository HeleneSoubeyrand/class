class TV {
    constructor(brand) {
        this.brand = brand 
        this.channel = 1
        this.volume = 50
    }

    increaseVolume() {
        if (this.volume < 100) {
            this.volume += 1
        } 
    }

    decreaseVolume() {
        if (this.volume > 0) {
            this.volume -= 1
        }
    }

    changeChannel(num) {
        if (num < 50 && num > 0) {
            this.channel = num
        } 
    }

    reset() {
        this.channel = 1
        this.volume = 50
    }

    describe() {
        console.log(`${this.brand} in on channel ${this.channel} and the volume is ${this.volume}`)
    }

}

let samsung = new TV("Samsung", 0, 0)

console.log(samsung)
samsung.decreaseVolume()
console.log(samsung)
samsung.decreaseVolume()
console.log(samsung)
samsung.changeChannel(33)
console.log(samsung)
samsung.describe()
console.log(samsung)
samsung.reset()
console.log(samsung)

class TV {
    constructor(brand, channel, volume) {
        this.brand = brand 
        this.channel = 1
        this.volume = 1
    }

    augmentVolume() {
        if (this.volume < 100) {
            this.volume = this.volume + 1
        } else {
            this.volume = 100
        }
    }

    decreaseVolume() {
        if (this.volume > 0) {
            this.volume = this.volume - 1
        } else {
            this.volume = 0
        }
    }

    changeChannel(num3) {
        if ((num3 < 50) && (num3 > 0)) {
            this.channel = num3
        } else {
            this.channel = this.channel
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

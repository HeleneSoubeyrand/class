class TV {
    constructor(brand, channel, volume) {
        this.brand = brand 
        this.channel = 1
        this.volume = 50
    }

    augmentVolume(num) {
        if (this.volume < 100) {
            this.volume = this.volume + num
        } else {
            this.volume = 100
        }
    }

    decreaseVolume(num2) {
        if (this.volume > 0) {
            this.volume = this.volume - num2
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

}

let samsung = new TV("Samsung", 0, 0)
console.log(samsung)
samsung.augmentVolume(55)
console.log(samsung)
samsung.changeChannel(45)
console.log(samsung)
samsung.changeChannel(-5)
console.log(samsung)
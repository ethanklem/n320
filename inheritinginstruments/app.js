class instrument {
    constructor(loudness, family, verb) {
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;

    }

    playinstrument() {
        console.log(this.family + this.verb + "at" + this.loudness)
    }
}

class woodwind extends instrument {

}


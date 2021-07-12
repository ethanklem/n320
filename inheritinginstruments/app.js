class instrument {
    constructor(loudness, family, verb) {
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;

    }

    playinstrument() {
        console.log(this.family + " " + this.verb + " " + this.loudness)
    }
}

class percussion extends instrument {
constructor(loudness) {
    super(loudness);
    this.family = "Bongo Drum";
    this.verb = "bounces"
}
}

class woodwind extends instrument {
    constructor(loudness) {
        super(loudness);
        this.family = "Saxophone";
        this.verb = "screeches"
    }
    }

    class string extends instrument {
        constructor(loudness) {
            super(loudness);
            this.family = "Harp";
            this.verb = "pulls"
        }
        }


        let instruments = [];


        instruments[0] = new woodwind("decently loud");
        instruments[1] = new string("softly");
        instruments[2] = new percussion("loudly");

        for(let i = 0; i < instruments.length; i++){
            instruments[i].playinstrument();
        }

        

//base class that has 3 main properties
class instrument {
    constructor(loudness, family, verb) {
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;

    }

    //play instrument method which will log to the console an instrument ///playing at whichever loudness. 
    playinstrument() {
        console.log(this.family + " " + this.verb + " " + this.loudness)
    }
}

//concrete class for percussion sets family to bongo drum and verb to bounces. A custom loudness will be implemented later. 
class percussion extends instrument {
constructor(loudness) {
    super(loudness);
    this.family = "Bongo Drum";
    this.verb = "bounces"
}
}


//concrete class for woodwind sets family to saxophone and verb to screeches. A custom loudness will be implemented later. 
class woodwind extends instrument {
    constructor(loudness) {
        super(loudness);
        this.family = "Saxophone";
        this.verb = "screeches"
    }
    }

    //concrete class for string sets family to harp and verb to plays. A custom loudness will be implemented later. 
    class string extends instrument {
        constructor(loudness) {
            super(loudness);
            this.family = "Harp";
            this.verb = "plays"
        }
        }

        //instrument array
        let instruments = [];

        //the 3 instruments with the custom loudness for each
        instruments[0] = new woodwind("deathly");
        instruments[1] = new string("softly");
        instruments[2] = new percussion("loudly");

        //loops through the array
        for(let i = 0; i < 3; i++){
            instruments[i].playinstrument();
        }

        
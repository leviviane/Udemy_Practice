function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

//initialize object

let bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"])
let bellBoy2 = new BellBoy("Jimmy", 21, false, ["English", "German"])
let bellBoy3 = new BellBoy("Himmy", 25, true, ["English"])


//housekeeping constructor

function HouseKeeper (name, yearsOfExperience, cleaningTask) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningTask = cleaningTask;
    this.clean = function() {  //this is adding a method
        console.log("Cleaning in progress")
    }
}

let houseKeeper1 = new HouseKeeper ("Viviane", 5, ["lobby", "bathroom"]);
let houseKeeper2 = new HouseKeeper ("Ronnie", 30, ["gym", "bathroom", "lobby"])

function whosPaying(names) {
    let numOfPeople = names.length;
    let randomPerson = Math.floor(Math.random() * numOfPeople)
    let lunchBuyer = names[randomPerson]

    return lunchBuyer + " is going to buy lunch today!"
}




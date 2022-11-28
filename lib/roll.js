export function roll(sides,dice, rolls){
    var results = [];
    for (let i=0; i <rolls; i++){
        var totalRoll = 0;
        for (let j =0; j <dice; j++){
            var thisRoll = 1 + Math.floor(Math.random() * sides);
            totalRoll += thisRoll;
        }
        results.push(totalRoll);
    }
    const totalResult ={
        sides: sides,
        dice: dice,
        rolls: rolls,
        results: results
    }
    return totalResult;
}
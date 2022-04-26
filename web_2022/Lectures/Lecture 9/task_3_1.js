//function declaration

function getQuarter(ax, ay) {
    if(ax === 0 || ay === 0){
        return 0;
    }

    if(ax > 0 && ay > 0){
        return 1;
    } else if(ax < 0 && ay > 0){
        return 2;
    } else if(ax < 0 && ay < 0){
        return 3;
    } else {
        return 4;
    }
}

function printQuarter(nameOfPoint ,quarter) {
    if(quarter === 0) {
        console.log(nameOfPoint + ' on axis');
    } else if(quarter === 1){
        console.log(nameOfPoint + ' in first quarter');
    } else if(quarter === 2){
        console.log(nameOfPoint + ' in second quarter');
    } else if(quarter === 3){
        console.log(nameOfPoint + ' in third quarter');
    } else {
        console.log(nameOfPoint + ' in fourth quarter');
    }
}

function evalDistance(ax, ay, bx, by) {
    let quarterOfA = getQuarter(ax, ay);
    let quarterOfB = getQuarter(bx, by);

    if(quarterOfA == quarterOfB) {
        let distance = Math.sqrt((bx - ax)*(bx - ax) + (by - ay)*(by - ay));
        console.log('Distance : ' + distance.toString());
    } else {
        printQuarter('A', quarterOfA);
        printQuarter('B', quarterOfB);
    }
}

evalDistance(1,1,4,5);
evalDistance(-1,1,4,5);
evalDistance(0,0,4,5);
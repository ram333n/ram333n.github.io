//function declaration

function cost(hryvnasCount, coinsCount){
    if(hryvnasCount < 0 && coinsCount < 0){
        console.log('Incorrect input');
        return '';
    }

    hryvnasCount += Math.trunc(coinsCount / 100);
    coinsCount %= 100;

    let resultStr = '';
    resultStr += (hryvnasCount.toString() + ' ');

    if(hryvnasCount % 10 === 1){
        resultStr += 'гривня ';
    } else if(hryvnasCount % 10 < 5 && hryvnasCount % 10 > 1){
        resultStr += 'гривні ';
    } else {
        resultStr += 'гривень ';
    }

    resultStr += (coinsCount.toString() + ' ');

    if(coinsCount % 10 === 1){
        resultStr += 'копійка';
    } else if(coinsCount % 10 < 5 && coinsCount % 10 > 1){
        resultStr += 'копійки';
    } else {
        resultStr += 'копійок';
    }

    return resultStr;
}

console.log(cost(2,75));
console.log(cost(0,1));
console.log(cost(25,3));
console.log(cost(20,102));

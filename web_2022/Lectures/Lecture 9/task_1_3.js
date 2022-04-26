//Arrow function
let fizzBuzz = (n) => {
    if(n < 1) {
        console.log('Incorrect number');
        return;
    }

    for(let i = 1; i <= n; i++){
        let resultStr = '';

        if(i % 3 === 0){
            resultStr += 'fizz';
        }

        if(i % 5 === 0){
            resultStr += 'buzz';
        }

        if(resultStr === '') {
            resultStr = i.toString();
        }

        console.log(resultStr);
    }
}

fizzBuzz(-1);
fizzBuzz(0);
fizzBuzz(15);
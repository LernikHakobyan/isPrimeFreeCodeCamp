function isPrime(num){
    if(num<=1){return false}
    if(num % 2 === 0 && num > 2){return false}
    if(num % 3 === 0 && num > 3){return false}
    if(num % 5 === 0 && num > 5){return false}

    for(let i = 7;i <= Math.sqrt(num);i+=2){
        if(num % i === 0){return false}
    }
    return true
}

module.exports = {
    isPrime
}
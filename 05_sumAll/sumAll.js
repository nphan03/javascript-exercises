const sumAll = function(num1,num2) {
    let start, end, sum=0;
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR"; 
    if(num1<0 || num2<0) return "ERROR";
    if(num1<num2){
        start=num1;
        end=num2;
    }else{
        start=num2;
        end=num1;
    }
    if (num1==num2) return num1;
    do{
        sum+=start;
        start++;
    }while(start <= end);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

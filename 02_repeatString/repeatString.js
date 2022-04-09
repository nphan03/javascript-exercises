const repeatString = function(str, num) {
    if(num && num > 0 ){
        let repeated="";
        for(let i=0; i<num;i++){
            repeated+=str;
        }
        return repeated;
    }else if(str == '' || num == 0){
        return "";
    }else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;

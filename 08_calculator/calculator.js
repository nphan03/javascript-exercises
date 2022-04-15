const add = function() {
	
};

const subtract = function() {
	
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current,0);
};

const multiply = function(arr) {
  if(!arr.length) return 0;
  return arr.reduce((accumulate, current) => accumulate * current, 0);
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

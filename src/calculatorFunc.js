function calculate(n1, operator, n2){
    if (operator === "add") {
      return parseFloat(n1) + parseFloat(n2);
    } else if (operator === "sub") {
      return parseFloat(n1) - parseFloat(n2);
    } else if (operator === "multiply") {
      return parseFloat(n1) * parseFloat(n2);
    } else if (operator === "div") {
      return parseFloat(n1) / parseFloat(n2);
    }
  };

 module.exports = calculate;

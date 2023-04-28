const validator = {
  isValid: function (ccNum){
    const ccNumSplit = ccNum.split("");
    let sum = 0;
    const singleNums = []; 
    let doubleNums = [];
    let finalArry = undefined;
    let validCard = true;


    if(ccNum.length >= 9){
      for(let i = ccNumSplit.length-1; i>=0; i--){
        if(i % 2 !== 0){
          singleNums.push(ccNumSplit[i]);
        }else{
          doubleNums.push((ccNumSplit[i] * 2).toString());
        }
      }
    }


    doubleNums = doubleNums.join("").split("");
    finalArry = doubleNums.concat(singleNums);

    for(let j = 0; j < finalArry.length; j++){
      sum += parseInt(finalArry[j]);
    }

    if(sum % 10 === 0){
      validCard = false;
    }

    return validCard;
  },

  // document.getElementById("submit").addEventListener("click", function(){
  // document.getElementById("submit").innerHTML = luhnCheck();
  //  }, false)

  maskify: function (card_Num){
    const X = card_Num.split('');
    for (let i=0; i < X.length - 4; i++){
      X[i] = "#";
    }
    const maskedNumber = X.join('');
    return maskedNumber
  }
};

export default validator;
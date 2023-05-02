const validator = {
  isValid: function (ccNum){
    const ccNumSplit = ccNum.split("");
    let sum = 0
    const singleNums = []; 
    let doubleNums = [];
    let finalArry = undefined;
    let validCard = false;


    if(ccNum.length >= 9){   // aqui eu delimito que o mínimo de digitos precisos para seguirmos validando é 9
      for(let i = ccNumSplit.length-1; i>=0; i--){         //aqui o i é cada número que eu tenho e eu conto todo o tamamnho do que foi digitado no input -1 porque a contagem começa com 0, então eu vou lendo toda a numeração do input de trás pra frente
        console.log({i,tamanho:ccNumSplit.length-1,divisão: i%2}) // esse console log é apenas para entendimento de se está dando tudo certo na separação do tamanho do meu cc e quanto é o resto da divisão de cada número /2
        if(i % 2 === 0){      //aqui coloco minha condicional que é para saber quais números vou transformar em string para somar (21 vai se tornar 2 e 1)
          singleNums.push(ccNumSplit[i]);
        }else{
          doubleNums.push((ccNumSplit[i] * 2).toString()); // se o resultado da divisão é diferente de 0 eu multiplico o resultado e transformo em string para que ele não seja ex: 21, mas 2 e 1
        }
      }
    }


    doubleNums = doubleNums.join("").split(""); //aqui eu estou dando um join que faz juntar todos os elementos do array e um split para dividir a string em uma lista 
    finalArry = doubleNums.concat(singleNums); // aqui e pego o array que o split me deu e concateno para retornar uma nova string
    console.log ({doubleNums, finalArry}) // esse console é apenas para saber o que exatamente estou devolvendo
    for(let j = 0; j < finalArry.length; j++){ 
      sum += parseInt(finalArry[j]);            //aqui eu estou transformando o finalArray em número de novo e somando eles
    }
    console.log ({sum}) //console para saber o resultado final da soma que nesse caso é 62
    if(sum % 10 === 0){
      validCard = true;  // para saber se o cartão é valido, depois de todo o processo, se a divisão dessa soma que fizemos do finalArray transformado em número for igual a 0, significa que o cartão é valido
    }

    return validCard;
  },



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
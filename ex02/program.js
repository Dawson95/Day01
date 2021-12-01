function pocketMoney(coins){
    let somme=0;
    
    function compare(a,b)
    {
    	return a-b;
    }
    coins.sort(compare);
    for(let i=0; i<(coins.length -1); i++){
        if(coins[i]<0){
            return 1;
        }
        somme=somme+coins[i];
    }
    if(somme==coins[coins.length-1] || somme+1 == coins[coins.length-1]){
        return somme+coins[coins.length-1]+1;
    }else if(somme<coins[coins.length-1]){
        return somme+1;
    }else if(somme>coins[coins.length-1]){
     	return somme+coins[coins.length-1]+1;
    }
    
} 

exports.pocketMoney =  pocketMoney;
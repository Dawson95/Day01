function firstDuplicateValue(array){
     for(let i = 0; i<array.length ; i++){
         if(array[i]<=0){
             return("le tableau contient des valeurs inférieur ou égal à 0");
         }else if(array.indexOf(array[i], i+1) != -1){
             return array[i];
         }
         
     }
    }
    
    // Merci de ne pas effacer la ligne en dessous.
    exports.firstDuplicateValue =  firstDuplicateValue;
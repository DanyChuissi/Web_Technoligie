
var erg = "";
    for(let i = 1; i<= 100; i++){
        if(i%3 === 0 && i%5 ===0){
            erg +=" tictac";
        }
        else if(i%3===0){
            erg +=" tic";
        }else if (i % 5 ===0){
            erg +=" tac";
        }
        else{
           erg = erg+ " "+ i;
        }
     }

   // console.log(erg);

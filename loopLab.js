/*let counter = 0
while(counter < 10) {
    console.log(counter);
    counter++
    
}

let counter = 60;
do {
    console.log(counter);
    counter++    
} while (counter <= 100);*/

//for loop
/*for(let counter = 0; counter <= 20; counter++){
    console.log(counter);
    
}

//if else inside loop
for(let num = 0; num <= 20; num++){
    if(num % 2 == 0) {
        console.log(`${num} is even.`);        
    }
}*/
    
//loop with break and continue
const exBreakCont=() => {
    for(let index = 0; index < 10; index++){
        if(index == 4) continue;
        if (index == 7){
            console.log(index);
            break;            
        }
        console.log("At the end of the for loop.");
        
    }
    console.log("At the end of the function body.");
    
} 
exBreakCont()
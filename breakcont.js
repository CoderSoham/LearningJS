//Continue: Run the loop but skip that iteration
//Break: Break the loop right away and send control flow to next statement

for (let i = 0; i <10; i++){
    if (i ==5){
        continue;
    }
    console.log("Value of i is: " + i );
}

for (let i = 0; i <5; i++){
    console.log("Value of i is: " + i );
    if (i ==3){
        break;
    }
}
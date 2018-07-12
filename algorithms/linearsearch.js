

var arrayNumber = [10,20,30,40,50];

function inputnumber(number){
    console.log(`Input a number`)
    var i = 0;
    var result = "";
    var doesexist = arrayNumber[i];
    while(arrayNumber[i] <= number){
        if(doesexist == 0){
            result += arrayNumber[i];
            console.log(`result:${result} index:${arrayNumber.lastIndexOf(number)}`);
            i++;
        }
        else{
            console.log(`${number} does not exist`);
            break;

        }
      
    }
}

inputnumber(42);

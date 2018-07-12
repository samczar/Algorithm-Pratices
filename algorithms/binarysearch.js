

var  elementss= [10,20,30,40,50,90,2,22,1,93,99, 4, 8];

function binarySearch(input){
   
   var arrayNumber = elementss.sort();  //sort array
   var min_array =0; //min value
   var max_length = arrayNumber.length -1; //max value
   
   var result = 0; //variable for holding result.

   
   while(min_array <= max_length){ //compare min array recursively against the max length
    
       result = Math.round((min_array + max_length)/2);  //add min + max /2 and hold in variable result;
       if(arrayNumber[result] == input){ //decision statement : if sort array having the dividio0n result equals to the user input
           console.log(`result ${result}`);  //show the result.
           return result;
       }
       else if(arrayNumber[result] <= input){ //else if the divided array result is <= user input
           min_array = result + 1;  //then add one to the result gotten and run again (recursively)
           console.log(`less ${min_array}`); //show amout of times befor breaking.
           break;
       }
       else{
           max_length = result - 1;
           console.log(`max ${max_length}`);
       }
   }
  return -1;
}

binarySearch(90);

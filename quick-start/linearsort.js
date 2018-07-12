//customer record

var customer_number = [2,4,6,7,8,9,10,11,13,14,20,30,40,50,60,70,80,90];

function old(){
    console.log('starting')
    var counter  = 0;
    //var more_record="" ;
    while(customer_number[counter]){
    var more_record="";
    more_record += customer_number[counter];
    console.log(more_record);
    counter++
    }

}

function inputnumber(x){
    var counter  = 0;
    var more_record = "";
    var exist = customer_number.lastIndexOf(x);
    while(customer_number[counter]<=x){
        if(exist != -1){
            more_record += customer_number[counter];
            console.log(`${more_record}${customer_number.lastIndexOf(x)}`);
            counter++;
        }
        else{
            console.log('Value does not exist');
            break; 
        }

    }
}


inputnumber(49);


//array of numbers
//input an a number for search
//set a counter
//while the counter

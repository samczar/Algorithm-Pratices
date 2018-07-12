function greeter(person){
    return `Hello ${person}`
}

let user = "Jane User";



class Animal{
    move(distance:number=0){
        document.body.innerHTML = `Can move ${distance} distance`;
    }
    respirate(methodUsed:string){
        document.body.innerHTML=`Respire through ${methodUsed}`;
    }
}

class Human extends Animal{
   
}

const human  = new Human();

human.respirate('Nose');
human.move(50);
document.body.innerHTML = `${greeter(user)}`;
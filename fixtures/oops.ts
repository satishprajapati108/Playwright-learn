class Living{
    type: string | null
    constructor(type: string){
        this.type = type
    }
    breathing(){
        console.log("Parent Breathing")
    }

}

// inheritance
class Human extends Living{
    constructor(type: string){
        super(type)
    }
    // breathing(n1: number): void{
    //     console.log("Breathing")
    // }

    // breathing(n1: string): void{
    //     console.log("String")
    // }


    private breathing(n1: number|string): void{
        if(typeof n1 === 'number'){
            console.log(n1);
        }else{
            
        }
    }


    protected hello:any;

    static instance: number = 0

}


abstract class Hands{
    async count(){

    }

}


interface FIngers{
    
}

//encapsulation

//polymorphesim




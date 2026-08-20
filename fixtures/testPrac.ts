function checkevenorodd() : Number{

 const numbers :number[] =[2,980,5,2,5,98];
    let max = numbers[0];

    for(const num of numbers){
        if(num > max){
            max=num;
        }
    }

    
    return max;

}

function reverseWord(word:string):string[]{
    // return word.split(" ").reverse().join();
     return word.split("");

}

// console.log(checkevenorodd());
const wd = reverseWord("satish");
console.log(wd[0])

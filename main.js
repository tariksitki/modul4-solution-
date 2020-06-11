var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

function SpeakName(){


    for(name of names){
        
    
        if(name.charAt(0).toLowerCase() ==='j'){

            console.log('Good Bye ', name);
            
        }else{
            
            console.log('Hello', name);
            
        }
    }
}

  
SpeakName()
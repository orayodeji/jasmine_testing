// this keyword
var newSchool = {
    name : "tunji",
    happy : function(){
    return "I'm going to be great with my name " + this.name}
    };
    
    newSchool.happy();
    
    var school = {
    name: "wale"};
    
    newSchool.happy.apply(school);


    var sound = {
        audio : function(){
        return this.name + " is playing " + this.beat + " music in his room."}};
        var person1 = {
        name: "tunji",
        beat: "rock"};
        var person2 = {
        name : "wale",
        beat : "pop"};
        sound.audio.call(person1);
        sound.audio.call(person2);
        
        var newStuff = {
            name : "Tunde",
            greet : function(otherName){
            return otherName +" likes to be with "+ this.name + " everytime they are together" }};
            var jug = {
            name : "rebecca"};
            newStuff.greet(jug.name);


            function reduction(){
                return [].slice.call(arguments).reduce(function(acc,next){
                return acc + next;},9)};

                var tunji = {
                    date : 12,
                    month : 09,
                    year : 1993,
                    delete : function(){
                    console.log(arguments);
                    for(var i =0 ; i < arguments.length; i++){
                    delete this[arguments[i]];
                    }
                    }
                    };
                    var wale = {
                        date :  07,
                        month : 05,
                        year : 1990};
                        function add(a,b){
                            return a + b 
                        }

                        var  partial = add.bind(this,7);
                        

                    

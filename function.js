function replaceWith(string,charToReplace,charToReplaceWith){
    //convert the strings to an array
    var hop = string.split("");
    //create a for loop to locate x and replace with y
    for(var i = 0;i < hop.length; i++){
    if(hop[i] === charToReplace){
    hop[i] = charToReplaceWith}
    }
    return hop.join("")};


        function expand(arr,num){
            let newArray = [];
            for(let i = 0; i < num ; i ++){
                newArray.push(arr)
            }
            return newArray.flat();
        }

    
        function acceptNumbersOnly(){
            for(let i = 0; i < arguments.length; i++){
            if (typeof arguments[i] !== "number" || isNaN(arguments[i]) ){ return false}
            }
            return true
            };


            function mergeArr(arr1,arr2){

                let newArr = [];
                newArr = arr1.concat(arr2);
                newArr.sort(function(a,b){
                  return  a - b
                });
                return newArr
                
            }


            function mergeObj(obj1, obj2){
                for(let key in obj2){
                    obj1[key] = obj2[key]
                }
                return obj1
            }
function meleeRangedGrouping (str) {
    //your code here
    var split = str.split("-").join().split(",")
    var ranged = []
    var melee = []
    var result = []
  
    if(!str){
      return result
    }
      else{
        for(var i = 0 ; i < split.length ; i++){
          if(i % 2 === 1){
          if(split[i] === "Ranged"){
            ranged.push(split[i-1])
          }
          else if(split[i] === "Melee"){
            melee.push(split[i-1])
          }
        }
      } result.push(ranged, melee)
    }
    return(result)
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []
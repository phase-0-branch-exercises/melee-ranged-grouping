function meleeRangedGrouping (str) {
    let melee =[]
    let range =[]
    let arry = ""
    let result =[]

        if (str.length ==0 ) {
            return result
        }
    for (let i = 0; i < str.length; i++) {
        if(str[i] === '-' && str[i+1] === 'R'){
            range.push(arry);
        }
        else if(str[i] === '-' && str[i+1] === 'M'){
            melee.push(arry);
        }
        else if(str[i] === ','){
            arry = '';
        }
        else{
            arry += str[i];
        }
    }
    result.push(range,melee)
    return result  
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []
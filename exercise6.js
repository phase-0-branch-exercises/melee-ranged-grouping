function meleeRangedGrouping (str) {

    if(str == ''){
        return []
    }
    
    var splitkoma = []
    var temp = ''
    str += ','
    for(i = 0; i < str.length; i++){
        if(str[i] !== ','){
            temp += str[i]
            if(i == str.length -1){
                splitkoma.push(temp)
            }
        }
        else{
            splitkoma.push(temp)
            temp = ''
        }
    }
    
    var output = []
    var arrRanged = []
    var arrMelee = []

    for(i = 0; i < splitkoma.length; i++){
        var namaHero = ''
        var group = ''
        var isHero = false
        for(j = 0; j < splitkoma[i].length; j++){
            if(splitkoma[i][j] !== '-' && isHero == false ){
                namaHero += splitkoma[i][j]
            }else {
                if(splitkoma[i][j + 1] !== undefined){
                    isHero = true
                    group += splitkoma[i][j + 1]
                }
                               
            }
        }
        if (group == 'Ranged'){
            arrRanged.push(namaHero)
        }else{
            arrMelee.push(namaHero)
            
        }
    }
  
    output.push(arrRanged, arrMelee)

    return output
  }
  // TEST CASE
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  console.log(meleeRangedGrouping('')); // []
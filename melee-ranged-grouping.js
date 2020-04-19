function meleeRangedGrouping (str) {
    var group = []
    var group2 = []
    var temp = ``
    var temp2 = ``
    var hasil = [[],[]]
    for (var a = 0 ; a < str.length ; a++){
        if (str[a] !== `,`){
            temp += str[a]
        }
        if (str[a] === `,` || a === str.length-1){
            group.push(temp)
            temp = ``
        }
    }
    for (var b = 0 ; b < group.length ; b++){
        group2.push([[],[]])
        for (var c = 0 ; c < group[b].length ; c++){
            if (group[b][c] !== `-`){
                temp2 += group[b][c]
            }
            if (group[b][c] === `-`){
                group2[b][0].push(temp2)
                temp2 = ``
            }
            else if ( c === group[b].length-1){
                group2[b][1].push(temp2)
                temp2 = ``
            }
        }
    }
    for (var d = 0 ; d < group2.length ; d++){
        if (group2[d][1][0] === `Ranged`){
            hasil[0].push(group2[d][0][0])
        }
        if (group2[d][1][0] === `Melee`){
            hasil[1].push(group2[d][0][0])
        }
    }
    if (str.length === 0){
        return []
    }
    return hasil
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []
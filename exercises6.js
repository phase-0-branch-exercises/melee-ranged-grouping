function meleeRangedGrouping(str) {
    var str = str.split(',')
    var tmp = []

    for (var i = 0; i < str.length; i++) {
        tampung = str[i].split('-')
        tmp.push(tampung)
    }
    if (tmp.length == 1) {
         return []
     }
     var rangedArr = []
     var meleeArr = []
     var hasil = []
     for (var i = 0; i < tmp.length; i++) {
        if (tmp[i][1] === 'Ranged') {
             rangedArr.push(tmp[i][0])
         } else if (tmp[i][1] === 'Melee') {
             meleeArr.push(tmp[i][0])
         }
     }
     hasil.push(rangedArr, meleeArr)
    return hasil
}

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
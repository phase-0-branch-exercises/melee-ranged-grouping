function meleeRangedGrouping (str) {
    arrHasil = [[],[]];
    
    temp = ''
    arrTemp = []
    for (let i = 0; i <= str.length; i++) {
        if (str.length == 0) {
            arrHasil = [];
        } else {
            if (str[i] !== ',' && str[i] !== '-') {
                temp += (str[i]);
            }
            if (str[i] == str[str.length]) {
                temp += (str[str.length]);   
            }
            if (str[i] == ',' || str[i] == '-' || str[i] == str[str.length]) {
                arrTemp.push(temp);
                temp = ''
            }
        }
    }
    
    for (let j = 0; j < arrTemp.length; j++) {
        if (arrTemp[j] == 'Ranged'|| arrTemp[j] == 'Rangedundefinedundefined') {
            arrHasil[0].push(arrTemp[j-1]);
        }if (arrTemp[j] == 'Melee' || arrTemp[j] == 'Meleeundefinedundefined') {
            arrHasil[1].push(arrTemp[j-1]);
        }
    }
    return arrHasil;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
console.log(meleeRangedGrouping('')); // []
console.log(meleeRangedGrouping('Accretia-Melee,Bellato-Ranged,Cora-Ranged')); // []
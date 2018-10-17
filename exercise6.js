// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, 
// implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

// Jika input adalah string kosong ('') maka return array kosong


function meleeRangedGrouping (str) {
    //your code here
    var result = [[],[]]
    var splitted = str.split(',')
    var wrongWay = []
    // console.log(splitted)
    
    for(var i = 0; i < splitted.length; i++) {
        var newSplitted = splitted[i].split('-')
        if(newSplitted[1] === 'Ranged') {
            result[0].push(newSplitted[0])
        } else {
            result[1].push(newSplitted[0])
        }
    }
    if(str.length === 0) {
        return wrongWay
    }else{
        return result
    }
    // let newSplitted = splitted.split(',')
    // console.log(splitted)
    // let arrTemp = []
    // console.log(splitted)
    // for(let i = 0; i < str.length; i++) {
    //     for(let j = 0; j < str[i].length; j++) {
    //         if()
        // }
    // }
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
console.log(meleeRangedGrouping('')); // []
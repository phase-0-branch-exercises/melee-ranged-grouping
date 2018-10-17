// Logic Challenge: Melee Ranged Grouping
// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

// Jika input adalah string kosong ('') maka return array kosong

// Submit Tugas Disini

function meleeRangedGrouping (str) {
    var result = [[],[]];
    var newstr = str.split(",")
    var newstr1 = [];
    if (str === ""){
        return []
    }

    for(var i = 0; i < newstr.length; i++){
      newstr1.push( newstr[i].split("-"))
    }


    for(var i = 0; i < newstr1.length; i++){
      
      if(newstr1[i][1] === "Ranged"){
        result[0].push(newstr1[i][0])
        
      }else{
        result[1].push(newstr1[i][0])
        
      }
    }

    
    
    // console.log(newstr1)
    return result
  //your code here
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
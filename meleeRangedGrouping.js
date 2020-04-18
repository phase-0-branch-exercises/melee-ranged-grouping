// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

// Jika input adalah string kosong ('') maka return array kosong


function meleeRangedGrouping (str) {
  //your code here

  if( str.length == 0 ){
    return []
  }

  var hasil = [[],[]]
  var strip = false
  var koma = true
  var hero = ""

  for( var i = 0; i < str.length; i++ ) {
    
    if( str[i] === "-" ){
      strip = true
    } else if ( strip === false && koma === true ){
      hero += str[i]
    } else if ( strip === true ){
      if( str[i] === "R" && koma === true ){
        hasil[0].push(hero)
        strip = false
        hero = ""
        koma = false
      } else {
        hasil[1].push(hero)
        strip = false
        hero = ""
        koma = false
        }
      }

      if( str[i] === "," ){
        koma = true
      }
  }

  return hasil
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
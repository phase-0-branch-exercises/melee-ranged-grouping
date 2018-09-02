function meleeRangedGrouping (str) {
  var hero = str.split(',').map(h => {return {nama: h.split('-')[0], tipe: h.split('-')[1]}})
  var output = []
  output.push(hero.filter(h => {return h.tipe == 'Ranged'}).map(h => {return h.nama}))
  output.push(hero.filter(h => {return h.tipe == 'Melee'}).map(h => {return h.nama}))
  return output
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
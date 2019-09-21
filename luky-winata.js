function meleeRangedGrouping (str) {
  var result = [];
  if(str === '') {
    return result;
  }
  var arr = strSplit(str, ',');
  var hero = [];
  var weapon = [];
  for(var i=0; i < arr.length; i++) {
    hero.push(strSplit(arr[i], '-')[0])
    weapon.push(strSplit(arr[i], '-')[1])
  }
  var type = Group(weapon)
  for(var j=0; j < type.length; j++) {
    var temp = []
    for(var k=0; k < weapon.length; k++) {
      if(type[j] === weapon[k]) {
        temp.push(hero[k])
      }
    }
    result.push(temp)
  }
  return result
}

function strSplit(string, XX) {
  var arr = [];
  var str = ''
  for(var i = 0 ; i <= string.length; i++) {
    if(string[i] === XX || i === string.length) {
      arr.push(str)
      str = ''
    } else {
      str = str + string[i];
    }
  }
  return arr
}

function Group(arr) {
  var res = [];
  for(var i = 0; i < arr.length; i++) {
    var already = false
    for(var j = 0; j < res.length; j++) {
      if(arr[i] === res[j]) {
        already = true
      }
    }
    if(already === false) {
      res.push(arr[i])
    }
  }
  return res
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
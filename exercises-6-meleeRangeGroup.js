function meleeRangedGrouping (str) {
    //your code here
    var result = [];
  
    if (str.length === 0){
      return result
    }
  
    var pisahStr = str.split(',');
  
    var split2 = [];
    for(var i = 0; i< pisahStr.length;i++){
      split2.push(pisahStr[i].split('-'));
    }
  
    var groupArr = [];
    var groupArr2 = [];
    for(var j = 0; j < split2.length;j++) {
      if (split2[j][1] === 'Melee')
      groupArr2.push(split2[j][0])
      else
      groupArr.push(split2[j][0])
    }
  
    var groupOfAll = [groupArr,groupArr2]
  
    return groupOfAll
  }
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []
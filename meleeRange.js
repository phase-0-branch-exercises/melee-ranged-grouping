function meleeRangedGrouping (str) {
    let hero = [];
    let temp = '';
    let heroRange = [];
    let heroMelee = [];
    let result = [];
    if(str.length == 0) {
        return []
    }
    else {
        for(let i = 0; i < str.length; i++) {
            if(str[i] !==',' && str[i] !== '-') {
                temp += str[i]
            }
            else {
                hero.push(temp);
                temp = '';
            }
            if(i === str.length - 1) {
                hero.push(temp)
            }

        }
        for(let i = 0; i < hero.length; i++) {
            if(hero[i+1] == 'Ranged') {
                heroRange.push(hero[i]);
            }
            else if(hero[i+1] == 'Melee') {
                heroMelee.push(hero[i]);
            }
        }
        result.push(heroRange);
        result.push(heroMelee);
    }
    return result;

    // return result;
     
}
  
  // TEST CASE
  
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
console.log(meleeRangedGrouping('')); // []
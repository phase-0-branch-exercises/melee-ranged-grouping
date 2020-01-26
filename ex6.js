function meleeRangedGrouping (str) {
    //your code here

    // 1. split jadi var baru //
    // 2. var Ranged = []
    // 3. var Melee = []
    // 4. var result = [Ranged, Melee]
    // 5.for (let i = 0; i < baru.length; i++) {
    //     const element = array[i];
    //     6. if (baru[i] === 'Ranged') {Ranged.push(baru[i]...)}
    //     7. if (baru[i] === 'Melee') {Ranged.push(baru[i]...)}
    // }
    // 8. return result

    var baru = []
    var temp = ''
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === ',' || i === str.length || i === str[0]) {
            baru.push(temp)
            temp = ''
        } 
        else{
            temp += str[i]
        }
    }

    // var baru  = [ 'Drow Ranger-Ranged', 'Chen-Ranged', 'Dazzle-Ranged', 'Io-Ranged' ] 
    // var baruX = [ ['Drow Ranger', 'Ranged'], ['Chen','Ranged'], ['Dazzle','Ranged'], ['Io','Ranged'] ]

    let baruX = []
    for (let i = 0; i < baru.length; i++) {
        let tempX = ''
        let tempArr = []

        for (let j = 0; j < baru[i].length; j++) {
            if (baru[i][j] === '-') {
                tempArr.push(tempX) // buat ngambil 'Nama Player' atau kata sebelum - di tempX
                tempX = ''
            }
            else{
                // console.log(tempX)
                tempX += baru[i][j]
            }            
        }
        tempArr.push(tempX) // buat ngambil 'Tipe Player' atau kata setelah - di tempX
        baruX.push(tempArr)
    }

    // console.log(baruX)
    var Ranged = []
    var Melee = []
    var result = [Ranged, Melee]
    for (let k = 0; k < baruX.length; k++) {
        if (baruX[k][1] === 'Ranged') {
            Ranged.push(baruX[k][0])
        }
        else if (baruX[k][1] === 'Melee') {
            Melee.push(baruX[k][0])
        }        
    }

    if (str === '') {
        return []
    }
    return result

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []
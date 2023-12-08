// let a = 12;
// let car = "car";
// let trrue = true;
// let A = false;

// function bat() {
//   let b = 19;
//   let c = 100;
//   if (c < b) {
//     console.log("19 n 100 aas baga");
//   } else {
//     while (b < c) {
//       b++;
//     }
//     console.log("ingeed a ih");
//   }
// }

// function battet() {
//   let q = 546;

//   let r = q % 10;
//   r = r % 10;
//   console.log("last oron");
//   console.log(r);
//   q = q - r;

//   let e = (q / 10) % 10;
//   console.log("dundah oron");
//   console.log(e);

//   q = q - e * 10;
//   let t = q / 100;
//   console.log("first oron");
//   console.log(t);
//   let z = t + e + r;
//   console.log("tsipruudin niilber: " + z);
// }

// function oronUrjwer() {
//   let q = 98;
//   let i = q % 10;
//   q = q - i;
//   j = q / 10;
//   i = i * j;
//   console.log("tsiprudin urjwer:" + i);
// }

// function circle() {
//   let r = 5,
//     F = 3.14;
//   let P = 2 * F * r;
//   console.log("perimeter:" + P);
//   let V = (4 * F * r * r * r) / 3;
//   console.log("ezelhuun bol :" + V);
//   let S = r * r * F;
//   console.log("bombortsogin 1 talaas n harsan duguin Talbai :" + S);
// }
// //shine hicheel:
// function tegsh() {
//   let q = 46,
//     r = null;
//   r = q % 2;
//   if (r === 1) {
//     console.log("ene toon sondgoi ym :" + q);
//   } else {
//     console.log("ene toon tegsh ym :" + q);
//   }
// }

// function tegshA() {
//   var q = 1124;
//   r = null;
//   r = q % 2;
//   if (0 > q) {
//     console.log("ene too n hasah too ym :" + q);
//   } else {
//     if (q > 10 && r === 1) {
//       console.log("10 as ih bas sondgoi:" + q);
//     } else if (q < 10 && r === 1) {
//       console.log("10 as baga bas sondgoi:" + q);
//     } else if (q > 10 && r === 0) {
//       console.log("10 as ih bas tegsh:" + q);
//     } else if (q < 10 && r === 0) {
//       console.log("10 as baga bas tegsh:" + q);
//     }
//   }
// }

// function dun() {
//   let q = null;
//   if (q > 100 || q < 0) {
//     console.log("ene dun bish bn " + q);
//   } else if (q == null) {
//     console.log("Shalgaltanda oroogui");
//   } else if (q >= 80 && 90 > q) {
//     console.log("B:" + q);
//   } else if (q >= 70 && 80 > q) {
//     console.log("C:" + q);
//   } else if (q >= 60 && 70 > q) {
//     console.log("D:" + q);
//   } else if (q < 60) {
//     console.log("F:" + q);
//   } else if (q >= 90 && 101 > q) {
//     console.log("A:" + q);
//   }
// }

// function weekend() {
//   q = 5;
//   switch (q) {
//     case 1:
//       console.log("monday");
//       break;
//     case 2:
//       console.log("tuesday");
//       break;
//     case 3:
//       console.log("wednesday");
//       break;
//     case 4:
//       console.log("thursday");
//       break;
//     case 5:
//       console.log("friday");
//       break;
//     case 6:
//       console.log("saturday");
//       break;
//     case 7:
//       console.log("sunday");
//       break;
//     default:
//       console.log("ene odor bish bn");
//   }
// }
// // hanshiin bodlogo #1

// function bodlogo() {
//   // console.log(
//   //     "Mash olon 0 huleej awsan uyd automate aar tanihgui bolohig anhaarna u!"
//   // );
//   let a = window.prompt(
//     "tanid bga dewsgert \n 1-USD \n 2-MNT \n 3-RUB \n 4-CNY"
//   );
//   a = 1 * a;
//   if (a === 1 || a === 2 || a === 3 || a === 4) {
//   } else {
//     console.log(
//       "Ta ymar turliin dewsgert gedgee oruulagui bn \n eswel useg oruulsan bn \n Ta urdahi 1-4 hurtleh too ogno uu!"
//     );
//     return 0;
//   }

//   switch (a) {
//     case 1:
//       let D = window.prompt("tanid heden USD bga we");
//       let b = window.prompt(
//         "ta ali  dewsgertluu orulah we  \n 1-MNT \n 2-RUB \n 3-CNY"
//       );
//       D = D * 1;
//       // console.log(typeof D);

//       if (typeof D === "number" && D >= 0) {
//       } else {
//         console.log("Aldaatai utga bn zasaj zuw utga oruulna uu ! ");
//         return 0;
//       }
//       b = 1 * b;
//       if (b === 1 || b === 2 || b === 3) {
//       } else {
//         console.log(
//           "Ta dewsgertee oruulagui baina! eswel useg darsan bn \n omno n bairlah toog ogno uu "
//         );
//         return 0;
//       }
//       switch (b) {
//         case 1:
//           D = 3460.25 * D;
//           console.log("Belen bolson MNT:" + D);
//           break;
//         case 2:
//           D = 88.63 * D;
//           console.log("Belen bolson RUB:" + D);
//           break;

//         case 3:
//           D = 7.08 * D;
//           console.log("Belen bolson CNY:" + D);
//           break;
//         default:
//           console.log("deerh toonudig ogno uu");
//           break;
//       }
//       break;
//     case 2:
//       let T = window.prompt("tanid heden MNT bga we");
//       let l = window.prompt(
//         "ta ali  dewsgertluu orulah we  \n 1-USD \n 2-RUB \n 3-CNY"
//       );
//       T = 1 * T;

//       if (typeof T === "number" && T >= 0) {
//       } else {
//         console.log("Aldaatai utga bn zasaj zuw utga oruulna uu ! ");
//         return 0;
//       }
//       l = 1 * l;
//       if (l === 1 || l === 2 || l === 3) {
//       } else {
//         console.log(
//           "Ta dewsgertee oruulagui baina! eswel useg darsan bn \n omno n bairlah toog ogno uu "
//         );
//         return 0;
//       }
//       switch (l) {
//         case 1:
//           T = 0.00028912474 * T;
//           console.log("Belen bolson MNT:" + T);
//           break;
//         case 2:
//           T = 0.025614137 * T;

//           console.log("Belen bolson RUB:" + T);
//           break;

//         case 3:
//           T = 0.0020593288 * T;
//           console.log("Belen bolson CNY:" + T);
//           break;
//         default:
//           console.log("deerh toonudig ogno uu");
//           break;
//       }
//       break;
//     case 3:
//       let R = window.prompt("tanid heden RUB bga we");
//       let r = window.prompt(
//         "ta ali  dewsgertluu orulah we  \n 1-USD \n 2-MNT \n 3-CNY"
//       );
//       R = 1 * R;
//       if (typeof R === "number" && R >= 0) {
//       } else {
//         console.log("Aldaatai utga bn zasaj zuw utga oruulna uu ! ");
//         return 0;
//       }
//       r = 1 * r;
//       if (r === 1 || r === 2 || r === 3) {
//       } else {
//         console.log(
//           "Ta dewsgertee oruulagui baina! eswel useg darsan bn \n omno n bairlah toog ogno uu "
//         );
//         return 0;
//       }
//       switch (r) {
//         case 1:
//           R = 0.011 * R;
//           console.log("Belen bolson USD:" + R);
//           break;
//         case 2:
//           R = 39.02 * R;
//           console.log("Belen bolson MNT:" + R);
//           break;

//         case 3:
//           R = 0.0802 * R;
//           console.log("Belen bolson CNY:" + R);
//           break;
//         default:
//           console.log("deerh toonudig ogno uu");
//           break;
//       }
//       break;
//     case 4:
//       let C = window.prompt("tanid heden CNY bga we");
//       let c = window.prompt(
//         "ta ali  dewsgertluu orulah we  \n 1-USD \n 2-RUB \n 3-MNT"
//       );
//       C = 1 * C;
//       if (typeof C === "number" && C >= 0) {
//       } else {
//         console.log("Aldaatai utga bn zasaj zuw utga oruulna uu ! ");
//         return 0;
//       }
//       c = 1 * c;
//       if (c === 1 || c === 2 || c === 3) {
//       } else {
//         console.log(
//           "Ta dewsgertee oruulagui baina! eswel useg darsan bn \n omno n bairlah toog ogno uu "
//         );
//         return 0;
//       }
//       switch (c) {
//         case 1:
//           C = 0.14 * C;
//           console.log("Belen bolson USD:" + C);
//           break;
//         case 2:
//           C = 12.4455 * C;
//           console.log("Belen bolson RUB:" + C);
//           break;

//         case 3:
//           C = 485.86 * C;
//           console.log("Belen bolson CNY:" + C);
//           break;
//         default:
//           console.log("deerh toonudig ogno uu");
//           break;
//       }
//       break;
//     default:
//       console.log("deerh 1,2,3,4 ogno uu");
//       break;
//   }
// }
// // cola-1200 sprite 1500 alpengold 2000 suu 2200 talh 1000 zairmag 500 bohi 150 arhi 15000
// //garaas awah dewsgert 1.5000 2.10000 3.20000
// //hariulah dewsgert 50 , 100 , 500 , 1000, 5000 , 10000
// //ajjillaga 1t hereglegch  mungu hiine avah dewsgert oorig awahguie hariult  bodno  ymr2 dewsgert heden shirhegig bodno

// function bodlogo2() {
//   console.log(
//     "tanii hudaldaj awah baraa:\n 1.Cola-1200\n 2.Sprite-1500 \n 3.Alpengold-2000 \n 4. Suu-2200 \n 5. talh-1000 \n 6. zairmag-500 \n 7. bohi-150 \n 8. Arhi-15000 "
//   );
//   let baraa = window.prompt(
//     "tanii hudaldaj awah baraa:\n 1.Cola-1200\n 2.Sprite-1500 \n 3.Alpengold-2000 \n 4. Suu-2200 \n 5. talh-1000 \n 6. zairmag-500 \n 7. bohi-150 \n 8. Arhi-15000 "
//   );
//   let value = window.prompt(
//     "ta zuwhun\n 1. 5000 \n 2. 10000 \n 3. 20000 dewsgerteer guilgee hiine !"
//   );
//   value = 1 * value;
//   if (value === null) {
//     console.log("mungun dewsgert oruulagui bn!");
//   }
//   switch (value) {
//     case 1:
//       value = 5000;
//       break;
//     case 2:
//       value = 10000;
//       break;
//     case 3:
//       value = 20000;
//       break;
//     default:
//       console.log(
//         "uuchlaarai zuwhun mungun dewsgertin omno bairlah songltuud ogno uu!"
//       );
//       return 0;
//   }
//   value = 1 * value;
//   if (value === 20000 || value === 10000 || value === 5000) {
//   } else {
//     if (typeof value === "number") {
//       console.log(
//         "ta zuwhun\n 1. 5000 \n 2. 10000 \n 3. 20000 dewsgerteer guilgee hiine !"
//       );
//       return 0;
//     } else {
//       console.log("ene string bn");
//     }
//   }
//   if (typeof value === "number") {
//     if (value >= 0) {
//     } else {
//       console.log("- dun bn ");
//       return 0;
//     }
//   } else {
//     console.log("String bn");
//     return 0;
//   }

//   baraa = 1 * baraa;
//   if (baraa >= 1 && baraa <= 8) {
//   } else {
//     console.log("Aldaatai utga");
//   }
//   switch (baraa) {
//     case 1:
//       if (value >= 1200) {
//         value = value - 1200;
//         break;
//       } else {
//         console.log("mungun dun hurq bn");
//         return 0;
//       }
//     case 2:
//       if (value >= 1500) {
//         value = value - 1500;
//         break;
//       } else {
//         console.log("mungun dun hurq bn");
//         return 0;
//       }
//     case 3:
//       if (value >= 2000) {
//         value = value - 2000;
//         break;
//       } else {
//         console.log("mungun dun hurq bn");
//         return 0;
//       }
//     case 4:
//       if (value >= 2200) {
//         value = value - 2200;
//         break;
//       } else {
//         console.log("mungun dun hurq bn");
//         return 0;
//       }
//     case 5:
//       if (value >= 1000) {
//         value = value - 1000;
//         break;
//       } else {
//         console.log("mungun dun hurq bn");
//         return 0;
//       }
//     case 6:
//       if (value >= 500) {
//         value = value - 500;
//         break;
//       } else {
//         console.log("mungun dun hurq bn");
//         return 0;
//       }
//     case 7:
//       if (value >= 150) {
//         value = value - 150;
//         break;
//       } else {
//         console.log("mungun dun hurq bn");
//         return 0;
//       }
//     case 8:
//       if (value >= 15000) {
//         value = value - 15000;
//         break;
//       } else {
//         console.log("mungun dun hurq bn");
//         return 0;
//       }
//     default:
//       console.log("Iim utga bhgue !");
//   }
//   console.log("Hariult:" + value);
//   let j = window.prompt(
//     "herew ta zadargaa medeelel awah bol \n 1 \n Ugui bol \n 2 \t darna uu !"
//   );
//   j = 1 * j;
//   switch (j) {
//     case 1:
//       let i = 1;
//       value = 1 * value;
//       let s = value;
//       while (s > 10) {
//         s = s / 10;
//         i = 1 + i;
//       }
//       i = 1 * i;
//       switch (i) {
//         case 4:
//           let k = value / 1000;
//           k = parseInt(k);
//           console.log("1000:" + k);
//           z = value - k * 1000;
//           z = z / 100;
//           z = parseInt(z);
//           console.log("100: " + z);
//           t = value - (1000 * k + z * 100);
//           t = t / 50;
//           t = parseInt(t);
//           console.log("50:" + t);

//           break;
//         case 5:
//           let myngat = value / 10000;
//           myngat = 1 * myngat;
//           myngat = parseInt(myngat);
//           console.log("10000:" + myngat);
//           let arawt = value - myngat * 10000;
//           arawt = arawt / 1000;
//           arawt = parseInt(arawt);
//           console.log("1000:" + arawt);
//           let zuut = value - (myngat * 10000 + arawt * 1000);
//           zuut = zuut / 100;
//           zuut = parseInt(zuut);
//           console.log("100:" + zuut);
//           let tawi = value - (myngat * 10000 + arawt * 1000 + zuut * 100);
//           tawi = tawi / 50;
//           tawi = parseInt(tawi);
//           console.log("50:" + tawi);
//       }
//       break;
//     case 2:
//       console.log("bayrlla");

//       break;
//     default:
//       console.log("iim utga bhgu bn \n deerh utgin omnih too g ogno uu !");
//       break;
//   }
// }
function nasArray() {
    let i = 0;
    let names = ["bat", "baldan", "dulmaa", "gonchig", "luubat", "manjin"];
    let nas = [21, 82, 36, 14, 54, 26];
    while (i < 6) {
        console.log(names[i] + "\tbol \t" + nas[i] + "\tnastai");
        i++;
    }
}

function bodlogoTglom() {
    let j = Math.floor(Math.random() * 100);
    let n = null;
    while (n !== j) {
        console.log(j);
        let n = window.prompt(
            "1-100 hurtel too randomor ogogdson baigaa.\n Ta 1-100 hurtel too ogood taagaarai !"
        );
        n = 1 * n;
        j = 1 * j;
        if (n < j) {
            console.log("Tanii too baga bn");
        } else if (n == j) {
            console.log("bayr hurgie ta taaj chadla");
            return 0;
        } else {
            console.log("tanii too ih bn");
        }
    }
}

function oronOloh() {
    let n = window.prompt("toogoo oruulna uu   ");
    let i = 1;
    while (n > 10) {
        n = n / 10;
        i++;
    }
    console.log("ene toonii oron bol:" + i);
}

function gyhewle() {
    let a = window.prompt("too ogno uu 1-9!");
    let i = 0;
    let arr = [null];
    while (i < a) {
        arr[i] = i;
        i++;
    }
    console.log(arr);
}

function gyhewle2() {
    let a = window.prompt("too ogno uu 1-9!");
    j = 9;
    let i = 0;
    while (j >= a) {
        console.log(j);

        j--;
    }
}

function gyhewle3() {
    let a = window.prompt("too ogno uu 1-9!");
    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= i; j++) {
            console.log(j);
        }
    }
}

function tegshToo() {
    let i = 0;
    while (i <= 100) {
        console.log(i);
        i = i + 2;
    }
}

function chessBoard() {

}
let a = 12;
let car = "car";
let trrue = true;
let A = false;

function bat() {
  let b = 19;
  let c = 100;
  if (c < b) {
    console.log("19 n 100 aas baga");
  } else {
    while (b < c) {
      b++;
    }
    console.log("ingeed a ih");
  }
}

function battet() {
  let q = 546;

  let r = q % 10;
  r = r % 10;
  console.log("last oron");
  console.log(r);
  q = q - r;

  let e = (q / 10) % 10;
  console.log("dundah oron");
  console.log(e);

  q = q - e * 10;
  let t = q / 100;
  console.log("first oron");
  console.log(t);
  let z = t + e + r;
  console.log("tsipruudin niilber: " + z);
}

function oronUrjwer() {
  let q = 98;
  let i = q % 10;
  q = q - i;
  j = q / 10;
  i = i * j;
  console.log("tsiprudin urjwer:" + i);
}

function circle() {
  let r = 5,
    F = 3.14;
  let P = 2 * F * r;
  console.log("perimeter:" + P);
  let V = (4 * F * r * r * r) / 3;
  console.log("ezelhuun bol :" + V);
  let S = r * r * F;
  console.log("bombortsogin 1 talaas n harsan duguin Talbai :" + S);
}
//shine hicheel:
function tegsh() {
  let q = 46,
    r = null;
  r = q % 2;
  if (r === 1) {
    console.log("ene toon sondgoi ym :" + q);
  } else {
    console.log("ene toon tegsh ym :" + q);
  }
}

function tegshA() {
  var q = 1124;
  r = null;
  r = q % 2;
  if (0 > q) {
    console.log("ene too n hasah too ym :" + q);
  } else {
    if (q > 10 && r === 1) {
      console.log("10 as ih bas sondgoi:" + q);
    } else if (q < 10 && r === 1) {
      console.log("10 as baga bas sondgoi:" + q);
    } else if (q > 10 && r === 0) {
      console.log("10 as ih bas tegsh:" + q);
    } else if (q < 10 && r === 0) {
      console.log("10 as baga bas tegsh:" + q);
    }
  }
}

function dun() {
  let q = null;
  if (q > 100 || q < 0) {
    console.log("ene dun bish bn " + q);
  } else if (q == null) {
    console.log("Shalgaltanda oroogui");
  } else if (q >= 80 && 90 > q) {
    console.log("B:" + q);
  } else if (q >= 70 && 80 > q) {
    console.log("C:" + q);
  } else if (q >= 60 && 70 > q) {
    console.log("D:" + q);
  } else if (q < 60) {
    console.log("F:" + q);
  } else if (q >= 90 && 101 > q) {
    console.log("A:" + q);
  }
}

function weekend() {
  q = 5;
  switch (q) {
    case 1:
      console.log("monday");
      break;
    case 2:
      console.log("tuesday");
      break;
    case 3:
      console.log("wednesday");
      break;
    case 4:
      console.log("thursday");
      break;
    case 5:
      console.log("friday");
      break;
    case 6:
      console.log("saturday");
      break;
    case 7:
      console.log("sunday");
      break;
    default:
      console.log("ene odor bish bn");
  }
}

function bodlogo() {
  // console.log(
  //     "Mash olon 0 huleej awsan uyd automate aar tanihgui bolohig anhaarna u!"
  // );
  let a = window.prompt(
    "tanid bga dewsgert \n 1-USD \n 2-MNT \n 3-RUB \n 4-CNY"
  );
  a = 1 * a;
  if (a === 1 || a === 2 || a === 3 || a === 4) {
  } else {
    console.log(
      "Ta ymar turliin dewsgert gedgee oruulagui bn \n eswel useg oruulsan bn \n Ta urdahi 1-4 hurtleh too ogno uu!"
    );
    return 0;
  }

  switch (a) {
    case 1:
      let D = window.prompt("tanid heden USD bga we");
      let b = window.prompt(
        "ta ali  dewsgertluu orulah we  \n 1-MNT \n 2-RUB \n 3-CNY"
      );
      D = D * 1;
      // console.log(typeof D);

      if (typeof D === "number" && D >= 0) {
      } else {
        console.log("Aldaatai utga bn zasaj zuw utga oruulna uu ! ");
        return 0;
      }
      b = 1 * b;
      if (b === 1 || b === 2 || b === 3) {
      } else {
        console.log(
          "Ta dewsgertee oruulagui baina! eswel useg darsan bn \n omno n bairlah toog ogno uu "
        );
        return 0;
      }
      switch (b) {
        case 1:
          D = 3460.25 * D;
          console.log("Belen bolson MNT:" + D);
          break;
        case 2:
          D = 88.63 * D;
          console.log("Belen bolson RUB:" + D);
          break;

        case 3:
          D = 7.08 * D;
          console.log("Belen bolson CNY:" + D);
          break;
        default:
          console.log("deerh toonudig ogno uu");
          break;
      }
      break;
    case 2:
      let T = window.prompt("tanid heden MNT bga we");
      let l = window.prompt(
        "ta ali  dewsgertluu orulah we  \n 1-USD \n 2-RUB \n 3-CNY"
      );
      T = 1 * T;

      if (typeof T === "number" && T >= 0) {
      } else {
        console.log("Aldaatai utga bn zasaj zuw utga oruulna uu ! ");
        return 0;
      }
      l = 1 * l;
      if (l === 1 || l === 2 || l === 3) {
      } else {
        console.log(
          "Ta dewsgertee oruulagui baina! eswel useg darsan bn \n omno n bairlah toog ogno uu "
        );
        return 0;
      }
      switch (l) {
        case 1:
          T = 0.00028912474 * T;
          console.log("Belen bolson MNT:" + T);
          break;
        case 2:
          T = 0.025614137 * T;

          console.log("Belen bolson RUB:" + T);
          break;

        case 3:
          T = 0.0020593288 * T;
          console.log("Belen bolson CNY:" + T);
          break;
        default:
          console.log("deerh toonudig ogno uu");
          break;
      }
      break;
    case 3:
      let R = window.prompt("tanid heden RUB bga we");
      let r = window.prompt(
        "ta ali  dewsgertluu orulah we  \n 1-USD \n 2-MNT \n 3-CNY"
      );
      R = 1 * R;
      if (typeof R === "number" && R >= 0) {
      } else {
        console.log("Aldaatai utga bn zasaj zuw utga oruulna uu ! ");
        return 0;
      }
      r = 1 * r;
      if (r === 1 || r === 2 || r === 3) {
      } else {
        console.log(
          "Ta dewsgertee oruulagui baina! eswel useg darsan bn \n omno n bairlah toog ogno uu "
        );
        return 0;
      }
      switch (r) {
        case 1:
          R = 0.011 * R;
          console.log("Belen bolson USD:" + R);
          break;
        case 2:
          R = 39.02 * R;
          console.log("Belen bolson MNT:" + R);
          break;

        case 3:
          R = 0.0802 * R;
          console.log("Belen bolson CNY:" + R);
          break;
        default:
          console.log("deerh toonudig ogno uu");
          break;
      }
      break;
    case 4:
      let C = window.prompt("tanid heden CNY bga we");
      let c = window.prompt(
        "ta ali  dewsgertluu orulah we  \n 1-USD \n 2-RUB \n 3-MNT"
      );
      C = 1 * C;
      if (typeof C === "number" && C >= 0) {
      } else {
        console.log("Aldaatai utga bn zasaj zuw utga oruulna uu ! ");
        return 0;
      }
      c = 1 * c;
      if (c === 1 || c === 2 || c === 3) {
      } else {
        console.log(
          "Ta dewsgertee oruulagui baina! eswel useg darsan bn \n omno n bairlah toog ogno uu "
        );
        return 0;
      }
      switch (c) {
        case 1:
          C = 0.14 * C;
          console.log("Belen bolson USD:" + C);
          break;
        case 2:
          C = 12.4455 * C;
          console.log("Belen bolson RUB:" + C);
          break;

        case 3:
          C = 485.86 * C;
          console.log("Belen bolson CNY:" + C);
          break;
        default:
          console.log("deerh toonudig ogno uu");
          break;
      }
      break;
    default:
      console.log("deerh 1,2,3,4 ogno uu");
      break;
  }
}

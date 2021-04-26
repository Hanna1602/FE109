// 2
let a1 = 5 % 3
    a2 = 3 % 5;
    a3 = 5 + '3';
    a4 = '5' - 3;
    a5 = 75 + 'кг';
    a6 = 785 * 653;
    a7 = 100 / 25;
    a8 = 0 * 0;
    a9 = 0 / 2;
    a10 = 89 / 0;
    a11 = 98 + 2;
    a12 = 5 - 98;
    a13 = (8 + 56 * 4) / 5;
    a14 = (9 - 12) * 7 / (5 + 2);
    a15 = +'123';
    a16 = 1 || 0;
    a17 = false || true;
    a18 = true > 0;

    console.log (a1, typeof a1);
    console.log (a2, typeof a2);
    console.log (a3, typeof a3);
    console.log (a4, typeof a4);
    console.log (a5, typeof a5);
    console.log (a6, typeof a6);
    console.log (a7, typeof a7);
    console.log (a8, typeof a8);
    console.log (a9, typeof a9);
    console.log (a10, typeof a110);
    console.log (a11, typeof a111);
    console.log (a12, typeof a112);
    console.log (a13, typeof a113);
    console.log (a14, typeof a114);
    console.log (a15, typeof a115);
    console.log (a16, typeof a116);
    console.log (a17, typeof a117);
    console.log (a18, typeof a118);


// 3
    let h = 10;
    let VCilindra = h*a7;
    console.log (VCilindra) 

// 4
    const p = 3.14;
    let r = 5;
        SKruga = p * r**2;

    console.log (SKruga);

// 5
    let a = 5;
        b = 7;
        STrap = h * (a + b)/2;
    console.log (STrap)

// 6
    a = 8;
    b = 3;
    let x = (16-a)/2 + b;
    console.log (x);

    x = (a-15*b)/(b-6);
    console.log (x);

    x = 23780/(3 + a + b);
    console.log (x);


// 8
function greet(name){
    //your code here
    return "Hello, "+name+" how are you doing today?"
  }

// 9
const areaOrPerimeter = function(l , w) {
    // Return your answer
    return (l + w)*2
  };

// 10
function dutyFree(normPrice, discount, hol){
    return Math.floor(hol/(normPrice*(discount/100)))
  }
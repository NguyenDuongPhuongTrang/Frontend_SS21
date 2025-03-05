let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
let c = +prompt("Nhập c");

if(a == 0){
    console.log("Phương trình bậc nhất");
}else{
    let delta = b**2 - 4*a*c;
    if(delta > 0){
        let x1 = (-b + Math.sqrt(Number(delta))) / 2*a;
        let x2 = (-b - Math.sqrt(Number(delta))) / 2*a;
        console.log(`Nghiệm thứ nhất là x1 = ${x1}`);
        console.log(`Nghiệm thứ hai là x2 = ${x2}`);
    }else if(delta === 0){
        let x = -b /2*a;
        console.log(`Phương trình có nghiệm kép x1 = x2 = ${x}`);
    }else{
        console.log("Phương trình vô nghiệm");
    }
}
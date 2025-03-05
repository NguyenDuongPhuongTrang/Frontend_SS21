let a = +prompt("Nhập vào 1 số nguyên bất kì");
let count = 0;

if(Number.isInteger(a) && a >= 0){
    for (let i = 0; i <= a; i++) {
        if(a % i === 0){
            count++;
        }
    }
    if(count == 2){
        alert(`${a} là số nguyên tố`);
    }else{
        alert(`${a} không phải là số nguyên tố`);
    }
}else{
    alert(`Dữ liệu nhập vào không hợp lệ`);
}
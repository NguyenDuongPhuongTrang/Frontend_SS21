let num = 0;
let count = 0;
for (let i = 0; i < 5; i++) {
    num = Number(prompt(`Mời bạn nhập số nguyên thứ ${i+1}`));
    if(num % 2 === 1){
        count++;
    }
}
alert(`Số số lẻ là: ${count}
Số số chẵn là: ${5 - count}`);

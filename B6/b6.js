let n = Number(prompt("Mời bạn nhập số nguyên bất kì"));
for (let i = 1; i <= n; i++) {
    if(n % i === 0){
        console.log(`Ước của ${n} là: ${i}`);
    }
}
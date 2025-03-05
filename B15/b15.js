let money = Number(prompt("Mời bạn nhập số tiền cần quy đổi"));
if(money % 1000 === 0){
    let minMoney = 500000;
    while(money !== 0){
        let count = Math.floor(money / minMoney);
        if(count > 0){
            console.log(`${minMoney.toLocaleString()} - ${count} tờ`);
            money = money - minMoney * count;
        }
        if(minMoney === 500000){
            minMoney = 200000;
        }else if(minMoney === 200000){
            minMoney = 100000;
        }else if(minMoney === 100000){
            minMoney = 50000;
        }else if(minMoney === 50000){
            minMoney = 20000;
        }else if(minMoney === 20000){
            minMoney = 10000;
        }else if(minMoney === 10000){
            minMoney = 5000;
        }else if(minMoney === 5000){
            minMoney = 2000;
        }else if(minMoney === 2000){
            minMoney = 1000;
        }
    }
}
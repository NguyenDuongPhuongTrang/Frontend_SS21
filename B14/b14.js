let html = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 25; j++) {
        if(i === 0 || j === 0 || j === 24 || i === 4){
            html += '*';
        }else{
            html += ' ';
        }
    }
    html += '<br>';
}
document.write('<pre>' + html + '<pre>');

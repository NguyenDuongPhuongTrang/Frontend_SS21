document.write(`<pre>`);

for (let i = 10; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        document.write(`*`);
    }

    document.write(" ".repeat(10)); 

    for (let j = 0; j <= (10 - i); j++) {
        document.write(`*`);
    }

    document.write(" ".repeat(5));

    document.write(" ".repeat(5)); 
    for (let j = 0; j <= (10 - i); j++) {
        document.write(`*`);
    }

    document.write(" ".repeat(5)); 

    document.write(" ".repeat(5)); 
    for (let j = 0; j < i; j++) {
        document.write(`*`);
    }

    document.write("\n"); 
}

document.write(`</pre>`);




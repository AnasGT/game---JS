// ARRAY NUMBERS
let numbers  = [];

for(let i = 1; i<=8; i++){
    numbers.push(i);
    numbers.unshift(i);
}

console.log(numbers);

// PIC - IMG
let tds = document.querySelectorAll("td");

let i = 0;
let random;
while(i < 16){
    random = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
    console.log(random);
    
        if(numbers.indexOf(random) !== -1){
            let img = document.createElement("img");
            img.setAttribute(`src`, `../img/emoji/em${random}.jpeg`);
            tds[i].append(img);
            
            numbers.splice(numbers.indexOf(random), 1);
            console.log(numbers);
        };
    i++;

}


// const lampImage = document.getElementById('lampImage');

// let clicks = 0;
let total = 0
let count = 0

// console.log(lampImage.src);

function onClick() {

  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;

    if (total == count) {
        count = 0;
        total++;
        document.getElementById("clicks").innerHTML = clicks;
        clicks = 0;
        if (lampImage.src == "http://127.0.0.1:5500/02.png") {

            lampImage.src = '01.png'; 
        } else {
            lampImage.src = '02.png'; 
        }

    } else {
        count++;
    }
    
}
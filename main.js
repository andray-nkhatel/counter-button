let zero = 0;
let data = document.querySelector('.data');
let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2');
data.textContent= zero
btn.onclick = () => {
            zero += 1;

            data.textContent = zero;
            btn2.textContent = "Now tap here to reduce!";
        }
btn2.onclick = () => {
            zero -= 1;

            data.textContent = zero;
            btn.textContent = "Tap back here to increase";
        }
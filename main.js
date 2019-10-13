let zero = 0;
let data = document.querySelector('.data');
let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2');
data.textContent= zero
btn.onclick = () => {
            zero += 1;

            data.textContent = zero;
        }
btn2.onclick = () => {
            zero -= 1;

            data.textContent = zero;
        }
let zero = 0;
let data = document.querySelector('.data');
let btn = document.querySelector('.btn');
data.textContent= zero
btn.onclick = () => {
            zero += 1;

            data.textContent = zero;
        }
/**
 * @author Ahmadreza Shamimi
 * @email shentiaspirit@hotmail.com
 * @create date 2021-10-31 16:47:13
 * @modify date 2021-10-31 16:47:14
 * @desc [description]
 */


const text = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let int = setInterval(blur, 30);

function blur() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }

  text.innerText = `${load}%`;
  text.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

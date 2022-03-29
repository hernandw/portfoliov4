const maquina = document.getElementById("textMover");

const maquinaMover = (text = "", time = 200, tag = "") => {
  let arrayCharacter = text.split("");
  tag.innerHTML = "";
  let i = 0;
  let j = text.length;
  let write = setInterval(function () {
    if (i === arrayCharacter.length) {
      tag.innerHTML = text.substring(0, j);
      j--;
      if (j === 0) {
        tag.innerHTML = "";
        i = 0;
        j = text.length;
      }
    } else {
      tag.innerHTML += arrayCharacter[i];
      i++;
    }
  }, time);
};
if(maquinaMover){
maquinaMover("  Full Stack Javascript Developer.  ", 200, maquina);
}

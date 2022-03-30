const maquina = document.getElementById("textMover");

const maquinaMover = (text = "  ", time = 200, tag = "") => {
  let arrayCharacter = text.split("");
  tag.innerHTML = "";
  let i = 2;
  let j = text.length;
  let write = setInterval(function () {
    if (i === arrayCharacter.length) {
      tag.innerHTML = text.substring(2, j);
      j--;
      if (j === 0) {
        tag.innerHTML = "";
        i = 2;
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

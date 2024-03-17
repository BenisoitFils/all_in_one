const pintar = (elemento, color = 'yellow') => {
  elemento.style.backgroundColor = color;
};

const ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
  pintar(ele, color = "red");
});
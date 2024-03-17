
  const pintar = (elemento, color = 'yellow') => {
    elemento.style.backgroundColor = color;
  };
  
  const ele = document.getElementById("ele1");
  ele.addEventListener("click", function() {
    pintar(ele);
  });

  


// Event listeners para cambiar el color al hacer clic
document.getElementById("azul").addEventListener("click", function() {
    this.style.backgroundColor = "black";
  });
  
  document.getElementById("rojo").addEventListener("click", function() {
    this.style.backgroundColor = "black";
  });
  
  document.getElementById("verde").addEventListener("click", function() {
    this.style.backgroundColor = "black";
  });
  
  document.getElementById("amarillo").addEventListener("click", function() {
    this.style.backgroundColor = "black";
  });
  
  // Variable global para almacenar el color dependiendo de la tecla presionada
  let keyColor = "";
  
  document.addEventListener('keydown', function (event) {
    const key = event.key;
    let color = "";
  
    if (key === 'a') {
      color = "pink";
    } else if (key === 's') {
      color = "orange";
    } else if (key === 'd') {
      color = "skyblue";
    } else if (key === 'q') {
      color = "purple";
    } else if (key === 'w') {
      color = "gray";
    } else if (key === 'e') {
      color = "brown";
    }
  
    if (color) {
      keyColor = color;
      document.getElementById("key").style.backgroundColor = keyColor;
    }
  });
  
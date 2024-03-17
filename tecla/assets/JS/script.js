


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
  
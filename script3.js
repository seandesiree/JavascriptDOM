function changeColor() {
    var box = document.getElementById("box");
    var randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
    }
  
function hoverButton() {
    var buttons = document.getElementsByClassName("custom-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
      this.style.backgroundColor = "green";
      this.style.color = "white";
    });
    }
  
    var hoverElement = document.getElementById("hover-element");
        hoverElement.addEventListener("mouseenter", function() {
        this.style.transform = "rotate(90deg)";
    });
  
    hoverElement.addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
    });
    }
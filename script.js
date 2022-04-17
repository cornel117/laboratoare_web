const a = document.getElementById("col_1");
const b = document.getElementById("col_2");
const c = document.getElementById("col_3");
const d = document.getElementById("flag");


function ww() {
  if (document.getElementById("ger").checked) {
    a.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png";
    d.innerHTML = "Germania";
    a.style.backgroundColor = "bisque";
  } else if (document.getElementById("fr").checked) {
    a.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png";
    d.innerHTML = "Franta";
    a.style.backgroundColor = "bisque";
  } else if (document.getElementById("it").checked) {
    a.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png";
    d.innerHTML = "Italia";
    a.style.backgroundColor = "bisque";
  } else if (document.getElementById("be").checked) {
    a.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1920px-Flag_of_Belgium.svg.png";
    d.innerHTML = "Belgia";
    a.style.backgroundColor = "bisque";
  } else if (document.getElementById("el").checked) {
    a.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1920px-Flag_of_Switzerland.svg.png";
    d.innerHTML = "Elvetia";
    a.style.backgroundColor = "bisque";
  }
}

function qq() {
  if (document.getElementById("ja").checked) {
    b.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png";
    d.innerHTML = "Japonia";
    btoa.style.backgroundColor = "bisque";
  } else if (document.getElementById("in").checked) {
    b.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/2560px-Flag_of_Indonesia.svg.png";
    d.innerHTML = "Indonezia";
    b.style.backgroundColor = "bisque";
  } else if (document.getElementById("ch").checked) {
    b.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png";
    d.innerHTML = "China";
    b.style.backgroundColor = "bisque";
  } else if (document.getElementById("ind").checked) {
    b.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png";
    d.innerHTML = "India";
    b.style.backgroundColor = "bisque";
  } else if (document.getElementById("ve").checked) {
    b.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png";
    d.innerHTML = "Vietnam";
    b.style.backgroundColor = "bisque";
  }
}

function zz() {
  if (document.getElementById("br").checked) {
    c.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png";
    d.innerHTML = "Brazilia";
    c.style.backgroundColor = "bisque";
  } else if (document.getElementById("cl").checked) {
    c.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/2560px-Flag_of_Colombia.svg.png";
    d.innerHTML = "Columbia";
    c.style.backgroundColor = "bisque";
  } else if (document.getElementById("ar").checked) {
    c.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/2560px-Flag_of_Argentina.svg.png";
    d.innerHTML = "Argentina";
    c.style.backgroundColor = "bisque";
  } else if (document.getElementById("pe").checked) {
    c.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/2560px-Flag_of_Peru_%28state%29.svg.png";
    d.innerHTML = "Peru";
    c.style.backgroundColor = "bisque";
  } else if (document.getElementById("bo").checked) {
    c.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/2560px-Flag_of_Bolivia_%28state%29.svg.png";
    d.innerHTML = "Bolivia";
    c.style.backgroundColor = "bisque";
  }
}

var firstCol = document.getElementById("firstcol");
var secondCol = document.getElementById("secondcol");
var thirdCol = document.getElementById("thirdcol");

function getColor() {
  const colors = ["00", "0F", "5F", "AF", "FF"];
  const fisrIndex = getActiveIndex(firstCol);
  console.log(fisrIndex);
  const red = colors[fisrIndex];
  const green = colors[getActiveIndex(secondCol)];
  const blue = colors[getActiveIndex(thirdCol)];
  return `#${red}${green}${blue}`;
}

function resetColors() {
  firstCol.style.borderColor = "transparent";
  secondCol.style.borderColor = "transparent";
  thirdCol.style.borderColor = "transparent";
}

function getActiveIndex(element) {
  let i = 0;
  const inputs = element.getElementsByTagName("input");
  for (i = 0; i < 5; i++) {
    if (inputs.item(i).checked) {
      return i;
    }
  }

  return i < 5 ? i : 0;
}

firstCol.addEventListener("click", () => {
  resetColors();
  firstCol.style.borderColor = getColor();
});
secondCol.addEventListener("click", () => {
  resetColors();
  secondCol.style.borderColor = getColor();
});
thirdCol.addEventListener("click", () => {
  resetColors();
  thirdCol.style.borderColor = getColor();
});

const f1 = document.getElementById("col_1");
const f2 = document.getElementById("col_2");
const f3 = document.getElementById("col_3");

function clearFlag() {
  document.getElementById("flag").innerHTML = "Flag";
  f1.style.backgroundColor = "gray";
  f1.src = "NULL";
  f2.style.backgroundColor = "gray";
  f2.src = "NULL";
  f3.style.backgroundColor = "gray";
  f3.src = "NULL";
}

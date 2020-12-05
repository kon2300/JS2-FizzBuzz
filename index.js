

function addBtn() { 
  const fizz = document.getElementById("fizz").value;
  const buzz = document.getElementById("buzz").value;
  const answer = document.getElementById("answer");
  fizz - 0;
  buzz - 0;


  const eraseFizzBuzz = () => {  
    if (answer.hasChildNodes()) {
      for(let i = answer.childNodes.length -1; i >= 0; i --) {
        answer.removeChild(answer.childNodes[i]);
      }
    }
  };

  const culculationFizzBuzz = () => {  
    for (let i = 1; i < 100; i++) {
      const p = document.createElement("p");
      if (i % fizz === 0 && i % buzz === 0) {
        p.textContent = `FizzBuzz ${i}`;
      } else if (i % fizz === 0) {
        p.textContent = `Fizz ${i}`;
      } else if (i % buzz === 0) {
        p.textContent = `Buzz ${i}`;
      }
      answer.appendChild(p);
    }
  };
  
  const integerCheck = (str) => {
    const reg = new RegExp(/^[0-9]+$/);
    const res = reg.test(str);
    return res;
  };
  
  if (!integerCheck(fizz) && !integerCheck(buzz)) {
    answer.textContent = ("");
    answer.textContent = ("整数値を入力してください");
  } else if (!integerCheck(fizz) || !integerCheck(buzz)) {
    answer.textContent = ("");
    answer.textContent = ("整数値を入力してください");
  } else if (integerCheck(fizz) && integerCheck(buzz)) {
    answer.textContent = ("");
    eraseFizzBuzz();
    culculationFizzBuzz();
  };
};


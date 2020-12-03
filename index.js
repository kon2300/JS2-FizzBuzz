

function addBtn() { 
  const fizz = document.getElementById("fizz").value;
  const buzz = document.getElementById("buzz").value;
  const answer = document.getElementById("answer");
  


  const erase = () => {  
    if (answer.hasChildNodes()) {
      for(let i = answer.childNodes.length -1; i >= 0; i --) {
        answer.removeChild(answer.childNodes[i]);
      }
    }
  };

  const culculation = () => {  
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
  
  const check = (str) => {
    const reg = new RegExp(/^[0-9]+$/);
    const res = reg.test(str);
    return res;
  };
  
  if (!check(fizz) && !check(buzz)) {
    answer.textContent = ("");
    answer.textContent = ("整数値を入力してください");
  } else if (!check(fizz) || !check(buzz)) {
    answer.textContent = ("");
    answer.textContent = ("整数値を入力してください");
  } else if (check(fizz) && check(buzz)) {
    answer.textContent = ("");
    erase();
    culculation();
  };

  
};


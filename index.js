

function addBtn() { 
  const nanFizz = document.getElementById("fizz").value;
  const nanBuzz = document.getElementById("buzz").value;
  const answer = document.getElementById("answer");
  // 文字列型を数値型に変換
  const fizz = parseFloat(nanFizz);
  const buzz = parseFloat(nanBuzz);

  const eraseNode = () => {  
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
  
  const checkInteger = (str) => {
    const reg = new RegExp(/^[0-9]+$/);
    const res = reg.test(str);
    return res;
  };
  
  if (!checkInteger(fizz) && !checkInteger(buzz)) {
    answer.textContent = ("");
    answer.textContent = ("整数値を入力してください");
  } else if (!checkInteger(fizz) || !checkInteger(buzz)) {
    answer.textContent = ("");
    answer.textContent = ("整数値を入力してください");
  } else if (checkInteger(fizz) && checkInteger(buzz)) {
    answer.textContent = ("");
    eraseNode();
    culculationFizzBuzz();
  };
};


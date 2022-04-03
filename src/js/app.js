// Собственные скрипты
"use strict"


let formWidthNotes = () => {
  const form = document.forms[0];
  const formArr = Array.from(form);
  const validFormArr = [];
  const button = form.elements["button"];


  formArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
      el.setAttribute("is-valid", "0");
      validFormArr.push(el);
    }
  });

  form.addEventListener("input", inputHandler);
  button.addEventListener("click", buttonHandler);


  function inputHandler({target}) {
    if (target.hasAttribute("data-reg")) {
      inputCheck(target);
    }
  }

  function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
      el.setAttribute("is-valid", "1");
      el.style.border = "2px solid rgb(0, 196, 0)";
    } else {
      el.setAttribute("is-valid", "0");
      el.style.border = "2px solid rgb(255, 0, 0)";
    }
  }

  function buttonHandler(el) {
    const allValid = [];
    validFormArr.forEach((el) => {
      allValid.push(el.getAttribute("is-valid"));
    });
    const isAllValid = allValid.reduce((acc, current) => {
      return acc && current;
    });

    if (isAllValid === "1") {
      let subButton = document.querySelector("#submitForm").click()
      const name = document.querySelector('.name')
      const tel = document.querySelector('.tel')
      const text = document.querySelector(".text")
      const body = JSON.stringify({
        name: name.value,
        tel: tel.value,
        email: "sviat.t123@gmail.com",
        detail: text.value
      })
      fetch(" https://cars-test-bd.herokuapp.com/mails/send", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          if (res.status === "ok") {
            let subButton = document.querySelector("#submitForm").click();
            let reset = document.forms[0].reset()
          } else {
            let ErrButton = document.querySelector("#ErrForm").click()
            let reset = document.forms[0].reset()
          }

        })

    }
  }
}


function formInDownOfPage (){
  const form = document.forms[1];
  const formArr = Array.from(form);
  const validFormArr = [];
  const button = form.elements["button"];

  formArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
      el.setAttribute("is-valid", "0");
      validFormArr.push(el);
    }
  });

  form.addEventListener("input", inputHandler);
  button.addEventListener("click", buttonHandler);


  function inputHandler({target}) {
    if (target.hasAttribute("data-reg")) {
      inputCheck(target);
    }
  }

  function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
      el.setAttribute("is-valid", "1");
      el.style.border = "2px solid rgb(0, 196, 0)";
    } else {
      el.setAttribute("is-valid", "0");
      el.style.border = "2px solid rgb(255, 0, 0)";
    }
  }

  function buttonHandler(el) {
    const allValid = [];
    validFormArr.forEach((el) => {
      allValid.push(el.getAttribute("is-valid"));
    });
    const isAllValid = allValid.reduce((acc, current) => {
      return acc && current;
    });

    if (isAllValid === "1") {
      let subButton = document.querySelector("#submitForm").click()
      const name = document.querySelector('.name1')
      const tel = document.querySelector('.tel1')

      const body = JSON.stringify({
        name: name.value,
        tel: tel.value,
        email: "sviat.t123@gmail.com",

      })
      fetch(" https://cars-test-bd.herokuapp.com/mails/send", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          if (res.status === "ok") {
            let subButton = document.querySelector("#submitForm").click();
            let reset = document.forms[1].reset()
          } else {
            let ErrButton = document.querySelector("#ErrForm").click()

          }
          let reset = document.forms[1].reset()
        })
    }
  }
 
}


function formInModal (){
  const form = document.forms[2];
  const formArr = Array.from(form);
  const validFormArr = [];
  const button = form.elements["button"];

  formArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
      el.setAttribute("is-valid", "0");
      validFormArr.push(el);
    }
  });

  form.addEventListener("input", inputHandler);
  button.addEventListener("click", buttonHandler);


  function inputHandler({target}) {
    if (target.hasAttribute("data-reg")) {
      inputCheck(target);
    }
  }
  inputCheck()
  function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
      el.setAttribute("is-valid", "1");
      el.style.border = "2px solid rgb(0, 196, 0)";
    } else {
      el.setAttribute("is-valid", "-1");
      el.style.border = "2px solid rgb(255, 0, 0)";
    }
  }

  function buttonHandler(el) {
    const allValid = [];
    validFormArr.forEach((el) => {
      allValid.push(el.getAttribute("is-valid"));
    });
    const isAllValid = allValid.reduce((acc, current) => {
      return acc && current;
    });

    if (isAllValid === "1") {
      console.log("yes")
      const name = document.querySelector('.name2')
      const tel = document.querySelector('.tel2')
      const body = JSON.stringify({
        name: name.value,
        tel: tel.value,
        email: "sviat.t123@gmail.com",
      })
      fetch(" https://cars-test-bd.herokuapp.com/mails/send", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          if (res.status === "ok") {
            let closeModal = document.querySelector("#closeModal").click();
            let subButton = document.querySelector("#submitForm").click();
            let reset = document.forms[2].reset()
          } else {
            let ErrButton = document.querySelector("#ErrForm").click()
            let reset = document.forms[2].reset()
          }
        })
    }
  }

}


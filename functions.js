let userList = [];

function addUserToList(name, lastname, gender, height, weight, result) {
  let newUser = {
    name: name,
    lastname: lastname,
    gender: gender,
    height: height,
    weight: weight,
    result: result,
  };

  console.log(newUser);
  userList.push(newUser);
  localStorageUserList(userList);
}

function localStorageUserList(usersList) {
  localStorage.setItem("localUserList", JSON.stringify(usersList));
}

const calculate = document.getElementById("calculate");

function calculateImc() {
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("last-name").value;
  const gender = document.getElementById("gender").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  if (name !== "" && lastname !== "" && height !== "" && weight !== "") {
    const valueIMC = (weight / (height * height)).toFixed(2);

    let classification = "";

    if (valueIMC < 18.5) {
      classification = "por debajo del peso ideal.";
    } else if (valueIMC >= 18.5 && valueIMC <= 24.99) {
      classification = "saludable. Felicitaciones!";
    } else if (valueIMC >= 25 && valueIMC <= 29.99) {
      classification = "con sobrepeso.";
    } else if (valueIMC >= 30 && valueIMC <= 39.99) {
      classification = "con obesidad.";
    } else if (valueIMC >= 40) {
      classification = "obesidad extrema o de alto riesgo.";
    }

    let imc = valueIMC + " " + classification;
    addUserToList(name, lastname, gender, height, weight, imc);

    result.textContent = `Hola ${name} ${lastname} tu IMC es: ${valueIMC}. Te encuentras ${classification}`;
  } else {
    result.textContent = "Por favor diligencie todos los campos.";
  }
}

calculate.addEventListener("click", calculateImc);

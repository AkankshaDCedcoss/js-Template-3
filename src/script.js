function myfunction() {
  var name = parseInt(document.getElementById("name").value);
  var age = parseInt(document.getElementById("age").value);
  var weight = parseInt(document.getElementById("weight").value);
  if (age >= 5 && age <= 7) {
    if (weight < 15) {
      document.getElementById("output").innerHTML =
        "Hello   " +
        name +
        "  Your Weight is less than recommended value of 30 KG at an age of  " +
        age;
    }
    if (weight >= 15 || weight <= 20) {
      document.getElementById("output").innerHTML =
        "Hello !!!  " + name + "  Your Weight is Perfect  .";
    }
    if (weight > 20) {
      document.getElementById("output").innerHTML =
        "Hello   " +
        name +
        "  Your Weight is greater than recommended value of 50 KG at an age of  " +
        age;
    }
  }
  if (age >= 8 && age <= 10) {
    if (weight > 21) {
      document.getElementById("output").innerHTML =
        "Hello   " +
        name +
        "  Your Weight is less than recommended value of 30 KG at an age of  " +
        age;
    }
    if (weight >= 21 || weight <= 25) {
      document.getElementById("output").innerHTML =
        "Hello !!!  " + name + "  Your Weight is Perfect .";
    }
    if (weight > 25) {
      document.getElementById("output").innerHTML =
        "Hello   " +
        name +
        "  Your Weight is greater than recommended value of 50 KG at an age of  " +
        age;
    }
  }
  if (age >= 11 && age <= 15) {
    if (weight > 26) {
      document.getElementById("output").innerHTML =
        "Hello   " +
        name +
        "  Your Weight is less than recommended value of 30 KG at an age of  " +
        age;
    }
    if (weight >= 26 || weight <= 30) {
      document.getElementById("output").innerHTML =
        "Hello !!!  " + name + "  Your Weight is Perfect .";
    }
    if (weight > 30) {
      document.getElementById("output").innerHTML =
        "Hello   " +
        name +
        "  Your Weight is greater than recommended value of 50 KG at an age of  " +
        age;
    }
  }
  if (age >= 16 && age <= 20) {
    if (weight > 31) {
      document.getElementById("output").innerHTML =
        "Hello   " +
        name +
        "  Your Weight is less than recommended value of 30 KG at an age of  " +
        age;
    }
    if (weight >= 31 || weight <= 40) {
      document.getElementById("output").innerHTML =
        "Hello !!!  " + name + "  Your Weight is Perfect . ";
    }
    if (weight > 40) {
      document.getElementById("output").innerHTML =
        "Hello   " +
        name +
        "  Your Weight is greater than recommended value of 50 KG at an age of  " +
        age;
    }
  }
}

const types = [
  "leg",
  "hypotenuse",
  "adjacent angle",
  "opposite angle",
  "angle",
];

function triangle(val1, type1, val2, type2) {
  let a, b, c, alpha, beta;

  if (!types.includes(type1) || !types.includes(type2)) {
    return "failed";
  }
  if (val1 <= 0 || val2 <= 0) {
    return "Values must be >0";
  }

  if (
    (type1 === "leg" && type2 === "hypotenuse") ||
    (type1 === "hypotenuse" && type2 === "leg")
  ) {
    a = type1 === "leg" ? val1 : val2;
    c = type2 === "hypotenuse" ? val2 : val1;

    if (a >= c) {
      return "Leg is bigger than hypotenuse";
    }

    b = Math.sqrt(c ** 2 - a ** 2);
    alpha = Math.asin(a / c) * (180 / Math.PI);
    beta = 90 - alpha;
  } else if (
    (type1 === "adjacent angle" && type2 === "leg") ||
    (type1 === "leg" && type2 === "adjacent angle")
  ) {
    b = type2 === "leg" ? val2 : val1;
    alpha = type1 === "adjacent angle" ? val1 : val2;

    if (alpha >= 90) {
      return "Angle must be < 90";
    }

    if (alpha > 89.9999) {
      return "Triangle doesn't exists";
    }

    a = b * Math.tan(alpha * (Math.PI / 180));
    c = b / Math.cos(alpha * (Math.PI / 180));
    beta = 90 - alpha;
  } else if (
    (type1 === "opposite angle" && type2 === "leg") ||
    (type1 === "leg" && type2 === "opposite angle")
  ) {
    a = type2 === "leg" ? val2 : val1;
    alpha = type1 === "opposite angle" ? val1 : val2;

    if (alpha >= 90) {
      return "Angle must be < 90";
    }

    if (alpha > 89.9999) {
      return "Triangle doesn't exists";
    }

    c = a / Math.sin(alpha * (Math.PI / 180));
    beta = 90 - alpha;
    b = a * Math.tan(beta * (Math.PI / 180));
  } else if (type1 === "leg" && type2 === "leg") {
    a = val1;
    b = val2;

    c = Math.sqrt(a ** 2 + b ** 2);
    alpha = Math.asin(a / c) * (180 / Math.PI);
    beta = 90 - alpha;
  } else if (
    (type1 === "angle" && type2 === "hypotenuse") ||
    (type1 === "hypotenuse" && type2 === "angle")
  ) {
    c = type2 === "hypotenuse" ? val2 : val1;
    alpha = type1 === "angle" ? val1 : val2;

    if (alpha >= 90) {
      return "Angle must be < 90";
    }

    if (alpha > 89.9999) {
      return "Triangle doesn't exists";
    }

    beta = 90 - alpha;
    a = c * Math.cos(alpha * (Math.PI / 180));
    b = c * Math.sin(alpha * (Math.PI / 180));
  } else {
    console.log("Try again");
    return "failed";
  }

  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  console.log(`c = ${c}`);
  console.log(`alpha = ${alpha}`);
  console.log(`beta = ${beta}`);

  return "success";
}

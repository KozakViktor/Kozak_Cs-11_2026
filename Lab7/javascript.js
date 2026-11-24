const button = document.querySelector("button");

button.addEventListener("click", function () {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);

    if (a <= 0 || b <= 0 || c <= 0 || !(a + b > c) || !(c + b > a) || !(a + c > b)) {
        document.getElementById("result").textContent = "Error: These sides cannot form a triangle";
        return;
    }

    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    const result = document.getElementById("result").textContent = "Result: " + area.toFixed(2);
});


const button2 = document.querySelector("#button-2");

button2.addEventListener("click", function () {
    const a2 = Number(document.getElementById("a2").value);
    const b2 = Number(document.getElementById("b2").value);
    const degree = Number(document.getElementById("degree").value);

    if (a2 <= 0 || b2 <= 0 || degree <= 0 || degree >= 180) {
        document.getElementById("result2").textContent = "Error: Please check the side lengths and angle";
        return;
    }

    const pi_degree = degree * Math.PI / 180;
    const sin = Math.sin(pi_degree);
    const area = 1 / 2 * a2 * b2 * sin;
    const result = document.getElementById("result2").textContent = "Result: " + area.toFixed(2);
});


const button3 = document.querySelector("#button-3");

button3.addEventListener("click", function () {
    const a3 = Number(document.getElementById("a3").value);
    const h = Number(document.getElementById("h").value);

    if (a3 <= 0 || h <= 0) {
        document.getElementById("result3").textContent = "Error: The side length and height must be greater than zero";
        return;
    }

    const area = a3 * h / 2;
    const result = document.getElementById("result3").textContent = "Result: " + area.toFixed(2);
});


const button5 = document.querySelector("#button-5");

button5.addEventListener("click", function () {
    const a5 = Number(document.getElementById("a5").value);
    const b5 = Number(document.getElementById("b5").value);
    const c5 = Number(document.getElementById("c5").value);
    const R = Number(document.getElementById("R").value);

    if (a5 <= 0 || b5 <= 0 || c5 <= 0 || !(a5 + b5 > c5) || !(c5 + b5 > a5) || !(a5 + c5 > b5) || R <= 0) {
        document.getElementById("result5").textContent = "Error: These sides cannot form a triangle or the radius is invalid";
        return;
    }

    const area = (a5 * b5 * c5) / (4 * R);
    const result = document.getElementById("result5").textContent = "Result: " + area.toFixed(2);
});


const button6 = document.querySelector("#button-6");

button6.addEventListener("click", function () {
    const number = document.getElementById("number").value;

    if (number === "") {
        document.getElementById("result6").textContent = "Please enter a number!";
        return;
    }

    const reversed = number.split("").reverse().join("");

    if (number === reversed) {
        document.getElementById("result6").textContent = "Result: The number is a palindrome";
    }

    else {
        document.getElementById("result6").textContent = "Result: The number is not a palindrome";
    }
});


const button7 = document.querySelector("#button-7");

button7.addEventListener("click", function () {
    const word1 = document.getElementById("word-1").value;
    const word2 = document.getElementById("word-2").value;

    if (word1 === "" || word2 === "") {
        document.getElementById("result7").textContent = "Please enter both words";
        return;
    }

    const letters_word1 = word1.split("").sort().join("");
    const letters_word2 = word2.split("").sort().join("");

    if (letters_word1 === letters_word2) {
        document.getElementById("result7").textContent = "Result: The words are anagrams";
    }

    else {
        document.getElementById("result7").textContent = "Result: The words are not anagrams";
    }
});


const button8 = document.querySelector("#button-8");

button8.addEventListener("click", function () {
    const number2 = Number(document.getElementById("number2").value);

    if (number2 <= 0 || !Number.isInteger(number2)) {
        document.getElementById("result8").textContent = "Please enter a positive integer";
        return;
    }

    let previous = 1;
    let current = 1;

    for (let i = 3; i <= number2; i++) {
        let next = previous + current;
        previous = current;
        current = next;
    }

    document.getElementById("result8").textContent = "Fibonacci number: " + current;
});


const button9 = document.querySelector("#button-9");

button9.addEventListener("click", function () {
    const number3 = Number(document.getElementById("number3").value);

    if (number3 <= 0 || !Number.isInteger(number3)) {
        document.getElementById("result9").textContent = "Please enter a positive integer";
        return;
    }

    let previous = 1;
    let current = 1;

    while (current < number3) {
        let next = previous + current;
        previous = current;
        current = next;
    }

    if (current === number3) {
        document.getElementById("result9").textContent = "The number belongs to the Fibonacci sequence";
    }
    else {
        document.getElementById("result9").textContent = "The number does not belong to the Fibonacci sequence";
    }
});
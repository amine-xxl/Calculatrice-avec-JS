let input = "";
let historique = "";

function button_number(value) {
    if (value === '=') {
        calculer();
    } else {
        input += value;
        affichage();
    }
}

function affichage() {
    document.getElementById("box").textContent = input || "zéro";
    document.getElementById("last_operation_history").textContent = historique;
}

function calculer() {
    try {
        const resultat = eval(input);
        historique += input + ' = ' + resultat + '\n';
        input = resultat.toString();
        affichage();
    } catch (error) {
        input = "";
        affichage();
        alert("Invalid Calculation");
    }
}

function clear_entry() {
    input = "";
    affichage();
}

function button_clear() {
    input = "";
    historique = "";
    affichage();
}

function backspace_remove() {
    input = input.slice(0, -1);
    affichage();
}

function calculate_percentage() {
    if (input) {
        const resultat = parseFloat(input) / 100;
        input = resultat.toString();
        affichage();
    }
}

function division_one() {
    if (input) {
        input = (1 / parseFloat(input)).toString();
        affichage();
    }
}

function power_of() {
    if (input) {
        input = (Math.pow(parseFloat(input), 2)).toString();
        affichage();
    }
}

function square_root() {
    if (input) {
        input = (Math.sqrt(parseFloat(input))).toString();
        affichage();
    }
}

function plus_minus() {
    if (input) {
        input = (parseFloat(input) * -1).toString();
        affichage();
    }
}
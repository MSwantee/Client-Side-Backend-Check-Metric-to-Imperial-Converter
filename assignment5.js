function convert() {
    const val = Number(document.getElementById("inputValue").value);
    const type = document.getElementById("conversionType").value;
    const resultElement = document.getElementById("resultText");
    if (document.getElementById("inputValue").value === "") {
        resultElement.innerHTML = "Please enter a value.";
        resultElement.style.color = "red";
        return;
    }
    resultElement.style.color = "black";
    let result = 0;
    let unit = "";
    switch (type) {
        case "cToF":
            result = (val * 9/5) + 32;
            unit = "°F";
            resultElement.innerHTML = `${val}°C = ${result.toFixed(2)} ${unit}`;
            break;
        case "kmToMi":
            result = val * 0.621371;
            unit = "miles";
            resultElement.innerHTML = `${val} km = ${result.toFixed(2)} ${unit}`;
            break;
        case "mToFt":
            result = val * 3.28084;
            unit = "feet";
            resultElement.innerHTML = `${val} meters = ${result.toFixed(2)} ${unit}`;
            break;
        case "kgToLb":
            result = val * 2.20462;
            unit = "pounds";
            resultElement.innerHTML = `${val} kg = ${result.toFixed(2)} ${unit}`;
            break;
        default:
            resultElement.innerHTML = "Selection error.";
    }
}
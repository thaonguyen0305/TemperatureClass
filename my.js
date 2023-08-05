class Temperature{
    Celsius;

    constructor(Celsius) {
        this.Celsius = Celsius;
        this.minCelsius = -273;
    }

    getCtoF() {
        return this.Celsius*1.8 + 32;
    }

    getCtoK() {
        return this.Celsius + 273.15;
    }
}

let temperature = new Temperature(25);
let f = temperature.getCtoF();
let k = temperature.getCtoK();

document.write("Nhiệt độ F : " + f + "<br>");
document.write("Nhiệt độ K : " + k);
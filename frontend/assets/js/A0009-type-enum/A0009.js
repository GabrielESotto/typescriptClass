"use strict";
// Enumerate
var Cores;
(function (Cores) {
    Cores[Cores["VERMELHO"] = 10] = "VERMELHO";
    Cores[Cores["AZUL"] = 100] = "AZUL";
    Cores[Cores["AMARELO"] = 200] = "AMARELO";
    Cores["ROXO"] = "ROXO";
    Cores[Cores["VERDE"] = 201] = "VERDE";
    Cores[Cores["ROSA"] = 202] = "ROSA";
})(Cores || (Cores = {}));
function chooseColor(cor) {
    console.log(Cores[cor]);
}
chooseColor(Cores.AZUL);
//# sourceMappingURL=A0009.js.map
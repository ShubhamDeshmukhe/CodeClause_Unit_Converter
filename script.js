var celsius = document.getElementById('celsius');
var fahrenheit = document.getElementById('fahrenheit');

celsius.addEventListener("input", function () {
    let c = this.value;
    let f = (c * 9 / 5) + 32;
    if (!Number.isInteger(f)) {
        f = f.toFixed(2);
    };
    fahrenheit.value = f;
});
fahrenheit.addEventListener("input", function () {
    let f = this.value;
    let c = (f - 32) / (9 / 5);
    if (!Number.isInteger(c)) {
        c = c.toFixed(2);
    };
    celsius.value = c;
});


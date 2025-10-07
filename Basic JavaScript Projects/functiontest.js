document.addEventListener('DOMContentLoaded', function () {
    function multFunction(x, y, z) { //Function to compute the product of x, y, and z
        return (x * y) * z
    }

    let result = multFunction(3, 5, 3);
    document.getElementById("mult").innerHTML = "The result is: " + result;
});

function addFunction() {
    var addition = 2 + 2;
    document.getElementById("add").innerHTML = "2 + 2 = " + addition;
}
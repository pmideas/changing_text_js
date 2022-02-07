var cross = [{
    name: "First."
},
{
    name: "Second.."
},
{
    name: "Third..."
},
{
    name: "Fourth...."
},
{
    name: "--AND--"
}
];

var currentWords = 0;

function display() {
var text = document.getElementById("cross").innerHTML = cross[currentWords].name;

}
display()


var button = document.getElementById("next");
button.addEventListener("click", function () {
// console.log("clicked")

if (currentWords == cross.length - 1) {
    // console.log(cross.length);
    var alert = document.getElementById("alert").innerHTML = "Oops,Better Luck...!!!"
} else {

    currentWords++

    display()
}
// console.log(currentWords)

})
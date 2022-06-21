let colour_one_object;
let colour_two_object;

function changeColour1(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    colour_one_object.style.backgroundColor = '#' + randomColor;
    colour_one_object.innerHTML = '#' + randomColor.toUpperCase();
};

function changeColour2(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    colour_two_object.style.backgroundColor = '#' + randomColor;
    colour_two_object.innerHTML = '#' + randomColor.toUpperCase();
};


window.onload = function(){
    colour_one_object = document.getElementById("colour1");
    colour_two_object = document.getElementById("colour2");
    colour_one_object.addEventListener("click", changeColour1);

    colour_two_object.addEventListener("click", changeColour2);
};

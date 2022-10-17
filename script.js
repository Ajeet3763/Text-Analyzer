//small Function start here...
function small() {
    var text = document.getElementById("txt1").value;
    var val = text.toLowerCase();
    document.getElementById("txt").innerHTML = val;
}

//Upper Function start here...
function upper() {
    var text = document.getElementById("txt1").value;
    var val = text.toUpperCase();
    document.getElementById("txt").innerHTML = val;
}

//Caps Function start here...
function caps() {
    var text = document.getElementById("txt1").value;
    var spl = text.split(" ");
    for (i = 0; i < spl.length; i++) {
        spl[i] = spl[i][0].toUpperCase() + spl[i].substring(1);
    }
    var output = spl.join(" ");
    document.getElementById("txt").innerHTML = output;
}

//clear function start here....
function remove() {
    var clr = document.getElementById("txt1");
    if (clr.value == "") {
        alert("Text area is Already Clear.");
    }
    else {
        clr.value = "";
    }
}

//Char Count...
function count() {
    document.addEventListener('keyup', (p) => {
        var val = document.getElementById("txt1").value;
        document.getElementById("value").innerHTML = val.length;

        // Word Count...
        var count = 0;
        for (i = 0; i < val.length; i++) {
            var c = val.charAt(i);
            var chr = val.charAt(i + 1);
            if (c == " " && chr != '') {
                count = count + 1;
            }
        }
        document.getElementById("words").innerHTML = count;
    });
}


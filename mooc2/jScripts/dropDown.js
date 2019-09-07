function showData() {
    var theSelect = chooseName.selectName;
    var firstP = document.getElementById('firstP');
    var secondP = document.getElementById('secondP');

    if (theSelect[theSelect.selectedIndex].value == "A") {
        firstP.innerHTML = ("כל הכבוד");
        secondP.innerHTML = ("");
    }
    else if (theSelect[theSelect.selectedIndex].value == "B") {
        firstP.innerHTML = ("");
        secondP.innerHTML = ("נסה שוב");
    }
    else if (theSelect[theSelect.selectedIndex].value == "C") {
        firstP.innerHTML = ("");
        secondP.innerHTML = ("נסה שוב");
    }
    else if (theSelect[theSelect.selectedIndex].value == "D") {
        firstP.innerHTML = ("");
        secondP.innerHTML = ("נסה שוב");
    }
    else {
        firstP.innerHTML = ("");
        secondP.innerHTML = ("");
    }
}


function showData2() {
    var theSelect = chooseName2.selectName2;
    var firstP = document.getElementById('firstP2');
    var secondP = document.getElementById('secondP2');

    if (theSelect[theSelect.selectedIndex].value == "A") {
        firstP.innerHTML = ("");
        secondP.innerHTML = ("נסה שוב");
    }
    else if (theSelect[theSelect.selectedIndex].value == "B") {
        firstP.innerHTML = ("כל הכבוד");
        secondP.innerHTML = ("");
    }
    else if (theSelect[theSelect.selectedIndex].value == "C") {
        firstP.innerHTML = ("");
        secondP.innerHTML = ("נסה שוב");
    }
    else if (theSelect[theSelect.selectedIndex].value == "D") {
        firstP.innerHTML = ("");
        secondP.innerHTML = ("נסה שוב");
    }
    else {
        firstP.innerHTML = ("");
        secondP.innerHTML = ("");
    }
}

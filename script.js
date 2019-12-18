var alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guessedLetters = [];
guessesLeft = 6;
word = "";
c = 0;
var images = ["img/3.png","img/2.png","img/5.png","img/8.png","img/6.png","img/7.png","img/4.png"]


  function whichCategory(){
      var x =  document.getElementById("category").value;
      var y =  document.getElementById("difficulty").value;
if(x == "1" && y == "1"){
    var arr = ["Canada", "France", "China", "Mexico", "Brazil", "Japan", "Spain", "England", "Russia", "Italy",
        "Germany", "Greece", "Turkey", "Australia", "Poland", "Thailand", "Colombia", "Egypt", "Vietnam",
        "Bolivia", "Venezuela"

    ];
} else if(x == "1" && y == "2"){
    var arr = ["Argentina", "Chile", "Peru", "Ecuador", "Iceland", "Norway", "Sweden", "Portugal", "Ireland", "Norway",
        "Denmark", "Finland", "Austria", "Ukraine", "Croatia", "Netherlands", "Philippines", "Indonesia",
        "Singapore", "Serbia", "Morocco", "Taiwan"

    ];

}else if(x == "1" && y == "3"){
    var arr = [ "Uruguay", "Algeria", "Senegal", "Slovakia", "Bulgaria", "Israel", "Pakistan", "Bulgaria", "Ethiopia",
        "Somalia", "Zimbabwe", "Yemen", "Oman", "Bangladesh", "Mongolia", "Afghanistan", "Kazakhstan",
        "Georgia", "Lithuania", "Latvia", "Estonia", "Kenya"

    ];
}else if (x == "2" && y == "1"){
    var arr = ["redbull","monster","mountaindew","rockstar"

    ];
}else if(x == "2" && y == "2"){
    var arr = ["relentless","rise","burn","adrenaline","quake"

    ];

}else if(x == "2" && y == "3"){
    var arr = ["bang","spike","nos","yerbamate","celcius"

    ];
}else if(x == "3" && y == "1"){
    var arr = ["hummingbird","sparrow","chicken","duck","seagull","goose",""

    ];
}else if(x == "3" && y == "2"){
    var arr = ["parrot","owl","falcon","bluebird","cockatiel"

    ];

}else if(x == "3" && y == "3") {
    var arr = ["skylark", "booby", "passerine", "loons", "eagle"

    ];
}

      word = arr[Math.floor(Math.random() * arr.length)].toLowerCase();

}



function buttonStuff(){
    var buton;
    var div = document.getElementById("buttonBucket");



        for(var i = 0; i < alphabet.length;i++) {
            buton = document.createElement("button");
            buton.setAttribute("class", "ltrbutton");
            buton.setAttribute("value", alphabet[i]);
            buton.setAttribute("onclick", "buttonHandler(this)");

            buton.innerHTML = alphabet[i];
            div.appendChild(buton);
            buton.onclick = guessletter;
        }
}
function buttonHandler(button){
    document.getElementById("buttonThrow").innerHTML= button.value;
}

function startGame(){
    var e = document.getElementsByClassName("ltrbutton");
    for(var i = 0;i < e.length;i++){
        e[i].disabled = false;
    }
    c = 0;
    document.getElementById("image").src =  images[0];
    guessesLeft = 6;
    whichCategory();
    guessedLetters = [];
    document.getElementById("guesses").innerHTML = guessesLeft;
    document.getElementById("win").innerHTML = "";
    printWord();

}
function printWord(){
    n = 0;
    var answ = "";
    for(var i = 0; i < word.length; i++)
    if(guessedLetters.indexOf(word[i]) > -1 ){
    answ+= word[i];
    n++
    }else{
        answ += "_ ";
    }
    if(answ == word){
        document.getElementById("win").innerHTML = "congrats you win"
        var e = document.getElementsByClassName("ltrbutton");
        for(var i = 0;i < e.length;i++){
            e[i].disabled = true;
        }

    }
    document.getElementById("word").innerHTML = answ;

}
function guessletter(button) {
    var r = this.value;
    if(!(word.includes(r))) {
        guessesLeft = guessesLeft - 1;
        c = c + 1;
        document.getElementById("image").src=  images[c];
    }
    if (guessesLeft == 0){
        lost()

    }
    document.getElementById("guesses").innerHTML = guessesLeft;
    this.disabled = true;
    guessedLetters.push(r);
    printWord();


}
function lost(){
    document.getElementById("win").innerHTML = "Sorry, you lost, the word was " + word;
    var e = document.getElementsByClassName("ltrbutton");
    for(var i = 0;i < e.length;i++){
        e[i].disabled = true;
    }


}






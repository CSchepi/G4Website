var Riddles;
var request = new XMLHttpRequest();
request.open("GET", "./Riddles.json", false);
request.onload =function (){
    Riddles = JSON.parse(request.responseText);
    console.log(Riddles);
}
request.send(null)

var ArrowArray;
var NumArray;
var pointer = 0;


function EnterHint(i){
    var HI = "HI"+i;
    document.getElementById(HI).style.display = "inline";
}
function HintEntered(code, i){
    var HI = "HI"+i;
    var AH = "AH"+i;
    var HN = "HN"+i;


    var valide = false;
    for(var i = 0; i<Riddles.length;i++){
        if(Riddles[i][2]==code){
            valide = true;
            if(Riddles[i][1]==1){
                var htmlcaesar = "<div class=\"caesar\" id=\"R1\">\n" +
                    "    <div id=\"R1IS\"><img src=\"../Img/caesar.png\" id=\"R1I\">\n" +
                    "        <div id=\"R1T\">khoor#jxqwkhu/#ohw#xv#phhw#dq#6sp1#Wkh#frgh#wr#wkh#vhuyhu#urrp#wklv#prqwk#lv#6090503</div>\n" +
                    "    </div><input id = \"R1S\" type=\"range\" min=\"-20\" value = \"-20\" max=\"10\" oninput=\"caesarchange(value, 'khoor#jxqwkhu/#ohw#xv#phhw#dq#6sp1#Wkh#frgh#wr#wkh#vhuyhu#urrp#wklv#prqwk#lv#6090503')\">\n" +
                    "</div> " +
                    "<img id = blockCaesar src=\"https://img01.ztat.net/article/spp-media-p1/ddd9ed145d96395a80f3f2d9823d44bd/28bb35a2f0dd4cc1ac704cfe05462b82.jpg?imwidth=762\">";
                document.body.innerHTML += htmlcaesar;
            }
            if(Riddles[i][1]==0){
                var htmlmap = "<div id=\"M0\"><img id=\"M0I\" src=\"https://media.istockphoto.com/vectors/office-building-plan-blueprint-vector-id479424781\"> <p>A map of the jewelry store!</p></div>";
                document.body.innerHTML += htmlmap;
            }
        }
    }
    if(!valide){
        window.alert("The code you entered is not valide. Make sure you entert a '#' as well as all letters in CAPS.");
        document.getElementById(HI).style.display = "none";
        document.getElementById(HI).value = "";
    }
    else{
        document.getElementById(HI).style.display = "none";
        document.getElementById(AH).style.display = "none";
        document.getElementById(HN).style.display = "inline";
        document.getElementById(HN).innerText = code;


        var htmlbreak = "<div class=\"addHint\">\n" +
            "    <div class=\"SepLine\" id=\"RightStroke\"></div>\n" +
            "    <button class=\"SepButton\" id=\"AH"+(i+1)+"\" onclick=\"EnterHint("+(i+1)+")\">+</button>\n" +
            "    <div class=\"SepLine\" id=\"leftStroke\"></div>\n" +
            "    <input class =\"HI\" id=\"HI"+(i+1)+"\" type=\"text\" placeholder=\"#0000\" onchange=\"HintEntered(value, "+(i+1)+")\">\n" +
            "    <p class=\"HNum\" id=\"HN"+(i+1)+"\">OhHello</p>\n" +
            "</div>"
        document.body.innerHTML += htmlbreak;
        document.getElementById("Endblock").style.top = document.body.offsetHeight+"px"
        window.scrollTo(0,document.body.scrollHeight);
        valide =false;
    }


}

function caesarchange(i, initial){
    document.getElementById("R1T").innerText = caesar(initial, i);
}

function caesar (str, amount) {
    if(amount<0){
        amount +=50;
    }
    var output = "";
    for (var i = 0; i < str.length; i++) {
        output += String.fromCharCode(str.charCodeAt(i)-amount);
    }
    return output;
};
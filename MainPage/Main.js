var Riddles;
var request = new XMLHttpRequest();
//request.open("GET", "./Riddles.JSON", false);
request.open("GET", "https://api.jsonbin.io/b/610153ea99892a4ae9abc9ad/latest", false);
request.setRequestHeader('Access-Control-Allow-Origin', '*');
request.setRequestHeader('X-Master-Key', '$2b$10$fy9KWIe7AmD9cvMTqAlMTOB5L7hcp1gAlJYl/kUkmu1Va42vMNqRG');
request.onload =function (){
    Riddles = JSON.parse(request.responseText);
    console.log(Riddles);
}
request.send(null)

var ArrowArray;
var NumArray;
var pointer = 0;

function Num(i){
    if(NumArray[pointer]==i){
        pointer++;
        if(pointer<ArrowArray.length){
            document.getElementById("C2I").src ="../Img/ArrowPadBlanc.png";
            setTimeout(()=>{
                document.getElementById("C2I").src ="../Img/ArrowPad"+ArrowArray[pointer]+".png";
            },200)
        }
        if(pointer==ArrowArray.length) {
            document.getElementById("C2I").src ="../Img/ArrowPadBlanc.png";
            var Buttons = document.getElementsByClassName("C2B");
            for(var i =0; i< Buttons.length;i++){
                Buttons[i].style.display="none";
            }
            document.getElementById("ElevSol").style.display = "inline";
        }
    }
    else {
        pointer = 0;

        document.getElementById("C2I").src ="../Img/ArrowPadWrong.png";
        setTimeout(()=>{
            document.getElementById("C2I").src ="../Img/ArrowPad"+ArrowArray[0]+".png";
        },1000)
    }
}

function EnterHint(i){
    var HI = "HI"+i;
    document.getElementById(HI).style.display = "inline";
}
function HintEntered(code, codeindex){
    var HI = "HI"+codeindex;
    var AH = "AH"+codeindex;
    var HN = "HN"+codeindex;


    var valide = false;
    for(var i = 0; i<Riddles.length;i++){
        if(Riddles[i][2]==code){
            valide = true;
            if(Riddles[i][1]==1){
                var htmlcaesar = "<div class=\"caesar\" id=\"R1\">\n" +
                    "    <div id=\"R1IS\"><img src=\"../Img/caesar.png\" id=\"R1I\">\n" +
                    "        <div id=\"R1T\">"+Riddles[i][3]+"</div>\n" +
                    "    </div><input id = \"R1S\" type=\"range\" min=\""+Riddles[i][4]+"\" value = \""+Riddles[i][4]+"\" max=\""+(Riddles[i][4]+30)+"\" oninput=\"caesarchange(value, '"+Riddles[i][3]+"')\">\n" +
                    "</div> " +
                    "<img id = blockCaesar src=\"https://img01.ztat.net/article/spp-media-p1/ddd9ed145d96395a80f3f2d9823d44bd/28bb35a2f0dd4cc1ac704cfe05462b82.jpg?imwidth=762\">";
                document.body.innerHTML += htmlcaesar;
            }
            if(Riddles[i][1]==0){
                var htmlmap = "<div id=\"M0\"><img id=\"M0I\" src=\"../Img/Map1.PNG\"> <p>A map of the jewelry store! </p> <p>Maybe you should take a look into the Monitor Room</p></div>";
                document.body.innerHTML += htmlmap;
            }
            if(Riddles[i][1]==3){
                var htmlID = "<div id=\"M0\"><img id=\"M0I\" src=\"../Img/ABCD.png\"> <p>It cant be far away...</p></div>";
                document.body.innerHTML += htmlID;
            }
            if(Riddles[i][1]==4){
                var htmlKlo = "<div id=\"M0\"><img id=\"M0I\" src=\"../Img/IDLoc.png\"> <p> What room is this?!</p></div>";
                document.body.innerHTML += htmlKlo;
            }
            if(Riddles[i][1]==6){
                var htmlM1 = "<div id=\"M0\"><img id=\"M0I\" src=\"../Img/PostIt1.png\"> <p>Isn't this the managers handwriting?</p></div>";
                document.body.innerHTML += htmlM1;
            }
            if(Riddles[i][1]==7){
                var htmlM2 = "<div id=\"M0\"><img id=\"M0I\" src=\"../Img/PostIt2.png\"> <p>It seems like the managers memory is letting him down.</p></div>";
                document.body.innerHTML += htmlM2;
            }
            if(Riddles[i][1]==8){
                var htmlmap2 = "<div id=\"M0\"><img id=\"M0I\" src=\"../Img/Map2.PNG\"> <p>A dungeon?! - What kind of place is this?</p></div>";
                document.body.innerHTML += htmlmap2;
            }
            if(Riddles[i][1]==9){
                var htmlcol ="<div id=\"ColorRiddle\">\n" +
                    "    <img id=\"ColDisp\" src=\"../Img/Color-Display.png\">\n" +
                    "    <img id=\"CPotion\" src=\"../Img/1419628-200.png\">\n" +
                    "    <div id=\"CRoom1\">1. <br> Staff-Room</div>\n" +
                    "    <div class=\"ColorHelp\" id=\"CH1\"><div class=\"ColorCircle\" id=\"CC1\"></div><-- Orange</div>\n" +
                    "    <div class=\"ColorHelp\" id=\"CH2\"><div class=\"ColorCircle\" id=\"CC2\"></div><-- Pink</div>\n" +
                    "    <div class=\"ColorHelp\" id=\"CH3\"><div class=\"ColorCircle\" id=\"CC3\"></div><-- Blue</div>\n" +
                    "    <div class=\"ColorHelp\" id=\"CH4\"><div class=\"ColorCircle\" id=\"CC4\"></div><-- Green</div>\n" +
                    "</div>"+
                    "<img id = blockcol src=\"https://img01.ztat.net/article/spp-media-p1/ddd9ed145d96395a80f3f2d9823d44bd/28bb35a2f0dd4cc1ac704cfe05462b82.jpg?imwidth=762\">"+
                    "<p id='chint'>What is going on here? Are these colours ment to mean something? And what about all the room names from the map?</p>";
                document.body.innerHTML += htmlcol;
                StartCirelingThePotions(0);
            }
            if(Riddles[i][1]==5){
                var htmltext = "\n" +
                    "<div id=\"Translate\">\n" +
                    "    <img id=\"SignImg\" src=\"../Img/SignBackground.png\">\n" +
                    "    <p id=\"TranslateText\"> <br>Я изменил код, чтобы добраться до молотка в основной зоне. новый код - год рождения моего любимого певца.</p>\n" +
                    "    <button id=\"CopyTranslate\" onclick=\"CopyTranslate()\">Copy to clipboard</button>\n" +
                    "</div>"+
                    "<img id = blockRussia src=\"https://img01.ztat.net/article/spp-media-p1/ddd9ed145d96395a80f3f2d9823d44bd/28bb35a2f0dd4cc1ac704cfe05462b82.jpg?imwidth=762\">";
                document.body.innerHTML += htmltext;
            }
            if(Riddles[i][1]==2){
                ArrowArray = Riddles[i][4]
                NumArray = Riddles[i][3]
                console.log(NumArray);
                var htmlnum = "<div id=\"C2\">\n" +
                    "    <div id=\"C2Num\">\n" +
                    "        <img id = \"C2I\" src=\"../Img/ArrowPad"+ArrowArray[0]+".png\">\n" +
                    "        <button class= \"C2B\" id=\"C2B0\" onclick=\"Num(0)\"></button>\n" +
                    "        <button class= \"C2B\" id=\"C2B1\" onclick=\"Num(1)\"></button>\n" +
                    "        <button class= \"C2B\" id=\"C2B2\" onclick=\"Num(2)\"></button>\n" +
                    "        <button class= \"C2B\" id=\"C2B3\" onclick=\"Num(3)\"></button>\n" +
                    "        <button class= \"C2B\" id=\"C2B4\" onclick=\"Num(4)\"></button>\n" +
                    "        <button class= \"C2B\" id=\"C2B5\" onclick=\"Num(5)\"></button>\n" +
                    "        <button class= \"C2B\" id=\"C2B6\" onclick=\"Num(6)\"></button>\n" +
                    "        <button class= \"C2B\" id=\"C2B7\" onclick=\"Num(7)\"></button>\n" +
                    "        <button class= \"C2B\" id=\"C2B8\" onclick=\"Num(8)\"></button>\n" +
                    "        <button class= \"C2B\" id=\"C2B9\" onclick=\"Num(9)\"></button>\n" +
                    "    </div>\n" +
                    "</div>" +
                    "<img id = blockNum src=\"https://img01.ztat.net/article/spp-media-p1/ddd9ed145d96395a80f3f2d9823d44bd/28bb35a2f0dd4cc1ac704cfe05462b82.jpg?imwidth=762\"> "+
                    "<div id='ElevSol'>Great! The code to the Elevator is 5-9-3-8. " +
                    "</div>";
                document.body.innerHTML += htmlnum;

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
            "    <button class=\"SepButton\" id=\"AH"+(codeindex+1)+"\" onclick=\"EnterHint("+(codeindex+1)+")\">+</button>\n" +
            "    <div class=\"SepLine\" id=\"leftStroke\"></div>\n" +
            "    <input class =\"HI\" id=\"HI"+(codeindex+1)+"\" type=\"text\" placeholder=\"#XXXX\" onchange=\"HintEntered(value, "+(codeindex+1)+")\">\n" +
            "    <p class=\"HNum\" id=\"HN"+(codeindex+1)+"\">OhHello</p>\n" +
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

function StartCirelingThePotions(i){
    var PImg = document.getElementById("CPotion");
    var PText = document.getElementById("CRoom1");
    if(i%5==0){
        PImg.style.display = "inline";
        PText.style.display = "none";
        setTimeout(()=>{
            StartCirelingThePotions(i+1);
        },1000)
    }
    if(i%5==1){
        PImg.style.display = "none";
        PText.style.display = "inline";
        PText.innerHTML ="1. <br> Staff-Room";
        setTimeout(()=>{
            PText.style.color="orange";
            setTimeout(()=>{
                PText.style.color="hotpink";
                setTimeout(()=>{
                    PText.style.color="deepskyblue";
                    setTimeout(()=>{
                        PText.style.color="limegreen";
                        setTimeout(()=>{
                            StartCirelingThePotions(i+1);
                        },350)
                    },350)
                },350)
            },350)
        },350)
    }
    if(i%5==2){
        PImg.style.display = "none";
        PText.style.display = "inline";
        PText.innerHTML = "2. <br> Manager-Room";
        setTimeout(()=>{
            PText.style.color="orange";
            setTimeout(()=>{
                PText.style.color="hotpink";
                setTimeout(()=>{
                    PText.style.color="deepskyblue";
                    setTimeout(()=>{
                        PText.style.color="limegreen";
                        setTimeout(()=>{
                            StartCirelingThePotions(i+1);
                        },350)
                    },350)
                },350)
            },350)
        },350)
    }
    if(i%5==3){
        PImg.style.display = "none";
        PText.style.display = "inline";
        PText.innerHTML ="3. <br> Main Area";
        setTimeout(()=>{
            PText.style.color="orange";
            setTimeout(()=>{
                PText.style.color="hotpink";
                setTimeout(()=>{
                    PText.style.color="deepskyblue";
                    setTimeout(()=>{
                        PText.style.color="limegreen";
                        setTimeout(()=>{
                            StartCirelingThePotions(i+1);
                        },350)
                    },350)
                },350)
            },350)
        },350)
    }
    if(i%5==4){
        PImg.style.display = "none";
        PText.style.display = "inline";
        PText.innerHTML ="4. <br> Monitor-Room";
        setTimeout(()=>{
            PText.style.color="orange";
            setTimeout(()=>{
                PText.style.color="hotpink";
                setTimeout(()=>{
                    PText.style.color="deepskyblue";
                    setTimeout(()=>{
                        PText.style.color="limegreen";
                        setTimeout(()=>{
                            StartCirelingThePotions(i+1);
                        },350)
                    },350)
                },350)
            },350)
        },350)
    }

}

function CopyTranslate() {
    const el = document.createElement('textarea');
    el.value = "Я изменил код, чтобы добраться до молотка в основной зоне. новый код - год рождения моего любимого певца.";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
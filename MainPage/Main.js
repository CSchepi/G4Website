var DataStructure;



function EnterHint(i){
    var HI = "HI"+i;
    console.log(HI);
    document.getElementById(HI).style.display = "inline";
}
function HintEntered(code, i){
    var HI = "HI"+i;
    var AH = "AH"+i;
    var HN = "HN"+i;
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


}
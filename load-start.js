var Ini = document.getElementById("IniText");
var bar = document.getElementById("loadingbar");

function addletter(i){
    console.log(i);
        if(i==0){
            Ini.innerHTML = "I";
            document.title = "▮";
        }
        if(i==1)
            Ini.innerText = "In";
        if(i==2)
            Ini.innerText = "Ini";
        if(i==3){
            document.title = "▮▮";
            Ini.innerText = "Init";
        }
        if(i==4)
            Ini.innerText = "Initi";
        if(i==5)
            Ini.innerText = "Initia";
        if(i==6){
            document.title = "▮▮▮";
            Ini.innerText = "Initial";}
        if(i==7)
            Ini.innerText = "Initiali";
        if(i==8)
            Ini.innerText = "Initializ";
        if(i==9){
            document.title = "▮▮▮▮";
            Ini.innerText = "Initializi";}
        if(i==10)
            Ini.innerText = "Initializin";
        if(i==11)
            Ini.innerText = "Initializing";
        if(i==12){
            document.title = "▮▮▮▮▮";
            Ini.innerText = "Initializing.";}
        if(i==13)
            Ini.innerText = "Initializing..";
        if(i==14){
            document.title = "▮▮▮▮▮▮";
            Ini.innerText = "Initializing...";
            setTimeout(()=>{
                Ini.innerText = "";
                setTimeout(()=>{
                    addletter(0);
                },150)
            },1000);
        }

    if(i <14){
        setTimeout(()=>{
            addletter(i+1);
        },150);
    }
}
addletter(0);

setTimeout(()=>{
    window.location.href = "./MainPage/main.html";
},11000)

bar.style.width="30%";

function gotoMain(){
    window.location.href = "./MainPage/main.html";
}
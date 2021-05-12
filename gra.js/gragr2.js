var haslo="wertg";
haslo=haslo.toUpperCase();
var wyswietl="";
var dl=haslo.length;


for(var i=0;i<dl;i++){
    // dane znak charAt(i)
    var znak=haslo.charAt(i);
    if(znak==" "){
        wyswietl=wyswietl+" ";
    }
    else {
        wyswietl=wyswietl+"_";
    }
    document.getElementById('w').innerHTML=wyswietl;
}
var proby=1;
var blednelitery="";


function odslonznak(){
    var traf=false // domyślnie fałsz 
     var litera=document.getElementById('litera').value 
     litera=litera.toUpperCase();
     var gdzie=blednelitery.search(litera);
    // console.log(gdzie);
    if(gdzie>=0){
        alert("ta bykva vje byla");
        return 1;
    }
     // walidacja czy znak to litera alert("bląd")
    var wyswietl="";
    var akt=document.getElementById('w').innerHTML;
    for(var i=0;i<dl;i++){
        // dane znak charAt(i)
        var znak=haslo.charAt(i);
        if(znak==" "){
            wyswietl=wyswietl+" ";
        }
        else if(znak==litera){
            wyswietl=wyswietl+litera;
            traf=true;
        }
        else if(akt.charAt(i)!='_'){
            wyswietl=wyswietl+akt.charAt(i);
        }
        else {
            wyswietl=wyswietl+"_";
        }
    }
    document.getElementById('w').innerHTML=wyswietl;
    // informacja że nie tarafiliśmy litery 
    if(traf==false){
        blednelitery=blednelitery+litera;
        document.getElementById('bledy').innerHTML="nepravulni bykvu: "+blednelitery;
        proby++;
        var plik=proby+".png";
        //alert("test"+ proby)
        document.getElementById('szubienica').setAttribute('src',plik);
        if(proby==11){
            document.getElementById('wynikgry').innerHTML="WIN";
            document.getElementById('sl').setAttribute('onclick','koniec()');
             document.getElementById('sp').setAttribute('onclick','koniec()'); 
        }
    }
}

var ile_spr=0;

function sprawdzpass(){
    var pass=document.getElementById('pass').value 
    pass=pass.toUpperCase();
   // console.log(pass);
   if(pass==haslo){
       document.getElementById('wynikgry').innerHTML="WIN";

   }
   else{

        document.getElementById('wynikgry').innerHTML="lose";
        document.getElementById('sl').setAttribute('onclick','koniec()');
        document.getElementById('sp').setAttribute('onclick','koniec()');
   }
}
function koniec(){
    alert("kinec gry");
    document.getElementById('sl').setAttribute('onclick','koniec()');
    document.getElementById('sp').setAttribute('onclick','koniec()');
}



    


    


        
    


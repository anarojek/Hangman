var categories = {
    "Series": ["Game of Throne", "The Office", "Breaking Bad", "Lord of The Rings", "Harry Potter", "The crown", "The Walking Dead"],
    "Food": ["Kimchi", "Sushi", "Onigiri", "Pizza", "Spaghetti", "Risotto"],
    "Anime": ["Parasite", "Death Note", "One punch man", "Attack on titan", "One Piece"]
}
var categoriesindex = Math.floor(Math.random()*Object.keys(categories).length);
var passwordlist = Object.values(categories)[categoriesindex];
var category = Object.keys(categories)[categoriesindex];
var password = passwordlist[Math.floor(Math.random()*passwordlist.length)];
console.log(category);
console.log(password);
var size =password.length;

var mistake = 0;

var yes=new Audio("yes.wav");
var no=new Audio("no.wav");

var password1 = "";

for(i=0; i<size; i++)
{
    if(password.charAt(i)==" ")password1 = password1+ " ";
    else password1 =password1+ "-";
}

function write_categories()
{
    document.getElementById("nazwa_kategorii").innerHTML=category;
}

function write_password()
{
    document.getElementById("plansza").innerHTML=password1;
}

window.onload=start;

var letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";

function start()
{
    var content_div= "";

    for(i=0; i<=34; i++)
    {
        var element = "lit"+i;
        content_div = content_div+ '<div class="litera" onclick="check('+i+')" id="'+element+'">'+letters[i]+'</div>';
        if ((i+1)%7==0) content_div = content_div + '<div style="clear:both;"></div>'
    }

    document.getElementById("alfabet").innerHTML=content_div;


   write_password();
   write_categories();
}

String.prototype.insertSign = function(place, sign)
{
    if(place>this.length-1) return this.toString();
    else return this.substr(0, place)+ sign + this.substr(place+1);
}

function check(nr)
{
    var hit =false;


    for(i=0; i<size; i++)
    {
        if (password.charAt(i).toLowerCase()==letters[nr].toLowerCase())
        {
            password1 = password1.insertSign(i,letters[nr]);
            hit =true;
        }
    }

    if(hit==true)
    {
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background="#003300";
        document.getElementById(element).style.color="#00C000";
        document.getElementById(element).style.border="3px solid #00C000";
        document.getElementById(element).style.cursor="default";
        
        
        write_password();
    }

    else
    {
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background="#330000";
        document.getElementById(element).style.color="#C00000";
        document.getElementById(element).style.border="3px solid #C00000";
        document.getElementById(element).style.cursor="default";
        document.getElementById(element).setAttribute("onclick",";");



        //mistake
        mistake++;
        var picture="img/s"+mistake+".jpg";
        document.getElementById("szubienica").innerHTML='<img src="'+picture+'"alt=""/>';

    }

        //win
        if (password.toLowerCase()==password1.toLowerCase())
        document.getElementById("alfabet").innerHTML = "Congratulations!" + password+
        '<br/><br/><span class="reset" onclick = "location.reload()">Once again?</span>';

        //lose
        if (mistake>=9)
        document.getElementById("alfabet").innerHTML = "Defeat :( Correct answer: " + password+
        '<br/><br/><span class="reset" onclick = "location.reload()">Once again?</span>';
}
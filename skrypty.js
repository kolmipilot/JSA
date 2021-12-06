function parzysta()
{
    var liczba=document.getElementById("pole").value;

        if(liczba % 2 == 0)
        { document.getElementById("tresc").innerHTML="parzysta";}
        else {document.getElementById("tresc").innerHTML="nie parzysta";}

      

}
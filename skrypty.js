//this script prints the numbers from the first to the last given
function parzysta()
{
    var liczba1=document.getElementById("pole").value;//
    var liczba2=document.getElementById("pole2").value;
        
    var tresc;
    tresc=""
      for(i=liczba1; i<=liczba2; i++)
      {
            
            tresc=tresc+" "+i+" ";

      }

      document.getElementById("tresc").innerHTML=tresc;

}
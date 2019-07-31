function resolver()
{
    var A = parseInt(document.getElementById("var_a").value);
    var B = parseInt(document.getElementById("var_b").value);
    var C = parseInt(document.getElementById("var_c").value);
    var x1,x2;
/*
A=3
B= 2
C=7
*/
    if(isNaN(A) || isNaN(B) || B == 0 || A == 0){alert("Ni la variable A, ni la variable B pueden estar vacíos, no pueden ser cero y no debe tener letras.");return;}
    if(Math.sqrt(Math.pow(B, 2) - 4 * (A * C)) %1 !=0){alert("No se puede resolver"); return}
    x1 = (-1*(B) + Math.sqrt(Math.pow(B, 2) - 4 * (A * C)))/2*A;
    x2 = (-1*(B) - Math.sqrt(Math.pow(B, 2) - 4 * (A * C)))/2*A;
    alert("R = {"+x1+";"+x2+"}")
    if(confirm("Quiere ver paso por paso?"))
    {
        alert("B² = "+B+"² = "+Math.pow(B,2))
        alert("-4 * A*C = -4 * "+A+"* "+C+" = "+(- 4 * (A * C)));
        alert("RAIZ DE (B² - 4 * A * C) = √"+Math.pow(B,2)+"- 4 * ("+A+"*"+C+") = "+Math.sqrt(Math.pow(B, 2) - 4 * (A * C)));
        alert("El denominador 2 * A = 2 * "+A+" = "+2*A);
        alert("x1 = ("+(-1*(B)+"+"+Math.sqrt(Math.pow(B, 2) - 4 * (A * C)))+") / "+2*A+" = "+(-1*(B) + Math.sqrt(Math.pow(B, 2) - 4 * (A * C)))/2*A);
        alert("x2 = ("+(-1*(B)+"-"+Math.sqrt(Math.pow(B, 2) - 4 * (A * C)))+") / "+2*A+" = "+(-1*(B) - Math.sqrt(Math.pow(B, 2) - 4 * (A * C)))/2*A);
        
    }
}
function myFunction3() {
    var g = parseInt(document.getElementById("gvalue").value);
    var h = parseInt(document.getElementById("hvalue").value);
    document.getElementById("solution4").innerHTML = "SOLUTION";
    document.getElementById("step31").innerHTML = "(a + b)<sup>3</sup> = a<sup>3</sup> + 3ab(a + b) + b<sup>3</sup>";
    document.getElementById("step32").innerHTML = "("+g+" + "+h+")<sup>3</sup> = "+g+"<sup>3</sup> + 3*"+g+"*"+h+"("+g+" + "+h+") + "+h+"<sup>3</sup>";
    document.getElementById("step33").innerHTML = "("+(g+h)+")<sup>3</sup> = "+(g*g*g)+" + "+((3*g*h)*(g+h))+" + "+(h*h*h)+"";   
    document.getElementById("step34").innerHTML = ((g+h)*(g+h)*(g+h)) +" = "+ ((g*g*g) + ((3*g*h)*(g+h)) + (h*h*h)); 
    document.getElementById("step35").innerHTML ="HENCE PROVED:)";
}
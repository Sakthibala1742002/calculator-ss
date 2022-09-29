function myFunction1() {
    var c = parseInt(document.getElementById("cvalue").value);
    var d = parseInt(document.getElementById("dvalue").value);
    document.getElementById("solution2").innerHTML = "SOLUTION";
    document.getElementById("step11").innerHTML = "(a - b)<sup>2</sup> = a<sup>2</sup> - 2*a*b + b<sup>2</sup>";
    document.getElementById("step12").innerHTML = "("+c+"-"+d+")<sup>2</sup> = "+c+"<sup>2</sup> - 2*"+c+"*"+d+" + "+d+"<sup>2</sup>";
    document.getElementById("step13").innerHTML = "("+(c-d)+")<sup>2</sup> = "+(c*c)+" - "+(2*c*d)+" + "+(d*d)+"";   
    document.getElementById("step14").innerHTML = ((c-d)*(c-d)) +" = "+ ((c*c) - (2*c*d) + (d*d)); 
    document.getElementById("step15").innerHTML ="HENCE PROVED:)";
}
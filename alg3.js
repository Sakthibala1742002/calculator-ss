function myFunction2() {
    var e = parseInt(document.getElementById("evalue").value);
    var f = parseInt(document.getElementById("fvalue").value);
    document.getElementById("solution3").innerHTML = "SOLUTION";
    document.getElementById("step21").innerHTML = "(a + b) (a - b) = a<sup>2</sup> - b<sup>2</sup>";
    document.getElementById("step22").innerHTML = "("+e+" + "+f+") ("+e+" - "+f+") = "+e+"<sup>2</sup> - "+f+"<sup>2</sup>";
    document.getElementById("step23").innerHTML = (e+f) +" * "+ (e-f) + " = " +(e*e)+" - "+(f*f)+"";
    document.getElementById("step24").innerHTML = ((e+f)*(e-f)) +" = "+ ((e*e) - (f*f));
    document.getElementById("step25").innerHTML ="HENCE PROVED:)";
}
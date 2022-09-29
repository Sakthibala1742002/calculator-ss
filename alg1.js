function myFunction() {
    var a = parseInt(document.getElementById("avalue").value);
    var b = parseInt(document.getElementById("bvalue").value);
    document.getElementById("solution1").innerHTML = "SOLUTION";
    document.getElementById("step1").innerHTML = "(a + b)<sup>2</sup> = a<sup>2</sup> + 2*a*b + b<sup>2</sup>";
    document.getElementById("step2").innerHTML = "("+a+"+"+b+")<sup>2</sup> = "+a+"<sup>2</sup> + 2*"+a+"*"+b+" + "+b+"<sup>2</sup>";
    document.getElementById("step3").innerHTML = "("+(a+b)+")<sup>2</sup> = "+(a*a)+" + "+(2*a*b)+" + "+(b*b)+"";   
    document.getElementById("step4").innerHTML = ((a+b)*(a+b)) +" = "+ ((a*a) + (2*a*b) + (b*b)); 
    document.getElementById("step5").innerHTML ="HENCE PROVED:)";
}
function myFunction4() {
    var i = parseInt(document.getElementById("ivalue").value);
    var j = parseInt(document.getElementById("jvalue").value);
    document.getElementById("solution5").innerHTML = "SOLUTION";
    document.getElementById("step41").innerHTML = "(a - b)<sup>3</sup> = a<sup>3</sup> - 3ab(a - b) - b<sup>3</sup>";
    document.getElementById("step42").innerHTML = "("+i+" - "+j+")<sup>3</sup> = "+i+"<sup>3</sup> - 3*"+i+"*"+j+"("+i+" - "+j+") - "+i+"<sup>3</sup>";
    document.getElementById("step43").innerHTML = "("+(i-j)+")<sup>3</sup> = "+(i*i*i)+" - "+((3*i*j)*(i-j))+" - "+(j*j*j)+"";   
    document.getElementById("step44").innerHTML = ((i-j)*(i-j)*(i-j)) +" = "+ ((i*i*i) - ((3*i*j)*(i-j)) - (j*j*j)); 
    document.getElementById("step45").innerHTML ="HENCE PROVED:)";
}
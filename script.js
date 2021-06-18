function compute()
{
	today_date = new Date();
    
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    
    if (p<1){
    	alert("Principal should be greater than 0");
    	document.getElementById("principal").select()
    }
    
    amount = p * ( 100 + r*t)/100;
    final_year = 1*t + today_date.getFullYear()
    
    
    document.getElementById("p1").innerHTML = p;
    document.getElementById("r1").innerHTML = r;
    document.getElementById("a1").innerHTML = amount;
    document.getElementById("y1").innerHTML = final_year;
    document.getElementById("output_table").style.display = "block"
    
    
}
    
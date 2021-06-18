function compute()
{
    today_date = new Date();
    
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    
    amount = p * ( 100 + r*t)/100;
    final_year = 1*t + today_date.getFullYear()
    
    out_html = "If you deposit " + p + "<br>" + "at an interst rate of " + r + "<br>" + "you will receive an amount of " + amount + "<br>" + "in the year " + final_year
    
    document.getElementById("result").innerHTML = out_html;
    
    
}
    
function test(){
    alert("Hello Poj!!!");
}

function changeinput1(){
    document.getElementById("input1").style.display = 'block';
    document.getElementById("input2").style.display = 'none';
}

function changeinput2(){
    document.getElementById("input1").style.display = 'none';
    document.getElementById("input2").style.display = 'block';
}

function gen4(){
    document.getElementById('tl1').className = 'event-date badge bg-success';
    document.getElementById("page4").style.display = 'block';
    document.getElementById("page1").style.display = 'none';
    if(document.getElementById("ordinary").checked == true){
        document.getElementById("typeoffiling").innerHTML = 'ordinary';
        document.getElementById("vatmonth").innerHTML = document.getElementById("month1").value;
        document.getElementById("amount1").innerHTML = document.getElementById("totaltaxible1").value+' THB';
        document.getElementById("amount2").innerHTML = document.getElementById("totalvat1").value+' THB';
        document.getElementById("amount3").innerHTML = (Number(document.getElementById("amount1").value)+Number(document.getElementById("amount2").value))+' THB';
    
    
    }
    if(document.getElementById("additional").checked == true){
        document.getElementById("typeoffiling").innerHTML = 'additional';
        document.getElementById("vatmonth").innerHTML = document.getElementById("month2").value;
        document.getElementById("amount1").innerHTML = document.getElementById("totaltaxible2").value+' THB';
        document.getElementById("amount2").innerHTML = document.getElementById("totalvat2").value+' THB';
        document.getElementById("amount3").innerHTML = (Number(document.getElementById("amount1").value)+Number(document.getElementById("amount2").value))+' THB';
    
    
    }
    
    
    
}

function confirm4(){
    var obj = new Object();
    
    if(document.getElementById("ordinary").checked == true){
        document.getElementById("typeoffiling").value = 'ordinary';
        document.getElementById("vatmonth").value = document.getElementById("month1").value;
        document.getElementById("amount1").value = document.getElementById("totaltaxible1").value;
        document.getElementById("amount2").value = document.getElementById("totalvat1").value;
        document.getElementById("amount3").value = Number(document.getElementById("amount1").value)+Number(document.getElementById("amount2").value);

        obj.filingType = document.getElementById("typeoffiling").value;
        obj.month  = document.getElementById("month1").value;
        obj.year = document.getElementById("year1").value;
        obj.saleAmount = document.getElementById("totaltaxible1").value;
        obj.taxAmount = document.getElementById("totalvat1").value;
        obj.surcharge = '';
        obj.penalty = '';
        obj.totalAmount = document.getElementById("amount3").value;
    
    }
    if(document.getElementById("additional").checked == true){
        document.getElementById("typeoffiling").value = 'additional';
        document.getElementById("vatmonth").value = document.getElementById("month2").value;
        document.getElementById("amount1").value = document.getElementById("totaltaxible2").value;
        document.getElementById("amount2").value = document.getElementById("totalvat2").value;
        document.getElementById("amount3").value = Number(document.getElementById("amount1").value)+Number(document.getElementById("amount2").value);
    
        obj.filingType = document.getElementById("typeoffiling").value;
        obj.month  = document.getElementById("month2").value;
        obj.year = document.getElementById("year2").value;
        obj.saleAmount = document.getElementById("totaltaxible2").value;
        obj.taxAmount = document.getElementById("totalvat2").value;
        obj.surcharge = document.getElementById("surcharge2").value;
        obj.penalty = document.getElementById("penalty2").value;
        obj.totalAmount = document.getElementById("amount3").value;
    
    }
    
    var jsonString= JSON.stringify(obj);

    alert(""+jsonString);    
}
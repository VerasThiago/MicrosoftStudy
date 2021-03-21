function setValue(id){
    var elms = document.querySelectorAll("[id='" + id + "']");
    var qnt = 0;
    for(var i = 0; i < elms.length; i++) 
      qnt += elms[i].checked 
    document.getElementById("Total" + id ).innerHTML = qnt + '/' + elms.length
}

function setDate(){
    const date1 = new Date('3/22/2021');
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    document.getElementById("Days").innerHTML = 'Total days: ' + diffDays;
}

function getQuantity(){
    setValue("med")
    setDate()
}
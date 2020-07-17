function setValue(id){
    var elms = document.querySelectorAll("[id='" + id + "']");
    var qnt = 0;
    for(var i = 0; i < elms.length; i++) 
      qnt += elms[i].checked 
    document.getElementById("Total" + id ).innerHTML = qnt + '/' + elms.length
}

function setDate(){
    var d = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(2020, 6, 13);
    const secondDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay)) ;
    document.getElementById("Days").innerHTML = 'Total days: ' + (diffDays + 1) ;
}

function getQuantity(){
    setValue("med")
    setDate()
}
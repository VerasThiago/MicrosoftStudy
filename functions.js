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
    let diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay)) + (d.getHours() < 8 ? 0:1);
    document.getElementById("Days").innerHTML = 'Total days: ' + diffDays;
}

function getQuantity(){
    setValue("med")
    setDate()
}
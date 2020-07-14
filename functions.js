function setValue(id){
    var elms = document.querySelectorAll("[id='" + id + "']");
    var qnt = 0;
    for(var i = 0; i < elms.length; i++) 
      qnt += elms[i].checked 
    document.getElementById("total" + id ).innerHTML = qnt + '/' + elms.length
}

function getQuantity(){
    setValue("med")
}
const calculateTemp=()=>{
    const tempVal =document.getElementById('TempVal').value;
    const tempSelected = document.getElementById('TempState');
    const valueTemp =TempState.options[tempSelected.selectedIndex].value


   const celToFeh =(cel)=>{
    let Feh = Math.round((cel*9/5)+32);
    return Feh
   }
   const FehToCel =(feh)=>{
    let Cal = Math.round((feh-32) *5/9);
    return Cal
   }

    let result ;
    if(valueTemp=='cel'){
        result = celToFeh(tempVal)
        document.getElementById('res').innerHTML=`${result} F`
    }else{
        result = FehToCel(tempVal)
        document.getElementById('res').innerHTML=`${result} C`
    }
}

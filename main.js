function getParagraph1(){
var inputs = [];
   
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("paaral_input_box_" + i).value);
    }
   
    inputs.join(". ");
    document.getElementById("showParagraph1").innerHTML = inputs.join(". "); 


}
function getParagraph2(){
    var inputs = [];
       
        for(var i = 1 ; i <=6 ; i++)
        {
            inputs.push(document.getElementById("paral_input_box_" + i).value);
        }
       
        inputs.join(". ");
        document.getElementById("Paragraoh2").innerHTML = inputs.join(". "); 
    
    
    }
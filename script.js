
const onSubmit = ()=>{
    event.preventDefault()
    let  input1 = document.getElementById("width").value;
    let  input2 = document.getElementById("length").value;
      if(input1=="" && input2==""){
       
        alert("invalid input");
         }
    else
    {
      
        let  area = input1*input2;
          document.getElementById("ans").innerHTML=area
        
    }
      


      }


    

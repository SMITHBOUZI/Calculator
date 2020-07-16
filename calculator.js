
let screen_main=document.getElementById("screen_main")
let button_text=document.getElementsByClassName("button_number")
upper_screen=document.getElementById('screen_top')
let result=false;
      

for (let i=0; i<button_text.length;i++){
    
        
       
        button_text[i].addEventListener('click',function(){

        screen_number=screen_main.textContent.trim()
              
              if(screen_number==='0' && result==false && this.textContent!=='.'){
                  screen_main.innerHTML=Number(screen_main.textContent)+Number(this.textContent)
                  result=false
               }
               if((screen_number!=='0' && result==false)||(this.textContent==='.')){
               screen_main.innerHTML=screen_main.textContent+this.textContent
               result=false
               }
               if(result==true ||screen_number==='Error'){
                screen_main.innerHTML=this.textContent
                result=false

               }
          
          
        })
      
}
sign_operation=document.getElementsByClassName('button_sign');
    
for (let i=0; i<sign_operation.length;i++){
 
  sign_operation[i].addEventListener('click',function(){
     
    if(this.textContent=='C'){

      screen_main.innerHTML="0";
    }

    if(this.textContent=='del'){
      let length_screen_text=screen_main.textContent.length
          
         if(screen_main.textContent!='0'){
            
              if(length_screen_text>1){
                  let new_screen_value=screen_main.textContent.substr(0,length_screen_text-1)
                  screen_main.innerHTML=new_screen_value;
             }else
             screen_main.innerHTML='0'
         }
    }


    if(this.textContent=='+'){

      getSign('+');
      result=false;

    } 
    if(this.textContent=='X'){

      getSign('*');
      result=false;
      

    } 
    if(this.textContent=='/'){

      getSign('/');
      result=false;

    } 
    if(this.textContent=='-'){

      getSign('-');
      result=false;

    } 
    if(this.textContent=='%'){

      getSign('%');
      result=false;

    } 

    if(this.textContent==='='){
      try {
        screen_main.innerHTML=eval(screen_main.textContent)
            result=true
      } catch (error) {
        screen_main.innerHTML='Error'
      }
      
    } 

    if(this.textContent==="√"){
        
       if(screen_main.textContent!='0'){
         
        screen_main.innerHTML=Math.sqrt(eval(screen_main.textContent));
        result=true

       }

    }
    if(this.textContent==='-/+'){

      screen_main.innerHTML='-'+screen_main.textContent
      result=false
    } 

     
    
  })

}

function getSign(sign){
  
  return screen_main.innerHTML=screen_main.textContent+sign

}


    
    
const name = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const add = document.getElementById("Address");
const con = document.getElementById("Contact");
const error = document.querySelectorAll(".error");
const succes = document.getElementById("succes")

function Validation(){


     clearmessage();
    let errorFlag=false;

    if(name.value ==""){

        error[0].innerHTML="name cannot be empty";
        errorFlag=true;
        }

    if(email.value == ""){

        error[1].innerText="Email cannot be empty";
        errorFlag=true;

    }  

    if(!emailIsValid(email.value)){

        error[1].innerText="Invalid email";
        errorFlag=true
    }
    
    if(pass.value == ""){

        error[2].innerText=" Enter your passord";
        errorFlag=true;
    }  

    if(add.value == ""){
        error[3].innerText="Fill your address";
        errorFlag=true;
    }
    
    if(con.value == "") {
        error[4].innerText="enter your number"
    }


    if(errorFlag == false){
        
        succes.innerText="Form validation succesful";
       name.value="";
       email.value="";
       pass.value="";
       add.value="";
       con.value="";
    }
      
   
}


function clearmessage(){


    for(let i=0;i<error.length;i++){
        error[i].innerText=" ";
    }
}


function emailIsValid(A1)
{
let pattern=/\S+@\S+\.\S+/;
return pattern.test(A1);
}


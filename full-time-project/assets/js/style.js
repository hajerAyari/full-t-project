
function validate()                                  
{
    var name = document.forms["formvalidation"]["name"];              
    var email = document.forms["formvalidation"]["email"].value;   
    var password = document.forms["formvalidation"]["password"].value; 
    var comment = document.forms["formvalidation"]["comment"]; 
  
    if (name.value == "")                                 
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }


    var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
    if(!reg.test(email)){
        window.alert("Please enter your valid email");
    return false;
    }
    
    var re = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$','i');
      if (!re.test(password))                       
    {
       window.alert("Please enter a valid password");
         return false;
    }

    if (comment.value == "")                       
    {
        window.alert("Please enter your comment");
        comment.focus();
        return false;
    }
    return true;
}


function reset() {
  //document.querySelector("formvalidation").reset();
}








let checkEmpty: string;
let checkNews: boolean = false; //Variable to check if Newsletter is true, normaly false

let mandIsVisibleArray: boolean [] = new Array;
let mandArray: HTMLElement [] = new Array;

mandIsVisibleArray.push(false);
mandIsVisibleArray.push(false);


mandArray.push(document.getElementById("lastNameMandatory"));
mandArray.push(document.getElementById("firstNameMandatory"));
mandArray.push(document.getElementById("emailMandatory"));


init();

disableSubmit();
//Checks if the newsletter button is clicked, and if the checkNews variable is true, the elements are being "disabled"
document.getElementById("newsletter").onclick = function(){
    //checkNews is from beginning on false, so if newsletter is clicked it goes to the else option and displays the elements
    if(checkNews){
        document.getElementById("email").style.display = 'none';
        document.getElementById("emailLabel").style.display = 'none';
        document.getElementById("emailMandatory").style.display = 'none';
    }else{
        document.getElementById("email").style.display = 'block';
        document.getElementById("emailLabel").style.display = 'block';
        /*if the newsletter element is clicked and before it was clicked it was false (not displayed), 
          now the elements are going to be displayed but the emailMandatory message will only be displayed if the value of it is empty*/
        if(document.getElementById("email").value === ""){
            document.getElementById("emailMandatory").style.display = 'block';
        }

        disableSubmit();
    }
    
    //if the newsletter is clicked, the checkNews variable is inverted
    checkNews = !checkNews;
}
/*
  if any key in the email field is pressed and released, this function will be called
  the checkEmpty variable gets the value of the email field
  it checks if the value of the field is empty
  if the value is empty, the Mandatory message will be shown*/
document.getElementById("email").onkeyup = function(){
    checkEmpty = document.getElementById("email").value;
    
    if(checkEmpty !== "")
        document.getElementById("emailMandatory").style.display = 'none';
    else
        document.getElementById("emailMandatory").style.display = 'block';

    disableSubmit();
}
/*if any key in the firstName field is pressed and released, this function will be called 
  the checkEmpty variable gets the value of the firstName field
  it checks if the value of the field is empty
  if the value is empty, the Mandatory message will be shown*/
document.getElementById("firstName").onkeyup = function(){
    checkEmpty = document.getElementById("firstName").value;

    if(checkEmpty !== "")
        document.getElementById("firstNameMandatory").style.display = 'none';
    else{
        document.getElementById("firstNameMandatory").style.display = 'block';
    }

    disableSubmit()
}
/*if any key in the lastName field is pressed and released, this function will be called 
  the checkEmpty variable gets the value of the lastName field
  it checks if the value of the field is empty
  if the value is empty, the Mandatory message will be shown*/
document.getElementById("lastName").onkeyup = function(){
    checkEmpty = document.getElementById("lastName").value;

    if(checkEmpty !== "")
        document.getElementById("lastNameMandatory").style.display = 'none';
    else
        document.getElementById("lastNameMandatory").style.display = 'block';

    disableSubmit()
}
/*if any key in the mediaChannelSelect field is pressed and released, this function will be called 
  the checkEmpty variable gets the value of the mediaChannelSelect field
  it checks if the value of the field is equal to "Other"
  if the value is equal, the otherMediaChannel will be shown and the user can type his source of information in this field*/
document.getElementById("mediaChannelSelect").onchange = function(){
    checkEmpty = document.getElementById("mediaChannelSelect").value;

    if(checkEmpty ==="Other")
        document.getElementById("otherMediaChannel").style.display = 'block';
    else
        document.getElementById("otherMediaChannel").style.display = 'none';
}

function disableSubmit(){
    let count: number = 0;
    for(let i:number = 0; i<mandArray.length; i++){
        
        if(mandArray[i].style.display === 'block'){
            count++;
            mandIsVisibleArray[i] = true;
            
        }
        console.log(mandIsVisibleArray[i]);
    }

    if(count != 0){
        document.getElementById("submit").disabled = true;
    }else{
        document.getElementById("submit").disabled = false;
    }

}

/* The fields for the email input and the otherMediaChannel field are set none so you can't see them. 
   The mandatory fields for the firstname and the lastname input are set block so you can see them.*/

function init(){
    document.getElementById("email").style.display = 'none';
    document.getElementById("emailLabel").style.display = 'none';
    document.getElementById("emailMandatory").style.display = 'none';
    document.getElementById("otherMediaChannel").style.display = 'none';

    document.getElementById("firstNameMandatory").style.display = 'block';
    document.getElementById("lastNameMandatory").style.display = 'block';
    
}
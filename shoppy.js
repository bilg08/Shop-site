
console.log(email);



document.getElementById('nevtreh').addEventListener("click",function(){
    const useremail=document.getElementById('email').value;
    const userpassword=document.getElementById('nuutsug').value;

    if(useremail==="hello" && userpassword==="1234")
    {
       window.location.replace("shoppymain.html")
    }else{
        alert("You email or password is wrong.");
        return ;
    }
})
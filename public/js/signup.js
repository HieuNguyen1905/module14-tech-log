document.querySelector("#signupForm").addEventListener("submit",e =>{
    e.preventDefault();
    const signupObj = {
        name:document.querySelector("#signupName").value,
        email:document.querySelector("#signupEmail").value,
        password:document.querySelector("#signupPassword").value,
    }
    console.log(signupObj)
    fetch("/users/signup",{
        method:"POST",
        body:JSON.stringify(signupObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res =>{
        if(res.ok){
            location.href="/profile"
        }else{
            alert("Failed to sign up")
        }
    })
})
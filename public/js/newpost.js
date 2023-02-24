document.querySelector("#new-post-form").addEventListener("submit", e => {
    e.preventDefault();
    const postObj = {
        title: document.querySelector("#title-input").value,
        status: document.querySelector("#post-input").value
    }
    console.log(postObj);
    fetch("/blogs",{
        method:"POST",
        body:JSON.stringify(postObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res =>{
        if(res.ok){
            location.href = "/profile"
        }else{
            alert("Failed to post")
        }
    })
   
})  
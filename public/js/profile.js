document.querySelector("#new-post-form").addEventListener("submit", e => {
    e.preventDefault();
    const postObj = {
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
            location.reload()
        }else{
            alert("Failed to post")
        }
    })
   
})
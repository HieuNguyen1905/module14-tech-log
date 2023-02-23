document.querySelector("#new-post-form").addEventListener("submit", e => {
    e.preventDefault();
    const blogId = e.target.getAttribute("name");
    console.log(blogId)
    const postObj = {
        comment: document.querySelector("#comment-input").value,
        BlogId: blogId
    }
    console.log(postObj);
    fetch("/comment",{
        method:"POST",
        body:JSON.stringify(postObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res =>{
        if(res.ok){
            
            location.href = "/"
        }else{
            alert("Failed to post")
        }
    })
   
})  
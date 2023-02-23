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
            location.reload()
        }else{
            alert("Failed to post")
        }
    })
   
})  

let arr = document.querySelectorAll("#delBtn").forEach(button=>{
    button.addEventListener("click", (e)=>{
       e.preventDefault();
    const blogId = e.target.getAttribute("name");
    console.log("blogId")
    fetch(`/blogs/${blogId}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          location.reload();
        } else {
          alert("something went wrong");
        }
      });
    });
})

let array = document.querySelectorAll("#editBtn").forEach(button=>{
    button.addEventListener("click", (e)=>{
       e.preventDefault();
    const blogId = e.target.getAttribute("name");
    console.log("blogId")
    fetch(`/edit/${blogId}`, {
        method: "GET",
      }).then((res) => {
        if (res.ok) {
          location.href = `/edit/${blogId}`;
        } else {
          alert("something went wrong");
        }
      });
    });
})
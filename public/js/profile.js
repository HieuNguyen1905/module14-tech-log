
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
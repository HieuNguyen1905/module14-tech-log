let array = document.querySelectorAll("#commentBtn").forEach(button=>{
    button.addEventListener("click", (e)=>{
       e.preventDefault();
    const blogId = e.target.getAttribute("name");
    console.log("blogId")
    fetch(`/comment/${blogId}`, {
        method: "GET",
      }).then((res) => {
        if (res.ok) {
          location.href = `/comment/${blogId}`;
        } else {
          alert("something went wrong");
        }
      });
    });
})

let arr = document.querySelectorAll("#viewCommentBtn").forEach(button=>{
  button.addEventListener("click", (e)=>{
     e.preventDefault();
  const blogId = e.target.getAttribute("name");
  console.log("blogId")
  fetch(`/seecomment/${blogId}`, {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        location.href = `/seecomment/${blogId}`;
      } else {
        alert("something went wrong");
      }
    });
  });
})
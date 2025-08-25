var side=document.querySelector(".side-nav") 
function shownav()
{
   side.style.left= 0;
}
function closenav(){
    side.style.left= "-60%";
}

const btn = document.getElementById("button123");

btn.addEventListener("click", () => {
  btn.classList.add("clicked123");

  // Simulate async task
  setTimeout(() => {
    btn.classList.remove("clicked123");
    btn.classList.add("validate123");

    // Reset back after 3s (optional)
    setTimeout(() => {
      btn.classList.remove("validate123");
    }, 3000);
  }, 3000);
});






// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))
const loginBtn = document.getElementById("btn-1")
const signupBtn = document.getElementById("btn-2")

loginBtn.addEventListener("click",()=>{
window.location.href="/login/index.html"
})
signupBtn.addEventListener("click",()=>{
    window.location.href="/signup/index.html"
})
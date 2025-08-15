let apiPostURL = "https://jsonplaceholder.typicode.com/posts"
async function fetchPosts(){
 const value = document.querySelector(".form-control").value
 const res = await fetch(apiPostURL,{headers:{"Cache-Control":"no-cache, no-store"}})
 const posts = await res.json()
 const limitPosts = await posts?.slice(0, value)
 let list = "<ol class='text-info'>"
 limitPosts?.forEach(function(item){
  list += `<li>${item?.body}</li>`
 })
 list += "</ol>"
 document.querySelector("#posts").innerHTML = list
}

function isLoading(){
 let loading = "<div class='d-flex justify-content-center'>"
 loading += `
  <div class="spinner-border text-info" role="status">
   <span class="sr-only">Loading...</span>
 </div>
 `
 loading += "</div>"
 document.querySelector("#loading").innerHTML = loading
}
function resetLoading(){
 document.querySelector("#loading").innerHTML = ""
}

document.querySelector(".btn.btn-primary").addEventListener("click", function(){
 // fetch posts after 1 seconds and reset loading when our posts have finished
 setTimeout(function(){
  fetchPosts()
  resetLoading()
 },1000)
 // Loading
 isLoading()
})
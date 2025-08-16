let apiPostURL = "https://jsonplaceholder.typicode.com/posts"
async function fetchPosts(){
 const value = document.querySelector(".form-control").value
 const res = await fetch(apiPostURL,{headers:{"Cache-Control":"no-cache, no-store"}})
 const posts = await res.json()
 let limitPosts = await posts?.slice(0, value)
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

function resetPosts(){
 document.querySelector("#posts").innerHTML = ""
}

document.querySelector(".btn-seeMore").addEventListener("click", function(){
  const value = document.querySelector(".form-control").value
  // fetch posts after 1 seconds and reset loading when our posts have finished
  setTimeout(function(){
   if(value > 100){
    document.querySelector("#err").innerHTML = `<h2 class="text-center text-danger">API Not found</h2>`
    resetPosts()
  }else{
    fetchPosts()
    document.querySelector("#err").innerHTML = ""
  }
  resetLoading()
 },1000)
 // Loading
 isLoading()
})

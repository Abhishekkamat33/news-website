const key='0e21e301ec504bda9cbf9613fb3c44f8'
const input=document.querySelector('#search')
const input2=document.querySelector('#search2')
const btn=document.querySelector('#btn') 
const form=document.querySelector('.input') 
const form2=document.querySelector('.input2') 
window.addEventListener('load',()=>res("trending"));
document.querySelector('#sports').addEventListener('click',()=>res(sport))
async function res(search){
    const response= await fetch(`https://newsapi.org/v2/everything?q=${search}&apikey=${key}`)
    const data =  await response.json();
    // console.log(data.articles)
    fetchnews(data.articles);
}
function fetchnews(arr){
let news="";
for(let i=0;i<(arr.length);i++){
    if(arr[i].urlToImage){
    news += `   <div class="main">
    <a id ="a" href="${arr[i].url}">
    <img  id="img" src="${arr[i].urlToImage}">
   <div class="heading">
   <h4 id ="title">${arr[i].title}</h3>
   <h6 id="des">${arr[i].description}</h6>
  </div>
  </a>
  </div>   `
document.querySelector('main').innerHTML=news;
}
}
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    let query=input.value;
    res(query);
})
function searchitem(id){
    res(id);
}
let menubtn=document.querySelector('#menubtn')
let menu=document.querySelector('.mobile')
let  menubtndisplay ="true";
menubtn.addEventListener('click',()=>{
    menu.classList.toggle("hidden")
})
form2.addEventListener('submit', function(e){
    e.preventDefault();
    let query2=input2.value;
    res(query2);
})
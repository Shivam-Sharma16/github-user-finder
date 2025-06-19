
let search = document.querySelector(".search")
let usernameinp=document.querySelector(".usernameinp")
let card=document.querySelector(".card")


function getUsers(username){
  return fetch(`http://api.github.com/users/${username}`).then((raw)=> {
    if(!raw.ok) throw new Error("user not found...")
        else return raw.json()
  })
}
function getRepos(username){
  return fetch(`http://api.github.com/users/${username}/repos`).then((raw)=> {
    if(!raw.ok) throw new Error("failed to fetch repos...")
        else return raw.json()
  })
}

function decPro(details){
    console.log(details)
   let data = 
   `   <div class="border-t pt-6 flex flex-col sm:flex-row items-center gap-6">
      <!-- Avatar -->
      <img 
        src="${details.avatar_url}" 
        alt="User Avatar" 
        class="w-24 h-24 rounded-full object-cover"
      />

    
      <div class="text-center sm:text-left space-y-1">
        <h2 class="text-2xl font-bold text-gray-800">${details.name}</h2>
        <p class="text-gray-500">${details.login}</p>
        <p class="text-gray-600 mt-2">${details.bio ? details.bio : "N/A"}</p>
      </div>
    </div>

    
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center mt-4">
      <div class="bg-gray-100 rounded-xl p-4">
        <h3 class="text-lg font-semibold text-gray-800">${details.public_repos}</h3>
        <p class="text-gray-500 text-sm">Public Repos</p>
      </div>
      <div class="bg-gray-100 rounded-xl p-4">
        <h3 class="text-lg font-semibold text-gray-800">${details.followers}</h3>
        <p class="text-gray-500 text-sm">Followers</p>
      </div>
      <div class="bg-gray-100 rounded-xl p-4">
        <h3 class="text-lg font-semibold text-gray-800">${details.following}</h3>
        <p class="text-gray-500 text-sm">Following</p>
      </div>
    </div>

    
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      <div class="bg-gray-50 rounded-xl p-4">
        <p class="text-gray-500 text-sm">Location</p>
        <p class="text-gray-700 font-medium">${details.location ? details.location : "N/A"}</p>
      </div>
      <div class="bg-gray-50 rounded-xl p-4">
        <p class="text-gray-500 text-sm">Blog</p>
       <p> ${details.blog ? details.blog : "N/A"}</p>
      </div>
    </div>
  </div>`

  card.innerHTML=data
}




search.addEventListener('click',function(){
let user=usernameinp.value.trim();
if (user.length>0){
   
    getUsers(user).then((data)=>{
        decPro(data)
         })
   }
else alert("wrong username...")
    
})

    

// getRepos("Shivam-Sharma16").then((data)=>{
//     console.log(data);
    
// })
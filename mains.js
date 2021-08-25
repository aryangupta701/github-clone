const button=document.getElementById('search-button')
const searchbox=document.getElementById('text-input')

button.addEventListener('click', ()=>{

    const text=searchbox.value 
    const xhr= new XMLHttpRequest()
    const url=`https://api.github.com/users/${text}`
    xhr.open('GET',url)
   
    xhr.onreadystatechange=()=>{ 
        if(xhr.readyState==4 && xhr.status == 200)
        {
           const br=document.createElement('br')
           const bro=document.createElement('br')
           const profile=document.createElement('img')
           const follow=document.createElement('div')
           const name=document.createElement('span')
           const bio=document.createElement('p')
           const hr=document.createElement('hr')
           const hrt=document.createElement('hr')
           const hrone=document.createElement('hr')
           const data= JSON.parse(xhr.responseText)

            //data taking from api
            //profile
           profile.setAttribute('src',data.avatar_url)
           profile.setAttribute('style',"border-radius:50%; height: 100px ;margin-left:20px;border:2px; border-color:2px black; ")

        //follows
        follow.id='mainfollow'
        follow.innerHTML=`<div class="follows" style="border-right:1px solid rgba(256,256,256,0.5); ">Followers <br> ${data.followers} </div>`

        
 
        //name & bio 
        name.textContent=data.name
        bio.textContent=data.bio
        bio.id='bioo'
        name.id='name'
        profile.id='imageuser'
        //first hr margin set
        hrone.setAttribute('style',"margin-top:0px;")
           const cont=document.getElementById('data-display')
           cont.appendChild(hrone)
           cont.appendChild(profile)
           cont.appendChild(name)
           cont.appendChild(hr)
           cont.appendChild(bio)
           cont.appendChild(hrt)
           cont.appendChild(follow)
           cont.appendChild(br)
           cont.appendChild(bro)

           //for adding following sibling of followers 
        const f=document.getElementById('mainfollow')
        const following=document.createElement('div')
        following.className='follows'
        following.innerHTML=`Following <br> ${data.following}`
         f.appendChild(following)
        
        

        }
    }
    xhr.send()
})

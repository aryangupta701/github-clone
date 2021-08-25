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
           const follower=document.createElement('span')
           const following=document.createElement('span')
           const name=document.createElement('span')
           const bio=document.createElement('p')
           const hr=document.createElement('hr')
           const hrt=document.createElement('hr')
           const hrone=document.createElement('hr')
           const data= JSON.parse(xhr.responseText)

            //data taking from api
            //profile
           profile.setAttribute('src',data.avatar_url)
           profile.setAttribute('style',"border-radius:50%; height: 100px ;margin-left:20px;  ")

        //follows
        follower.innerHTML=`${data.followers}`
        following.innerHTML=`${data.following}`
 
        //name & bio 
        name.textContent=data.name
        bio.textContent=data.bio

        //first hr margin set
        hrone.setAttribute('style',"margin-top:0px;")
           const cont=document.getElementById('data-display')
           cont.appendChild(hrone)
           cont.appendChild(profile)
           cont.appendChild(name)
           cont.appendChild(hr)
           cont.appendChild(bio)
           cont.appendChild(hrt)
           cont.appendChild(follower)
           cont.appendChild(following)
           cont.appendChild(br)
           cont.appendChild(bro)

           

        }
    }
    xhr.send()
})

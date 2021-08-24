const button=document.getElementById('search')
const searchbox=document.getElementById('text-input')

button.addEventListener('click', ()=>{

    const text=searchbox.value 
    const xhr= new XMLHttpRequest()
    const url=`https://api.github.com/users/${text}`
    xhr.open('GET',url)
   
    xhr.onreadystatechange=()=>{ 
        if(xhr.readyState==4 && xhr.status == 200)
        {
             
           const profile=document.createElement('img')
           const hr=document.createElement('hr')
           const data= JSON.parse(xhr.responseText)
           profile.setAttribute('src',data.avatar_url)
           const cont=document.getElementById('image-con')
           cont.appendChild(profile)
           cont.appendChild(hr)

        }
    }
    xhr.send()
})

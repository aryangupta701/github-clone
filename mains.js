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
             
           const profile=document.createElement('img')
        //    const hr=document.createElement('hr')
           const data= JSON.parse(xhr.responseText)
           profile.setAttribute('src',data.avatar_url)
           profile.setAttribute('style',"border-radius:50%; height: 100px ;display:block; margin-left:auto ; margin-right: auto ; ")
           const cont=document.getElementById('data-display')
           cont.appendChild(profile)
           

        }
    }
    xhr.send()
})

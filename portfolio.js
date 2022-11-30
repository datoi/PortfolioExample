let home = document.getElementById('homebutton')
let web = document.getElementById('webbutton')
let about = document.getElementById('aboutbutton')

home.addEventListener('click', function(){
   home.classList.add('active') 
   web.classList.remove('active')
   about.classList.remove('active')
})

web.addEventListener('click', function(){
   home.classList.remove('active') 
   web.classList.add('active')
   about.classList.remove('active')
})
about.addEventListener('click', function(){
   web.classList.remove('active')
   about.classList.add('active')
   home.classList.remove('active')

})



let imagein1 = document.getElementById("web-picture1")
let capin1 = document.getElementById('web-description1')
  imagein1.addEventListener('mouseover', function(){
    if(capin1.style.display !== "none"){
      capin1.style.display ="none";
    } else{
      capin1.style.display = "none";
    }
  })
let imageout1 = document.getElementById("web-picture1")
let capout1 = document.getElementById('web-description1')
  imageout1.addEventListener('mouseleave', function(){
   
    if(capout1.style.display !== "block"){
      capout1.style.display ="block";
    } else{
      capout1.style.display = "none";
    }
  })


  let imagein2 = document.getElementById("web-picture2")
  let capin2 = document.getElementById('web-description2')
    imagein2.addEventListener('mouseover', function(){
      if(capin2.style.display !== "none"){
        capin2.style.display ="none";
      } else{
        capin2.style.display = "none";
      }
    })
  let imageout2 = document.getElementById("web-picture2")
  let capout2 = document.getElementById('web-description2')
    imageout2.addEventListener('mouseleave', function(){
     
      if(capout2.style.display !== "block"){
        capout2.style.display ="block";
      } else{
        capout2.style.display = "none";
      }
    })


  let imagein3 = document.getElementById("web-picture3")
  let capin3 = document.getElementById('web-description3')
    imagein3.addEventListener('mouseover', function(){
      if(capin3.style.display !== "none"){
        capin3.style.display ="none";
      } else{
        capin3.style.display = "none";
      }
    })
  let imageout3 = document.getElementById("web-picture3")
  let capout3 = document.getElementById('web-description3')
    imageout3.addEventListener('mouseleave', function(){
     
      if(capout3.style.display !== "block"){
        capout3.style.display ="block";
      } else{
        capout3.style.display = "none";
      }
    })
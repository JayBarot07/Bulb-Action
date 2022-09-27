// to create elemnts when click on add to shooping list it sholud add what we have typed

// const ol=document.getElementById('ol');
// const btn=document.getElementById('btn');
// const inp=document.getElementById('inp');
//
// btn.addEventListener('click',function(){
//   let inp1=inp.value;
//   const li=document.createElement('li');
//   li.innerText=inp1
//   console.log(li)
//  ol.appendChild(li)
//
// })


// bulb task when click the bulb sholud glow and text should change
const img=document.getElementById('img')
const btn=document.getElementById('btn')
let state=0;

btn.addEventListener('click',function(){

  if(state==0){
    img.setAttribute("src","./on.jpeg")
    console.log("switch off the bulb");
    state=1;

  }
  else{
    img.setAttribute("src","./off.jpeg")
    console.log("switch on the bulb")
    state=0;
  }
})

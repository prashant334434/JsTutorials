const jokes =document.querySelector('#jokes');
const jokesBtn =document.querySelector('#jokebtn');

// const getJokes =()=>{
//     const setHeader ={
//         headers:{
//             Accept: 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com/' ,setHeader)
//     .then((res)=> res.json())
//     .then((data)=>{
//         jokes.innerHTML = data.joke
//     }).catch((err)=>{
//        console.log(err);
//     })
// }

const getJokes = async()=>{
try{

    const setHeader ={
        headers:{
            Accept: 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com/' ,setHeader)
    const data = await res.json()
     jokes.innerHTML = data.joke
   

}catch (err) {
    console.log(err)
}
}

jokesBtn.addEventListener('click',getJokes)

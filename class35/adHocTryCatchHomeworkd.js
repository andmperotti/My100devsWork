async function getACuteDogPhoto(){
    try{
        const res = await fetch('https://dog.ceo/api/brseds/image/random')
        const data = await res.json()
        // console.log(data)
        if(data.status == 'error'){
            throw new Error('error')
        }
    }catch(error){
        console.log(error)
    }
}
getACuteDogPhoto()
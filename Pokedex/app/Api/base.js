
export default class Base{

    callGet(url){
        return this.call(url)
    }

    call(url){
        return new Promise((resolve,reject) =>{
            fetch(url)
            .then(response =>{
                const statusCode =response.status
                const data =response.json();
                return Promise.all([statusCode,data])
            })
            .then(([code,data])=>{
                if (code == 200) {
                    resolve(data)
                }
                else{
                    reject()
                }
            })
            .catch(e=>{
                console.warn(e)
                reject(e)
                
            })

        })
    }
}
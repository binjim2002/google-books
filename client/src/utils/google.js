
import { gapi } from 'gapi-script'

console.log(gapi)
export default {
    search(term,cb){

        if(typeof gapi !== 'undefined'){
            gapi.load('client', ()=>{
                gapi.client.init({
                    apiKey: 'AIzaSyAo-TfYtwFuHLK9gf47_aqTV9W3wdtIJKA'
                }).then(()=> {
                    gapi.client.request('https://www.googleapis.com/books/v1/volumes?q='+term).then(results => {
                        cb(results)
                    })
                })
            })
            
        }
        
    }
}
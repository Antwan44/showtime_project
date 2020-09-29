
import api from "./api"


export default{
// ----------------- [ concert ] --------------------
    getConcert(){
        return api.get('/concerts')
    }, 
    

}
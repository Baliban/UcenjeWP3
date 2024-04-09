import {HttpService} from "./HttpService"

const naziv = '/Raspored'

async function get(){
    return await HttpService.get(naziv)
    .then((odgovor)=>{
        
        return odgovor.data;
    })
    .catch((e)=>{
        
        return e;
    })
}

async function post(raspored){
    return await HttpService.post(naziv,raspored)
    .then((odgovor)=>{
        
        return {greska: false, poruka: odgovor.data};
    })
    .catch((e)=>{
       
        return {greska: true, poruka: e};
    })
}

async function put(id,raspored){
    return await HttpService.put(brisidjelatnik + '/'+id,raspored)
    .then((odgovor)=>{
        console.table(odgovor.data);
        return {greska: false, poruka: odgovor.data};
    })
    .catch((e)=>{
        console.log(e);
        return {greska: true, poruka: e};
    })
}




export default{
    get,
    post,
    put
    
}
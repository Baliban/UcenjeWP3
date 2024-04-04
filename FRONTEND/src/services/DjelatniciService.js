import {HttpService} from "./HttpService"

const brisidjelatnik = '/Djelatnici'

async function get(){
    return await HttpService.get(brisidjelatnik)
    .then((odgovor)=>{
        
        return odgovor.data;
    })
    .catch((e)=>{
        
        return e;
    })
}

async function post(djelatnik){
    return await HttpService.post(brisidjelatnik,djelatnik)
    .then((odgovor)=>{
        
        return {greska: false, poruka: odgovor.data};
    })
    .catch((e)=>{
       
        return {greska: true, poruka: e};
    })
}
async function put(id,djelatnik){
    return await HttpService.put(brisidjelatnik + '/'+id,djelatnik)
    .then((odgovor)=>{
       
        return {greska: false, poruka: odgovor.data};
    })
    .catch((e)=>{
       
        return {greska: true, poruka: e};
    })
}

async function _delete(Iddjelatnika){
    return await HttpService.delete(brisidjelatnik + '/' + Iddjelatnika)
    .then((odgovor)=>{
       
        return {greska: false, poruka: odgovor.data.poruka};
    })
    .catch((e)=>{
        
        return {greska: true, poruka: e};
    })
}
async function GetBySifra(ID){
    return await HttpService.get(brisidjelatnik+'/'+ID)
    .then((o)=>{
        return {greska: false, poruka: o.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: e}
    });
}

export default{
    get,
    post,
    _delete,
    put,
    GetBySifra
}
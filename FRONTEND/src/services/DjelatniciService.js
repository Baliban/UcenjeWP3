import {HttpService} from "./HttpService"

const brisidjelatnik = '/djelatnici'

async function get(){
    return await HttpService.get(brisidjelatnik)
    .then((odgovor)=>{
        console.table(odgovor.data);
        return odgovor.data;
    })
    .catch((e)=>{
        console.log(e);
        return e;
    })
}

async function post(djelatnik){
    return await HttpService.post(brisidjelatnik, djelatnik)
    .then((odgovor)=>{
        console.table(odgovor.data);
        return {greska: false, poruka: odgovor.data};
    })
    .catch((e)=>{
        console.log(e);
        return {greska: true, poruka: e};
    })
}
async function put(id,djelatnik){
    return await HttpService.put(brisidjelatnik + '/'+id,djelatnik)
    .then((odgovor)=>{
        console.table(odgovor.data);
        return {greska: false, poruka: odgovor.data};
    })
    .catch((e)=>{
        console.log(e);
        return {greska: true, poruka: e};
    })
}

async function _delete(id){
    return await HttpService.delete(brisidjelatnik + '/' + id)
    .then((odgovor)=>{
        console.table(odgovor.data);
        return {greska: false, poruka: odgovor.data.poruka};
    })
    .catch((e)=>{
        console.log(e);
        return {greska: true, poruka: e};
    })
}
async function GetBySifra(id){
    return await HttpService.get(brisidjelatnik+'/'+id)
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
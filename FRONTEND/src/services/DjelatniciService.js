import { useId } from "react";
import {HttpService} from "./HttpService"

const brisidjelatnik = '/Djelatnici'

async function get(){
    return await HttpService.get(brisidjelatnik)
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return odgovor.data;
    })
    .catch((e)=>{
        //console.log(e);
        return e;
    })
}

async function post(djelatnici){
    return await HttpService.post(brisidjelatnik,djelatnici)
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return {greska: false, poruka: odgovor.data};
    })
    .catch((e)=>{
        //console.log(e);
        return {greska: true, poruka: e};
    })
}
async function put(id,djelatnik){
    return await HttpService.put(brisidjelatnik + '/'+id,djelatnik)
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return {greska: false, poruka: odgovor.data};
    })
    .catch((e)=>{
        //console.log(e);
        return {greska: true, poruka: e};
    })
}

async function _delete(Iddjelatnika){
    return await HttpService.delete(brisidjelatnik + '/' + Iddjelatnika)
    .then((odgovor)=>{
        //console.table(odgovor.data);
        return {greska: false, poruka: odgovor.data.poruka};
    })
    .catch((e)=>{
        //console.log(e);
        return {greska: true, poruka: e};
    })
}
async function getBySifra(id){
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
    getBySifra
}
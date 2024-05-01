import  {get,obrisi,dodaj,getBySifra,promjeni,dohvatiPorukeAlert, obradiUspjeh, obradiGresku, HttpService } from "./HttpService";

async function getDjelatnici(naziv,sifra){
    return await HttpService.get('/' + naziv + '/Djelatnici/' + sifra).then((res)=>{return obradiUspjeh(res);}).catch((e)=>{ return obradiGresku(e);});
  }
  async function dodajDjelatnika(naziv,raspored, djelatnik) {
    return await HttpService.post('/' + naziv + '/' + raspored + '/dodaj/' + djelatnik).then((res)=>{return obradiUspjeh(res);}).catch((e)=>{ return obradiGresku(e);});
  }
  async function obrisiDjelatnika(naziv,raspored, djelatnik) {
    return await HttpService.delete('/'+naziv+'/' + raspored + '/obrisi/' + djelatnik).then((res)=>{return obradiUspjeh(res);}).catch((e)=>{ return obradiGresku(e);});
  }

export default{
    get,
    obrisi,
    dodaj,
    promjeni,
    getBySifra,
    dohvatiPorukeAlert,

    getDjelatnici,
    dodajDjelatnika,
    obrisiDjelatnika
};
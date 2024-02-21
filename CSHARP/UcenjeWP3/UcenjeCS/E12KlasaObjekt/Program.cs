using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UcenjeCS.E12KlasaObjekt.Edunova;

namespace UcenjeCS.E12KlasaObjekt
{
    internal class Program
    {

        public static void Izvedi()
        {
            // Objekt je instanca (pojavnost) klase - NAUČITI NAPAMET
            // Osoba je klasa
            // o je instanca klase (objekt, varijabla)
            Osoba osoba = new Osoba();

            osoba.Ime = "Mirko"; //Pomocno.UcitajString("Unesi ime osobe");
            osoba.Prezime = "Perić";

            Console.WriteLine(osoba.ImePrezime());


            osoba = new Osoba
            {
                Ime = "Katja", //Pomocno.UcitajString("Unesi ime"),
                Prezime = "Kelić"
            };

            Osoba o = new()
            {
                Ime = "Ivana",
                Prezime = "Jak"
            };

            var direktor = new Osoba() { Prezime = "Kas" };

            var m = new Mjesto() { Naziv = "Osijek" };

            direktor.Mjesto = m;

            Console.WriteLine(direktor.Mjesto?.Naziv);



            var s = new Smjer()
            {
                Naziv = "Web programiranje",
                Trajanje = 135,
                Cijena = 1234.55m,
                Sifra=1,
                Vaucer=true
            };

            Predavac[] predavaci =
            {
                new (){Ime="Šaki", Prezime="O'Neail"},
                new Predavac(){ Ime="Maja",Prezime="Lak" }
            };


            Grupa g = new Grupa();
            g.Naziv = "WP3";
            // Grupa WP3 je na smjeru Web programiranje
            g.Smjer = s;
            // Grupu WP3 vodi Maja
            g.Predavac = predavaci[1];
            // Ispišite 135 s varijable g

            

        }

    }
}

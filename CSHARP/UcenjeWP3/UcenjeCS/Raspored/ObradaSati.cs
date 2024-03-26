using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using UcenjeCS.Raspored.Model;

namespace UcenjeCS.Raspored
{
    internal class ObradaSati
    {

        public List<sati> sati {  get; }

        public ObradaSati() 
        {
        sati = new List<sati>();
            if (Pomocno.dev) 
            {
                testnipodaci();
            }


        
        }
        private void testnipodaci()
        {
            ObradaSati.Add(new sati
            {
                Sifra = 1,
                Ime = "Ana",
                Prezime = "Gal",
                Email = "agal@gmail.com",
                Oib = "33736472822"
            });

            ObradaSati.Add(new sati
            {
                Sifra = 2,
                Ime = "Marija",
                Prezime = "Zimska",
                Email = "mzimska@gmail.com",
                Oib = "33736472821"
            });
        public void PrikaziIzbornik()
        { 
                Console.WriteLine("Tjedni fond sati");
            Console.WriteLine("1. Pregled tjedne satnice za djelatnike");
            Console.WriteLine("2. Unos sati");
            Console.WriteLine("3. Brisanje sati");
            Console.WriteLine("4. Sveukupno sati u tjednu cijeli ducan");
            Console.WriteLine("5. Povratak na glavni izbornik");
            switch (Pomocno.ucitajBrojRaspon("Odaberite stavku izbornika : ",
               "Odabir mora biti 1-5", 1, 5))
            {

                case 1:
                    PregledSati();
                    PrikaziIzbornik();
                    break;
                case 2:
                    UnosSati();
                    PrikaziIzbornik();
                    break;
                case 3:
                    BrisanjeSati();
                    PrikaziIzbornik();
                    break;
                case 4:
                    SatiTotal();
                    PrikaziIzbornik();
                    break;
                case 5:
                    Console.WriteLine("Gotov rad s satnicom");
                    break;


            }

                public void PregledSati()
                {
                    Console.WriteLine("------------------");
                    Console.WriteLine("--- Djelatnici----");
                    Console.WriteLine("------------------");
                    int b = 1;
                    foreach (Djelatnik djelatnik in Djelatnici)
                    {
                        Console.WriteLine("{0}. {1}", b++, djelatnik);
                    }
                    Console.WriteLine("------------------");
                }





            }
        }
    }
}

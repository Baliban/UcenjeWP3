using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UcenjeCS.Raspored.Model;

namespace UcenjeCS.Raspored
{
    internal class ObradaDjelatnik
    {

        public List<Djelatnik> Djelatnici { get; }

        public ObradaDjelatnik()
        {
            Djelatnici = new List<Djelatnik>();
            if (Pomocno.dev)
            {
                TestniPodaci();
            }
        }

        private void TestniPodaci()
        {
            Djelatnici.Add(new Djelatnik
            {
                Sifra = 1,
                Ime = "Ana",
                Prezime = "Gal",
                Email = "agal@gmail.com",
                Oib = "33736472822"
            });

            Djelatnici.Add(new Djelatnik
            {
                Sifra = 2,
                Ime = "Marija",
                Prezime = "Zimska",
                Email = "mzimska@gmail.com",
                Oib = "33736472821"
            });
        }

        public void PrikaziIzbornik()
        {

            Console.WriteLine("Izbornik za rad s Djelatnicima");
            Console.WriteLine("1. Pregled postojećih Djelatnika");
            Console.WriteLine("2. Unos novog Djelatnika");
            Console.WriteLine("3. Promjena postojećeg Djelatnika");
            Console.WriteLine("4. Brisanje Djelatnika");
            Console.WriteLine("5. Povratak na glavni izbornik");
            switch (Pomocno.ucitajBrojRaspon("Odaberite stavku izbornika polaznika: ",
                "Odabir mora biti 1-5", 1, 5))
            {

                case 1:
                    PregledDjelatnika();
                    PrikaziIzbornik();
                    break;
                case 2:
                    UcitajDjelatnika();
                    PrikaziIzbornik();
                    break;
                case 3:
                    PromjenaDjelatnika();
                    PrikaziIzbornik();
                    break;
                case 4:
                    BrisanjeDjelatnika();
                    PrikaziIzbornik();
                    break;
                case 5:
                    Console.WriteLine("Gotov rad s djelatnicima");
                    break;


            }
            }
            private void PromjenaDjelatnika()
            {
                PregledDjelatnika();
                int index = Pomocno.ucitajBrojRaspon("Odaberi redni broj djelatnika: ", "Nije dobar odabir", 1, Djelatnici.Count());
                var p = Djelatnici[index - 1];
                p.Sifra = Pomocno.ucitajCijeliBroj("Unesite šifra djelatnika (" + p.Sifra + "): ",
                    "Unos mora biti pozitivni cijeli broj");
                p.Ime = Pomocno.UcitajString("Unesi ime djelatnika (" + p.Ime + "): ", "Ime obavezno");
                p.Prezime = Pomocno.UcitajString("Unesi Prezime djelatnika (" + p.Prezime + "): ", "Prezime obavezno");
                p.Email = Pomocno.UcitajString("Unesi Email djelatnika (" + p.Email + "): ", "Email obavezno");
                p.Oib = Pomocno.UcitajString("Unesi OIB djelatnika (" + p.Oib + "): ", "OIB obavezno");
            }

            private void BrisanjeDjelatnika()
            {
                PregledDjelatnika();
                int index = Pomocno.ucitajBrojRaspon("Odaberi redni broj djelatnika: ", "Nije dobar odabir", 1, Djelatnici.Count());
                Djelatnici.RemoveAt(index - 1);
            }

            public void PregledDjelatnika()
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

            private void UcitajDjelatnika()
            {
                var p = new Djelatnik();
                p.Sifra = Pomocno.ucitajCijeliBroj("Unesite šifru djelatnika: ",
                    "Unos mora biti pozitivni cijeli broj");
                p.Ime = Pomocno.UcitajString("Unesi ime djelatnika: ", "Ime obavezno");
                p.Prezime = Pomocno.UcitajString("Unesi Prezime djelatnika: ", "Prezime obavezno");
                p.Email = Pomocno.UcitajString("Unesi Email djelatnika: ", "Email obavezno");
                p.Oib = Pomocno.UcitajString("Unesi OIB djelatnika: ", "OIB obavezno");
                Djelatnici.Add(p);

            }

        }
    }
}

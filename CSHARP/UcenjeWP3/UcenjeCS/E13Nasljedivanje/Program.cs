using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS.E13Nasljedivanje
{
    internal class Program
    {

        // 5. vrsta metode: Konstruktor

        public Program()
        {
            Console.WriteLine("Nalazim se u konstruktoru Programa u namespace E13..");

            // u konstrukturu se pripreme potrebne zavisnosti - konstruiraju se
            Primjer1();

            Primjer2();

            Primjer3();

            Primjer4();

            Primjer5();

            Primjer6();

            Primjer7();

        }

        private void Primjer7()
        {

            Polaznik[] polaznici = new Polaznik[3];

            polaznici[0] = new Polaznik("Ivana", "Maleš", "1/24");
            polaznici[1] = new Polaznik("Marko", "Kas", "2/24");
            polaznici[2] = new Polaznik();

            // s niza polaznici ispisati Kas
            Console.WriteLine(polaznici[1].Prezime);
        }

        private void Primjer6()
        {
            //Baza b = new Baza(); // ne mogu instancirati klasu ako ne pošaljem traženi parametar

            Baza b = new Baza("edunovawp3");

        }

        // specifičnost string klase
        private void Primjer5()
        {
            string s = "Osijek";

            var grad = new string("Osijek");

            // string je immutable
            Console.WriteLine(s.GetHashCode());
            s = s + " je super";
             // ne dobijem isti hashcode jer svaka manipulacija s stringom u memoriji kreira novu varijablu
            Console.WriteLine(s.GetHashCode());


            // u radu s stringovima preporuča se korištenje klase StringBuilder

            StringBuilder sb = new StringBuilder();

            Console.WriteLine(sb.GetHashCode());

            sb.Append("Osijek");
            Console.WriteLine(sb.GetHashCode());
            sb.Append(" je super");
            Console.WriteLine(sb.GetHashCode());

            Console.WriteLine(sb); //poziva se metoda ToString()

        }

        // korištenje GetHashCode() metode
        private void Primjer4()
        {
            Polaznik p1 = new() { Ime="Iva"};
            Polaznik p2 = new() { Ime = "Iva" };

            Console.WriteLine(p1==p2); // što će ispisati

            Console.WriteLine(p1.GetHashCode()); 
            Console.WriteLine(p2.GetHashCode());


        }

        // korištenje toString metode
        private void Primjer3()
        {
            var p = new Predavac()
            {
                Ime="Karlo",
                Prezime="Sat",
                Iban="HR22"
            };

            Console.WriteLine(p);

            Console.WriteLine(new Polaznik() { Ime="Ranko", Prezime="Ekul", BrojUgovora="1"});


           

        }

        private void Primjer2()
        {
            // Ne mogu instancirati apstraktnu klasu
            // Osoba osoba = new Osoba();

            OsobaImpl osoba = new OsobaImpl();
            osoba.Ime = "Luka";

            osoba.GetType(); // metoda GetType dolazi iz klase Object




            
        }

        private void Primjer1()
        {
            Predavac p = new Predavac();
            p.Ime = "Pero";
            p.Iban = "HR455";

            Polaznik polaznik = new Polaznik();
            polaznik.Ime = "Kata";
            polaznik.BrojUgovora = "12/2024";


            // Ispišite u konzolu s objekta p HR455
            Console.WriteLine(p.Iban);


        }
    }
}

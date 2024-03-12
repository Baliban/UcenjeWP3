using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UcenjeCS.Raspored;

namespace UcenjeCS.Raspored
{
    internal class Program
    {

        public PrikaziRaspored PrikaziRaspored { get; }
        public ObradaSati ObradaSati { get; }
        public ObradaDjelatnik ObradaDjelatnik { get; }

        private ObradaOdjel ObradaOdjel;

        public Program()
        {

            Pomocno.dev = true;
            PrikaziRaspored = new PrikaziRaspored();
            ObradaSati = new ObradaSati();
            ObradaDjelatnik = new ObradaDjelatnik();
            ObradaOdjel = new ObradaOdjel();
            PozdravnaPoruka();
            PrikaziIzbornik();
        }

        private void PozdravnaPoruka()
        {
            Console.WriteLine("*************************************");
            Console.WriteLine("***** Raspored Sati djelatnika ******");
            Console.WriteLine("*************************************");
        }

        private void PrikaziIzbornik()
        {
            Console.Clear();
            Console.WriteLine("Glavni izbornik");
            Console.WriteLine("1. Tjedni raspored");
            Console.WriteLine("2. Obrada Sati");
            Console.WriteLine("3. Djealatnici");
            Console.WriteLine("4. Odjel");
            Console.WriteLine("5. Izlaz iz programa");


            switch (Pomocno.ucitajBrojRaspon("Odaberite stavku izbornika: ",
                "Odabir mora biti 1 - 5.", 1, 5))
            {
                case 1:
                    Console.Clear();
                    PrikaziRaspored.PrikaziIzbornik();
                    PrikaziIzbornik();
                    break;
                case 2:
                    ObradaSati.PrikaziIzbornik();
                    PrikaziIzbornik();
                    break;
                case 3:
                    ObradaDjelatnik.PrikaziIzbornik();
                    PrikaziIzbornik();
                    break;
                case 4:
                    ObradaOdjel.PrikaziIzbornik();
                    PrikaziIzbornik();
                    break;
                case 5:
                    Console.WriteLine("Doviđenja");
                    break;


            }
        }
        }
}

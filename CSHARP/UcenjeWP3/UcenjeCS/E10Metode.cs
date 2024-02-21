using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    internal class E10Metode
    {
        // static označava da metodu mogu pozvati na klasi
        // public se vidi us svim klasama
        public static void Izvedi()
        {
           // for(int i=0; i < 100;i++)
            //{
                // ovdje smo je pozvali
                Tip1();
                //ovdje je zovem drugi puta
                Tip1();
            //}

            Tip2("Pero");
            Tip2("Maja", "Zimska");

            Tip3(); // metoda će se izvesti, međutim ono što vrati na ovaj način ode u "zaborav"

            Console.WriteLine(Tip3());

            Console.WriteLine(Tip4(2,77));

        }

        // Tip 1. Metoda ne prima parametre i ne vraća vrijednost
        // ovjde je deklarirana, napisana
        // private se vidi samo u trenutnoj klasi
        private static void Tip1()
        {
            Console.WriteLine("Hello iz metode koja nije primila parametre i ne vraća vrijednost");
        }


        // Tip 2. metoda prima parametre i ne vraća vrijednost
        // kada ispred [static] void nema načina pristupa tada je private
        static void Tip2(string ime)
        {
            Console.WriteLine("Dobar dan " + ime);
        }

        // naziv metode ne mora biti jedinstven

        // potpis metode: naziv + lista parametara
        // method signature
        // method overloading
        static void Tip2(string ime, string prezime)
        {
            Console.WriteLine("Dobar dan " + ime + " " + prezime);
        }



        // Tip 3. metoda ne prima parametre i vraća vrijednost
        // internal - vidljivo u trenutnom namespace-u
        internal static int Tip3()
        {
            return '7'; // vraća prema ACSII tablici, pogledati https://simple.m.wikipedia.org/wiki/File:ASCII-Table-wide.svg
        }

        // Tip 4. NAJBITNIJI metoda prima parametre, metoda vraća vrijednost
        // protected je vidljiv u ovoj klasi u svim podklasama (OOP - kasnije)
        /// <summary>
        /// Primjer metode koja prima dva parametra i vraća vrijendost
        /// </summary>
        /// <param name="odBroja">Prvi primjelni parametar od kojeg se kreće</param>
        /// <param name="doBroja">Drugi primljeni parametar do kojem se ide (<=)</param>
        /// <returns>Zbroj svakog drugog broja između dva primljena</returns>
        protected static int Tip4(int odBroja, int doBroja)
        {
            int suma = 0;
            for(int i = odBroja; i <= doBroja; i += 2)
            {
                suma += i;
            }
            return suma;
        }

    }
}

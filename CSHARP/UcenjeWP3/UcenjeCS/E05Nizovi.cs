using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    internal class E05Nizovi
    {

        public static void Izvedi()
        {
            // eng. Arrays
            // još na HR polja

            // JEDNODIMENZIONALNI NIZOVI

            int[] Temperature = new int[6];
            Temperature[0] = 1; // [0] ovo je indeks niza, 1 je vrijednost
            Temperature[Temperature.Length-1] = 2; // zadnje mjesto

            Console.WriteLine(Temperature);
            Console.WriteLine(string.Join(",",Temperature));

            string[] gradovi = new string[3];
            gradovi[0] = "Osijek";
            gradovi[1] = "Zagreb";
            gradovi[2] = "Donji Miholjac";

            Console.WriteLine(string.Join(" ",gradovi));

            // skraćeni način definiranja niza
            int[] brojevi = { 2, 3, 3, 4, 7, 5, 5, 4 };

            // ispišite broj 7
            Console.WriteLine(brojevi[4]);

            // prvi element iza brojevi
            Console.WriteLine(brojevi[0]);

            // zadnji element niza
            Console.WriteLine(brojevi[brojevi.Length-1]);


            // DVODIMENZIONALNI NIZ - matrica (tablica)

            int[,] tablica =
            {
                {1,2,3},
                {4,5,6},
                {7,8,9}
            };

            // Ispisati 6
            Console.WriteLine(tablica[1,2]);

            // Trodimenzionalni niz
            int[,,] kocka = new int[10,10,10]; // koliko elemenata mogu pohraniti?

            // Viđedimenzionalni nizovi

            int[,,,,,] zvjezdaneStaze;


            string grad = "Osijek"; // string je niz znakova

            //Ispišite j
            Console.WriteLine(grad[3]); // ispisao je char

            char znak = 'j';

            Console.WriteLine(znak);

            Console.WriteLine((int)znak);



            int[] niz = { 1, 2, 3, 4, 5 };

            // Ispišite sve elemente niza jedno ispod drugog
            Console.WriteLine(niz[0]);
            Console.WriteLine(niz[1]);
            Console.WriteLine(niz[2]);
            Console.WriteLine(niz[3]);
            Console.WriteLine(niz[4]);

             int i=0;
            // uvećaj i za 1 
            i = i + 1;
            i += 1;
            i++; // ++i

        }
    }
}

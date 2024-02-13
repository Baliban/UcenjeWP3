using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    internal class E08DoWhile
    {
        public static void Izvedi()
        {
            // u for se ne mora ući - PROVJERA UVJETA JE NA POČETKU PETLJE
            for (int i= 0; i > 10; i++)
            {
                Console.WriteLine(i);
            }

            // u while se ne mora ući - PROVJERA UVJETA JE NA POČETKU PETLJE
            int t = 0;
            while(t > 0)
            {
                Console.WriteLine(t);
            }

            // u do while - PROVJERA UVJETA JE NA KRAJU PETLJE
            // Osigurava minimalno jedno izvođenje

            do
            {
                Console.WriteLine(t);
            } while (t > 0);

            // break i contine rade jednako kao u for
            // prekidanje vanjske radi kao u for
            // ugnjeđivanje radi kao u for
        }
    }
}

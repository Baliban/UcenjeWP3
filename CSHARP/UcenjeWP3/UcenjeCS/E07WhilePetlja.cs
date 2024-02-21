using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    internal class E07WhilePetlja
    {

        public static void Izvedi()
        {
            // while radi s boolean tipom podatka
            // beskonačna petlja
            while(true)
            {
                break;
            }
            // break i contine rade jednako kao u for
            // prekidanje vanjske radi kao u for
            // ugnjeđivanje radi kao u for

            // ispisati sve brojeve od 1 do 100
            int i = 0;
            while (++i <= 100)
            {
                Console.WriteLine(i);
            }

        }
    }
}

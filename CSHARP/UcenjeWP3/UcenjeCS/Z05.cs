using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    internal class Z05
    {
        // Program od korisnika unosi cijeli broj
        // program ispisuje zbroj svih brojeva od 1 do unesenog broja
        // Primjer za 100 će ispisati 5050

        // ---- SAMO ONI KOJI SU RIJEŠILI PRVI
        // Program unosi cijele brojeve sve dok se ne unese -1
        // Program ispisuje najmanji uneseni broj




        // ----- SAMO ONI KOJI SU RIJEŠILI DRUGI
        // Program unosi cijeli broj
        // Program ispisuje da li je unseni broj prosti (prim) PRIME (eng) ili ne


        public static void Izvedi()
        {
            Console.WriteLine("Unesi broj: ");
            int b = int.Parse(Console.ReadLine());
            bool prim = true;
            for(int i = 2; i < b; i++)
            {
                if(b%i== 0)
                {
                    prim = false;
                    break; // za broj 2536562 si uštedio 2536561 iteraciju
                }
            }
            Console.WriteLine(b + " " + (prim ? " JE " : " NIJE ") + "prim broj");
        }
    }
}

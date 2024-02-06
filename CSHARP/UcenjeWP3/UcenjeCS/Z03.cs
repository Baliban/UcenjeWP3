using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    internal class Z03
    {

        public static void Izvedi()
        {
            // Program unosi tri cijela broja
            // program ispisuje najmanji
            // DZ

            Console.Write("Unesi prvi broj: ");
            int broj1 = int.Parse(Console.ReadLine());

            Console.Write("Unesi drugi broj: ");
            int broj2 = int.Parse(Console.ReadLine());

            Console.Write("Unesi treci broj: ");
            int broj3 = int.Parse(Console.ReadLine());

            Console.WriteLine("Najmanji broj je: " + Math.Min(broj1, Math.Min(broj2, broj3)));

        }
    }
}

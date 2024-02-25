using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    internal class Z02
    {

        public static void Izvedi()
        {
            // Program unosi dva broja
            // Ispisuje veći
            // DZ


            Console.WriteLine("Unesi prvi broj: ");
            int broj1 = int.Parse(Console.ReadLine());
            Console.WriteLine("Unesi drugi broj: ");
            int broj2 = int.Parse(Console.ReadLine());

            if (broj1 > broj2)
            {
                Console.WriteLine(broj1);
            }

            else { Console.WriteLine(broj2); }




        }
    }
}

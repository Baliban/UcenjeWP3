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
            Console.WriteLine("Unesi prvi broj: ");
            int broj1 = int.Parse(Console.ReadLine());
            Console.WriteLine("Unesi drugi broj: ");
            int broj2 = int.Parse(Console.ReadLine());
            Console.WriteLine("Unesi treci broj: ");
            int broj3 = int.Parse(Console.ReadLine());

            int min=broj1;

            if (broj1 <= broj2 && broj1 <= broj3)
                min = broj1;
            if (broj2 <= broj1 && broj2 <= broj3)
                min = broj2;
            if (broj3 <= broj1 && broj3 <= broj2)
                min = broj3;

            Console.WriteLine("najmanji broj od " + broj1 + "," + broj2 + "," + broj3 + " je: " + min);

        }
    }
}

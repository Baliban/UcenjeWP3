using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    internal class Z04
    {
        public static void Izvedi()
        {
            // Program od korisnika unosi dva cijela broja
            // Program ispisuje sve neparne brojeve
            // Između dva unesena broja

            Console.WriteLine("Unesi prvi broj: ");
            int broj1 = int.Parse(Console.ReadLine());
            Console.WriteLine("Unesi drugi broj: ");
            int broj2 = int.Parse(Console.ReadLine());
            Console.WriteLine("Svi neparni brojevi izmedju " + broj1 + " i " + broj2 + " su: ");
            int neparni;
            if (broj2 > broj1)
                for (neparni = broj1; neparni <= broj2; neparni++)
                    if (neparni % 2 != 0)
                    {
                                                
                        Console.Write( neparni + ",");


                    }
        }
                







                
        }
}
    
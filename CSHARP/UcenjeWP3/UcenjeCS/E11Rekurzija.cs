using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    internal class E11Rekurzija
    {

        public static void Izvedi()
        {
            // Zbrojite prvih 100 brojeva: 1+2+3+4+...+99+100
            int suma = 0;
            for(int i = 1; i <=100; i++) {
                suma += i;
            }
            Console.WriteLine(suma);

            Console.WriteLine(Zbroji(100));
        }

        private static int Zbroji(int broj)
        {
            // svaka rekurzija mora imati uvjet prekida rekurzije
            if(broj == 1) {
                return 1;
            }
            
            return broj + Zbroji(broj - 1); // rekurzija - metoda zove samu sebe
        }

    }
}

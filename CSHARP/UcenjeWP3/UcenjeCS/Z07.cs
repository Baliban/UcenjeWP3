using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    internal class Z07
    {
        public static void Izvedi()
        // Pogram unosi ime osobe, visinu i težinu
        // Program ispisuje crvenom bojom
        // ako je visina > 170 i < 190 te težina je < 90,5
        // Ti, XXXX si zgodan / zgodna

        {
            Console.ForegroundColor = ConsoleColor.Red;
           string ime;
            Console.WriteLine("Napisi svoje ime: ");
            ime = Console.ReadLine();
           int visina;
            Console.WriteLine("Svoju visinu: ");
            visina = int.Parse(Console.ReadLine());
           double tezina;
            Console.WriteLine("i tezinu: ");
            tezina = double.Parse(Console.ReadLine());


            if ((visina > 170 & visina < 190) & (tezina < 90.5))

            {
                Console.WriteLine("Ti " + ime + " si zgodan/na");
            }
            else 
            {
                Console.WriteLine("Poradi na sebi");
                    }

        }


    }
}

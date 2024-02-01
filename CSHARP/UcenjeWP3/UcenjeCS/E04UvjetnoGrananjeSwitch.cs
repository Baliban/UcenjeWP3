using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    internal class E04UvjetnoGrananjeSwitch
    {
        public static void Izvedi()
        {
            int i = 2;

            // Ako je i=0 napiši DOBAR, i=1 napiši LOŠ, i=2 napiši ZAO

            if(i== 0)
            {
                Console.WriteLine("DOBAR");
            }else if(i== 1)
            {
                Console.WriteLine("LOŠ");
            }else if(i== 2)
            {
                Console.WriteLine("ZAO");
            }

            switch(i) //radi s int, char i string
            {
                case 0:
                    Console.WriteLine("DOBAR");
                    break;
                case 1:
                    Console.WriteLine("LOŠ");
                    break;
                case 2:
                    Console.WriteLine("ZAO");
                    break;
                default: // ovo je else u if-u
                    Console.WriteLine("Ostalo");
                    break;
            }

            Console.Write("Unesi ime grada: ");
            string grad = Console.ReadLine();

            switch(grad)
            {
                case "Osijek":
                case "Vukovar":
                    Console.WriteLine("Slavonija");
                    break;
                case "Split":
                case "Zadar":
                    Console.WriteLine("Dalmacija");
                    break;
            }

        }
    }
}

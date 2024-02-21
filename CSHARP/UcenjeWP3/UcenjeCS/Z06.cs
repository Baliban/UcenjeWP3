using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    internal class Z06
    {
        public static void Izvedi()
        {
            // Program učitava dva cijela broja i ispisuje njihov zbroj
            int pb = Pomocno.UcitajCijeliBroj("Unesi prvi broj",0,int.MaxValue);
            int db = Pomocno.UcitajCijeliBroj("Unesi drugi broj");
            Console.WriteLine(pb+db);

            Console.WriteLine(Pomocno.UcitajString("Unesi ime grada") + " je super grad");
        }
    }
}

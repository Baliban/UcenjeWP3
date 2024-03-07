using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS.E20Ekstenzije
{
    internal class Grupa : Entitet, ISucelje
    {
        public void Posao()
        {
            Console.WriteLine("radim posao grupa");
        }
    }
}

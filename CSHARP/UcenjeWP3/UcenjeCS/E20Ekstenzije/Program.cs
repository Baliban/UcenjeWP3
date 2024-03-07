using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS.E20Ekstenzije
{
    internal class Program
    {

        public Program() {

            var g = new Grupa();
            var s = new Smjer();

            g.OdradiPosao();
            s.OdradiPosao();


        }
    }
}

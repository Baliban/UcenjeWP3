using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS.E13Nasljedivanje
{
    internal class Polaznik : Osoba
    {

        public Polaznik():base() // :base() označava poziv praznok konstruktora u Osobi
        { 
        }

        public Polaznik(string ime, string prezime, string brojugovora)
            :base(ime,prezime)
        {
            this.BrojUgovora = brojugovora;
        }

        public string? BrojUgovora { get; set; }

        public override string ToString()
        {
            return base.ToString() + ": " + BrojUgovora;
        }
    }
}

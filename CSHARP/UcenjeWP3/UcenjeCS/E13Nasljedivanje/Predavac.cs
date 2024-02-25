using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS.E13Nasljedivanje
{
    // Jedna klasa može nasljediti samo jednu nadklasu
    internal class Predavac:Osoba // Klasa Predavac nasljeđuje klasu osoba
    {
        public string? Iban { get; set; }

        public override string ToString()
        {
            return Ime + " " + Prezime + ": " + Iban;
        }
    }
}

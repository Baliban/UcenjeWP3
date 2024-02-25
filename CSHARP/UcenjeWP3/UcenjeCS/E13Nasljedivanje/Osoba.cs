using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS.E13Nasljedivanje
{
    // Apstraktna klasa je ona klasa koja nema implementaciju (instancu)
    // Koristi se za objedinjavanje zajedničkih svojstava i metoda koje će netko nasljediti
    // U OOP jezicima uvijek ima jedna klasa koju svi nasljeđuju htjeli to ili ne
    internal abstract class Osoba:Object // :Object nije potrebno pisati
    {
        // prazan (empty) konstruktor
        public Osoba() { }

        // puni (full) konstruktor
        public Osoba(string ime, string prezime)
        {
            this.Ime = ime;
            this.Prezime = prezime;
        }

        public string? Ime { get; set; }
        public string? Prezime { get; set; }

        public override string ToString()
        {
            return Ime + " " + Prezime;
        }
    }
}

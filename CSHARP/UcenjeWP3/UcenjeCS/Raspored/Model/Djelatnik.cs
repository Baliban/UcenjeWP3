namespace UcenjeCS.Raspored.Model
{
    internal class Djelatnik : Entitet
    {

        
            public string Ime { get; set; }
            public string Prezime { get; set; }
            public string Oib { get; set; }
            public string Email { get; set; }

            public override string ToString()
            {
                return Ime + " " + Prezime + ", " + Email;
            }
        }

    
}

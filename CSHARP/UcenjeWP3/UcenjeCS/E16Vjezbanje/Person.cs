using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS.E16Vjezbanje
{
    internal class Person
    {
        private string name;
        private int age;

        public Person(string initialName)
        {
            this.age = 0;
            this.name = initialName;
        }

        public void PrintPerson()
        {
            Console.WriteLine(this.name + ", age " + this.age + " years");
        }

        public void GrowOlder()
        {
            this.age = this.age + 1;
        }


        public class Osoba
        {
            Osoba()
            {
                new Druga();
            }
        }

        private class Druga
        {

        }
    }
}

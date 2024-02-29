using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    internal class CyclicTable
    {
        public static void Izvedi()
        {
            int[,] tablica = new int[5, 5]
                        {
                {1,2,3,4,5},
                {6,7,8,9,10},
                {11,12,13,14,15},
                {16,17,18,19,20},
                {21,22,23,24,25}

                };


           

            for (int i = 0; i < tablica.GetLength(0); i++)
            {
                for (int j = 0; j < tablica.GetLength(1); j++)
                {

                    {
                       // tablica[i, j] = tablica[i, j].PadLeft(3);
                        Console.Write(tablica[i, j]);
                    }
                }
                Console.WriteLine();
            }



        }


    }
}       
    

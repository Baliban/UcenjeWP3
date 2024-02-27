using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace UcenjeCS
{
    internal class Tablica
    {
        public static void Izvedi()
        {
            string[,] tablica = new string[5, 5]
                        {
                {"1","2","3","4","5"},
                {"6","7","8","9","10"},
                {"11","12","13","14","15"},
                {"16","17","18","19","20"},
                {"21","22","23","24","25"}

                };


            tablica[4,4] = "1"; tablica[4,3] = "2"; tablica[4, 2] = "3"; tablica[4, 1] = "4"; tablica[4, 0] = "5"; tablica[3, 0] = "6"; tablica[2, 0] = "7"; tablica[1, 0] = "8";
            tablica[0,0] = "9"; tablica[0,1] = "10"; tablica[0, 2] = "11"; tablica[0, 3] = "12"; tablica[0, 4] = "13"; tablica[1, 4] = "14"; tablica[2, 4] = "15"; tablica[3, 4] = "16";
            tablica[3, 3] = "17"; tablica[3, 1] = "19"; tablica[2, 1] = "20"; tablica[1, 1] = "21"; tablica[1, 2] = "22"; tablica[1, 3] = "23"; tablica[2, 3] = "24"; tablica[2, 2] = "25";

           // string Replace(string tablica)
           // {
           //     return tablica.Replace("25", "1").Replace("24", "2").Replace("23", "3").Replace("22", "4").Replace("21", "5").Replace("20", "16");
           // }
            
            for (int i = 0; i < tablica.GetLength(0); i++)
                {
                    for (int j = 0; j < tablica.GetLength(1); j++)
                    {

                        {
                            tablica[i, j] = tablica[i, j].PadLeft(3);
                            Console.Write(tablica[i, j]);
                        }
                    }
                    Console.WriteLine();
                }
            


        }

        
    }
}

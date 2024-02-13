using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    internal class E06ForPetlja
    {

        public static void Izvedi()
        {
            for (int i = 0; i < 10; i = i + 1)
            {
                Console.WriteLine("Edunova " + i);
            }


            int[] niz = { 1, 2, 3, 44, 5, 6, 7, 8, 9 };

            // Ispisati sve brojeve jedne ispod drugih

            for (int i = 0; i < niz.Length; i++)
            {
                Console.WriteLine(niz[i]);
            }


            // ispisati sve parne brojeve od 3 do 43
            for (int i = 3; i <= 43; i++)
            {
                if (i % 2 == 0)
                {
                    Console.WriteLine(i);
                }
            }


            // koji je zbroj prvih 100 brojeva?
            // 1+2+3+4+...+99+100
            int suma = 0;
            for (int i = 1; i <= 100; i++)
            {
                suma += i;
            }

            Console.WriteLine(suma);


            // petlja može ići i unazad
            // Ispiši sve brojeve od 78 do 4
            for (int i = 78; i >= 4; i--)
            {
                Console.WriteLine(i);
            }


            // korak može biti koji god mi želimo
            // ispiši svaki 7 broj od 1 do 100

            for (int i = 1; i <= 100; i += 7)
            {
                Console.WriteLine(i);
            }

            // Ovaj način nećemo koristiti
            //int j;
            //for (j = 1; j < 10; j++)
            //{

            //}

            // ispišite brojeve od 1 do 20 jedno pokraj drugog
            for (int i = 1; i <= 20; i++)
            {
                Console.Write(i + " ");
            }
            Console.WriteLine("*************");

            // petlje se mogu ugnjezditi
            for (int i = 1; i <= 10; i++)
            {
                for (int j = 1; j <= 10; j++)
                {
                    Console.Write(i * j + " ");
                }
                Console.WriteLine();
            }

            // Domaća zadaća. Formatirati na ovaj način
            //  1   2   3   4   5  6   7   8   9   10
            //  2   4   6   8  10  12  14  16  18  20
            //  3   6   9  12  15  18  21  24  27  30
            //  4   8  12  16  20  24  28  32  36  40
            //  5  10  15  20  25  30  35  40  45  50
            //  6  12  18  24  30  36  42  48  54  60
            //  7  14  21  28  35  42  49  56  63  70
            //  8  16  24  32  40  48  56  64  72  80
            //  9  18  27  36  45  54  63  72  81  90
            // 10  20  30  40  50  60  70  80  90 100


            // petlja se može preskočiti - nastaviti
            for(int i = 0; i < 10; i++)
            {
                if (i == 3)
                {
                    continue; //shortcuirciting
                }

                Console.WriteLine(i);
            }

            // petlja se može nasilno prekinuti

            for(int i=0; i < 10; i++)
            {
                if(i== 3)
                {
                    break;
                }
                Console.WriteLine(i);
            }

            for(int i=0;i<10; i++)
            {
                for(int j=0;j< 10; j++)
                {
                    // kako prekinuti vanjsku petlju (varijabla i)
                    goto labela;
                    //break;// prekidam unutarnju paljtu (varijabla j)
                    
                }
            }

            labela:
            Console.WriteLine("nastavljam nakon vanjske petlje");


            // beskonačna petlja
            for(; ; )
            {
                Console.WriteLine(new Random().NextInt64(1,100));
                break;
            }


            // 9 različitih načina zbrajanja prvih 100 brojeva

            // int i, s=0; for(i=1;i<=100;i++) s+=i;

            // int i, s; for(i=1, s=0;i<=100; s+=i, i++);
            //
            // int i=1, s=0; for( ; i<=100; i++){ s+=i; }
            //
            // int i, s=0; for(i=1; ; i++){ if(i<=100) s+=i; else break;}
            //
            // int i, s=0; for(i=1;i<=100; ){ s+=i; i++;}
            //
            //int i, s=0; for(i=1; ; ){ if(i<=100) {s+=i; i++;} else break;}
            //
            // int i=1, s=0; for( ; i<=100 ; ){ s+=i; i++;}
            //
            // int i=1, s=0; for( ; ; i++){if(i<=100)  s+=i; else break;}
            //
            // int i=1, s=0; for( ;  ; ){if(i<=100) {s+=i; i++;} else break;} 
            //		


        }
    }
}

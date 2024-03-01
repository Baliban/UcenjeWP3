using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace UcenjeCS
{
    public class CyclicMatrix
    {
        public static void Izvedi()
        {
            Console.WriteLine("     Cyclic Matrix");
            Console.Write("Enter how many rows: ");
            int row = int.Parse(Console.ReadLine());
            Console.Write("Enter how many columns: ");
            int column = int.Parse(Console.ReadLine());

            int[,] matrix = new int[row, column];
            int a = 1;
            int beginrow = 0;
            int endrow = row - 1;
            int begincolumn = 0;
            int endcolumn = column - 1;
            int result = row * column;


            while (a <= result)
            {
                for (int i = endcolumn; i >= begincolumn; i--)
                {
                    matrix[endrow, i] = a++;
                }

                if (a > result) { break; }
                endrow--;

                for (int i = endrow; i >= beginrow; i--)
                {
                    matrix[i, begincolumn] = a++;
                }
                if (a > result) { break; }
                begincolumn++;

                for (int i = begincolumn; i <= endcolumn; i++)
                {
                    matrix[beginrow, i] = a++;
                }
                if (a > result) { break; }
                beginrow++;

                for (int i = beginrow; i <= endrow; i++)
                {
                    matrix[i, endcolumn] = a++;
                }
                if (a > result) { break; }
                endcolumn--;
            }

            for (int i = 0; i < row; i++)
            {
                for (int j = 0; j < column; j++)
                {
                    Console.Write("{0,3}", matrix[i, j]);
                }
                Console.WriteLine();
               
            }
           
        }
    }
}       
    

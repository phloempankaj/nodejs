import java.*;

class sum
{
    public static void main(String argv[])
    {
        if(argv.length!=2)
        {
            System.out.println("Insufficeint Parameters");
        }
        else
        {
            int a=Integer.parseInt(argv[0]);
            int b=Integer.parseInt(argv[1]);
            int c=a+b;
            System.out.println("Sum = "+c);
        }
    }
}
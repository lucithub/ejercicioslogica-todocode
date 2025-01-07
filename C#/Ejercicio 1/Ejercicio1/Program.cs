string[] nombres = new string[8];
for (int i = 0; i < nombres.Length; i++)
{
    Console.WriteLine("Ingrese un nombre: ");
    nombres[i] = Console.ReadLine();
}
Console.WriteLine("Los nombres que ha elegido son los siguientes");
foreach (string nombre in nombres)
{
    Console.WriteLine(nombre);
}
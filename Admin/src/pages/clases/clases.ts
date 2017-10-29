
class Restaurante{
  public nombre: string;
  public categorias: Categoria[]; 
}
class Categoria{
  public nombre: string;
  public platos: Plato[];

}
class Plato{
  public nombre:String;
  public precio: number;

}

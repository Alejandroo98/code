/* 

* Dentro de la funcion startLogin retornamos esto "return () => {}" y esto es debido 
* a que es asincrono la accion que realizaremos aqui

? Recuerda!
? • Llamamos sincrono debito a que se ejecuta un procesos de forma simultanea, es decri a la vez
? • Llamamos asincrono debito a que se ejecuta mas de un proceso de forma simultanea es decir a la vez.

? En el caso de que hagas una peticion a algun servidor se estaran ejecutando mas de un proceso a la vez
? por lo tanto es asincrono

*/

export const startLogin = (email, password) => {
  return async () => {
    console.log(email, password);
  };
};

/* 
! CLase que toca -> https://www.udemy.com/course/react-cero-experto/learn/lecture/20408371#questions/13081234

 */

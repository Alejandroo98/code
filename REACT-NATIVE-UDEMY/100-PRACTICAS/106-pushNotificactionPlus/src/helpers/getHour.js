//RECUERDA QUE TIENES QUE INGRESAR LA HORA DEL PARTIDO Y LA FECHA EN ESTE FORMATO -> dia-mes-año hora:minutos.  Ejemplo -> 15-8-2021 11:11  ( No olvides omitir el cero cuando el numero del mes, el dia, la hora o los minutos sea menor a 10  )

const getHour = () => {
  const date = new Date();

  const hora = `${date.getHours()}:${date.getMinutes()}`;

  return hora;
};

const getDate = () => {
  const date = new Date();

  const fecha = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  return fecha;
};

export { getHour, getDate };

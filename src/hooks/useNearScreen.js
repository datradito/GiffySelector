import { useEffect, useState, useRef } from "react";

//Creo Hook para utilizar el intersection
//Con la prop once puedo manejar q el usenearscreen pase a false
//para q no se pueda hacer nada luego
export default function useNearScreen({
  distance = "100px",
  externalRef,
  once = true,
} = {}) {
  //useRef es Como un state pero no renderiza el componente cuando cambia el valor
  //Lo usamos para interactuar con el DOM
  const fromRef = useRef();

  const [isNearScreen, setIsNearScreen] = useState(false);

  useEffect(() => {
    let observer;

    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setIsNearScreen(true);
        //Desconecto para evitar actualizar el estado constantemente.
        once && observer.disconnect();
      } else {
        !once && setIsNearScreen(false);
      }
    };

    //Cargo polyfill(libreria que le falta al navegador(IE x ej) para soportar IntersectionObserver x ejemplo)
    //de forma dinamica dentro del useEffect
    //Uso .resolve porque envuelvo un valor dentro de una promesa, es mejor que new Promise.
    Promise.resolve(
      typeof IntersectionObserver != undefined
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      //VER IntersectionObserver
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });
      //current es el valor actual de la referencia
      observer.observe(fromRef.current);
    });

    //Idem a la desconexion en el onChange pero para el useEffect
    return () => observer && observer.disconnect();
  });
  return isNearScreen;
}

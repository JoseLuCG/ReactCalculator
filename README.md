# ReactCalculator

1. Clona el proyecto en tu ordenador, instala las dependencias y arráncalo.
```bash
git clone https://github.com/Diseno-de-Aplicaciones-Web/ReactCalculator.git
cd ReactCalculator
npm install
npm start
```
2. Empieza a trabajar:
   - [ ] Abre la consola en el navegador y prueba a modificar el contenido del formulario en la app.
   - [ ] Estudia el contenido de `src/App.js` y entiende cómo está funcionando comparándolo con lo que puedes observar en el navegador.
   - [ ] Añade una nuevo input asociado a un nuevo hook state `secondNumber`. Añade el `console.log` correspondiente en el hook `useEffect` existente para poder ver cómo funciona.
   - [ ] Añade un `p` al final del documento asociado a un nuevo hook state `result`.
        ```html
        <p>{result}</p>
        ```
    - [ ] Añade un botón "sumar" que ejecute un handler `addHandler` en el evento `onClick`. `addHandler` ha de realizar las siguientes tareas:
        - [ ] Poner `result` el resultado en **sumar** los valores de `firstNumber` y `secondNumber`. Comprueba que el resultado se muestra en la página.
        - [ ] Poner en `firstNumber` el valor almacenado en `result`.
        - [ ] Eliminar el valor de `secondNumber`.
    - [ ] Añade nuevos botones con sus correspondientes handlers para las operaciones "restar", "multiplicar" y "dividir" siguiendo procesos equivalentes a los anteriores.
    - [ ] Añade un nuevo botón "C" con su handler que borre datos mostrados en las entradas de datos y el resultado. Hazlo eliminado el valor de los hooks correspondientes.
    - [ ] Añade un botón "M+" que almacene el valor de `result` en un hook "ref". Llama `memory` al ref.
    - [ ] Añade un botón "MR" que copie el valor de `memory` en `secondNumber`.

3. Añade un nuevo componente.
    - [ ] Crea un nuevo hook de tipo state. Llamale `resultsHistory` y dale un valo rinicial de array vacío `[]`.
    - [ ] Crea las carpetas `components/history` para el nuevo componente.
    - [ ] En la nueva carpeta, crea el fichero `History.jsx`.
    - [ ] Crea la estructura básica del componente. Ha de recibir un `prop` al que llamaremos `results`.
    - [ ] Utiliza `results.map` para obtener un array de elementos `li`. Llama al array `liArray`.
    - [ ] La salida del componente ha de ser un elemento `ol` que contenga los elementos de `liArray`.
    - [ ] Importa el componente `History` en el componente principal e incorpólo en su salida, proporcionando como prop `results` el contenido de `resultsHistory`.
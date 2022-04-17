# Práctica 8. Programación Orientada a Objetos en Javascript
### Factor de ponderación: 8

### Objetivos
Los objetivos de esta práctica son:
* Poner en práctica metodologías y conceptos de Programación Orientada a Objetos en JavaScript.
* Poner en práctica Principios y Buenas prácticas de programación Orientada a Objetos.

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar esta práctica:
* Se valorará la realización de las diferentes tareas que se proponen.
* El comportamiento del programa debe ajustarse a lo solicitado en este enunciado.
* Capacidad de la programadora de introducir cambios en el programa desarrollado.
* Conocer y poner en prácticas los principios y buenas prácticas de programación orientada a objetos.
* Deben usarse estructuras de datos adecuadas para representar los diferentes elementos que intervienen en el problema
* Acreditar que se sabe generar informes de cubrimiento de código utilizando tanto 
[Jest](https://jestjs.io/)
como
[CodeCov](https://docs.codecov.com/docs)
* Saber corregir bugs en sus programas utilizando el depurador de Visual Studio Code
* Ser capaz de desarrollar tests unitarios para sus programas utilizando 
[Jest](https://jestjs.io/)
* Acreditar su capacidad para configurar y utilizar 
[ESLint](https://eslint.org/)
  y que es capaz de trabajar con la misma en Visual Studio Code.
* El código ha de estar documentado con 
[JSDoc](https://jsdoc.app/). 
  y ha de acreditarse la capacidad de generar documentación para sus programas utilizando la herramienta.
  Haga que la documentación del programa generada con JSDoc esté disponible a través de una web alojada en su máquina IaaS de la asignatura.
* Ser capaz de resolver problemas de la plataforma Exercism, subiendo sus soluciones a la misma.
* Acreditar que es capaz de desarrollar y ejecutar programas simples de la plataforma Jutge.
* Se comprobará que el código que el alumnado escribe se adhiere a las reglas de la 
[Guía de Estilo de Google para Javascript](https://google.github.io/styleguide/jsguide.html).
* Acreditar que es capaz de editar ficheros de forma remota en su VM usando Visual Studio
  Code (VSC)

### Indicaciones de caracter general
En esta práctica y las siguientes se promoverá el uso del paradigma orientado a objetos.
Los programas han de organizarse en torno a clases que se han de implementar usando la sintaxis para
clases ES6 de JavaScript y poniendo en práctica los principios de abstracción y encapsulamiento característicos 
de la Programación Orientada a Objetos.
En los ejercicios han de ponerse en práctica los principios y buenas prácticas que han sido expuestos en las clases de la asignatura.

Vigile siempre el tipo de visibilidad que elige para los atributos (properties) de sus clases
y tenga en cuenta tanto las reglas de 
[estilo](https://google.github.io/styleguide/jsguide.html#features-classes)
como las 
[etiquetas JSDoc](https://stackoverflow.com/questions/41715994/how-to-document-ecma6-classes-with-jsdoc)
relacionadas con el constructo `class`.

Previo a la implementación de cada clase, diseñe y desarrolle un conjunto de tests para probar el correcto
funcionamiento de todos los métodos públicos.

Encapsule las clases en módulos que exporten la correspondiete clase hacia otros programas clientes que pudieran utilizarla.

Configure para la práctica una página web que sirva de índice para mostrar la documentación generada por
JSDoc para todos los ejercicios de la práctica.

Configure un fichero `package.json` en el directorio raíz de su repositorio de modo que ejecutando 
`npm install` queden instaladas todas las dependencias de su proyecto.

### Ejercicios de Exercism
Resuelva los siguientes problemas ejecutando los tests correspondientes a cada uno de ellos hasta conseguir
que todos pasen correctamente. 
Una vez que lo logre, suba su solución a Exercism.

1.- [Robot Simulator](https://exercism.org/tracks/javascript/exercises/robot-simulator)

2.- [Robot Name](https://exercism.org/tracks/javascript/exercises/robot-name)

### 3.- La clase *Fecha*
En este ejercicio se propone desarrollar un módulo ES6 que implemente una clase `Fecha` 
que permita representar y gestionar fechas.
La clase no ha de usar en modo alguno objetos 
[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
de JavaScript.
En este ejercicio se pretende en todo caso que desarrolle Ud. métodos similares a los disponibles en `Date`.
Incorpore en su clase los miembros de datos (*properties*) y métodos que considere necesarios.

Desarrolle un programa cliente `fechas.js` que tome como parámetro una fecha, un número y un nombre de fichero:
```
$ node fechas.js 
Modo de uso: node fechas.js dd/mm/aa N fichero_salida.txt
Pruebe node fechas.js --help para más información
```
El programa deberá imprimir en el fichero de salida (tercer parámetro) las N (segundo parámetro) fechas cronológicamente posteriores a la
introducida (primer parámetro) con una separación de un día entre fechas sucesivas.

### 4.- La clase *Racional*
Un 
[número racional](https://en.wikipedia.org/wiki/Rational_number)
tiene un numerador y un denominador de la forma `p/q` donde `p` es el numerador y `q` el denominador.
Por ejemplo, 1/3, 3/4 y 10/4 son números racionales.

Un número racional no puede tener denominador 0, pero sí puede ser cero el numerador.
Todo número entero `n` es equivalente al racional `n/1`.
Los números racionales se utilizan en cálculos precisos que involucran fracciones.
Por ejemplo, `1/3 = 0.33333 ...`.
Este número no puede ser representado de forma precisa en formato de punto flotante.
Para obtener resultados precisos es conveniente usar números racionales.

Desarrollare un módulo ES6 que implemente una clase `Racional` para representar y operar con números racionales.

Desarrolle un programa cliente `racionales.js` que permita operar con números racionales y haga uso
de la clase `Racional`.

Las siguientes deben tomarse como especificaciones del programa a desarrollar:
* La clase `Racional` incluirá al menos métodos para:
    * Escribir un objeto de tipo `Racional`.
    * Leer (por teclado o desde fichero) un objeto de tipo `Racional`.
    * Sumar dos objetos de tipo `Racional`.
    * Restar dos objetos de tipo `Racional`.
    * Multiplicar dos objetos de tipo `Racional`.
    * Dividir dos objetos de tipo `Racional`.
    * Comparar objetos de tipo `Racional`.
* El programa cliente ha de permitir leer un fichero de texto en el que figuran pares de números racionales
separados por espacios de la forma:

```
a/b c/d
e/f g/h
  ...
```

y para cada par de números racionales, el programa ha de imprimir en otro fichero de salida todas las operaciones posibles
con cada uno de los pares de números del fichero de entrada, de la forma:

```
a/b + c/d = n/m
  ...
```

Si el programa se ejecuta sin pasar parámetros en la línea de comandos, debiera obtenerse el siguiente mensaje:

```
$ node racionales.js 
Modo de uso: node racionales.js fichero_entrada fichero_salida
Pruebe node racionales.js --help para más información
```

Si el programa se ejecuta pasando como parámetro la opción `--help` se ha de obtener:

```
racionales.js -- Números Racionales
Modo de uso: node racionales.js fichero_entrada fichero_salida 

fichero_entrada: Fichero de texto conteniendo líneas con un par de números racionales: `a/b c/d` separados por un espacio
fichero_salida:  Fichero de texto que contendrá líneas con las operaciones realizadas: `a/b + c/d = n/m`
```

### 5.- La clase *MySet*
En este ejercicio se propone desarrollar un módulo ES6 que implemente una clase `MySet` 
para representar 
[conjuntos](https://en.wikipedia.org/wiki/Set_(mathematics)) 
de números naturales.

Obviamente, si en alguna ocasión se precisa utilizar conjuntos, lo que ha de hacerse es utilizar la clase 
[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
de JavaScript.
No obstante en este ejercicio práctico la implementación de la clase `MySet` no ha de usar en modo alguno objetos 
[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
de JavaScript.

La clase ha de contener al menos métodos (y/o atributos) que implementen las siguientes operaciones con conjuntos:
* `toString` Devuelve una cadena que representa el conjunto. Los conjuntos se imprimirán en pantalla con sus
  elementos incluídos entre llaves, de modo que el conjunto vacío se representa por `{}`.
* `size` Devuelve el cardinal del conjunto
* `union` Unión de conjuntos
* `intersection` Intersección de conjuntos
* `difference` Complemento relativo
* `contains` Determina si un elemento pertenece al conjunto
* `empty` Determina sin un conjunto es vacío
* `subset` Determina si un conjunto es subconjunto de otro 
* `disjorint` Indica si dos conjuntos son disjuntos
* `eql` Indica si dos conjuntos son iguales 
* `add` Añade un elemento a un conjunto

Para la definición de estas operaciones consulte 
[Wikipedia](https://en.wikipedia.org/wiki/Set_(mathematics)) 
así como los métodos y ejemplos de la clase
[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) 
de JavaScript.

Incluya discrecionalmente cualesquiera otras operaciones que considere adecuadas como métodos en la clase
`MySet`.

Desarrolle un programa cliente `sets.js` que permita operar con conjuntos y haga uso de la clase `MySet` que diseñe.
El programa cliente realizará operaciones similares a las que figuran en la página MDN correspondiente a la
clase
[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) 
de JavaScript, por ejemplo:
```javascript
const mySet1 = new MySet()

mySet1.add(1)           // Set {1}
mySet1.add(5)           // Set {1, 5}
mySet1.add(5)           // Set {1, 5}
mySet1.has(Math.sqrt(25))  // true

const mySet2 = new MySet([1, 2, 3, 4])
mySet2.size                    // 4
```

Observe que el constructor de la clase toma como parámetro un array en el que figuran los elementos con los
que se inicializa el conjunto.

Por simplicidad asumiremos que los números que intervienen en los conjutos son todos mayores o iguales que 1.

Para representar internamente los conjuntos se pueden utilizar diversas ideas y se propone aquí una que podría
usarse, si lo consideran conveniente, y que se expone a continuación:

Para representar un conjunto de números (enteros positivos) se utilizarán los bits de un número. 
Si el bit i-ésimo está a 1 ello indicará que el número *i* pertenece al conjunto. 
Si ese bit está a 0, ello indica que el número *i* no pertenece al conjunto. 
De este modo se puede representar conjuntos con tantos números naturales como bits tiene la representación
binaria del número.

[JavaScript representa todos los
números](https://stackoverflow.com/questions/2802957/number-of-bits-in-javascript-numbers#:~:text=All%20numbers%20in%20JavaScript%20are,%2D%2D%20will%20be%20represented%20accurately.)
en formato de punto flotante IEEE-754, pero las operaciones de bits
las calcula sobre 32 bits (4 bytes) de modo que con un número se pueden representar conjuntos de 32
elementos (`{1, 2, 3, ..., 32}`).

Una primera aproximación sería usar este esquema limitando los conjuntos a un máximo de 32 elementos.
Si se requieren conjuntos con un mayor número de elementos sería necesario usar un vector de números.
Con un vector de `M` valores numéricos se pueden representar conjuntos con un máximo de `32 * M` elementos. 
Usando este esquema de representación resulta fácil implementar las diferentes operaciones sobre conjuntos
usando 
[aritmética de bits](https://medium.com/@soni.dumitru/javascript-bitwise-operations-190001bf1fc).

## Referencias
* [Exercism JS](https://exercism.org/tracks/javascript)
* [Número racional](https://en.wikipedia.org/wiki/Rational_number)
* [Conjuntos](https://en.wikipedia.org/wiki/Set_(mathematics)) 
* [Aaritmética de bits](https://medium.com/@soni.dumitru/javascript-bitwise-operations-190001bf1fc).
* [ESLint](https://eslint.org/)
* [JSDoc](https://jsdoc.app/)
* [The Modern Javascript Tutorial](https://javascript.info)
* [PAI Code Examples](https://github.com/ULL-ESIT-PAI-2021-2022/PAI-class-code-examples/tree/master/src)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

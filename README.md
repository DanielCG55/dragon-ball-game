# Dragon Ball Game

## Mi primer proyecto de [Core Code School](https://www.corecode.school/)

> [Click para probar el juego](https://danielcg55.github.io/dragon-ball-game/)

## Indice:

-   ## Dragon ball game
-   [Indice:](#indice)
    -   [1. Título del Juego:](#1-título-del-juego)
    -   [2. Imágenes y vídeos:](#2-imágenes-y-vídeos)
    -   [3. Motivación del proyecto:](#3-motivación-del-proyecto)
    -   [4. Acceso directo al juego:](#4-acceso-directo-al-juego)
    -   [5. Tabla de contenidos o índice:](#5-tabla-de-contenidos-o-índice)
    -   [6. Manual de instalación y deployment:](#6-manual-de-instalación-y-deployment)
    -   [7. Ejemplos de código:](#7-ejemplos-de-código)
    -   [8. Entornos de ejecución:](#8-entornos-de-ejecución)
    -   [9. Listado de paquetes y dependencias:](#9-listado-de-paquetes-y-dependencias)
    -   [10. Agradecimientos:](#10-agradecimientos)
    -   [11. Otras consideraciones:](#11-otras-consideraciones)

## 1. Título del Juego:

dragon-ball-game

## 2. Imágenes y vídeos:

![cellarena](https://user-images.githubusercontent.com/122054483/218276791-e9fd1494-e289-4495-b5f2-d3490c27b70c.png)

## 3. Motivación del proyecto:

Como fan de Dragon Ball desde pequeño, he querido crear este juego a modo de homenaje.

## 4. Instrucciones del juego:

Usar las flechas de dirección para mover al personaje.
Pulsar la tecla "espacio" para disparar.

## 5. Manual de instalación y deployment:

```ts
Clone the repository:
    git clone https://danielcg55.github.io/dragon-ball-game/

Initiate npm:
    npm init

Or use this instead:
    npm i yarn

Install dependencies:
    yarn install, yarn add vite

Execute the project:
    yarn run dev

```

## 7. Ejemplos de código:

    constructor(props: InitialEnemyManagerProps) {
        super({ x: 800, y: 800 });
        this.ammoManager = props.ammoManager;
        this.dead = new Audio();
        this.dead.src = "celljr.wav";
        this.dead.volume = 1;

        let time = 100;
        let enemy: Enemy;
        let createEnemies = () => {
            for (let i = 1; i > 0; i--) {
                enemy = new Enemy({
                    position: {
                        x: Math.random() * (1000 - 600) + 600,
                        y: Math.random() * (500 - 100) + 100,
                    },
                    size: { w: 70, h: 70 },
                });
                this.enemies.push(enemy);
            }
        };

## 8. Entornos de ejecución:

-   [Visual Studio Code](https://code.visualstudio.com/Download)

## 9. Listado de paquetes y dependencias:

-   Node package manager: [npm](https://www.npmjs.com/)
-   To run the HTML: [Vite](https://vitejs.dev/)

-   Lenguajes de programación: [typescript](https://www.npmjs.com/package/typescript)
-   [ts-yarn-dev](https://www.npmjs.com/package/ts-yarn-dev)
-   MDN [Api Canvas](https://developer.mozilla.org/es/docs/Web/API/Canvas_API)

## 10. Agradecimientos:

Pues los agradecimientos són muy sencillos. Gracias a mi compañera Saray, por siempre prestarme su ayuda. Gracias a Juan Pablo por no rendirse conmigo y gracias a Marc por creer que era capaz de hacerlo. Gracias!

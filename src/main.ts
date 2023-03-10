import { BackgroundMusic } from "./actors/BackgroundMusic";
import { canvas, canvasMid, ctx } from "./utils/getCanvas";
import { Actor } from "./actors/Actor";
import { FPSViewer } from "./actors/FPSViewer";
import { Timer } from "./actors/Timer";
import { Gohan } from "./actors/Gohan";
import { BackgroundImage } from "./actors/BackgroundImage";
import { AmmoManager } from "./actors/AmmoManager";
import { EnemyManager } from "./actors/EnemyManager";

window.onload = () => {
    const gohan = new Gohan({
        position: { x: 200, y: 200 },
        size: { w: 100, h: 100 },
        maxSpeed: 5,
        angle: -90,
    });
    const ammo_manager = new AmmoManager(gohan);

    const enemyManager = new EnemyManager({ ammoManager: ammo_manager });

    const fps = new FPSViewer();

    const timer = new Timer({ position: { x: canvasMid.x - 50, y: 35 } });

    const music = new BackgroundMusic();

    const img = new BackgroundImage();

    // Array de Actores que se van a dibujar en pantalla

    const static_actors: Actor[] = [
        fps,
        gohan,
        timer,
        enemyManager,
        music,
        ammo_manager,
    ];

    // Inicializar el primer frame
    let lastFrame = 0;

    // Renderizado
    // "time" es el tiempo transcurrido
    const render = (time: number) => {
        // "delta" es la diferencia de tiempo entre el frame anterior y el actual
        let delta = (time - lastFrame) / 1000;

        // Actualizando "lastFrame"
        lastFrame = time;

        // Dynamically get all static and managed actors
        const actors = [
            ...static_actors,
            ...ammo_manager.getAmmoActors(),
            ...enemyManager.getEnemyActors(),
        ];

        // Actualiza la posición de los actores del canvas
        actors.forEach((actor) => {
            actor.update(delta);
        });

        // Borra lo pintado en el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //Imagen de fondo
        img.draw(ctx);

        // Dibuja o pinta los actores en el canvas
        actors.forEach((actor) => {
            ctx.save();
            actor.draw(ctx, delta);
            ctx.restore();
        });

        // Recursividad para el renderizado correcto
        window.requestAnimationFrame(render);
    };

    // Primera llamada del renderizado
    window.requestAnimationFrame(render);

    // Escuchar la tecla presionada
    document.body.addEventListener("keydown", (e) => {
        static_actors.forEach((player) => {
            player.keyboardEventDown(e.key);
        });
    });

    // Escuchar la tecla liberada
    document.body.addEventListener("keyup", (e) => {
        static_actors.forEach((player) => {
            player.keyboardEventUp(e.key);
        });
    });
};

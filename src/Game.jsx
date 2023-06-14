import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserCard from './UserCard'
import TimeCard from './TimeCard'

function Juego() {
    const [Jugador1, setjugador1] = useState("");
    const [Jugador2, setjugador2] = useState("");

    let numero = 0;
    let maquina = ["piedra", "papel", "tijera"]
    let winner;

    function piedra() {

        numero = Math.floor(Math.random() * 3)

        setjugador2(maquina[numero])
        setjugador1("piedra")
        console.log(maquina[numero])

    }

    function papel() {

        numero = Math.floor(Math.random() * 3)

        setjugador2(maquina[numero])
        setjugador1("papel")
        console.log(maquina[numero])

    }

    function tijera() {

        numero = Math.floor(Math.random() * 3)

        setjugador2(maquina[numero])
        setjugador1("tijera")
        console.log(maquina[numero])

    }
    if (Jugador1 === Jugador2) {
        winner = "Empate, hazlo de nuevo";
    } else if (Jugador1 === "piedra" && Jugador2 === "papel") {
        winner = "Perdiste, vuelvelo a intentar";
    } else if (Jugador1 === "piedra" && Jugador2 === "tijera") {
        winner = "Ganaste, bien jugado";
    } else if (Jugador1 === "papel" && Jugador2 === "piedra") {
        winner = "Ganaste, bien jugado";
    } else if (Jugador1 === "papel" && Jugador2 === "tijera") {
        winner = "Perdiste, vuelvelo a intentar";
    } else if (Jugador1 == "tijera" && Jugador2 === "piedra") {
        winner = "Perdiste, vuelvelo a intentar";
    } else if (Jugador1 === "tijera" && Jugador2 === "papel") {
        winner = "Ganaste, bien jugados";
    }

    return (
        <div>
            <h1 className='text-black'>Jueguele</h1>
            <button onClick={piedra}>Piedra</button>
            <button onClick={papel}>Papel</button>
            <button onClick={tijera}>Tijera</button>
            <p className='text-black'>La maquina saco: {Jugador2}</p>
            <p className='text-black'>Tu sacaste: {Jugador1} </p>
            <p className='text-black'>Resultado: {winner} </p>
        </div>
    )
}
export default Juego
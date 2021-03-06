import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import "./Intro.scss"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,
            {
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                strings: ['Designer', 'Web Developer', 'Content Creator']
            })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    {/* <img src="assets/man.png" alt="Man" /> */}
                    <img src="assets/avatar.svg" alt="Man" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hola, Yo soy</h2>
                    <h1>Julian Barragan</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="arrow" />
                </a>
            </div>
        </div>
    )
}

import NavBar from "../components/navBar";
import ProgressIndicator from "../components/ProgressIndicator";
import React, { useEffect, useState, useRef } from "react";
import { useWindowScroll, useWindowSize } from "react-use"; 

const page = () => {
    
    const { y: pageYOffset} = useWindowScroll();
    const { height: heightPage } = useWindowSize();
    const [ visible, setVisiblity ] = useState(false);
    const [ percent, setPercent ] = useState(0);
    
    const refFirst = useRef(null);
    const refSecond = useRef(null);
    const refThird = useRef(null);

    // browser code
    const goToSection = (component) => {
        console.log("click goToSection")
        console.log({component})
        if (typeof window !== "undefined") {   
            window.scrollTo({
                top: component.current?.offsetTop ? (component.current.offsetTop - 23) : 0,
                behavior: "smooth"
            })
        }
    }

    useEffect(() => {
        const {scrollHeight, clientHeight} = document.documentElement;
        const windowsHeight = scrollHeight - clientHeight;
        setPercent(100 * pageYOffset/windowsHeight)
    }, [pageYOffset])

    return (
        <div className="content">
            <ProgressIndicator percent={percent} />
            <NavBar
                refFirst = {refFirst}
                refSecond = {refSecond}
                refThird = {refThird}
                goToSection = {goToSection}
            />
            <div className="sites first" ref={refFirst}>
                Seccion 1
                <a href="#" as="/">Top</a>
            </div>
            <div className="sites second" ref={refSecond}>
                Seccion 2
                <a href="#" as="/">Top</a>
            </div>
            <div className="sites third" ref={refThird}>
                Seccion 3
                <a href="#" as="/">Top</a>
            </div>
        </div>
    )
}

export default page
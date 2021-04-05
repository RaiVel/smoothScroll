import NavBar from "../components/navBar";
import ProgressIndicator from "../components/ProgressIndicator";
import React, { useEffect, useState, useRef } from "react";
import { useWindowScroll, useWindowSize } from "react-use"; 

const page = () => {
    
    const { y: pageYOffset} = useWindowScroll();
    const { height: heightPage } = useWindowSize();
    const [ visible, setVisiblity ] = useState(false);
    const [ percent, setPercent ] = useState(0);

    const [ divSelected, setDivSelected ] = useState(null);
    
    const refHome = useRef(null);
    const refFirst = useRef(null);
    const refSecond = useRef(null);
    const refThird = useRef(null);

    // browser code
    const goToSection = (component) => {
        if (typeof window !== "undefined") {   
            window.scrollTo({
                top: component.current?.offsetTop ? (component.current.offsetTop - 23) : 0,
                behavior: "smooth"
            })
        }
    }

    const determinateSection = (offset) => {
        if(offset >= refThird.current.offsetTop - 30) return 3;
        if(offset >= refSecond.current.offsetTop - 30) return 2;
        if(offset >= refFirst.current.offsetTop - 30) return 1;
        return null;
    }

    useEffect(() => {
        const {scrollHeight, clientHeight} = document.documentElement;
        const windowsHeight = scrollHeight - clientHeight;
        setPercent(100 * pageYOffset/windowsHeight);

        setDivSelected(determinateSection(pageYOffset));

    }, [pageYOffset])

    return (
        <div className="content">
            <ProgressIndicator percent={percent} />
            <NavBar
                refFirst = {refFirst}
                refSecond = {refSecond}
                refThird = {refThird}
                goToSection = {goToSection}
                setDivSelected = {setDivSelected}
                divSelected = {divSelected}
            />
            <div className="sites home" ref={refHome}>
                HOME
            </div>
            <div className="sites first" ref={refFirst}>
                Seccion 1
            </div>
            <div className="sites second" ref={refSecond}>
                Seccion 2
            </div>
            <div className="sites third" ref={refThird}>
                Seccion 3
            </div>
        </div>
    )
}

export default page
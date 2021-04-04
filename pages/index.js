import NavBar from "../components/navBar";
import ProgressIndicator from "../components/ProgressIndicator";
import React, { useEffect, useState } from "react";
import { useWindowScroll, useWindowSize } from "react-use"; 

const page = () => {
    
    const { y: pageYOffset} = useWindowScroll();
    const { height: heightPage } = useWindowSize();
    const [ visible, setVisiblity ] = useState(false);
    const [ percent, setPercent ] = useState(0);
    
    useEffect(() => {
        const {scrollHeight, clientHeight} = document.documentElement;
        console.log({scrollHeight, clientHeight})
        const windowsHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setPercent(100 * pageYOffset/windowsHeight)
    }, [pageYOffset])

    return (
            // https://www.youtube.com/watch?v=Dz6Sg630I8M
            //SMOOTH SCROLL REACT
        <div className="content">
            <ProgressIndicator percent={percent} />
            <NavBar/>
            <div className="sites first" id="first">
                Seccion 1
                <a href="#" as="/">Top</a>
            </div>
            <div className="sites second" id="second">
                Seccion 2
                <a href="#" as="/">Top</a>
            </div>
            <div className="sites third" id="third">
                Seccion 3
                <a href="#" as="/">Top</a>
            </div>
        </div>
    )
}

export default page
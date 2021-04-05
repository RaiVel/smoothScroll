
const navBar = ({ refFirst, refSecond, refThird, goToSection, setDivSelected, divSelected }) => (
    <div className ="navbar">
        <ul>
            <li 
                className={divSelected === 1 && "selected"}
                onClick = {() => {
                    setDivSelected(1);
                    goToSection(refFirst);
            }}>
                <a>1ro</a>
            </li>
            <li 
                className={divSelected === 2 && "selected"}
                onClick ={() => {
                    setDivSelected(2);
                    goToSection(refSecond)
                }
            }>
                <a>2do</a>
            </li>
            <li 
                className={divSelected === 3 && "selected"}
                onClick={() => {
                    setDivSelected(3);
                    goToSection(refThird)
                }
            }>
                <a>3ro</a>
            </li>
        </ul>
    </div>
)

export default navBar

const navBar = ({ refFirst, refSecond, refThird, goToSection }) => (
    <div className ="navbar">
        <ul>
            <li onClick = {() => goToSection(refFirst)}>
                <a>1ro</a>
            </li>
            <li onClick ={() => goToSection(refSecond)}>
                <a>2do</a>
            </li>
            <li onClick={() => goToSection(refThird)}>
                <a>3ro</a>
            </li>
        </ul>
    </div>
)

export default navBar
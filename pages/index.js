const page = () => (
    <div className="content">
        <div className ="navbar">
            <ul>
                <li>
                    <a href="#first" as="/">1ro</a>
                </li>
                <li>
                    <a href="#second" as="/">2do</a>
                </li>
                <li>
                    <a href="#third" as="/">3ro</a>
                </li>
            </ul>
        </div>
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

export default page
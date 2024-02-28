import { Link } from "react-router-dom";

const About = () => {
    return (
        <h1>
            About <Link to="/about/nestedPage">Nested Page</Link>
        </h1>
    );
};

export default About;

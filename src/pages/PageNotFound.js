import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <h1>
            Page is not found. Go to <Link to="/">Home</Link>
        </h1>
    );
};

export default PageNotFound;

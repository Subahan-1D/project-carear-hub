import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-[1280px] mx-auto">
            <h2>Oops!!!</h2>
            <button><Link>Go Back</Link></button>
        </div>
    );
};

export default ErrorPage;
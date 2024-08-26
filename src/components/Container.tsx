import { ReactNode } from "react";
import "../App.css";
import signUpImg from "../assets/signupImage.png";

interface IContainerProps {
    children?: ReactNode;
}

function Container({children}: IContainerProps): JSX.Element {
    return (
        <div className="container">
            <div className="image-container">
                <img src={signUpImg} alt="Sign Up" />
            </div>
            {children}
        </div>
    )
}

export default Container;

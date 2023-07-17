import { ReactNode } from "react";
import "./style.css";

interface MainProps {
    children: ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <div className='main'>
            {children}
        </div>
    );
};
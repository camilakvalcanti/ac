import React from "react";

interface NavBarProps {
    navButtons: string;
}

const NavBar = ({navButtons} : NavBarProps) => {
    return (
        <div>
            <button>{navButtons}</button>
        </div>
    );
};

export default NavBar;
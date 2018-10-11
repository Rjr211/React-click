import React from "react";
import "./Header.css";


const Header = props => ( 
<nav className="black">
<div className="nav-wrapper">
<div className="material-icons">mouse</div>
<div className="title">{props.children}</div>
<div className="scores right">
      Score: {props.score} Highscore: {props.highscore}
    </div>
</div>
</nav>
);

export default Header;

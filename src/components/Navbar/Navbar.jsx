import React from "react";
import logo from "../../images/logo.png";
import "./style.css";
export default function Navbar() {
    return (
        <nav>
            <div className="input-search-space">
                <i className=" bi-search"></i>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Pesquise por um titulo"
                />
            </div>
            <img src={logo} alt="logo Breaking News" />
            <button>Entrar</button>
        </nav>
    );
}

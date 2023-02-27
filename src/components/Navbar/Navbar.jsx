import React from "react";
import logo from "../../images/logo.png";
import { Button, ImageLogo, InputSearchSpace, Nav } from "./Style";

export default function Navbar() {
    return (
        <Nav>
            <InputSearchSpace >
                <i className=" bi-search"></i>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Pesquise por um titulo"
                />
            </InputSearchSpace>
            <ImageLogo src={logo} alt="logo Breaking News" />
            <Button>Entrar</Button>
        </Nav>
    );
}

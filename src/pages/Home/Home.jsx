import React from "react";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { News } from "../../data";
import { HomeBody } from "./HomeStyle";

export default function Home() {
    return (
        <>
            <Navbar />
            <HomeBody>
                {News.map((item, index) => (
                    <Card key={index} News={item} />
                ))}
            </HomeBody>
        </>
    );
}

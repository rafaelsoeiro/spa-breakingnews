import React from "react";
import { CardBody, CardContainer, CardFooter } from "./CardStyle";

function Card({ News }) {
    console.log(News);
    return (
        <>
            <CardContainer>
                <CardBody>
                    <div>
                        <h2>{News.title}</h2>
                        <p>{News.text}</p>
                    </div>
                    <img src={News.image} alt="imagem" />
                </CardBody>
                <CardFooter>
                    <div>
                        <i className="bi bi-hand-thumbs-up"></i>
                        <span>{News.likes}</span>
                    </div>

                    <div>
                        <i className="bi bi-chat"></i>
                        <span>{News.comments}</span>
                    </div>
                </CardFooter>
            </CardContainer>
        </>
    );
}

export default Card;

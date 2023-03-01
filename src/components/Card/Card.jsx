import React from "react";


function Card({News}) {
    console.log(News);
    return (
        <>
            <section>
                <h2>{News.title}</h2>
                <p>{News.text}</p>
                <img src={News.image} alt="imagem" />
                <i className="bi bi-hand-thumbs-up"></i>
                <span>{News.likes}</span>
                <i className="bi bi-chat"></i>
                <span>{News.comments}</span>
            </section>
        </>
    );
}

export default Card;

import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;
    background-color: #fff;
    border-radius: 0.3rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 1rem;

    border: 2px solid transparent;
    transition: all 0.4s ease-in-out;
    :hover {
        background-color: #f1f1f1;
        border-color: #0a86af;
    }
`;

export const CardBody = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h2 {
        margin-bottom: 1rem;
    }

    img {
        width: 30%;
        object-fit: cover;
        object-position: center;
        border-radius: 5px;
    }
`;

export const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;
    div {
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }
`;

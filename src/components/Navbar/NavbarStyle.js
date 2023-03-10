import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem;
    /* position: fixed; */
    top: 0;
    z-index: 1;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const ImageLogo = styled.img`
    width: 8rem;
    height: 4rem;
    object-fit: cover;
    cursor: pointer;
`;
export const InputSearchSpace = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    align-items: center;
    i {
        position: absolute;
        top: 1;
        right: 0.2rem;
        z-index: 10;
        border: none;
        background-color: #f5f5f5;
        border-radius: 0.3rem;
        padding: 0.5rem;
    }
    input {
        outline: none;
        font-size: 1rem;
        padding: 0.6rem;
        background-color: #f5f5f5;
        border: none;
        width: 100%;
        border-radius: 0.3rem;
        :focus {
            border: 1px solid #0bade3;
        }
    }
`;
export const Button = styled.button`
    color: #fff;
    font-family: Roboto, arial;
    letter-spacing: 0.1rem;
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: uppercase;
    /* width: 40%; */
    background-color: #0bade3;
    padding: 0.4rem 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 0.3rem;
    transition: all 0.4s ease-in-out;

    :hover {
        background-color: #0a86af;
    }
`;

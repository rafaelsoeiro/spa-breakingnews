import { useState } from "react";
import { news } from "./data";
import "./App.css";
import Home from "./pages/Home/Home";
import { GlobalStyle } from "./GlobalStyle";

function App() {
    const [count, setCount] = useState(0);
    console.log(news);
    return (
        <>
            <GlobalStyle />
            <Home />
            <h1>App</h1>
        </>
    );
}

export default App;

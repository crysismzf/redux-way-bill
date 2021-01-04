import React from "react";
import Info from "./components/Info";
import Options from "./components/Options";

function App() {
    return (
        <React.Fragment>
            <h1>Сервис создания путевых листов</h1>
            <div className="wrapper">
                <div className="wrapper-items">
                    <Info />
                    <Options />
                </div>
            </div>
        </React.Fragment>
    )
}

export default App;
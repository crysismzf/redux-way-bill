import React from "react";

class Info extends React.Component {
    render() {
        return (
            <div className="wrapper-item">
                <div className="petrol-list">
                    Старый пробег <span> </span> км.<br/>
                    Новый прбег <span> </span> км.<br/>
                    <br/>
                    Остаток <span className="balance"> </span> л.<br/>
                    Дата последней заправки <span
                    className="petrol"> </span><br/>
                    Всего бензина <span className="sumBalance"> </span> л.<br/>
                    Осталось километров <span
                    className="sumKm"> </span> км.<br/>
                </div>
            </div>
        )
    }
}

export default Info;
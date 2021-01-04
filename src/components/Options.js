import React from "react";

class Options extends React.Component {
    render() {
        return (
            <div className="wrapper-item">
                <div className="selectRoutes">
                    <span className="title">Первый путевой лист</span>
                    <br/><br/>
                    <input type="number" className="input-selectRoutes" value="21.13"/> Бензина
                    залил <br/><br/>
                    <input type="date" className="input-selectRoutes"/> Дата заправки<br/>
                    <br/>
                    <input type="date" className="input-selectRoutes"/> Дата путевого
                    листа<br/><br/>
                    <div className="checkbox-list">
                        <select>
                            <option data-id="0">не выбрано</option>

                        </select> <input type="checkbox"/> в обратную сторону
                    </div>
                    <div className="checkbox-list">
                        <select>
                            <option data-id="0">не выбрано</option>
                        </select> <input type="checkbox"/> в обратную сторону
                    </div>
                    <div className="checkbox-list">
                        <select>
                            <option data-id="0">не выбрано</option>
                        </select> <input type="checkbox"/> в обратную сторону
                    </div>
                    <div className="checkbox-list">
                        <select>
                            <option data-id="0">не выбрано</option>
                        </select> <input type="checkbox"/> в обратную сторону
                    </div>

                </div>
            </div>
        )
    }
}

export default Options;
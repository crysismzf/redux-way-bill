import React from "react";
import {connect} from "react-redux";

class Options extends React.Component {

    newDateOfRefueling() {
        let date = this.newDateOfRefuelingInput.value;
        this.props.onNewDateOfRefueling(date);
    }

    changeMileagePetrol() {
        let data = this.mileagePetrolInput.value;
        this.props.onChangeMileagePetrol(data);
    }

    render() {
        return (
            <div className="wrapper-item">
                <div className="selectRoutes">
                    <span className="title">Первый путевой лист</span>
                    <br/><br/>
                    <input type="number" className="input-selectRoutes" /> Номер путевого листа
                    <br/><br/>
                    <input
                        type="number"
                        className="input-selectRoutes"
                        value={this.props.info.mileagePetrol}
                        ref={(input) => { this.mileagePetrolInput = input;}}
                        onChange={this.changeMileagePetrol.bind(this)}
                    /> Средний расход
                    <br/><br/>
                    <input type="number" className="input-selectRoutes" /> Бензина
                    залил <br/><br/>
                    <input
                        type="date"
                        ref={(input) => { this.newDateOfRefuelingInput = input; }}
                        className="input-selectRoutes"
                        onChange={this.newDateOfRefueling.bind(this)}
                    /> Дата заправки<br/>
                    <br/>
                    <input type="date" className="input-selectRoutes"/> Дата путевого
                    листа<br/><br/>
                    <input type="number" className="input-selectRoutes" /> Общий километраж
                    <br/><br/>
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

export default connect (
    state => ({
        info: state.info
    }),
    dispatch => ({
        onNewDateOfRefueling: (date) => {
            dispatch({ type: 'NEW_DATE_OF_REFUELING', date})
        },
        onChangeMileagePetrol: (mileagePetrol) => {
            dispatch({type: 'CHANGE_MILEAGE_PETROL', mileagePetrol})
        }
    })
)(Options)
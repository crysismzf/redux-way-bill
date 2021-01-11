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
        this.props.onCalculateRemainderKm();
    }

    addPetrol() {
        let data = this.addPetrolInput.value;
        this.props.onAddPetrol(data);
        this.props.onCalculateRemainderKm();
    }

    changeNumberList() {
        let data = this.numberOfListInput.value;
        this.props.onChangeNumberList(data);
    }

    changeDateList() {
        let date = this.dateOfListInput.value;
        this.props.onChangeDateList(date);
    }

    render() {
        return (
            <div className="wrapper-item">
                <div className="selectRoutes">
                    <span className="title">Первый путевой лист</span>
                    <br/><br/>
                    <input
                        type="text"
                        className="input-selectRoutes"
                        value={this.props.info.numberOfList}
                        ref={(input) => { this.numberOfListInput = input;}}
                        onChange={this.changeNumberList.bind(this)}
                    /> Номер путевого листа
                    <br/><br/>
                    <input
                        type="date"
                        className="input-selectRoutes"
                        ref={(input) => { this.dateOfListInput = input;}}
                        onChange={this.changeDateList.bind(this)}
                    /> Дата путевого
                    листа<br/><br/>
                    <input
                        type="number"
                        className="input-selectRoutes"
                        value={this.props.info.mileagePetrol}
                        ref={(input) => { this.mileagePetrolInput = input;}}
                        onChange={this.changeMileagePetrol.bind(this)}
                    /> Средний расход
                    <br/><br/>
                    <input
                        type="date"
                        ref={(input) => { this.newDateOfRefuelingInput = input; }}
                        className="input-selectRoutes"
                        onChange={this.newDateOfRefueling.bind(this)}
                    /> Дата заправки<br/><br/>
                    <input
                        type="number"
                        className="input-selectRoutes"
                        ref={(input) => { this.addPetrolInput = input;}}
                        onChange={this.addPetrol.bind(this)}
                    /> Бензина
                    залил <br/><br/>
                    <input type="number" className="input-selectRoutes" /> Общий километраж
                    <br/><br/>
                </div>
            </div>
        )
    }
}

export default connect (
    state => ({
        info: state
    }),
    dispatch => ({
        onNewDateOfRefueling: (date) => {
            dispatch({ type: 'NEW_DATE_OF_REFUELING', date})
        },
        onChangeMileagePetrol: (mileagePetrol) => {
            dispatch({type: 'CHANGE_MILEAGE_PETROL', mileagePetrol})
        },
        onCalculateRemainderKm: () => {
            dispatch({ type: 'CALCULATE_REMAINDER_KM'})
        },
        onAddPetrol: (liters) => {
            dispatch({type: 'ADD_PETROL', liters})
        },
        onChangeNumberList: (number) => {
            dispatch({type: 'CHANGE_NUMBER_LIST', number})
        },
        onChangeDateList: (date) => {
            dispatch({type: 'CHANGE_DATE_LIST', date})
        },
    })
)(Options)
import React from "react";
import {connect} from "react-redux";

class Info extends React.Component {

    componentDidMount() {
        this.props.onCalculateRemainderKm();
    }

    render() {
        return (
            <div className="wrapper-item">
                <div className="petrol-list">
                    Старый пробег <span>{this.props.info.oldMileage}</span> км.<br/>
                    Новый пробег <span> {this.props.info.newMileage} </span> км.<br/>
                    <br/>
                    Остаток <span className="balance"> {this.props.info.petrolLimit} </span> л.<br/>
                    Дата последней заправки <span className="petrol"> {this.props.info.dateOfRefuelingOld} </span><br/>
                    Всего бензина <span className="sumBalance"> {this.props.info.allPetrol} </span> л.<br/>
                    Осталось километров <span
                    className="sumKm"> {this.props.info.limitKM} </span> км.<br/>
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
        onCalculateRemainderKm: () => {
            dispatch({ type: 'CALCULATE_REMAINDER_KM'})
        },
    })
)(Info)
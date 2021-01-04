import React from "react";
import {connect} from "react-redux";

class Info extends React.Component {
    render() {
        return (
            <div className="wrapper-item">
                <div className="petrol-list">
                    Старый пробег <span>{this.props.info.oldMileage}</span> км.<br/>
                    Новый прбег <span> {this.props.info.newMileage} </span> км.<br/>
                    <br/>
                    Остаток <span className="balance"> {this.props.info.petrolLimit} </span> л.<br/>
                    Дата последней заправки <span className="petrol"> {this.props.info.dateOfRefueling} </span><br/>
                    Всего бензина <span className="sumBalance"> {this.props.info.allPetrol} </span> л.<br/>
                    Осталось километров <span
                    className="sumKm"> </span> км.<br/>
                </div>
            </div>
        )
    }
}

export default connect (
    state => ({
        info: state.info
    })
)(Info)
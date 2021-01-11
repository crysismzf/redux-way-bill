const initialState = {
    oldMileage: 100,
    newMileage: 100,
    petrolLimit: 5,
    dateOfRefuelingOld: "10.03.2020",
    dateOfRefuelingNew: "",
    allPetrol: 5,
    mileagePetrol: 9.1,
    limitKM: '',
    numberOfList: "0",
    dateOfList: ""
};

export default function info(state = initialState, action) {
    let newState = {};
    Object.assign(newState, state);
    switch (action.type) {
        case 'NEW_DATE_OF_REFUELING':
            newState.dateOfRefuelingNew = action.date;
            return newState;
        case 'CHANGE_MILEAGE_PETROL':
            newState.mileagePetrol = Number(action.mileagePetrol);
            return newState;
        case 'CALCULATE_REMAINDER_KM':
            let data = ((newState.allPetrol * 100)/newState.mileagePetrol).toFixed(0);
            if (data > 0) {
                newState.limitKM = data
            } else {
                alert("Ошибка ввода, остаток километров должен быть больше 0")
            }
            return newState;
        case 'ADD_PETROL':
           newState.allPetrol = newState.petrolLimit + Number(action.liters)
            return newState;
        case 'CHANGE_NUMBER_LIST':
            newState.numberOfList = action.number
            return newState;
        case 'CHANGE_DATE_LIST':
            newState.dateOfList = action.date
            return newState;
        default:
            return state;
    }
}
const initialState = {
    oldMileage: 100,
    newMileage: 100,
    petrolLimit: 5,
    dateOfRefuelingOld: "10.03.2020",
    dateOfRefuelingNew: "",
    allPetrol: 10,
    listNumber: "",
    mileagePetrol: 9.1,
    limitKM: ''
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
            let data = ((newState.petrolLimit * 100)/newState.mileagePetrol).toFixed(0);
            if (data > 0) {
                newState.limitKM = data
            } else {
                alert("Ошибка ввода, остаток километров должен быть больше 0")
            }
            return newState;
        default:
            return state;
    }
}
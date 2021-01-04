const initialState = {
    oldMileage: 100,
    newMileage: 100,
    petrolLimit: 5,
    dateOfRefueling: "10.03.2020",
    allPetrol: 10
};

export default function info(state = initialState, action) {
    if (action.type === 'ADD_PLAYLIST') {
        return state;
    } else if (action.type === 'DELETE_PLAYLIST') {
        return state;
    }
    return state;
}
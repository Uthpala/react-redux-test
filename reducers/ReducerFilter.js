const initialState = {
    filterText : '',
    male : true,
    female : true,
}

function filterTable(state=initialState,action){
    switch (action.type){
        case 'FILTER':
            return action.payload
    }
    return state
}

export default filterTable
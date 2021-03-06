import * as types from '../actions/action-types';

const initialState = {
    books: [],
    book: {
        authors: []
    },
    characters: [],
    character: {
        aliases: []
    },
    houses: [],
    house: {
        ancestralWeapons: [],
        cadetBranches: [],
        titles: [],
        seats: []
    },
    founder: {},
    overlord: {},
    currentLord: {},
    swornMembers: []
};


const APIReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.GET_BOOKS_SUCCESS:
            return Object.assign({}, state, { books: action.books });
        case types.GET_BOOK_DETAIL_SUCCESS:
            return Object.assign({}, state, { book: action.book });
        case types.GET_CHARCTERS_SUCCESS:
            return Object.assign({}, state, { characters: action.characters });
        case types.GET_CHARACTER_DETAIL_SUCCESS:
            return Object.assign({}, state, { character: action.character });
        case types.GET_HOUSES_SUCCESS:
            return Object.assign({}, state, { houses: action.houses });
        case types.GET_HOUSE_DETAIL_SUCCESS:
            return Object.assign({}, state, { house: action.house });
        case types.GET_OVERLORD_SUCCESS:
            return Object.assign({}, state, { overlord: action.overlord });
        case types.GET_FOUNDER_SUCCESS:
            return Object.assign({}, state, { founder: action.founder });
        case types.GET_CURRENT_LORD_SUCCESS:
            return Object.assign({}, state, { currentLord: action.currentLord });
        case types.GET_SWORN_SUCCESS:
            return Object.assign({}, state, { swornMembers: action.sworn });
        default:

    }

    return state;

};

export default APIReducer;
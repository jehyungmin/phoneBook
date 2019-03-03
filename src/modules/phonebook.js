import { handleActions, createAction } from 'redux-actions';
import { Map, List } from 'immutable';

const CHANGE = "CHANGE";
const INSERT = "INSERT";
const REMOVE = "REMOVE";

export const change = createAction(CHANGE);
export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);

const getId = (state) => {
    let newId = state.get('id');
    return ++newId;
}

const initialState = Map({
    id: 3,
    name: '',
    phone: '',
    //phoneList: List([]),
    phoneList: List([
        Map({
            id: 0,
            name: '뽀로로',
            phone: '02-1234-3357'
        }),
        Map({
            id: 1,
            name: '각시탈',
            phone: '010-1234-1234'
        }),
        Map({
            id: 2,
            name: '제형민',
            phone: '010-4456-5567'
        })
    ]),
    // searchList: List([]),
    // searchState: false
})

export default handleActions({
    [CHANGE]: (state, action) => {
        const param = action.payload;
        const newState = state.merge(param)
        return newState;
    },
    [INSERT]: (state, action) => {
        const {name, phone} = action.payload;
        const newId = getId(state)
        const newState = state.set('phoneList', state.get('phoneList').push(Map({
            id:newId,
            name: name,
            phone: phone
        }))).set('id', newId)
        return newState;
    },
    [REMOVE]: (state, action) => {
        const {id} = action.payload;
        const index = state.get('phoneList').findIndex(phoneList => phoneList.get('id') === id);
        const newState = state.set('phoneList', state.get('phoneList').delete(index))
        return newState;
    }


}, initialState)
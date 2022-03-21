import { INIT_LIST_DATA, CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM} from './actionTypes'

export const getInitListAction = (data) => ({
  type: INIT_LIST_DATA,
  data
})

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_LIST_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_LIST_ITEM,
  index
})

export const initListData = () => {
  return (dispatch) => {
    setTimeout(() => {
      const data = ['hello', 'dell', 'lee']
      const action = getInitListAction(data)
      dispatch(action)
    }, 0)
  }
}
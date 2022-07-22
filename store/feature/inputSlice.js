import { createSlice, configureStore } from '@reduxjs/toolkit'
import moment from 'moment';
import { GLOBAL_DATETIME_FORMAT } from '../../config';

const nowUnixTime = moment().unix() * 1000;
const nowTime = moment(nowUnixTime).format(GLOBAL_DATETIME_FORMAT);

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    title: nowTime,
    text: ''
  },
  reducers: {
    setTitle: (state, titleObj) => {
      state.title = titleObj.payload
    },
    setText: (state, textObj) => {
      state.text = textObj.payload
    }
  }
})

export const { setTitle, setText } = inputSlice.actions

export default inputSlice.reducer
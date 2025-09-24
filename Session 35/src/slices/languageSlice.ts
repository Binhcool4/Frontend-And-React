import { createSlice } from '@reduxjs/toolkit'

type Lang = 'en' | 'vi'

interface LanguageState {
  value: Lang
}

const initialState: LanguageState = { value: 'en' }

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLang: (state, action: { payload: Lang }) => { state.value = action.payload }
  }
})

export const { setLang } = languageSlice.actions
export default languageSlice.reducer
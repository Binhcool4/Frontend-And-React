import { createSlice } from '@reduxjs/toolkit'

interface MenuState {
  collapsed: boolean
}

const initialState: MenuState = { collapsed: false }

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggle: (state) => { state.collapsed = !state.collapsed }
  }
})

export const { toggle } = menuSlice.actions
export default menuSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: number
  name: string
  favorite: boolean
}

interface UsersState {
  list: User[]
}

const initialState: UsersState = {
  list: [
    { id: 1, name: 'Nguyễn Văn A', favorite: true },
    { id: 2, name: 'Nguyễn Văn B', favorite: false },
    { id: 3, name: 'Nguyễn Văn C', favorite: true },
    { id: 4, name: 'Nguyễn Văn D', favorite: true }
  ]
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const u = state.list.find(x => x.id === action.payload)
      if (u) u.favorite = !u.favorite
    }
  }
})

export const { toggleFavorite } = usersSlice.actions
export default usersSlice.reducer
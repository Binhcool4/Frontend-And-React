import { createStore } from 'redux';

export interface Student {
  id: string;
  name: string;
  age: number;
  gender: 'Nam' | 'Nữ';
  birthday?: string;
  hometown?: string;
  address?: string;
}

export interface StudentState {
  students: Student[];
}

const initialState: StudentState = {
  students: [
    { id: 'SV001', name: 'Nguyễn Văn A', age: 20, gender: 'Nam', birthday: '2003-01-15', hometown: 'Hà Nội', address: '123 Đường A, Quận B' },
    { id: 'SV002', name: 'Nguyễn Văn B', age: 21, gender: 'Nữ', birthday: '2002-02-20', hometown: 'Hà Nội', address: '456 Đường B, Quận C' },
    { id: 'SV003', name: 'Nguyễn Văn C', age: 19, gender: 'Nam', birthday: '2004-03-25', hometown: 'Hà Nội', address: '789 Đường C, Quận D' },
  ],
};

export const ADD_STUDENT = 'ADD_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const SET_STUDENTS = 'SET_STUDENTS';

export const addStudent = (student: Student) => ({ type: ADD_STUDENT, payload: student });
export const updateStudent = (student: Student) => ({ type: UPDATE_STUDENT, payload: student });
export const deleteStudent = (id: string) => ({ type: DELETE_STUDENT, payload: id });
export type RootState = StudentState;
export const setStudents = (students: Student[]) => ({ type: SET_STUDENTS, payload: students });

export function studentReducer(state = initialState, action: any): StudentState {
  switch (action.type) {
    case ADD_STUDENT:
      return { ...state, students: [...state.students, action.payload] };
    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map(s => s.id === action.payload.id ? action.payload : s),
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(s => s.id !== action.payload),
      };
    case SET_STUDENTS:
      return { ...state, students: action.payload };
    default:
      return state;
  }
}

export const store = createStore(studentReducer);

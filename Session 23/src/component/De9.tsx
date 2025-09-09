import React from "react";
import { UnorderedListOutlined, ReadOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";

interface Todo {
  id: number;
  english: string;
  vietnamese: string;
}

type Action =
  | { type: "add"; payload: { english: string; vietnamese: string } }
  | { type: "delete"; payload: number }
  | {
      type: "edit";
      payload: { id: number; english: string; vietnamese: string };
    };

function reducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "add":
      if (!action.payload.english.trim() || !action.payload.vietnamese.trim())
        return state;
      return [
        ...state,
        {
          id: Date.now(),
          english: action.payload.english,
          vietnamese: action.payload.vietnamese,
        },
      ];
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    case "edit":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              english: action.payload.english,
              vietnamese: action.payload.vietnamese,
            }
          : todo
      );
    default:
      return state;
  }
}

export default function De9() {
  const [english, setEnglish] = React.useState("");
  const [vietnamese, setVietnamese] = React.useState("");
  const [todoList, dispatch] = React.useReducer(reducer, [
    { id: 1, english: "Apple", vietnamese: "Quả táo" },
    { id: 2, english: "Book", vietnamese: "Sách" },
  ]);

  // Modal
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [editTodo, setEditTodo] = React.useState<Todo | null>(null);
  const [editEnglish, setEditEnglish] = React.useState("");
  const [editVietnamese, setEditVietnamese] = React.useState("");

  const handleAdd = () => {
    dispatch({ type: "add", payload: { english, vietnamese } });
    setEnglish("");
    setVietnamese("");
  };

  const handleEdit = (todo: Todo) => {
    setOpenModal(true);
    setEditTodo(todo);
    setEditEnglish(todo.english);
    setEditVietnamese(todo.vietnamese);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="shadow-lg p-6 w-[80%]">
        <header>
          <h1 className="text-white bg-[#2e8b57] text-2xl py-4 text-center font-bold">
            <ReadOutlined className="m-2" />
            Quản Lý Từ Vựng
          </h1>
          <div>
            <label className="text-[#2e8b57] flex justify-start text-xl my-4 font-bold">
              <UnorderedListOutlined className="m-2" /> Thêm từ mới
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Từ tiếng Anh"
                className="w-1/2 h-[40px] ring rounded px-2"
                value={english}
                onChange={(e) => setEnglish(e.target.value)}
              />
              <input
                type="text"
                placeholder="Nghĩa tiếng Việt"
                className="w-1/2 h-[40px] ring rounded px-2"
                value={vietnamese}
                onChange={(e) => setVietnamese(e.target.value)}
              />
              <button
                onClick={handleAdd}
                className="text-white bg-[#2e8b57] px-4 rounded cursor-pointer"
              >
                <b>Thêm</b>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Danh sách */}
      <div className="mt-6 w-[80%] shadow-lg p-6">
        <h2 className="text-[#2e8b57] text-xl mb-4 font-bold">
          Danh sách từ vựng
        </h2>
        <table className="w-full border text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">Từ tiếng Anh</th>
              <th className="border px-2 py-1">Nghĩa tiếng Việt</th>
              <th className="border px-2 py-1">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo) => (
              <tr key={todo.id}>
                <td className="border px-2 py-1">{todo.english}</td>
                <td className="border px-2 py-1">{todo.vietnamese}</td>
                <td className="border px-2 py-1 flex gap-2 justify-center">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: "delete", payload: todo.id })
                    }
                    className="bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal sửa */}
      <Modal
        open={openModal}
        title={"Cập nhật từ vựng"}
        onCancel={() => setOpenModal(false)}
        onOk={() => {
          if (editTodo) {
            dispatch({
              type: "edit",
              payload: {
                id: editTodo.id,
                english: editEnglish,
                vietnamese: editVietnamese,
              },
            });
          }
          setOpenModal(false);
          setEditTodo(null);
        }}
      >
        <div className="flex flex-col gap-4">
          <div>
            <label className="font-bold">Từ tiếng Anh</label>
            <Input
              value={editEnglish}
              onChange={(e) => setEditEnglish(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bold">Nghĩa tiếng Việt</label>
            <Input
              value={editVietnamese}
              onChange={(e) => setEditVietnamese(e.target.value)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

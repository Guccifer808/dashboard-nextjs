import { create } from "zustand";
import { boardData } from "../mockData";

const useBoard = create((set) => ({
  board: boardData,
  setBoard: (board) => set((state) => ({ board })),
}));

export default useBoard;

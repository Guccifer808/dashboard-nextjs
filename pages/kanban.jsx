import { useEffect } from "react";
import useBoard from "@/store/Board";
import dynamic from "next/dynamic";
import {
  moveCard,
  moveColumn,
  removeCard,
  addCard,
} from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";

const Board = dynamic(() => import("@asseinfo/react-kanban"), {
  ssr: false,
});

const Kanban = () => {
  // Zustand
  const { board, setBoard } = useBoard();
  if (typeof window === "undefined") {
    // Return a fallback UI or null when window is not available
    return null;
  }
  // Workaround for server-side rendering bug in react-kanban
  useEffect(() => {
    if (typeof window !== "undefined") {
      setBoard(board);
    }
  }, []);

  // Move a card within a column
  const handleCardMove = ({ source, destination, draggableId }) => {
    const newBoard = moveCard(board, source, destination, draggableId);
    setBoard(newBoard);
  };

  // Move a column
  const handleColumnMove = ({ source, destination }) => {
    const newBoard = moveColumn(board, source, destination);
    setBoard(newBoard);
  };

  // Remove a card
  const handleCardRemove = ({ columnId, cardId }) => {
    const newBoard = removeCard(board, columnId, cardId);
    setBoard(newBoard);
  };

  // Add a card
  const handleCardAdd = ({ columnId, card }) => {
    const newBoard = addCard(board, columnId, card);
    setBoard(newBoard);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex justify-between px-4 pt-4">
        <h2 className="text-2xl font-bold">Kanban Board</h2>
        <h2>Welcome back, user</h2>
      </div>
      <div className="p-4">
        {typeof window !== "undefined" && (
          <Board
            initialBoard={board}
            onCardDragEnd={handleCardMove}
            onColumnDragEnd={handleColumnMove}
            onCardRemove={handleCardRemove}
            onCardAdd={handleCardAdd}
          >
            {board}
          </Board>
        )}
      </div>
    </div>
  );
};

export default Kanban;

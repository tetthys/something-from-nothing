import { useState } from "react";
import TodoInput from "./components/TodoInput";
import WhatIsThis from "./components/WhatIsThis";
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [todos, setTodos] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

  const placeholders = [
    "$5 + 10 CHF = $10 if rate is 2:1",
    "$5 * 2 = $10",
    'Make "amount" private',
    "Dollar side effects?",
    "Compare Francs to Dollars",
  ];
  return (
    <div className="w-full min-h-screen bg-cosmic-latte-500">
      <Modal
        open={isModalOpen}
        onCloseHandler={() => {
          setIsModalOpen(false);
        }}
      >
        Have you just seen green bar?
      </Modal>
      <div className="py-20  mx-auto w-full max-w-5xl">
        <WhatIsThis />
        <div className="mt-20 grid grid-cols-1 gap-y-10">
          {todos.map((e, i) => (
            <TodoInput
              key={i}
              name={"todo-input"}
              id={"todo-input"}
              placeholder={placeholders[i]}
              onClickHandler={() => {}}
              onChangeHandler={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

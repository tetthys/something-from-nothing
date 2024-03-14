import TodoInput from "./components/TodoInput";
import WhatIsThis from "./components/WhatIsThis";

const App = () => {
  const placeholders = [
    "$5 + 10 CHF = $10 if rate is 2:1",
    "$5 * 2 = $10",
    'Make "amount" private',
    "Dollar side effects?",
    "Compare Francs to Dollars",
  ];
  return (
    <div className="w-full min-h-screen bg-cosmic-latte-500">
      <div className="py-20  mx-auto w-full max-w-5xl">
        <WhatIsThis />
        <div className="mt-20 grid grid-cols-1 gap-y-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => (
            <TodoInput
              key={i}
              name={"todo-input"}
              id={"todo-input"}
              placeholder={placeholders[i]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

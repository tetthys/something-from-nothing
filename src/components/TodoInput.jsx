const TodoInput = ({
  name,
  id,
  placeholder,
  onClickHandler,
  onChangeHandler,
}) => {
  return (
    <input
      className="px-4 py-2 border-b-4 border-gray-200 bg-cosmic-latte-500 focus:outline-none text-4xl text-gray-800 placeholder:text-gray-400"
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      onClick={onClickHandler}
      onChange={onChangeHandler}
    />
  );
};

export default TodoInput;

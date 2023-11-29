import "components/Button/style.css";

function Button(props) {
  const { title, handleClick, type } = props;

  return (
    <button
      type={type}
      onClick={(event) => handleClick(event)}
      className="bg-button rounded-full font-bold text-white px-7 py-3 hover:bg-fuchsia-700 cursor-pointer"
    >
      {title}
    </button>
  );
}

export default Button;

import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

const RenderPlusOrMinusIcon = ({ type }) => {
  if (type === 'minus') return <MinusIcon className="count-btn-icon" />;

  return <PlusIcon className="count-btn-icon" />;
};

const CountButton = ({ type, count, setCount }) => {
  const handleCountDecrease = () => {
    setCount((previousValue) => {
      if (previousValue === 0) return previousValue;

      return previousValue - 1;
    });
  };

  const handleClick = (event) => {
    if (type === 'plus') {
      setCount((previousValue) => previousValue + 1);
    } else {
      handleCountDecrease();
    }

    event.currentTarget.blur();
  };

  const buttonClassName = `count-btn ${
    type === 'minus' && count === 0 ? 'count-btn-disabled' : ''
  }`;

  return (
    <div className="button-container">
      <button
        className={buttonClassName}
        onClick={handleClick}
        disabled={type === 'minus' && count === 0}
      >
        <RenderPlusOrMinusIcon type={type} />
      </button>
    </div>
  );
};

export default CountButton;

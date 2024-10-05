import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

import { UPPER_LIMIT, LOWER_LIMIT } from '@/constants/constants';

const RenderPlusOrMinusIcon = ({ type }) => {
  if (type === 'minus') return <MinusIcon className="count-btn-icon" />;

  return <PlusIcon className="count-btn-icon" />;
};

const CountButton = ({ type, count, setCount }) => {
  const handleCountDecrease = () => {
    setCount((previousValue) => {
      if (previousValue === LOWER_LIMIT) return previousValue;

      return previousValue - 1;
    });
  };

  const handleCountIncrease = () => {
    setCount((previousValue) => {
      if (previousValue >= UPPER_LIMIT) return UPPER_LIMIT;

      return previousValue + 1;
    });
  };

  const handleClick = (event) => {
    if (type === 'plus') {
      handleCountIncrease();
    } else {
      handleCountDecrease();
    }

    event.currentTarget.blur();
  };

  const buttonClassName = `count-btn ${
    type === 'minus' && count === LOWER_LIMIT ? 'count-btn-disabled' : ''
  }`;

  return (
    <div className="button-container">
      <button
        className={buttonClassName}
        onClick={handleClick}
        disabled={type === 'minus' && count === LOWER_LIMIT}
      >
        <RenderPlusOrMinusIcon type={type} />
      </button>
    </div>
  );
};

export default CountButton;

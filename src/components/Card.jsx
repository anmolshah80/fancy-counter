import { useEffect, useState } from 'react';

import Title from '@/components/Title';
import Count from '@/components/Count';
import ResetButton from '@/components/ResetButton';
import ButtonContainer from '@/components/ButtonContainer';
import CountButton from '@/components/CountButton';

const UPPER_LIMIT = 100;

const Card = () => {
  const [count, setCount] = useState(0);

  const locked = count > UPPER_LIMIT ? true : false;

  const cardClassName = `card ${locked ? 'card--limit' : ''}`;

  useEffect(() => {
    const increaseCountOnSpace = (event) => {
      if (event.code !== 'Space') return;

      let newCount = count + 1;

      if (newCount > UPPER_LIMIT) {
        setCount(UPPER_LIMIT);
        return;
      }

      setCount(newCount);
    };

    window.addEventListener('keydown', increaseCountOnSpace);

    return () => {
      window.removeEventListener('keydown', increaseCountOnSpace);
    };
  }, [count]);

  return (
    <div className={cardClassName}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" count={count} setCount={setCount} />
        <CountButton type="plus" count={count} setCount={setCount} />
      </ButtonContainer>
    </div>
  );
};

export default Card;

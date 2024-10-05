const Title = ({ locked }) => {
  return (
    <h1 className="title">{locked ? 'Limit Reached!' : 'Fancy Counter'}</h1>
  );
};

export default Title;

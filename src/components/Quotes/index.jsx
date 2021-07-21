const Quotes = ({ quote, speaker, button }) => {
  return (
    <div>
      <p>{quote}</p>
      <p>{speaker}</p>
      <button>Quote No Jutsu</button>
    </div>
  );
};

export default Quotes;

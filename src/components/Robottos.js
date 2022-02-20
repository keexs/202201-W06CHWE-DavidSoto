import Robotto from "./Robotto";

const Robottos = ({ robottos }) => {
  return (
    <>
      <ul>
        {robottos.map((robotto) => (
          <Robotto key={robotto.id} robotto={robotto} />
        ))}
      </ul>
    </>
  );
};

export default Robottos;

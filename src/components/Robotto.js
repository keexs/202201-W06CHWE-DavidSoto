import styled from "styled-components";

const Robotto = ({ robotto }) => {
  const CardStyle = styled.div`
    .card {
      display: flex;
      justify-content: center;
      background-color: grey;
      padding: 0px;
      border-radius: 33px;
    }
  `;

  return (
    <>
      <CardStyle>
        <div className="card">
          <img
            src="https://img2.freepng.es/20180516/kgq/kisspng-medabots-infinity-metabee-gamecube-video-game-mech-5afc378426dd60.3255972815264787241592.jpg"
            alt=""
            height="150px"
          />
          <div>
            <div>
              <h3>{robotto.name}</h3>
              <div>
                <ul>
                  <li>Strengh: {robotto.stats.strengh}</li>
                  <li>Speed: {robotto.stats.speed}</li>
                  <li>Endurance: {robotto.stats.endurance}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardStyle>
    </>
  );
};

export default Robotto;

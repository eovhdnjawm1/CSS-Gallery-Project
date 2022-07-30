import styled from "styled-components";

const Container = styled.section`
  position: relative;
  width: 200px;
  height: 200px;
  background: #2196f3;
  border-radius: 50%;
  box-shadow: inset 0 0 50px #000;
  overflow: hidden;
  animation: Wave1 12s linear infinite;

  @keyframes Wav1 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -150%;
    left: -50%;
    width: 200%;
    height: 200%;
    border-radius: 40%;
    background: #121;
    opacity: 0.9;
    animation: Wave2 5s linear infinite;
  }

  @keyframes Wave2 {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

function EffectWaveLoading() {
  return <Container></Container>;
}

export default EffectWaveLoading;

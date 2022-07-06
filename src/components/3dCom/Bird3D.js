import styled from "styled-components";

const Titletop = styled.div`


#sky {
  margin-top: 150px;
  perspective: 400px;
  filter: drop-shadow(0px 150px 10px rgba(0, 0, 0, 0.2));
}
@-moz-document url-prefix() {
  #sky {
    filter: none;
  }
}
#sky div {
  transform-style: preserve-3d;
}
#sky .bird {
  -webkit-animation: fly 10000ms linear infinite;
          animation: fly 10000ms linear infinite;
}
#sky .bird .wind {
  position: absolute;
  left: 50%;
  width: 4px;
  height: 200px;
  margin-left: -2px;
  border-radius: 999px;
  overflow: hidden;
}
#sky .bird .wind:nth-child(1) {
  transform: translate3d(-197px, -37px, -91px) rotateY(90deg);
}
#sky .bird .wind:nth-child(1)::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 300px;
  background: rgba(100, 200, 153, 0.3);
  border-radius: 999px;
  transform: translateY(-300px);
  -webkit-animation: wind 1481ms 2156ms linear infinite;
          animation: wind 1481ms 2156ms linear infinite;
}
#sky .bird .wind:nth-child(2) {
  transform: translate3d(-71px, 28px, 12px) rotateY(90deg);
}
#sky .bird .wind:nth-child(2)::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 300px;
  background: rgba(100, 200, 128, 0.3);
  border-radius: 999px;
  transform: translateY(-300px);
  -webkit-animation: wind 1955ms 4661ms linear infinite;
          animation: wind 1955ms 4661ms linear infinite;
}
#sky .bird .wind:nth-child(3) {
  transform: translate3d(-73px, -61px, -42px) rotateY(90deg);
}
#sky .bird .wind:nth-child(3)::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 300px;
  background: rgba(100, 200, 125, 0.3);
  border-radius: 999px;
  transform: translateY(-300px);
  -webkit-animation: wind 1600ms 1679ms linear infinite;
          animation: wind 1600ms 1679ms linear infinite;
}
#sky .bird .wind:nth-child(4) {
  transform: translate3d(-124px, 7px, 36px) rotateY(90deg);
}
#sky .bird .wind:nth-child(4)::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 300px;
  background: rgba(100, 200, 71, 0.3);
  border-radius: 999px;
  transform: translateY(-300px);
  -webkit-animation: wind 2485ms 3537ms linear infinite;
          animation: wind 2485ms 3537ms linear infinite;
}
#sky .bird .wind:nth-child(5) {
  transform: translate3d(163px, -91px, -60px) rotateY(90deg);
}
#sky .bird .wind:nth-child(5)::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 300px;
  background: rgba(100, 200, 69, 0.3);
  border-radius: 999px;
  transform: translateY(-300px);
  -webkit-animation: wind 1522ms 2978ms linear infinite;
          animation: wind 1522ms 2978ms linear infinite;
}
#sky .bird .wind:nth-child(6) {
  transform: translate3d(-60px, 59px, -33px) rotateY(90deg);
}
#sky .bird .wind:nth-child(6)::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 300px;
  background: rgba(100, 200, 75, 0.3);
  border-radius: 999px;
  transform: translateY(-300px);
  -webkit-animation: wind 1438ms 1620ms linear infinite;
          animation: wind 1438ms 1620ms linear infinite;
}
#sky .bird .wind:nth-child(7) {
  transform: translate3d(-77px, 126px, 33px) rotateY(90deg);
}
#sky .bird .wind:nth-child(7)::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 300px;
  background: rgba(100, 200, 54, 0.3);
  border-radius: 999px;
  transform: translateY(-300px);
  -webkit-animation: wind 1776ms 3842ms linear infinite;
          animation: wind 1776ms 3842ms linear infinite;
}
#sky .bird .wind:nth-child(8) {
  transform: translate3d(-66px, -12px, 2px) rotateY(90deg);
}
#sky .bird .wind:nth-child(8)::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 300px;
  background: rgba(100, 200, 102, 0.3);
  border-radius: 999px;
  transform: translateY(-300px);
  -webkit-animation: wind 2128ms 3048ms linear infinite;
          animation: wind 2128ms 3048ms linear infinite;
}
#sky .bird .wind:nth-child(9) {
  transform: translate3d(-145px, 73px, 95px) rotateY(90deg);
}
#sky .bird .wind:nth-child(9)::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 300px;
  background: rgba(100, 200, 85, 0.3);
  border-radius: 999px;
  transform: translateY(-300px);
  -webkit-animation: wind 1575ms 2875ms linear infinite;
          animation: wind 1575ms 2875ms linear infinite;
}
#sky .bird .wind:nth-child(10) {
  transform: translate3d(137px, 80px, -48px) rotateY(90deg);
}
#sky .bird .wind:nth-child(10)::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 300px;
  background: rgba(100, 200, 50, 0.3);
  border-radius: 999px;
  transform: translateY(-300px);
  -webkit-animation: wind 1880ms 4316ms linear infinite;
          animation: wind 1880ms 4316ms linear infinite;
}
#sky .bird .wind:nth-child(11) {
  transform: translate3d(59px, 4px, 71px) rotateY(90deg);
}
#sky .bird .wind:nth-child(11)::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 300px;
  background: rgba(100, 200, 219, 0.3);
  border-radius: 999px;
  transform: translateY(-300px);
  -webkit-animation: wind 1237ms 1712ms linear infinite;
          animation: wind 1237ms 1712ms linear infinite;
}
#sky .bird_body {
  position: relative;
  width: 30px;
  height: 40px;
  background: #7282d6;
}
#sky .bird_head {
  position: absolute;
  top: -30px;
  border-right: 15px solid transparent;
  border-bottom: 30px solid #8e91d8;
  border-left: 15px solid transparent;
  transform-origin: 50% 100%;
  transform: rotateX(-20deg);
}
#sky .bird_wing_left {
  position: absolute;
  left: -30px;
  height: 30px;
  border-right: 30px solid #9c98e8;
  border-bottom: 10px solid transparent;
  transform-origin: 100% 0;
  -webkit-animation: wingLeft 1000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
          animation: wingLeft 1000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}
#sky .bird_wing_left_top {
  position: absolute;
  left: -30px;
  border-right: 30px solid #99b4fc;
  border-bottom: 30px solid transparent;
  transform-origin: 100% 0;
  -webkit-animation: wingLeft 1000ms cubic-bezier(0.545, 0.08, 0.52, 0.975) infinite alternate;
          animation: wingLeft 1000ms cubic-bezier(0.545, 0.08, 0.52, 0.975) infinite alternate;
}
#sky .bird_wing_right {
  position: absolute;
  left: 30px;
  height: 30px;
  border-left: 30px solid #8288f4;
  border-bottom: 10px solid transparent;
  transform-origin: 0 0;
  -webkit-animation: wingRight 1000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
          animation: wingRight 1000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}
#sky .bird_wing_right_top {
  position: absolute;
  border-left: 30px solid #bac4f3;
  border-bottom: 30px solid transparent;
  transform-origin: 0 0;
  -webkit-animation: wingRight 1000ms cubic-bezier(0.545, 0.08, 0.52, 0.975) infinite alternate;
          animation: wingRight 1000ms cubic-bezier(0.545, 0.08, 0.52, 0.975) infinite alternate;
}
#sky .bird_tail_left {
  position: absolute;
  top: 40px;
  border-right: 30px solid transparent;
  border-top: 40px solid #c48cfd;
  transform-origin: 50% 0;
  transform: rotateX(-20deg);
}
#sky .bird_tail_right {
  position: absolute;
  top: 40px;
  border-left: 30px solid transparent;
  border-top: 40px solid #6dbbef;
  transform-origin: 50% 0;
  transform: rotateX(-20deg);
}

@-webkit-keyframes fly {
  0% {
    transform: rotateX(-120deg) rotateZ(0deg) rotateX(10deg);
  }
  100% {
    transform: rotateX(-120deg) rotateZ(360deg) rotateX(10deg);
  }
}

@keyframes fly {
  0% {
    transform: rotateX(-120deg) rotateZ(0deg) rotateX(10deg);
  }
  100% {
    transform: rotateX(-120deg) rotateZ(360deg) rotateX(10deg);
  }
}
@-webkit-keyframes wingLeft {
  0% {
    transform: rotateY(-40deg);
  }
  100% {
    transform: rotateY(40deg);
  }
}
@keyframes wingLeft {
  0% {
    transform: rotateY(-40deg);
  }
  100% {
    transform: rotateY(40deg);
  }
}
@-webkit-keyframes wingRight {
  0% {
    transform: rotateY(40deg);
  }
  100% {
    transform: rotateY(-40deg);
  }
}
@keyframes wingRight {
  0% {
    transform: rotateY(40deg);
  }
  100% {
    transform: rotateY(-40deg);
  }
}
@-webkit-keyframes wind {
  0% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(200px);
  }
}
@keyframes wind {
  0% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(200px);
  }
}
`;

function NavWaveBar() {
  return (
    <Titletop>
      <div id="sky">
        <div className="bird">
          <div className="wind"></div>
          <div className="wind"></div>
          <div className="wind"></div>
          <div className="wind"></div>
          <div className="wind"></div>
          <div className="wind"></div>
          <div className="wind"></div>
          <div className="wind"></div>
          <div className="wind"></div>
          <div className="wind"></div>
          <div className="bird_body">
            <div className="bird_head"></div>
            <div className="bird_wing_left">
              <div className="bird_wing_left_top"></div>
            </div>
            <div className="bird_wing_right">
              <div className="bird_wing_right_top"></div>
            </div>
            <div className="bird_tail_left"></div>
            <div className="bird_tail_right"></div>
          </div>
        </div>
      </div>
    </Titletop>
  );
}

export default NavWaveBar;

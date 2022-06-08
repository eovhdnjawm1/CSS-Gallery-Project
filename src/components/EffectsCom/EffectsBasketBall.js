import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
	100% {
		transform: translate3d(0, 100px, 0)
		scale3d(1.05, 0.95, 1);
	}
`

const shadow = keyframes`
	0% {
		transform: rotateX(80deg)
		scale3d(.5, .5, 1);
		background-color: rgba(0, 0, 0, .1);
	}
	100% {
		transform: rotateX(80deg)
		scale3d(.8, .8, 1);
		background-color: rgba(0, 0, 0, .5);
	}
`

const BasketContainer = styled.div`
	height: 200px;
	position: relative;
`

const BasketBall = styled.div`
	width: 100px;
	height: 100px;
	background-color: orange;
	border-radius: 50%;
	border: 2px solid #000;
	background-image:
	radial-gradient(circle at -10px 20px, transparent 47px, #000 50px, #000 25px, transparent 0),
	radial-gradient(circle at 110px 70px, transparent 47px, #000 50px, transparent 0),
	linear-gradient(110deg, transparent 60px, #000 63px, transparent 0),
	linear-gradient(10deg, transparent 60px, #000 60px, transparent 0);
	animation: ${bounce} .5s cubic-bezier(.8, -.5, .2, 1.4) infinite alternate;
	z-index: 6;
`

const Shadow = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	position: absolute;
	bottom: -60px;
	left: 0;
	z-index: 4;
	animation: ${shadow} .5s cubic-bezier(.8, -.5, .2, 1.4) infinite alternate;
`



function EffectBasketBall() {
	return(
			<BasketContainer>
				<BasketBall />
				<Shadow />
			</BasketContainer>
	)
}

export default EffectBasketBall;
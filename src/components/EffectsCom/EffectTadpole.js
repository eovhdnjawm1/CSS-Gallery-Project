import styled, { keyframes } from 'styled-components';


const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 150px;
	height: 150px;
	/* min-height: 100vh; */
	background-color: #1e2d3b;
`

const Loader = styled.div`
	position: absolute;
	width: 100px;
	height: 100px;
	background: linear-gradient(to top, #1e2d3b 40%, #c3c3c3);
	border-radius: 50%;
	animation: aniRotate 2s linear infinite;

	&::before {
		content: "";
		position: absolute;
		background: #1e2d3b;
		inset: 20px 20px 0 0;
		border-radius: 50%;
	}

	&::after{
		content: "";
		position: absolute;
		top: 10px;
		right: -10px;
		width: 40px;
		height: 40px;
		background: #1a1a1a;
		border-radius: 50%;
		box-shadow: 0 0 5px #c3c3c3,
		0 0 25px #c3c3c3,
		0 0 50px #c3c3c3,
		0 0 65px #c3c3c3;
	}

	@keyframes aniRotate {
		0% {
			transform: rotate(0deg);

		}
		100% {
			transform: rotate(360deg);
		}
	}
`



function EffectTadpole() {
	return (
		<Container>
			<Loader/>
		</Container>
	)
}

export default EffectTadpole
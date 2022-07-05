import styled from 'styled-components';


const MainButton = styled.button`
	position: relative;
	display: inline-block;
	padding: 15px 25px;
	border: none;
	color: #fff;
	background-color: transparent;
	cursor: pointer;

	&::before,
	&::after{
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: 100%;
		height: 100%;
	}

	&::before{
		background-color: #fff;
		clip-path: polygon(
		25% 0%,
		100% 0%,
		100% 100%,
		25% 100%,
		0% 50%);
		transition: clip-path .5s ease-in-out, background-color .5s ease-in-out;
	}

	&:hover::before{
		background-color: #000;
		clip-path: polygon(
			0% 0%,
			75% 0%,
			100% 50%,
			75% 100%,
			0% 100%);
	}

	&::after{
		border: 2px solid #fff;
		transform: translateY(-50%) rotate(-25deg);
		transition: transform .5s ease-in-out,
		border .5s ease-in-out;
	}

	&:hover::after{
		transform: translateY(-50%) rotate(0deg);
		border: 2px solid #000;
	}

	& span {
		mix-blend-mode: difference;
	}

	&:hover :nth-child(1){
		display: none;
	}

	&:hover :nth-child(2){
		display:block;
	}
`
const LeftButton = styled.span`

`

const RightButton = styled.span`
	display: none;
`

function ButtonArrow() {
	return(
		<MainButton>
			<LeftButton>Left</LeftButton>
			<RightButton>Right</RightButton>
		</MainButton>
	)
}

export default ButtonArrow;
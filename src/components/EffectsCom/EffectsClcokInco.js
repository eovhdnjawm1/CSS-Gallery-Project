import styled from 'styled-components'

let ClockIcon = styled.div`

.clock{
	position: relative;
	transform: scale(2);
	border-radius: 50%;
	border: 2px solid;
	width: 50px;
	height: 50px;
	margin-top: 25px;
	color: #fff;
}

.clock:after{
	content: "";
	position:absolute;
	width: 0px;
	height: 20px;
	display: block;
	border-left: 2px solid #fff;
	left: 22px;
	top: 4px;
	animation-duration: 1s;
}

.clock:before{
	content: "";
	position:absolute;
	width:0px;
	height: 20px;
	display: block;
	border-left: 2px solid #fff;
	left: 23px;
	top: 3px;
	animation-duration: 60s;
}

.clock::before, .clock::after{
	transform-origin:bottom;
	animation-name : time;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
}

@keyframes time {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

`

function EffectClockIcon() {
	return(
		<>
		<ClockIcon>
			<div className='clock'></div>
		</ClockIcon>
		</>
	)
}

export default EffectClockIcon;
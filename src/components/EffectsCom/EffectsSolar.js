import styled from 'styled-components'

let Solar = styled.div`
.main-container{
	width: 500px;
	height: 500px;
	border-radius: 5%;
	background-color:#50bcdf;
	animation: Tonight 10s infinite 1.5s;
}

.container {
	
	display: block;
	position: absolute;
	top: 25%;
	left: 50%;
	transform: translate(-50%, -50%);
	
	
}

.sun {
	height: 150px;
	width: 150px;
	border-radius: 50%;
	background-color: #fcd25b;
	border: 3px solid #fcd25b;
}

.shadow {
	height: 170px;
	width: 170px;
	border-radius: 50%;
	background-color: #50bcdf;
	top: -5px;
	left: 0px;
	animation: movingShadow 10s infinite 1.5s;
}

@keyframes movingShadow {
	0% {
		transform: translateX(150px);
		background-color: #50bcdf;
	}

	50% {
		transform: translateX(-10px);
		background-color: #1e2d3b;
	}

	100% {
		transform: translateX(-170px);
		background-color: #50bcdf;
	}
}

@keyframes Tonight {
	0% {
		background-color: #50bcdf;
	}

	50% {
		background-color: #1e2d3b;
	}

	100% {
		background-color: #50bcdf;
	}
}

`

function EffectSolar() {
	return(
		<>
		<Solar >
			<div className='main-container'>

		<div className='container'>
				<div className='sun'>
					<div className='shadow'></div>
				</div>
		</div>
			</div>

		</Solar>
		</>
	)
}

export default EffectSolar;


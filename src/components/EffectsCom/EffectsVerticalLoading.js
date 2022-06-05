import styled from 'styled-components'

let VerticalLoading = styled.div`
	.loader{
		display:flex;
		align-items: center;
		margin-top: 40px;
	}

	.bar {
		display: inline-block;
		width: 10px;
		height: 100px;
		
		background-color: rgba(255, 255, 255, .5);
		border-radius: 10px;
		animation: loading 1s linear infinite;
	}

	.bar:nth-child(2) {
		height: 150px;
		margin: 0 25px;
		animation-delay: .25s;
	}

	.bar:nth-child(3) {
		animation-delay: .5s;
	}

	@keyframes loading {
		20% {
			background-color: #fff;
			transform: scaleY(1.5);
		}
		40% {
			transform: scaleY(1);
		}
	}
`

function EffectVerticalLoading() {
	return(
		<>
		<VerticalLoading>
			<div className='loader'>
				<span className='bar'></span>
				<span className='bar'></span>
				<span className='bar'></span>
			</div>
		</VerticalLoading>
		</>
	)
}

export default EffectVerticalLoading;
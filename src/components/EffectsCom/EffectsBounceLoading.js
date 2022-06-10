import styled, {keyframes} from 'styled-components'

const Bounce = keyframes`
	from {
		transform: scaleX(1.25);
	}

	to {
		transform: translateY(-50px) scaleX(1);
	}
`

const BounceLoading = styled.div`
	margin: auto;
	padding-top: 50px;
	width: 120px;
	height: 75px;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-end;
	justify-content: space-between;
`

const Ball = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color: #fff;
	animation: ${Bounce} .5s alternate infinite;

&:nth-child(2) {
	animation-delay: .2s;
}

&:nth-child(3) {
	animation-delay: .4s;
}
`

const BallText = styled.span`
	font-size: 22px;
	text-transform: uppercase;
	margin: auto;
	color: #fff;
`



function EffectBounceLoading() {
	return (
			<BounceLoading>
			<Ball className='ball'></Ball>
			<Ball className='ball'></Ball>
			<Ball className='ball'></Ball>
			<BallText>Loading...</BallText>
		</BounceLoading>
	)
}

export default EffectBounceLoading;
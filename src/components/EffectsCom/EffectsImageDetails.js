import styled from 'styled-components'
import testImg from '../../img/1.jpg'

const Container = styled.div`
	height: 15rem;
	width: 15rem;
	overflow: hidden;
	position: relative;
	cursor: pointer;
	border-radius: 20px;
	color: #fff;

	&:hover .Detail{
		opacity: 1;
		height: 100%
	}
`

const Image = styled.img`
	height: 100%;
	width: 100%;
	background: url(${testImg});
`

const Detail = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 0%;
	background: rgba(0,0,0, 0.9);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px 0;
	opacity: 0;
	transition: 0.5s ease;

`

const DetailHeader = styled.h1`

`

const DetailText = styled.p`

`

const Social = styled.ul`
	display: flex;
	column-gap: 20px;
	padding: 0;
	
	li {

		list-style: none;
	}

	li i {
		width: 45px;
		height: 45px;
		font-size: 45px;
	}
`

function EffectImageDetails() {

	return (
		<Container>
			<Image />
			<Detail className='Detail'>
				<DetailHeader>Welcome~</DetailHeader>
				<DetailText>안녕하세요 고영진 입니다.</DetailText>
				<Social>
					<li>
						<i class="fa-brands fa-facebook"></i>
					</li>
					<li>
						<i class="fa-brands fa-github"></i>
					</li>
					<li>
						<i class="fa-brands fa-instagram"></i>
					</li>
				</Social>


			</Detail>

		</Container>
	)
}

export default EffectImageDetails
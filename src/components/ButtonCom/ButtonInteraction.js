import styled from 'styled-components'


const MainBtn = styled.button`
	position:relative;
	width: 250px;
	height: 100px;
	font-size:50px;
	background-color: black;
	color: #fff;
	border:none;
	border-radius: 10%;
	cursor:pointer;
	transition: width .5s, border-radius .5s;

	& * {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: opacity .25s ;
	}

	& i {
		opacity: 0;
	}

	&:focus{
		width: 100px;
		background-color: #44c08a;
		border-radius: 50%;
	}

	&:focus span{
		opacity: 0;
	}

	&:focus i{
		opacity: 1;
		transition-delay: .5s;
	}
`

function ButtonInteraction() {
	return (
		<MainBtn>
			<span>Click</span>
			<i class="fa-solid fa-check"></i>
		</MainBtn>
	)
}

export default ButtonInteraction
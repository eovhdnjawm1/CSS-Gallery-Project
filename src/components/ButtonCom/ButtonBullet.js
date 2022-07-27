import styled from 'styled-components'

const Container = styled.section`
	display: flex;
	flex-direction: column;
	z-index: 1;
	height: 200px;
	margin-left: 4em;
	flex-wrap: nowrap;
	align-items: flex-start;
	/* align-self: flex-end; */
	width: 25vw;
	width: 350px;
	/* position: absolute; */
	right: 0;

	& button {
		background: none;
		border: none;
		padding: 1em;
		font-size: 1.5rem;
		color: white;
		z-index: 1;
		flex-basis: 0;
		padding-left: 4em;
		margin-left: -3em;
		text-shadow: 5px 5px 20px black;
	}

	& button::before {
		display: block;
		width: 2em;
		height: 2em;
		left: 0;
		content: "";
		border-radius: 1em;
		z-index: -1;
		margin-left: -4em;
		margin-bottom: -1.5em;
		transition: .5s;
	}

	& button:hover::before{
		left: 1.5em;
		display: block;
		height: 2em;
		content: "";
		transition: 1s;
		width: calc(100% + 2em);
		margin-left: -1em;
	}

`

const Blur = styled.div`
	backdrop-filter: blur(8px);
	position: absolute;
	width: 10rem;
	height: 15rem;
	background-image: linear-gradient(to right, blue, pink);
	opacity: 80%;
`

const Btn1 = styled.button`
	&::before {
		background-color: greenyellow;
	}

`

const Btn2 = styled.button`
	&::before {
		background-color: pink;
	}
`


function ButtonBullet() {
	return(
	<Container>
		<Blur />
		<Btn1> Select_1</Btn1>
		<Btn2>Select_2</Btn2>
	</Container>

	)
}

export default ButtonBullet;
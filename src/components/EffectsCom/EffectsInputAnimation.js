import styled from 'styled-components'

let InputAni = styled.div`
	.container {
		position: relative;
		height: 5rem;
		line-height: 44px;
		margin-top: 40px;
	}

	label{
		position:absolute;
		top:0;
		left: 0;
		width: 100%;
		color: #fff;
		transition: .2s all;
		cursor: text;
		font-size: 1.2rem;
	}

	input {
		width: 100%;
		border: 0;
		outline: 0;
		padding: 0.5rem 0;
		border-bottom: 2px solid #fff;
		box-shadow: none;
		background-color:transparent;
		font-size: 1.5rem;
		color: #fff;
	}

	input:focus ~ label,
	input:valid ~ label {
		font-size: 10px;
		top: -2rem;
		color: #ccc;
	}

`


function EffectInputAnimation() {
	return(
		<>
		<InputAni>
			<div className='container'>
				<input type="email" id="email" required autoComplete='off' />
				<label htmlFor="email">Email Address</label>
			</div>
		</InputAni>
		</>
	)
}

export default EffectInputAnimation;
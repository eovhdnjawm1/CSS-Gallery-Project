import styled from 'styled-components'

const ToolTip = styled.span`
	position: relative;
	display: inline-flex;
	margin-top: 25px;

	i {

		font-size: 36px;
		background: radial-gradient(circle at 30% 107%,
			#fd5949 45%, #d6249f 60%, #285AEB 90%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	&::before,
	&::after{
		content: '';
		position: absolute;
		left: 50%;
		transform: translate(-50%, 3px);
		visibility: hidden;
		transition: transform .5s;
	}

	&::before{
		top: -10px;
		border: 5px solid transparent;
		border-top: 5px solid #fff;
	}

	&::after {
		content: attr(data-tooltip);
		top: -30px;
		padding: 2px 5px;
		border-radius: 4px;
		color: #000;
		font-size: 12px;
		background-color: #fff;
	}

	&:hover::before,
	&:hover::after {
		transform: translate(-50%, 0);
		visibility: visible;
	}
`

function EffectToolTip() {
	return(
		<ToolTip data-tooltip="Instagram">
			<i className="fa-brands fa-instagram"></i>
		</ToolTip>

	)
}

export default EffectToolTip
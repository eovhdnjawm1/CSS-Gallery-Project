import styled from 'styled-components'
import mainImage from '../../img/1.jpg'

let Rollup = styled.div`
 .container {
	 position:relative;
	 width: 250px;
	 height: 250px;
	 color: grey;
	 background: url(${mainImage});
	 background-size: cover;
	 border-radius: 20px;
	 overflow: hidden;
 }
 .content {
	 position:absolute;
	 left: 0;
	 bottom: 0;
	 width: 100%;
	 padding: 20px;
	 background-color: #fff;
	 border-top-left-radius: 20px;
	 transform: translateY(80px);
	 transition: transform .25s;
 }

 .content::before {
	 content:'';
	 position: absolute;
	 top: -47px;
	 right: -45px;
	 width: 100px;
	 height: 100px;
	 transform: rotate(-175deg);
	 border-radius:50%;
	 box-shadow: inset 50px 50px #fff;
 }

 .title{
	 color: grey;
	 line-height: 15px;
 }

 .subTitle {
	 display:block;
	 font-size: 12px;
	 margin-bottom: 10px
 }

 .text{
	 font-size: 14px;
	 opacity: 0;
	 transition: opacity .5s;
	padding-right: 25px;
	}

 .container:hover .content {
	 transform: translateY(0);
 }

 .container:hover .text {
	 opacity: 1;
	 transition-delay: .25s;
 }
`

function EffectRollupContent() {
	return (
		<>
			<Rollup >
				<div className='container'>
					<div className='content'>
						<h3 className='title'> YoungJin Go</h3>
						<span className='subTitle'> 안녕하세요!</span>
						<p className='text'>반갑습니다! 고영진 입니다!</p>
					</div>
				</div>
			</Rollup>
		</>
	)
}

export default EffectRollupContent
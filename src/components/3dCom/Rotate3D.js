import styled from 'styled-components'

let Rotate3D = styled.div`
 .container{
	 width: 150px;
	 height: 250px;
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 flex-wrap:wrap;
 }

 a {
	 text-decoration: none;
	 font-size: 25px;
	 color: #fff;
	 padding: 15px;
	 transition: all .5s;
	 position: relative;
	 perspective: 30rem;
 }

 a::after{
	 content: "";
	 display: block;
	 width: 120%;
	 height: 100%;
	 position: absolute;
	 top: 45px;
	 left: -10px;
	 background-color: rgba(88, 188, 255, 0.384);
	 border-radius: 15%;
	 transform: rotateX(55deg);
	 z-index: -2;
 }

 a::before{
	content: "";
	 display: block;
	 width: 100%;
	 height: 100%;
	 position: absolute;
	 top: 0;
	 left: 0;
	 background-color: grey;
	 border-radius: 15%;
	 z-index: -1;
 }

 a:hover::before{
	 animation: rotate 1s;
	 transition: all .5s;
 }

 @keyframes rotate {
	 0% {
		 transform: rotateX(180deg)
	 }
	 100% {
		 transform: rotateX(360deg)
	 }
 }

 
`

function Rotate3DCom() {
	return(
		<>
		<Rotate3D>
			<div className='container'>
				<a href='*'>Rotate</a>
			</div>
		</Rotate3D>
		</>
	)
}

export default Rotate3DCom
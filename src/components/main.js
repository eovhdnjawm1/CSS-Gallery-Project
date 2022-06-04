import '../css/Main.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom'
import RouteEffect from './RouteEffect.js'
import RouteButton from './RouteButton';
import Route3D from './Route3D';
import RouteNavBar from './RouteNav';

const url = 'https://eovhdnjawm1.github.io/db'
const jsonNav = '/navbar_data.json'
const json3D = '/3D_data.json'
const jsonButton = '/button_data.json'
const jsonEffect = '/effect_data.json'

function MainContainer() {
	let [navBars, setNavBars] = useState([]);
	let [grapics, setGrapic] = useState([]);
	let [clicks, setClicks] = useState([]);
	let [effects, setEffects] = useState([]);

	useEffect(() => {
		axios.get(url + json3D).then((res) => {
			let copy = [...res.data]
			setGrapic(copy)

			axios.get(url + jsonButton).then((res) => {
				let copy = [...res.data]
				setClicks(copy)
			})

			axios.get(url + jsonEffect).then((res) => {
				let copy = [...res.data]
				setEffects(copy)
			})
			axios.get(url + jsonNav).then((res) => {
				let copy = [...res.data]
				setNavBars(copy)
			})
		})
	}, [])

	return (
		<div className='mainContainer'>
			<h1 className='mainTitle'>CSS Gallery</h1>
			<Route3D />
			<RouteEffect />
			<RouteButton />
			<RouteNavBar />

			<Routes>
				<Route path="/" element={
					<div className='cssContainer'>

						<h1 style={{ color: "#fff" }}>Main Page - 클릭 시 test</h1>
						<h1 style={{ color: "#fff" }}>Github 소스코드 확인 가능</h1>
						<a href='https://github.com/eovhdnjawm1/CSS-Gallery' style={{ color: "#fff" }}>Git Checkout 구버전</a>
						<p></p>
						<a href='https://github.com/eovhdnjawm1/CSS-Gallery-Project' style={{ color: "#fff" }}>Git Checkout 신버전</a>

						<div className='grapicContainer'>
							<h2>3D CSS</h2>
							{
								grapics.map(function (val, i) {
									return (
										<div key={i}>

											<Grapic3DCss grapics={grapics} i={i}></Grapic3DCss>
										</div>
									)
								})
							}

						</div>
						<div className='buttonContainer'>
							<h2>Button CSS</h2>
							{
								clicks.map(function (val, i) {
									return (
										<div key={i}>
											<ButtonCss clicks={clicks} i={i}></ButtonCss>
										</div>
									)
								})
							}</div>
						<div className='effectContainer'>
							<h2>Effect CSS</h2>
							{
								effects.map(function (val, i) {
									return (
										<div key={i}>
											<EffectCss effects={effects} i={i}></EffectCss>
										</div>
									)
								})
							}
						</div>
						<div className='navBarContainer'>
							<h2>NavBar CSS</h2>
							{
								navBars.map(function (val, i) {
									return (
										<div key={i}>
											<NavBarCss navBars={navBars} i={i}></NavBarCss>
										</div>
									)
								})
							}
						</div>
					</div>
				}></Route>
			</Routes>

		</div>
	)
}

function Grapic3DCss(props) {
	let navigate = useNavigate();

	return (
		// 
		<div className='cssContainerSub' onClick={() => navigate('/detail/' + props.i)} >
			<h4>{props.grapics[props.i].title}</h4>
			<img src={`${props.grapics[props.i].image}`} alt="#" width="80%" />
			<p>제작일자 : {props.grapics[props.i].record} </p>
			<p>분류 : {props.grapics[props.i].content} </p>
		</div>
	)
}


function ButtonCss(props) {
	let navigate = useNavigate();
	return (

		<div className='cssContainerSub' onClick={() => navigate('/button/' + props.i)}>

			<h4>{props.clicks[props.i].title}</h4>
			<img src={`${props.clicks[props.i].image}`} alt="#" width="80%" />
			<p>제작일자 : {props.clicks[props.i].record} </p>
			<p>분류 : {props.clicks[props.i].content} </p>

		</div>
	)
}

function EffectCss(props) {


	let navigate = useNavigate();
	return (

		<div className='cssContainerSub' onClick={() => navigate('/effect/' + props.i)}>

			<h4>{props.effects[props.i].title}</h4>
			<img src={`${props.effects[props.i].image}`} alt="#" width="80%" />
			<p>제작일자 : {props.effects[props.i].record} </p>
			<p>분류 : {props.effects[props.i].content} </p>
		</div>
	)
}

function NavBarCss(props) {

	let navigate = useNavigate();
	return (

		<div className='cssContainerSub' onClick={() => navigate('/navBar/' + props.i)}>

			<h4>{props.navBars[props.i].title}</h4>
			<img src={`${props.navBars[props.i].image}`} alt="#" width="80%" />
			<p>제작일자 : {props.navBars[props.i].record} </p>
			<p>분류 : {props.navBars[props.i].content} </p>
		</div>
	)
}

export default MainContainer;
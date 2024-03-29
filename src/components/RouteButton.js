import { Routes, Route } from 'react-router-dom'
import ButtonFilter from './ButtonCom/ButtonFilter';
import ButtonMenus from './ButtonCom/ButtonMenus';
import ButtonSkew from './ButtonCom/ButtonSkewAni';
import ButtonHoverAni from './ButtonCom/ButtonHoverAni';
import ButtonChange from './ButtonCom/ButtonChange';
import ButtonPusleAni from './ButtonCom/ButtonPulseAni';
import ButtonShadow from './ButtonCom/ButtonShadow';
import ButtonInteraction from './ButtonCom/ButtonInteraction';
import ButtonArrow from './ButtonCom/ButtonArrow';
import ButtonBullet from './ButtonCom/ButtonBullet';

function RouteButton() {


	return (
		<>
			<Routes>
				<Route path="/button/0" element={<ButtonFilter />} />
				<Route path="/button/1" element={<ButtonMenus />} />
				<Route path="/button/2" element={<ButtonSkew />} />
				<Route path="/button/3" element={<ButtonHoverAni />} />
				<Route path="/button/4" element={<ButtonChange />} />
				<Route path="/button/5" element={<ButtonPusleAni />} />
				<Route path="/button/6" element={<ButtonShadow />} />
				<Route path="/button/7" element={<ButtonInteraction />} />
				<Route path="/button/8" element={<ButtonArrow />} />
				<Route path="/button/9" element={<ButtonBullet />} />
			</Routes>
		</>
	)
}

export default RouteButton
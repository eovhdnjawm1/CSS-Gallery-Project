import { Routes, Route, useNavigate } from 'react-router-dom'
import Card3D from './3dCom/Card3D.js'
import FlipCard from './3dCom/FlipCard';
import NeonMovingButton from './3dCom/NeonMovingButton';
import EffectSolar from './EffectsCom/EffectsSolar';


function Route3D() {


	return (
		<>
			<Routes>
				<Route path="/detail/0" element={<EffectSolar />} />
				<Route path="/detail/1" element={<Card3D />} />
				<Route path="/detail/2" element={<FlipCard />} />
				<Route path="/detail/3" element={<NeonMovingButton />} />
			</Routes>
		</>
	)
}

export default Route3D;
import { Routes, Route } from 'react-router-dom'
import Card3D from './3dCom/Card3D.js'
import FlipCard from './3dCom/FlipCard';
import NeonMovingButton from './3dCom/NeonMovingButton';
import Rotate3D from './3dCom/Rotate3D.js';

function Route3D() {


	return (
		<>
			<Routes>
				<Route path="/detail/0" element={<Rotate3D />} />
				<Route path="/detail/1" element={<Card3D />} />
				<Route path="/detail/2" element={<FlipCard />} />
				<Route path="/detail/3" element={<NeonMovingButton />} />
			</Routes>
		</>
	)
}

export default Route3D;



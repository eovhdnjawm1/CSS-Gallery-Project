import { Routes, Route } from 'react-router-dom'
import NavBarResponsive from './NavBarCom/NavResponsive';
import NavBarFocusUp from './NavBarCom/NavFocusUp';
import NavInteraction from './NavBarCom/NavInteraction';

function RouteNavBar() {

	return (
		<>
			<Routes>
				<Route path="/navBar/0" element={<NavBarResponsive />} />
				<Route path="/navBar/1" element={<NavBarFocusUp />} />
				<Route path="/navBar/2" element={<NavInteraction />} />
			</Routes>
		</>
	)
}

export default RouteNavBar;
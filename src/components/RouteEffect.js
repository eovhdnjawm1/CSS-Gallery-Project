import { Routes, Route } from 'react-router-dom'
import EffectsOverlap from './EffectsCom/EffectsOverlap';
import EffectVideoText from './EffectsCom/EffectsVideoText';
import EffectLoadingBar from './EffectsCom/EffectsLoadingBar';
import EffectLinkHover from './EffectsCom/EffectsLinkHover';
import EffectColorUp from './EffectsCom/EffectsImageColorUp';
import EffectChangeFigure from './EffectsCom/EffectsChangeFigure';
import EffectHoverCardAni from './EffectsCom/EffectsHoverCardAni';
import EffectCenterHover from './EffectsCom/EffectsCenterHover';
import EffectGradientBox from './EffectsCom/EffectsGradientBox';
import EffectNeonSignIcon from './EffectsCom/EffectsNeonSignIcon';
import EffectTextEffect from './EffectsCom/EffectsTextEffect';
import EffectFocusBlur from './EffectsCom/EffectsFocusBlur';
import EffectNeonLoading from './EffectsCom/EffectsNeonLoading';
import EffectBounceLoading from './EffectsCom/EffectsBounceLoading';
import EffectInputAnimation from './EffectsCom/EffectsInputAnimation';
import EffectClockIcon from './EffectsCom/EffectsClcokInco';
import EffectSolar from './EffectsCom/EffectsSolar';
import EffectVerticalLoading from './EffectsCom/EffectsVerticalLoading';
import EffectRollupContent from './EffectsCom/EffectsRollup';
import EffectBasketBall from './EffectsCom/EffectsBasketBall';
import EffectToolTip from './EffectsCom/EffectsToolTip';
import EffectImageDetails from './EffectsCom/EffectsImageDetails';



function RouteEffect() {

	return (
		<>
			<Routes>
				<Route path="/effect/0" element={<EffectsOverlap />} />
				<Route path="/effect/1" element={<EffectVideoText />} />
				<Route path="/effect/2" element={<EffectLoadingBar />} />
				<Route path="/effect/3" element={<EffectLinkHover />} />
				<Route path="/effect/4" element={<EffectColorUp />} />
				<Route path="/effect/5" element={<EffectChangeFigure />} />
				<Route path="/effect/6" element={<EffectHoverCardAni />} />
				<Route path="/effect/7" element={<EffectCenterHover />} />
				<Route path="/effect/8" element={<EffectGradientBox />} />
				<Route path="/effect/9" element={<EffectNeonSignIcon />} />
				<Route path="/effect/10" element={<EffectTextEffect />} />
				<Route path="/effect/11" element={<EffectFocusBlur />} />
				<Route path="/effect/12" element={<EffectNeonLoading />} />
				<Route path="/effect/13" element={<EffectBounceLoading />} />
				<Route path="/effect/14" element={<EffectClockIcon />} />
				<Route path="/effect/15" element={<EffectInputAnimation />} />
				<Route path="/effect/16" element={<EffectSolar />} />
				<Route path="/effect/17" element={<EffectVerticalLoading />} />
				<Route path="/effect/18" element={<EffectRollupContent />} />
				<Route path="/effect/19" element={<EffectBasketBall />} />
				<Route path="/effect/20" element={<EffectToolTip />} />
				<Route path="/effect/21" element={<EffectImageDetails />} />
			</Routes>
		</>
	)
}

export default RouteEffect;
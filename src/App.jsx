import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import Egypt from './components/pages/global/Egypt'
import Garden from './components/pages/global/Garden'
import Tomb from './components/pages/global/Tomb'
import Zeus from './components/pages/global/Zeus'
import Mausoleum from './components/pages/global/Mausoleum'
import Kolos from './components/pages/global/Kolos'
import LightHouse from './components/pages/global/LightHouse'
import Pencil from './components/pages/ural/Pencil'
import Canyon from './components/pages/ural/Canyon'
import Sweet from './components/pages/ural/Sweet'
import Lake from './components/pages/ural/Lake'
import Icon from './components/pages/ural/Icon'
import Gems from './components/pages/ural/Gems'
import Stone from './components/pages/ural/Stone'
function App() {
	return (
		<Router>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path='global'>
					<Route path='egypt' element={<Egypt />} />
					<Route path='garden' element={<Garden />} />
					<Route path='tomb' element={<Tomb />} />
					<Route path='zeus' element={<Zeus />} />
					<Route path='mausoleum' element={<Mausoleum />} />
					<Route path='kolos' element={<Kolos />} />
					<Route path='lighthouse' element={<LightHouse />} />
				</Route>
				<Route path='ural'>
					<Route path='pencil' element={<Pencil />} />
					<Route path='canyon' element={<Canyon />} />
					<Route path='sweet' element={<Sweet />} />
					<Route path='lake' element={<Lake />} />
					<Route path='icon' element={<Icon />} />
					<Route path='gems' element={<Gems />} />
					<Route path='stone' element={<Stone />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App

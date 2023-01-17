import { Router } from '@reach/router';
import About from './pages/About';
import Help from './pages/Help';
import Home from './pages/Home';

function LandingPage() {
	return (
		<Router>
			<Home path="/" />
			<About path="/about" />
			<Help path="/help" />
		</Router>
	);
}

export default LandingPage;
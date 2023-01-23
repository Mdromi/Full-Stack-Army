import { Router } from '@reach/router';
import About from './pages/About';
import Help from './pages/Help';
import Home from './pages/Home';
import ClockPage from './pages/ClockPage';
import Tasks from './pages/Tasks';

function LandingPage() {
	return (
		<Router>
			<Home path="/" />
			<About path="/about" />
			<Help path="/help" />
			<ClockPage path="/clock" />
			<Tasks path="/tasks" />
		</Router>
	);
}

export default LandingPage;
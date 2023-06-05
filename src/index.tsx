import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import TimerProvider from './context/TimerContext';
import TimerRadioProvider from './context/TimerRadioContext';
import WorkingProvider from './context/WorkingContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<TimerProvider>
			<TimerRadioProvider>
				<WorkingProvider>
					<App />
				</WorkingProvider>
			</TimerRadioProvider>
		</TimerProvider>
	</React.StrictMode>
);

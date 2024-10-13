import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider } from '@/theme';
import WizardNavigator from './navigators/WizardNavigator';
import MainNavigator from './navigators/MainNavigator';
import './translations';

export const queryClient = new QueryClient();
export const storage = new MMKV();

function App() {
	const [isWizardComplete, setIsWizardComplete] = useState(false);

	useEffect(() => {
		// Fetch the wizard completion status from MMKV
		const wizardComplete = storage.getBoolean('isWizardComplete');
		setIsWizardComplete(wizardComplete ?? false);
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider storage={storage}>
				{isWizardComplete ? <MainNavigator /> : <WizardNavigator />}
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;

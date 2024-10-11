import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SelectionLanguage, Welcome, SignUp, LogIn } from '@/screens';
import { useTheme } from '@/theme';

import type { RootStackParamList } from '@/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

function WizardNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<SafeAreaProvider>
			<NavigationContainer theme={navigationTheme}>
				<Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
					<Stack.Screen
						name="SelectionLanguage"
						component={SelectionLanguage}
					/>
					<Stack.Screen name="Welcome" component={Welcome} />
					<Stack.Screen name="SignUp" component={SignUp} />
					<Stack.Screen name="LogIn" component={LogIn} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default WizardNavigator;

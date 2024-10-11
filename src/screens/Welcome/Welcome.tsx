// src/screens/Welcome/Welcome.tsx
/* eslint-disable */
import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	Dimensions,
} from 'react-native';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window');

function Welcome({ navigation }: { navigation: any }) {
	const { t } = useTranslation();

	return (
		<View style={styles.container}>
			{/* Logo */}
			<Image
				source={require('@/theme/assets/images/logo_jovoria.png')} // Replace with your actual logo image path
				style={styles.logo}
			/>

			{/* Welcome Text */}
			<Text style={styles.welcomeText}>WELCOME TO</Text>
			<Text style={styles.appName}>Jovoria</Text>

			{/* Buttons */}
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('SignUp')}
			>
				<Text style={styles.buttonText}>{t('createAccount')}</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('LogIn')}
			>
				<Text style={styles.buttonText}>{t('logIn')}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingHorizontal: 20,
	},
	logo: {
		width: 150,
		height: 150,
		resizeMode: 'contain',
		marginBottom: 30,
	},
	welcomeText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 8,
	},
	appName: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 40,
	},
	button: {
		width: width * 0.8,
		backgroundColor: '#007bff',
		paddingVertical: 12,
		paddingHorizontal: 40,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 15,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default Welcome;

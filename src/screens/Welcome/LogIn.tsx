// src/screens/Login/Login.tsx
/* eslint-disable */
import React, { useState } from 'react';
import {
	View,
	Text,
    Image,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window');

function LogIn({ navigation }: { navigation: any }) {
	const { t } = useTranslation();
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		// Handle login logic here
        navigation.navigate('VerifyPhoneNumber');
	};

	return (
		<View style={styles.container}>
			{/* Logo */}
            <Image
				source={require('@/theme/assets/images/logo_jovoria.png')} 
				style={styles.logo}
			/>

			<Text style={styles.headerText}>log In</Text>
			<Text style={styles.welcomeText}>WELCOME TO</Text>
			<Text style={styles.appName}>Jovoria</Text>

			{/* Phone Input */}
			<View style={styles.inputContainer}>
				<Icon name="call-outline" size={20} color="#007bff" style={styles.icon} />
				<TextInput
					style={styles.input}
					placeholder="Your Phone"
					placeholderTextColor="#A1A1A1"
					value={phone}
					onChangeText={setPhone}
					keyboardType="phone-pad"
				/>
			</View>

			{/* Password Input */}
			<View style={styles.inputContainer}>
				<Icon name="lock-closed-outline" size={20} color="#007bff" style={styles.icon} />
				<TextInput
					style={styles.input}
					placeholder="Password"
					placeholderTextColor="#A1A1A1"
					secureTextEntry
					value={password}
					onChangeText={setPassword}
				/>
			</View>

			{/* Forgot Password */}
			<TouchableOpacity
				onPress={() => {
					/* Forgot password logic */
				}}
			>
				<Text style={styles.forgotText}>Forgot Password? Tap Here</Text>
			</TouchableOpacity>

			{/* Login Button */}
			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Log in</Text>
			</TouchableOpacity>

			{/* Navigate to SignUp */}
			<Text style={styles.signupText}>
				Need a Jovoria account?{' '}
				<Text
					style={styles.signupLink}
					onPress={() => navigation.navigate('SignUp')}
				>
					Sign up
				</Text>
			</Text>
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
	headerText: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 10,
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
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: width * 0.85,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 10,
		paddingHorizontal: 15,
		marginBottom: 20,
		height: 50,
	},
	icon: {
		marginRight: 10,
	},
	input: {
		flex: 1,
		height: '100%',
		fontSize: 16,
	},
	forgotText: {
		color: '#007bff',
		marginBottom: 20,
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
	signupText: {
		fontSize: 14,
		color: '#333',
	},
	signupLink: {
		color: '#007bff',
		fontWeight: 'bold',
	},
});

export default LogIn;

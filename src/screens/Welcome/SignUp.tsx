// src/screens/SignUp/SignUp.tsx
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
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window');

function SignUp({ navigation }: { navigation: any }) {
	const { t } = useTranslation();
	const [fullName, setFullName] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [isChecked, setIsChecked] = useState(false);

	const handleSignUp = () => {
		// Handle signup logic here
	};

	return (
		<View style={styles.container}>
			{/* Logo */}
            <Image
				source={require('@/theme/assets/images/logo_jovoria.png')}
				style={styles.logo}
			/>

			<Text style={styles.headerText}>Sign Up</Text>
			<Text style={styles.welcomeText}>WELCOME TO</Text>
			<Text style={styles.appName}>Jovoria</Text>

			{/* Full Name Input */}
			<View style={styles.inputContainer}>
				<Icon name="person-outline" size={20} color="#007bff" style={styles.icon} />
				<TextInput
					style={styles.input}
					placeholder="Your Full Name"
					placeholderTextColor="#A1A1A1"
					value={fullName}
					onChangeText={setFullName}
				/>
			</View>

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
					placeholder="Create Password"
					placeholderTextColor="#A1A1A1"
					secureTextEntry
					value={password}
					onChangeText={setPassword}
				/>
			</View>

			{/* Checkbox */}
			<View style={styles.checkboxContainer}>
				<CheckBox value={isChecked} onValueChange={setIsChecked} />
				<Text style={styles.checkboxLabel}>
					I have over <Text style={styles.boldText}>18 years old</Text>
				</Text>
			</View>

			{/* Sign Up Button */}
			<TouchableOpacity style={styles.button} onPress={handleSignUp}>
				<Text style={styles.buttonText}>Create an account</Text>
			</TouchableOpacity>

			{/* Navigate to Login */}
			<Text style={styles.loginText}>
				Already have an account?{' '}
				<Text
					style={styles.loginLink}
					onPress={() => navigation.navigate('LogIn')}
				>
					Log In
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
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	checkboxLabel: {
		fontSize: 14,
		color: '#333',
	},
	boldText: {
		fontWeight: 'bold',
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
	loginText: {
		fontSize: 14,
		color: '#333',
	},
	loginLink: {
		color: '#007bff',
		fontWeight: 'bold',
	},
});

export default SignUp;

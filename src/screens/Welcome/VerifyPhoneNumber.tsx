// src/screens/VerifyPhoneNumber/VerifyPhoneNumber.tsx
/* eslint-disable */
import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import Countdown from 'react-native-countdown-component';

const { width } = Dimensions.get('window');

function VerifyPhoneNumber({ navigation }: { navigation: any }) {
	const { t } = useTranslation();
	const [code, setCode] = useState(['', '', '', '', '', '']);
	const [timeLeft, setTimeLeft] = useState(72); // 1:12 in seconds

	const handleInputChange = (value: string, index: number) => {
		const newCode = [...code];
		newCode[index] = value;
		setCode(newCode);
	};

	const handleVerify = () => {
		// Handle verification logic here
		console.log('Verification Code:', code.join(''));
        navigation.navigate('TakeProfilePicture');
	};

	const handleResend = () => {
		// Handle resend logic
		setTimeLeft(72); // Reset the timer
	};

	return (
		<View style={styles.container}>
			{/* Icon */}
			{/* <Icon name="call-outline" size={80} color="#007bff" style={styles.icon} /> */}
            <Image
				source={require('@/theme/assets/images/phone_calling_icon.png')}
				style={styles.logo}
			/>

			<Text style={styles.headerText}>{t('Verify Phone Number')}</Text>
			<Text style={styles.description}>
				{t('Activation code has been sent to your phone number')}
			</Text>

			{/* Code Input */}
			<View style={styles.codeInputContainer}>
				{code.map((digit, index) => (
					<TextInput
						key={index}
						style={styles.codeInput}
						keyboardType="numeric"
						maxLength={1}
						value={digit}
						onChangeText={value => handleInputChange(value, index)}
					/>
				))}
			</View>

			{/* Countdown Timer */}
			<Countdown
				until={timeLeft}
				size={20}
				onFinish={() => setTimeLeft(0)}
				digitStyle={{ backgroundColor: 'transparent' }}
				digitTxtStyle={{ color: '#007bff', fontWeight: 'bold' }}
				timeToShow={['M', 'S']}
				showSeparator
			/>

			{/* Verify Button */}
			<TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
				<Text style={styles.verifyButtonText}>{t('Verify')}</Text>
			</TouchableOpacity>

			{/* Resend Button */}
			<TouchableOpacity style={styles.resendButton} onPress={handleResend}>
				<Text style={styles.resendButtonText}>{t('Resend')}</Text>
			</TouchableOpacity>

			{/* Didn't Get Code Link */}
			<Text style={styles.footerText}>
				{t("Didn't get code?")}{' '}
				<Text
					style={styles.footerLink}
					onPress={() => {
						/* Resend code logic */
					}}
				>
					{t('Tap here')}
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
	icon: {
		marginBottom: 20,
	},
	headerText: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 10,
	},
	description: {
		fontSize: 14,
		color: '#A1A1A1',
		textAlign: 'center',
		marginBottom: 20,
	},
	codeInputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		width: width * 0.8,
	},
	codeInput: {
		width: 50,
		height: 50,
		borderWidth: 1,
		borderColor: '#007bff',
		borderRadius: 10,
		textAlign: 'center',
		fontSize: 20,
		color: '#000',
	},
	verifyButton: {
		width: width * 0.8,
		backgroundColor: '#007bff',
		paddingVertical: 12,
		paddingHorizontal: 40,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
	},
	verifyButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	resendButton: {
		width: width * 0.8,
		backgroundColor: 'transparent',
		paddingVertical: 12,
		paddingHorizontal: 40,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#007bff',
		marginBottom: 10,
	},
	resendButtonText: {
		color: '#007bff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	footerText: {
		fontSize: 14,
		color: '#333',
	},
	footerLink: {
		color: '#007bff',
		fontWeight: 'bold',
	},
});

export default VerifyPhoneNumber;

// src/screens/Welcome/SelectionLanguage.tsx
/* eslint-disable */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();
const languages = [
	{ code: 'en', label: 'English', flag: require('@/theme/assets/images/flags/flag_gb.png') },
	{ code: 'es', label: 'Spanish', flag: require('@/theme/assets/images/flags/flag_spain.png') },
];

function SelectionLanguage({ navigation }: { navigation: any }) {
	const { i18n } = useTranslation();
	const [selectedLang, setSelectedLang] = useState<string>('en');

	const selectLanguage = async (code: string) => {
		setSelectedLang(code);
		await i18n.changeLanguage(code); // Change the app's language using i18next
	};

	const handleContinue = () => {
		storage.set('language', selectedLang); // Store the selected language
		navigation.navigate('Welcome'); // Navigate to the next screen (Welcome)
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Please Select Your Language</Text>
			<View style={styles.languagesContainer}>
				{languages.map(lang => (
					<TouchableOpacity
						key={lang.code}
						style={[
							styles.languageButton,
							selectedLang === lang.code ? styles.selected : null,
						]}
						onPress={() => selectLanguage(lang.code)}
					>
						<Image source={lang.flag} style={styles.flag} />
						<Text style={styles.languageLabel}>{lang.label}</Text>
					</TouchableOpacity>
				))}
			</View>
			<TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
				<Text style={styles.continueText}>Continue</Text>
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
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	languagesContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: 40,
	},
	languageButton: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
	},
	flag: {
		width: 40,
		height: 40,
		marginRight: 10,
	},
	languageLabel: {
		fontSize: 18,
	},
	selected: {
		borderColor: '#007bff',
		borderWidth: 2,
		borderRadius: 10,
		padding: 10,
	},
	continueButton: {
		backgroundColor: '#007bff',
		paddingVertical: 12,
		paddingHorizontal: 40,
		borderRadius: 25,
	},
	continueText: {
		color: '#fff',
		fontSize: 16,
	},
});

export default SelectionLanguage;

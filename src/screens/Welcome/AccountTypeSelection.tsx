// src/screens/AccountTypeSelection/AccountTypeSelection.tsx
/* eslint-disable */
import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { MMKV } from 'react-native-mmkv';

const { width } = Dimensions.get('window');

// Create an MMKV instance
const storage = new MMKV();

function AccountTypeSelection({ navigation }: { navigation: any }) {
	const { t } = useTranslation();
	const [selectedType, setSelectedType] = useState<'job' | 'worker' | null>(
		null,
	);

	const handleSelect = (type: 'job' | 'worker') => {
		setSelectedType(type);
	};

	const handleConfirm = () => {
		if (selectedType) {
			// Mark wizard as complete in MMKV
			storage.set('isWizardComplete', true);

			// Save the account type (if needed, for later reference)
			storage.set('accountType', selectedType);

			// Navigate to the MainNavigator
			navigation.reset({
				index: 0,
				routes: [{ name: 'MainNavigator' }],
			});
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>{t('I\'m currently looking for a')}</Text>

			{/* Job Option */}
			<TouchableOpacity
				style={[styles.option, selectedType === 'job' && styles.selectedOption]}
				onPress={() => handleSelect('job')}
			>
				<Icon name="briefcase-outline" size={40} color="#fff" />
				<Text style={styles.optionText}>{t('Job')}</Text>
			</TouchableOpacity>

			{/* Worker Option */}
			<TouchableOpacity
				style={[
					styles.option,
					selectedType === 'worker' && styles.selectedOptionWorker,
				]}
				onPress={() => handleSelect('worker')}
			>
				<Icon name="person-outline" size={40} color="#fff" />
				<Text style={styles.optionText}>{t('Worker')}</Text>
			</TouchableOpacity>

			{/* Confirm Button */}
			<TouchableOpacity
				style={styles.confirmButton}
				onPress={handleConfirm}
				disabled={!selectedType} // Disable the button if no option is selected
			>
				<Text style={styles.confirmButtonText}>{t('Confirm')}</Text>
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
	headerText: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 40,
	},
	option: {
		width: width * 0.6,
		height: 100,
		backgroundColor: '#007bff',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		marginBottom: 20,
	},
	selectedOption: {
		backgroundColor: '#007bff',
	},
	selectedOptionWorker: {
		backgroundColor: '#6A55C1',
	},
	optionText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 10,
	},
	confirmButton: {
		width: width * 0.8,
		backgroundColor: '#007bff',
		paddingVertical: 12,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 30,
	},
	confirmButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default AccountTypeSelection;

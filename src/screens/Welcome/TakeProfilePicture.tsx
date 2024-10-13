// src/screens/TakeProfilePicture/TakeProfilePicture.tsx
/* eslint-disable */
import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window');

function TakeProfilePicture({ navigation }: { navigation: any }) {
	const { t } = useTranslation();
	const [profileImage, setProfileImage] = useState<string | null>(null);

	const handleUpload = () => {
		launchImageLibrary({ mediaType: 'photo' }, response => {
			if (response.assets && response.assets.length > 0) {
				setProfileImage(response.assets[0].uri);
			}
		});
	};

	const handleTakePhoto = () => {
		launchCamera({ mediaType: 'photo' }, response => {
			if (response.assets && response.assets.length > 0) {
				setProfileImage(response.assets[0].uri);
			}
		});
	};

	const handleConfirm = () => {
		// Handle profile picture confirmation logic here
		navigation.navigate('AccountTypeSelection'); 

		if (profileImage) {
			console.log('Profile image:', profileImage);
			// Navigate to the next screen or save the profile image
			navigation.navigate('AccountTypeSelection'); 
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>{t('Take Profile Picture')}</Text>

			{/* Profile Picture */}
			<View style={styles.imageContainer}>
				{profileImage ? (
					<Image source={{ uri: profileImage }} style={styles.profileImage} />
				) : (
					<Icon name="person-circle-outline" size={150} color="#C1C1C1" />
				)}
			</View>

			{/* Upload Button */}
			<TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
				<Icon name="cloud-upload-outline" size={20} color="#007bff" />
				<Text style={styles.uploadButtonText}>{t('Upload')}</Text>
			</TouchableOpacity>

			{/* Take Photo Button */}
			<TouchableOpacity style={styles.uploadButton} onPress={handleTakePhoto}>
				<Icon name="camera-outline" size={20} color="#007bff" />
				<Text style={styles.uploadButtonText}>{t('Make a Photo')}</Text>
			</TouchableOpacity>

			{/* Confirm Button */}
			<TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
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
		marginBottom: 20,
	},
	imageContainer: {
		width: 150,
		height: 150,
		borderRadius: 75,
		borderWidth: 2,
		borderColor: '#ddd',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
	},
	profileImage: {
		width: '100%',
		height: '100%',
		borderRadius: 75,
	},
	uploadButton: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: width * 0.8,
		paddingVertical: 12,
		borderWidth: 1,
		borderColor: '#007bff',
		borderRadius: 25,
		marginBottom: 15,
	},
	uploadButtonText: {
		color: '#007bff',
		fontSize: 16,
		fontWeight: 'bold',
		marginLeft: 10,
	},
	confirmButton: {
		width: width * 0.8,
		backgroundColor: '#007bff',
		paddingVertical: 12,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	confirmButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default TakeProfilePicture;

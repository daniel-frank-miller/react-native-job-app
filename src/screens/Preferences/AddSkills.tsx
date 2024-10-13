// src/screens/AddSkills/AddSkills.tsx
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

type Skill = {
	id: number;
	name: string;
	experience: number;
};

function AddSkills({ navigation }: { navigation: any }) {
	const [skills, setSkills] = useState<Skill[]>([]);
	const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const skillsList = [
            {
                id: 1,
                name: 'Painting',
                experience: 5
            },
            {
                id: 2,
                name: 'UX/UI Design',
                experience: 7
            },
            {
                id: 3,
                name: 'React',
                experience: 8
            },
            {
                id: 4,
                name: 'Angular',
                experience: 5
            }
        ]
        setSkills([...skillsList]);
    }, [])

	const handleAddSkill = (skill: Skill) => {
		setSkills([...skills, skill]);
	};

	const handleExperienceChange = (skillId: number, experience: number) => {
		const updatedSkills = skills.map(skill =>
			skill.id === skillId ? { ...skill, experience } : skill,
		);
		setSkills(updatedSkills);
	};

	const handleRemoveSkill = (skillId: number) => {
		const updatedSkills = skills.filter(skill => skill.id !== skillId);
		setSkills(updatedSkills);
	};

	const handleClearAll = () => {
		setSkills([]);
	};

	const renderSkill = ({ item }: { item: Skill }) => (
		<View style={styles.skillContainer}>
			<View style={styles.skillRow}>
				<Text style={styles.skillText}>
					{item.name} ({item.experience} years of experience)
				</Text>
				<TouchableOpacity onPress={() => handleRemoveSkill(item.id)}>
					<Icon name="close-circle-outline" size={20} color="#ff0000" />
				</TouchableOpacity>
			</View>
			{/* Experience Selector */}
			<View style={styles.experienceRow}>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(year => (
					<TouchableOpacity
						key={year}
						style={[
							styles.experienceCircle,
							item.experience === year && styles.selectedExperience,
						]}
						onPress={() => handleExperienceChange(item.id, year)}
					>
						<Text style={styles.experienceText}>{year}</Text>
					</TouchableOpacity>
				))}
				<TouchableOpacity
					style={[
						styles.experienceCircle,
						item.experience > 10 && styles.selectedExperience,
					]}
					onPress={() => handleExperienceChange(item.id, 11)}
				>
					<Text style={styles.experienceText}>10+</Text>
				</TouchableOpacity>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Add Your Skills</Text>

			{/* Search Bar */}
			<View style={styles.searchContainer}>
				<Icon name="search-outline" size={20} color="#A1A1A1" />
				<TextInput
					style={styles.searchInput}
					placeholder="Search for skills..."
					value={searchQuery}
					onChangeText={setSearchQuery}
				/>
			</View>

			{/* Skills List */}
			<FlatList
				data={skills}
				keyExtractor={item => item.id.toString()}
				renderItem={renderSkill}
				ListEmptyComponent={() => (
					<Text style={styles.emptyText}>No skills selected</Text>
				)}
			/>

			{/* Clear All Button */}
			{skills.length > 0 && (
				<TouchableOpacity onPress={handleClearAll}>
					<Text style={styles.clearAllText}>Clear All</Text>
				</TouchableOpacity>
			)}

			{/* Next Button */}
			<TouchableOpacity
				style={styles.nextButton}
				onPress={() => {
					// Handle navigation or logic for the next step
					navigation.navigate('WorkingConditions'); // Replace with actual screen
				}}
			>
				<Text style={styles.nextButtonText}>Next</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
	},
	headerText: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
		marginTop: 40,
		marginBottom: 20,
		textAlign: 'center',
	},
	searchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#F5F5F5',
		borderRadius: 10,
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	searchInput: {
		flex: 1,
		height: 40,
		paddingHorizontal: 10,
		fontSize: 16,
		color: '#000',
	},
	skillContainer: {
		backgroundColor: '#F9F9F9',
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 10,
		marginBottom: 15,
	},
	skillRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
	},
	skillText: {
		fontSize: 16,
		fontWeight: '500',
	},
	experienceRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	experienceCircle: {
		width: 35,
		height: 35,
		borderRadius: 35 / 2,
		borderWidth: 1,
		borderColor: '#A1A1A1',
		justifyContent: 'center',
		alignItems: 'center',
	},
	selectedExperience: {
		backgroundColor: '#007bff',
		borderColor: '#007bff',
	},
	experienceText: {
		fontSize: 14,
		color: '#000',
	},
	emptyText: {
		textAlign: 'center',
		marginVertical: 20,
		color: '#A1A1A1',
	},
	clearAllText: {
		color: '#ff0000',
		textAlign: 'center',
		marginVertical: 10,
	},
	nextButton: {
		backgroundColor: '#007bff',
		paddingVertical: 12,
		borderRadius: 25,
		alignItems: 'center',
		marginBottom: 20,
	},
	nextButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default AddSkills;

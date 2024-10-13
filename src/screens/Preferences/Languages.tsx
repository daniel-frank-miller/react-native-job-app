// src/screens/Preferences/Languages.tsx
/* eslint-disable */
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

function Languages({ navigation }: { navigation: any }) {
  const [selectedLanguages, setSelectedLanguages] = useState([
    { name: 'English', level: 'Native', flag: '🇬🇧' },
    { name: 'Spanish', level: 'B1', flag: '🇪🇸' },
    { name: 'Japan', level: 'B1', flag: '🇯🇵' },
  ]);

  const handleRemoveLanguage = (name: string) => {
    setSelectedLanguages(languages =>
      languages.filter(language => language.name !== name),
    );
  };

  const handleSelectLevel = (name: string, level: string) => {
    setSelectedLanguages(prevState =>
      prevState.map(language =>
        language.name === name ? { ...language, level } : language,
      ),
    );
  };

  const handleDone = () => {
    // Handle next button logic (e.g., save preferences and navigate)
    navigation.navigate('Languages');
  };

  const handlePrev = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Additionally</Text>
      <Text style={styles.subHeaderText}>What languages do you speak?</Text>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search-outline" size={24} color="#A1A1A1" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for languages..."
          placeholderTextColor="#A1A1A1"
        />
      </View>

      {/* Selected Languages */}
      <Text style={styles.selectedLabel}>You select:</Text>
      {selectedLanguages.length > 0 ? (
        selectedLanguages.map((language, index) => (
          <View key={index} style={styles.languageContainer}>
            <View style={styles.languageContent}>
              {/* Flag */}
              <Text style={styles.flag}>{language.flag}</Text>
              {/* Language Name and Level */}
              <Text style={styles.languageText}>
                {language.name} ({language.level})
              </Text>
              {/* Remove Button */}
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveLanguage(language.name)}
              >
                <Icon name="close-circle-outline" size={24} color="#FF5A5A" />
              </TouchableOpacity>
            </View>
            {/* Language Levels */}
            <View style={styles.levels}>
              {['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Native'].map(level => (
                <TouchableOpacity
                  key={level}
                  style={[
                    styles.levelButton,
                    language.level === level && styles.selectedLevelButton,
                  ]}
                  onPress={() => handleSelectLevel(language.name, level)}
                >
                  <Text
                    style={[
                      styles.levelButtonText,
                      language.level === level && styles.selectedLevelText,
                    ]}
                  >
                    {level}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noLanguagesText}>No languages selected</Text>
      )}

      {/* Clear All */}
      {selectedLanguages.length > 0 && (
        <TouchableOpacity style={styles.clearAllButton}>
          <Text style={styles.clearAllText}>Clear All</Text>
        </TouchableOpacity>
      )}

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.prevButton} onPress={handlePrev}>
          <Text style={styles.navButtonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.navButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  selectedLabel: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  languageContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  languageContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: 24,
    marginRight: 10,
  },
  languageText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  removeButton: {
    marginLeft: 10,
  },
  levels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  levelButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
  },
  selectedLevelButton: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  levelButtonText: {
    fontSize: 14,
    color: '#A1A1A1',
  },
  selectedLevelText: {
    color: '#fff',
  },
  noLanguagesText: {
    textAlign: 'center',
    color: '#A1A1A1',
    fontSize: 16,
    marginBottom: 20,
  },
  clearAllButton: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  clearAllText: {
    color: '#FF5A5A',
    fontSize: 14,
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  prevButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderColor: '#007bff',
    borderWidth: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  doneButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 25,
    marginLeft: 10,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Languages;

// src/screens/Preferences/WorkingConditions.tsx
/* eslint-disable */
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const { width } = Dimensions.get('window');

function WorkingConditions({ navigation }: { navigation: any }) {
  const [hourlyPay, setHourlyPay] = useState<string>('8.75');
  const [selectedTransport, setSelectedTransport] = useState<'car' | 'public' | 'need' | null>('car'); // Only one can be selected
  const [travelDistance, setTravelDistance] = useState<string>('8.5');
  const [unit, setUnit] = useState<'miles' | 'kilometers'>('miles');

  const handleNext = () => {
    // Handle next button logic (e.g., save preferences and navigate)
    navigation.navigate('Languages');
  };

  const handlePrev = () => {
    navigation.goBack();
  };

  const selectTransportOption = (option: 'car' | 'public' | 'need') => {
    setSelectedTransport(option); // Only one option can be selected at a time
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Working conditions</Text>

      {/* Hourly Pay */}
      <Text style={styles.subHeaderText}>Your desired hourly pay?</Text>
      <View style={styles.inputRow}>
        <Text style={styles.dollarSign}>$</Text>
        <TextInput
          style={styles.input}
          value={hourlyPay}
          onChangeText={setHourlyPay}
          keyboardType="numeric"
        />
      </View>

      {/* Transportation Options (Radio Button-like CheckBoxes) */}
      <Text style={styles.subHeaderText}>Do you own a car?</Text>
      <View style={styles.checkboxRow}>
        <CheckBox
          value={selectedTransport === 'car'}
          onValueChange={() => selectTransportOption('car')}
        />
        <Text style={styles.checkboxLabel}>Have a Car</Text>
      </View>
      <View style={styles.checkboxRow}>
        <CheckBox
          value={selectedTransport === 'public'}
          onValueChange={() => selectTransportOption('public')}
        />
        <Text style={styles.checkboxLabel}>Public Transportation</Text>
      </View>
      <View style={styles.checkboxRow}>
        <CheckBox
          value={selectedTransport === 'need'}
          onValueChange={() => selectTransportOption('need')}
        />
        <Text style={styles.checkboxLabel}>Need Transportation</Text>
      </View>

      {/* Travel Distance */}
      <Text style={styles.subHeaderText}>How far can you travel for work?</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={travelDistance}
          onChangeText={setTravelDistance}
          keyboardType="numeric"
        />
        <Text style={styles.unitText}>{unit}</Text>
      </View>

      {/* Unit Selection */}
      <View style={styles.unitSelector}>
        <TouchableOpacity
          style={[
            styles.unitButton,
            unit === 'miles' && styles.selectedUnitButton,
          ]}
          onPress={() => setUnit('miles')}
        >
          <Text
            style={[
              styles.unitButtonText,
              unit === 'miles' && styles.selectedUnitText,
            ]}
          >
            Miles
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.unitButton,
            unit === 'kilometers' && styles.selectedUnitButton,
          ]}
          onPress={() => setUnit('kilometers')}
        >
          <Text
            style={[
              styles.unitButtonText,
              unit === 'kilometers' && styles.selectedUnitText,
            ]}
          >
            Kilometers
          </Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.prevButton} onPress={handlePrev}>
          <Text style={styles.navButtonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50, // Added top space
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 18,
    color: '#000',
    marginTop: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  dollarSign: {
    fontSize: 24,
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'center',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
  },
  unitText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 5,
  },
  unitSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  unitButton: {
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  selectedUnitButton: {
    backgroundColor: '#007bff',
  },
  unitButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedUnitText: {
    color: '#fff',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
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
  nextButton: {
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

export default WorkingConditions;

import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

export default function AddDependentScreen() {
  const [dependentData, setDependentData] = useState({
    fullName: '',
    age: '',
    gender: '',
    relation: '',
    medicalCondition: '',
    emergencyContact: '',
  });

  const handleInputChange = (field, value) => {
    setDependentData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!dependentData.fullName || !dependentData.age || !dependentData.relation) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    // In real app, save dependent data
    Alert.alert(
      'Dependent Added',
      'Dependent has been added successfully.',
      [
        {
          text: 'Add Another',
          onPress: () => {
            setDependentData({
              fullName: '',
              age: '',
              gender: '',
              relation: '',
              medicalCondition: '',
              emergencyContact: '',
            });
          }
        },
        {
          text: 'Done',
          onPress: () => router.back()
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Dependent</Text>
        <Text style={styles.headerSubtitle}>Add family member or companion</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Full Name *</Text>
          <TextInput
            style={styles.input}
            value={dependentData.fullName}
            onChangeText={(text) => handleInputChange('fullName', text)}
            placeholder="Enter dependent's full name"
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputGroup, styles.halfWidth]}>
            <Text style={styles.inputLabel}>Age *</Text>
            <TextInput
              style={styles.input}
              value={dependentData.age}
              onChangeText={(text) => handleInputChange('age', text)}
              placeholder="Age"
              keyboardType="numeric"
            />
          </View>

          <View style={[styles.inputGroup, styles.halfWidth]}>
            <Text style={styles.inputLabel}>Gender</Text>
            <TextInput
              style={styles.input}
              value={dependentData.gender}
              onChangeText={(text) => handleInputChange('gender', text)}
              placeholder="Male/Female/Other"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Relation *</Text>
          <TextInput
            style={styles.input}
            value={dependentData.relation}
            onChangeText={(text) => handleInputChange('relation', text)}
            placeholder="e.g., Spouse, Child, Parent, Friend"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Emergency Contact</Text>
          <TextInput
            style={styles.input}
            value={dependentData.emergencyContact}
            onChangeText={(text) => handleInputChange('emergencyContact', text)}
            placeholder="Dependent's emergency contact number"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Medical Condition (if any)</Text>
          <TextInput
            style={styles.input}
            value={dependentData.medicalCondition}
            onChangeText={(text) => handleInputChange('medicalCondition', text)}
            placeholder="Any medical conditions or special requirements"
            multiline
            numberOfLines={3}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Add Dependent</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#16a34a',
    padding: 20,
    paddingTop: 60,
  },
  backButton: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#bbf7d0',
  },
  form: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  halfWidth: {
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#16a34a',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

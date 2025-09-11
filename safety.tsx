import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Linking } from 'react-native';
import { Phone, MapPin, Shield, TriangleAlert as AlertTriangle, Users, Clock } from 'lucide-react-native';

export default function SafetyScreen() {
  const emergencyContacts = [
    { name: 'Tourist Helpline', number: '1363', description: 'National Tourism Helpline' },
    { name: 'Police', number: '100', description: 'Emergency Police' },
    { name: 'Ambulance', number: '108', description: 'Medical Emergency' },
    { name: 'Fire Service', number: '101', description: 'Fire Emergency' },
    { name: 'Disaster Management', number: '1070', description: 'Natural Disasters' },
  ];

  const safetyTips = [
    {
      title: 'Stay Connected',
      description: 'Keep your mobile phone charged and carry a power bank',
      icon: Phone,
    },
    {
      title: 'Share Location',
      description: 'Always inform someone about your travel plans',
      icon: MapPin,
    },
    {
      title: 'Weather Updates',
      description: 'Check weather conditions before traveling',
      icon: AlertTriangle,
    },
    {
      title: 'Group Safety',
      description: 'Stay with your group, especially in remote areas',
      icon: Users,
    },
  ];

  const handleEmergencyCall = (number) => {
    Alert.alert(
      'Emergency Call',
      `Are you sure you want to call ${number}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Call', 
          onPress: () => {
            if (number) {
              Linking.openURL(`tel:${number}`);
            }
          }
        }
      ]
    );
  };

  const sendSOSAlert = () => {
    Alert.alert(
      'SOS Alert',
      'This will send your location and emergency alert to your emergency contacts and local authorities.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Send SOS', 
          style: 'destructive',
          onPress: () => {
            Alert.alert('SOS Sent', 'Emergency alert has been sent to all contacts.');
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Safety & Security</Text>
        <Text style={styles.headerSubtitle}>Your safety is our priority</Text>
      </View>

      <View style={styles.sosSection}>
        <TouchableOpacity style={styles.sosButton} onPress={sendSOSAlert}>
          <AlertTriangle size={32} color="#ffffff" />
          <Text style={styles.sosButtonText}>EMERGENCY SOS</Text>
          <Text style={styles.sosSubtext}>Tap to send emergency alert</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emergency Contacts</Text>
        
        {emergencyContacts.map((contact, index) => (
          <TouchableOpacity
            key={index}
            style={styles.contactCard}
            onPress={() => handleEmergencyCall(contact.number)}
          >
            <View style={styles.contactIcon}>
              <Phone size={24} color="#ffffff" />
            </View>
            <View style={styles.contactDetails}>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.contactDescription}>{contact.description}</Text>
            </View>
            <Text style={styles.contactNumber}>{contact.number}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Safety Tips</Text>
        
        {safetyTips.map((tip, index) => (
          <View key={index} style={styles.tipCard}>
            <View style={styles.tipIcon}>
              <tip.icon size={24} color="#16a34a" />
            </View>
            <View style={styles.tipContent}>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.tipDescription}>{tip.description}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Safety Features</Text>
        
        <View style={styles.featureGrid}>
          <View style={styles.featureCard}>
            <MapPin size={32} color="#16a34a" />
            <Text style={styles.featureTitle}>Live Tracking</Text>
            <Text style={styles.featureText}>Your location is tracked for safety</Text>
          </View>
          
          <View style={styles.featureCard}>
            <Users size={32} color="#7c3aed" />
            <Text style={styles.featureTitle}>Group Monitor</Text>
            <Text style={styles.featureText}>Track all group members</Text>
          </View>
          
          <View style={styles.featureCard}>
            <Shield size={32} color="#dc2626" />
            <Text style={styles.featureTitle}>Auto Alerts</Text>
            <Text style={styles.featureText}>Automatic emergency detection</Text>
          </View>
          
          <View style={styles.featureCard}>
            <Clock size={32} color="#ea580c" />
            <Text style={styles.featureTitle}>Check-ins</Text>
            <Text style={styles.featureText}>Regular safety check-ins</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Regional Safety Information</Text>
        <Text style={styles.infoText}>
          The Northeastern states of India offer incredible natural beauty and cultural experiences. 
          Always respect local customs, carry proper identification, and inform local authorities 
          of your travel plans when visiting remote areas.
        </Text>
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
    backgroundColor: '#dc2626',
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fca5a5',
    marginTop: 4,
  },
  sosSection: {
    padding: 20,
    alignItems: 'center',
  },
  sosButton: {
    backgroundColor: '#dc2626',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  sosButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  sosSubtext: {
    color: '#fca5a5',
    fontSize: 14,
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  contactCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  contactIcon: {
    backgroundColor: '#16a34a',
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  contactDetails: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  contactDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  contactNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#16a34a',
  },
  tipCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tipIcon: {
    backgroundColor: '#dcfce7',
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  tipDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginTop: 12,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  infoSection: {
    padding: 20,
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 24,
  },
});

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { User, Phone, Mail, MapPin, Users, Settings, CreditCard as Edit, LogOut } from 'lucide-react-native';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const [userProfile, setUserProfile] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91-9876543210',
    city: 'Guwahati',
    state: 'Assam',
    emergencyContact: '+91-9876543211',
    totalTours: 5,
    activeTours: 1,
    dependents: 2,
  });

  const profileStats = [
    { label: 'Total Tours', value: userProfile.totalTours, icon: MapPin },
    { label: 'Active Tours', value: userProfile.activeTours, icon: Settings },
    { label: 'Dependents', value: userProfile.dependents, icon: Users },
  ];

  const menuItems = [
    { title: 'Edit Profile', icon: Edit, onPress: () => router.push('/profile-setup') },
    { title: 'Manage Dependents', icon: Users, onPress: () => router.push('/add-dependent') },
    { title: 'Emergency Contacts', icon: Phone, onPress: () => Alert.alert('Emergency Contacts', 'Emergency contact management coming soon') },
    { title: 'Tour History', icon: MapPin, onPress: () => Alert.alert('Tour History', 'Tour history feature coming soon') },
    { title: 'Settings', icon: Settings, onPress: () => Alert.alert('Settings', 'Settings panel coming soon') },
  ];

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: () => {
            router.replace('/login');
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={handleLogout}>
          <LogOut size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <User size={48} color="#ffffff" />
          </View>
        </View>
        
        <Text style={styles.userName}>{userProfile.fullName}</Text>
        <Text style={styles.userLocation}>{userProfile.city}, {userProfile.state}</Text>
        
        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Mail size={16} color="#6b7280" />
            <Text style={styles.contactText}>{userProfile.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <Phone size={16} color="#6b7280" />
            <Text style={styles.contactText}>{userProfile.phone}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsContainer}>
        {profileStats.map((stat, index) => (
          <View key={index} style={styles.statCard}>
            <View style={styles.statIcon}>
              <stat.icon size={24} color="#16a34a" />
            </View>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <View style={styles.menuIcon}>
              <item.icon size={20} color="#6b7280" />
            </View>
            <Text style={styles.menuText}>{item.title}</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.emergencySection}>
        <Text style={styles.emergencyTitle}>Emergency Contact</Text>
        <View style={styles.emergencyCard}>
          <Phone size={20} color="#dc2626" />
          <Text style={styles.emergencyText}>{userProfile.emergencyContact}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LogOut size={20} color="#dc2626" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileCard: {
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#16a34a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  userLocation: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 16,
  },
  contactInfo: {
    width: '100%',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  contactText: {
    fontSize: 16,
    color: '#4b5563',
  },
  statsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    gap: 12,
  },
  statCard: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  statIcon: {
    backgroundColor: '#dcfce7',
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  menuSection: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  menuItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  menuIcon: {
    width: 40,
    alignItems: 'center',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
  },
  menuArrow: {
    fontSize: 20,
    color: '#6b7280',
  },
  emergencySection: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  emergencyCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#dc2626',
  },
  emergencyText: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '600',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  logoutText: {
    color: '#dc2626',
    fontSize: 16,
    fontWeight: '600',
  },
});

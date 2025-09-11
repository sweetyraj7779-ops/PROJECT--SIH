import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { MapPin, Clock, Users, Star } from 'lucide-react-native';

export default function ToursScreen() {
  const [activeTours, setActiveTours] = useState([]);
  
  const popularTours = [
    {
      id: 1,
      name: 'Kaziranga National Park',
      location: 'Assam',
      duration: '3 Days',
      rating: 4.8,
      price: '₹15,000',
      description: 'Wildlife safari and one-horned rhinoceros viewing',
    },
    {
      id: 2,
      name: 'Tawang Monastery',
      location: 'Arunachal Pradesh',
      duration: '4 Days',
      rating: 4.9,
      price: '₹22,000',
      description: 'Buddhist monastery and mountain landscapes',
    },
    {
      id: 3,
      name: 'Living Root Bridges',
      location: 'Meghalaya',
      duration: '2 Days',
      rating: 4.7,
      price: '₹12,000',
      description: 'Unique natural bridges and waterfalls',
    },
    {
      id: 4,
      name: 'Dzukou Valley',
      location: 'Nagaland',
      duration: '3 Days',
      rating: 4.6,
      price: '₹18,000',
      description: 'Valley of flowers and trekking',
    },
  ];

  const generateTourId = () => {
    return 'NE-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 5).toUpperCase();
  };

  const bookTour = (tour) => {
    const tourId = generateTourId();
    const newActiveTour = {
      ...tour,
      tourId,
      bookingDate: new Date().toLocaleDateString(),
      status: 'Confirmed',
    };
    
    setActiveTours([...activeTours, newActiveTour]);
    
    Alert.alert(
      'Tour Booked Successfully!',
      `Tour ID: ${tourId}\n\nYour ${tour.name} tour has been confirmed. Your unique tour ID has been generated for tracking and safety purposes.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Northeast Tours</Text>
        <Text style={styles.headerSubtitle}>Discover the beauty of Northeast India</Text>
      </View>

      {activeTours.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Tours</Text>
          {activeTours.map((tour, index) => (
            <View key={index} style={styles.activeTourCard}>
              <View style={styles.activeTourHeader}>
                <Text style={styles.activeTourName}>{tour.name}</Text>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>{tour.status}</Text>
                </View>
              </View>
              <Text style={styles.tourId}>Tour ID: {tour.tourId}</Text>
              <Text style={styles.bookingDate}>Booked: {tour.bookingDate}</Text>
            </View>
          ))}
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Tours</Text>
        
        {popularTours.map((tour) => (
          <View key={tour.id} style={styles.tourCard}>
            <View style={styles.tourHeader}>
              <Text style={styles.tourName}>{tour.name}</Text>
              <View style={styles.ratingContainer}>
                <Star size={16} color="#fbbf24" fill="#fbbf24" />
                <Text style={styles.rating}>{tour.rating}</Text>
              </View>
            </View>
            
            <View style={styles.tourDetails}>
              <View style={styles.detailItem}>
                <MapPin size={16} color="#6b7280" />
                <Text style={styles.detailText}>{tour.location}</Text>
              </View>
              
              <View style={styles.detailItem}>
                <Clock size={16} color="#6b7280" />
                <Text style={styles.detailText}>{tour.duration}</Text>
              </View>
            </View>
            
            <Text style={styles.tourDescription}>{tour.description}</Text>
            
            <View style={styles.tourFooter}>
              <Text style={styles.price}>{tour.price}</Text>
              <TouchableOpacity 
                style={styles.bookButton}
                onPress={() => bookTour(tour)}
              >
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#bbf7d0',
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
  activeTourCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#16a34a',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  activeTourHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  activeTourName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
  },
  statusBadge: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: {
    color: '#16a34a',
    fontSize: 12,
    fontWeight: '600',
  },
  tourId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#16a34a',
    marginBottom: 4,
  },
  bookingDate: {
    fontSize: 14,
    color: '#6b7280',
  },
  tourCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tourHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  tourName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  tourDetails: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  detailText: {
    fontSize: 14,
    color: '#6b7280',
  },
  tourDescription: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 24,
    marginBottom: 16,
  },
  tourFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#16a34a',
  },
  bookButton: {
    backgroundColor: '#16a34a',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  bookButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

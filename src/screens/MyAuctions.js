// import React from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { useSelector } from 'react-redux';

// const MyAuctions = () => {
//     // These data would come from your Redux store or backend API
//     const pendingItems = useSelector(state => state.auctions.pendingItems);
//     const approvedItems = useSelector(state => state.auctions.approvedItems);
//     const soldItems = useSelector(state => state.auctions.soldItems);
//     const wonAuctions = useSelector(state => state.auctions.wonAuctions);

//     // A function to render each item in a list
//     const renderItem = ({ item, sectionTitle }) => (
//         <View style={styles.itemContainer}>
//             <Text style={styles.itemText}>{item.name}</Text>
//             <Text style={styles.itemText}>{item.description}</Text>
//             {sectionTitle !== 'Items Sold' && (
//                 <Text style={styles.itemText}>Date/Time: {item.auctionDateTime}</Text>
//             )}
//             {sectionTitle === 'Items Sold' && (
//                 <Text style={styles.itemText}>Sold for: ${item.price}</Text>
//             )}
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>My Auctions</Text>
//             <Section title="Pending Items" data={pendingItems} renderItem={renderItem} />
//             <Section title="Approved Items" data={approvedItems} renderItem={renderItem} />
//             <Section title="Items Sold" data={soldItems} renderItem={renderItem} />
//             <Section title="Auctions Won" data={wonAuctions} renderItem={renderItem} />
//         </View>
//     );
// };

// // A reusable section component
// const Section = ({ title, data, renderItem }) => (
//     <View style={styles.sectionContainer}>
//         <Text style={styles.sectionTitle}>{title}</Text>
//         <FlatList
//             data={data}
//             keyExtractor={item => item.id}
//             renderItem={(item) => renderItem(item, title)}
//         />
//     </View>
// );

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     sectionContainer: {
//         marginTop: 20,
//     },
//     sectionTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     itemContainer: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 10,
//         marginTop: 10,
//     },
//     itemText: {
//         fontSize: 16,
//     },
//     // ... Add more styles for your items and sections as needed
// });

// export default MyAuctions;

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MyAuctions = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pending Items</Text>
        {/* Display pending items here */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Approved Items</Text>
        {/* Display approved items here */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Items Sold</Text>
        {/* Display sold items here */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Auctions Won</Text>
        {/* Display won auctions here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    borderWidth: 5,
    borderColor: '#7e5287',
  },
});

export default MyAuctions;

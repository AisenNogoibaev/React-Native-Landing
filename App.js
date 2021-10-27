import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Content from './src/Content'
import Footer from './src/Footer'
import { Navbar } from './src/Navbar'
export default function App() {
	return (
		<View style={styles.container}>
			<Navbar />
			<ScrollView style={styles.bg}>
				<Content />
				<Footer />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	bg: {
		backgroundColor: 'white',
	},
})

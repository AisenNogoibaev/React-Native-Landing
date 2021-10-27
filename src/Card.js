import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

function Card({ title }) {
	return (
		<View style={styles.card}>
			<View style={styles.titleGroup}>
				<Text style={styles.title}>{title}</Text>
				<TouchableOpacity>
					<Image
						style={styles.pencil}
						source={{
							uri: 'https://i.ibb.co/djxJ0Gf/MDI-circle-edit-outline.png',
						}}
					/>
				</TouchableOpacity>
			</View>
			<Text style={styles.grayText}>Product</Text>
			<Text style={styles.blueText}>Hardwood flooring</Text>
			<Text style={styles.grayText}>Calculation</Text>
			<View style={styles.numberGroup}>
				<Text style={styles.blueText}>2,342.2 sq.ft. x $3.25</Text>
				<Text style={styles.blueText}> $5679.87</Text>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	card: {
		paddingHorizontal: 10,
		paddingBottom: 90,
	},
	titleGroup: {
		width: 340,
		paddingHorizontal: 10,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	numberGroup: {
		width: 340,
		paddingHorizontal: 10,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	title: {
		color: '#1D5478',
		fontSize: 20,
		marginTop: 5,
		fontWeight: 'bold',
	},
	pencil: {
		width: 29,
		height: 28,
	},
	blueText: {
		paddingHorizontal: 10,
		color: '#1D5478',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10,
	},
	grayText: {
		paddingHorizontal: 10,
		color: '#E4E9EC',
		paddingTop: 10,
		fontSize: 20,
		fontWeight: 'bold',
	},
})
export default Card

import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

function Footer() {
	return (
		<View style={styles.footer}>
			<Text style={styles.total}>Total:</Text>
			<Text style={styles.price}> $17,039.61</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	footer: {
		backgroundColor: '#1D5478',
		height: 100,
		flexDirection: 'row',
		paddingHorizontal: 20,
		alignItems: 'center',
	},
	total: {
		fontSize: 20,
		color: 'white',
	},
	price: {
		fontSize: 30,
		color: 'white',
	},
})
export default Footer

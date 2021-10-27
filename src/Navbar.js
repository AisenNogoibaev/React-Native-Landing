import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export const Navbar = () => {
	const headerData = [
		{
			title: 'Projects',
			id: 1,
		},
		{
			title: 'Services',
			id: 2,
		},
		{
			title: 'Clients',
			id: 3,
		},
		{
			title: 'Settings',
			id: 4,
		},
	]
	return (
		<View style={styles.navbar}>
			<View style={styles.container}>
				<View style={styles.topNav}>
					<View style={styles.logoGroup}>
						<TouchableOpacity>
							<Image
								style={styles.logo}
								source={{
									uri: 'https://c.radikal.ru/c10/2110/4c/f9a6572d8092.png',
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.logotext}>Projects</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity>
						<Image
							style={styles.x}
							source={{
								uri: 'https://c.radikal.ru/c12/2110/f4/ace2e56f2c10.png\n',
							}}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.bottomNav}>
					{headerData.map((el, id) => {
						return (
							<TouchableOpacity key={el.id}>
								<Text style={styles.textNav}>{el.title}</Text>
							</TouchableOpacity>
						)
					})}
				</View>
				<View style={styles.activeNav}>
					<Image
						style={styles.activeImg}
						source={{ uri: 'https://i.ibb.co/FHjB0dg/Path-1117.png' }}
					/>
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	navbar: {
		minHeight: 100,
		backgroundColor: '#1D5478',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		paddingTop: 40,
	},
	container: {
		width: 360,
	},
	topNav: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		width: 360,
		justifyContent: 'space-between',
	},
	bottomNav: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		width: 360,
		justifyContent: 'space-between',
		marginTop: 30,
	},
	activeNav: {},
	logoGroup: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	logo: {
		width: 16,
		height: 16,
		marginRight: 27,
	},
	logotext: {
		color: 'white',
		fontSize: 27,
		// fontFamily: "Calibri"
	},
	x: {
		width: 23,
		height: 23,
	},
	textNav: {
		color: 'white',
	},
	activeImg: {
		width: 50,
		height: 14.5,
		marginLeft: 10,
		marginTop: 7,
	},
})

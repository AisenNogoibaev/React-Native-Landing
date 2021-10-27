import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import Card from './Card'

const Content = () => {
	const data = [
		{
			link: 'https://i.ibb.co/1Z3YdjQ/MDI-qrcode-scan.png',
			id: 1,
		},
		{
			link: 'https://i.ibb.co/nM7dnq2/MDI-monitor-share.png',
			id: 3,
		},
		{
			link: 'https://i.ibb.co/F7tP6F0/MDI-file-document-outline.png',
			id: 4,
		},
		{
			link: 'https://i.ibb.co/NpGzkNC/MDI-printer.png',
			id: 5,
		},
	]
	return (
		<View style={styles.bg}>
			<View style={styles.container}>
				<View style={styles.iconsgroup}>
					<View style={styles.firstgroup}>
						{data.map((el) => {
							return (
								<TouchableOpacity key={el.id}>
									<Image
										style={styles.icons}
										source={{
											uri: el.link,
										}}
									/>
								</TouchableOpacity>
							)
						})}
					</View>
					<TouchableOpacity>
						<Image
							style={styles.icons}
							source={{
								uri: 'https://i.ibb.co/djxJ0Gf/MDI-circle-edit-outline.png',
							}}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.titleGroup}>
					<View style={styles.titleGrOne}>
						<Text style={styles.title}>Name of project</Text>
						<Text style={styles.country}>Toronto, ON</Text>
					</View>
					<Text style={styles.Inprogress}>In Progress</Text>
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.cupboard}>
					<Image
						style={styles.cupboard}
						source={{
							uri: 'https://i.ibb.co/0QRfg2Z/fd51b74176aca098ab6d7b8f82994ec1.png',
						}}
					/>
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.cardGroup}>
					<View style={styles.cardGrOne}>
						<Text style={styles.blueText}>Bedroom</Text>
						<Image
							style={styles.pencil}
							source={{
								uri: 'https://i.ibb.co/djxJ0Gf/MDI-circle-edit-outline.png',
							}}
						/>
					</View>
					<View style={styles.cardGroup}>
						<Text style={styles.lorem}>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore .
						</Text>
						<Text style={styles.grayText}> Product</Text>
						<Text style={styles.blueText}>Hardwood flooring</Text>
						<Text style={styles.grayText}>Calculation</Text>
						<View style={styles.calculate}>
							<Text style={styles.blueText}>2,342.2 sq.ft. x $3.25</Text>
							<Text style={styles.blueText}>$5,679.87</Text>
						</View>
						<View style={styles.pictures}>
							<Image
								style={styles.picture}
								source={{
									uri: 'https://i.ibb.co/Cw6mdxF/Rectangle-1600.png',
								}}
							/>
							<Image
								style={styles.picture}
								source={{
									uri: 'https://i.ibb.co/Cw6mdxF/Rectangle-1600.png',
								}}
							/>
							<Image
								style={styles.picture}
								source={{
									uri: 'https://i.ibb.co/Cw6mdxF/Rectangle-1600.png',
								}}
							/>
						</View>
					</View>
				</View>
			</View>
			<View
				style={{
					width: 375,
					alignItems: 'center',
					paddingHorizontal: 20,
					justifyContent: 'center',
				}}
			>
				<Card title='Living room' />
				<Card title='Dining room' />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	bg: {
		backgroundColor: 'white',
	},
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		width: 360,
		justifyContent: 'space-between',
	},
	iconsgroup: {
		flexDirection: 'row',
		width: 360,
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		marginTop: 28.5,
	},
	firstgroup: {
		flexDirection: 'row',
		width: 230,
		paddingHorizontal: 10,
		justifyContent: 'space-between',
	},
	icons: {
		width: 30,
		height: 30,
	},
	titleGroup: {
		flexDirection: 'row',
		width: 360,
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		marginTop: 46,
	},
	title: {
		color: '#1D5478',
		fontWeight: 'bold',
		fontSize: 29,
	},
	country: {
		color: '#1D5478',
		fontSize: 24,
		marginTop: 5,
	},
	Inprogress: {
		color: '#1D5478',
		fontSize: 12,
		marginTop: 17,
	},
	cupboard: {
		marginTop: 21,
		marginBottom: 28,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		width: 350,
		height: 200,
	},
	cardGrOne: {
		marginTop: 46,
		width: 360,
		paddingHorizontal: 10,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	lorem: {
		paddingHorizontal: 20,
		justifyContent: 'center',
		fontSize: 15,
		color: '#1D5478',
		marginTop: 5,
	},
	grayText: {
		color: '#E4E9EC',
		fontSize: 20,
		paddingHorizontal: 10,
		marginTop: 5,
	},
	blueText: {
		color: '#1D5478',
		fontSize: 20,
		marginTop: 5,
		paddingHorizontal: 10,
		fontWeight: 'bold',
	},
	pencil: {
		width: 29,
		height: 28,
	},
	pictures: {
		justifyContent: 'space-around',
		marginTop: 40,
		flexDirection: 'row',
		marginBottom: 55,
	},
	picture: {
		width: 83,
		height: 83,
	},
	calculate: {
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		flexDirection: 'row',
	},
})
export default Content

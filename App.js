import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Somnus from './assets/img/somnus.svg';

const App = () => {
	return (
		<View style={styles.container}>
			<Somnus width='100%' height='100%' />
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#431070',
	},
});

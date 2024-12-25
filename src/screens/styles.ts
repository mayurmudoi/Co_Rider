import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const scale = size => (width / width) * size;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#faf9f4',
	},
	headerContainer: {
		padding: scale(16),
		gap: scale(16),
		borderBottomWidth: 1,
		borderBottomColor: 'lightgray',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerSub: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: scale(16),
	},
	Icon: {
		height: scale(20),
		width: scale(20),
	},
	userIcon: {
		height: scale(24),
		width: scale(24),
		borderRadius: scale(16),
	},
	headerText: {
		fontSize: scale(24),
		fontWeight: '500',
	},
	groupIcon: {
		height: scale(48),
		width: scale(48),
	},
	groupText: {
		fontSize: scale(16),
	},
	groupTextBold: {
		fontSize: scale(18),
		fontWeight: '500',
	},
	chatWindow: {
		flex: 1,
		paddingHorizontal: scale(16),
	},
	messageMainContainer: {
		flexDirection: 'row',
		gap: scale(8),
		marginVertical: scale(10),
	},
	selfMessageContainer: {
		justifyContent: 'flex-end',
		flexDirection: 'row',
	},
	otherMessageContainer: {
		justifyContent: 'flex-start',
		flexDirection: 'row',
	},
	otherMessage: {
		width: width * 0.8,
		backgroundColor: 'white',
		elevation: 2,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.3,
		shadowRadius: 4,
		borderRadius: scale(12),
		borderTopLeftRadius: 0,
		padding: scale(8),
		gap: scale(16),
	},
	selfMessage: {
		width: width * 0.8,
		backgroundColor: '#1C63D5',
		elevation: 2,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.3,
		shadowRadius: 4,
		borderRadius: scale(12),
		borderBottomRightRadius: 0,
		padding: scale(8),
		gap: scale(16),
	},
	replyContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: width - scale(24),
		backgroundColor: 'white',
		alignSelf: 'center',
		height: scale(48),
		paddingHorizontal: scale(12),
		borderRadius: scale(16),
	},
	replyIconButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: width * 0.14,
	},
	textInputContainer: {
		width: width * 0.72,
		height: scale(42),
	},
	menuContainer: {
		position: 'absolute',
		bottom: scale(72),
		right: scale(16),
	},
	modalOverlay: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContent: {
		backgroundColor: '#008000',
		borderRadius: scale(32),
		alignItems: 'center',
		justifyContent: 'space-evenly',
		width: width / 3,
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.3,
		shadowRadius: 4,
		flexDirection: 'row',
		height: scale(44),
	},
	drawerContainer: {
		position: 'absolute',
		top: scale(104),
		right: scale(16),
	},
	drawerContent: {
		backgroundColor: 'white',
		borderRadius: scale(8),
		justifyContent: 'space-evenly',
		width: width / 2.8,
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.3,
		shadowRadius: 4,
	},
	drawer: {
		height: scale(48),
		paddingHorizontal: scale(12),
		flexDirection: 'row',
		alignItems: 'center',
		gap: scale(12),
		borderBottomWidth: 0.8,
		borderBottomColor: 'lightgray',
	},
	myText: {
		fontSize: scale(16),
		color: 'white',
	},
});

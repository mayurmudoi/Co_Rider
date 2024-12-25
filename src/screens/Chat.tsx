import {View, Text, Image, TextInput, TouchableOpacity, Modal, FlatList, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
const Chat = () => {

	const [openMenu, setOpenMenu] = useState(false);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [messages, setMessages] = useState([]);
	const [tripNumber, setTripNumber] = useState('');
	const [fromUser, setFromUser] = useState('');
	const [toUser, setToUser] = useState('');

	const handleAttachment = () => {
		setOpenMenu(true);
	};

	const handleItemClick = () => {
		setOpenMenu(false);
	};

	const handleDrawer = () => {
		setOpenDrawer(true);
	};

	const handleDrawerItem = () => {
		setOpenDrawer(false);
	};

	const fetchMessages = async () => {
		try {
			const response = await fetch('https://qa.corider.in/assignment/chat?page=0');
			const result = await response.json();
			console.log(result);

			if (result.status === 'success') {
				console.log('success');
				console.log('Chats:', result.chats);
				setMessages(result.chats);
				setTripNumber(result.name);
				setFromUser(result.from);
				setToUser(result.to);
			} else {
				console.log('Failed to fetch group messages:', result);
			}
		} catch (error) {
			console.error('Error fetching group messages:', error);
		}
	};

	useEffect(() => {
		fetchMessages();
	}, []);

	const renderMessages = ({item}: any) => (
		<View
			style={[styles.messageMainContainer, item.sender.self ? styles.selfMessageContainer : styles.otherMessageContainer]}>
			{!item.sender.self && (
				<Image source={{uri: item.sender.image}} style={styles.userIcon}/>
			)}
			<View style={[item.sender.self ? styles.selfMessage : styles.otherMessage]}>
				<Text style={[item.sender.self ? styles.myText : styles.groupText]}>{item.message}</Text>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>

				<View style={styles.header}>
					<View style={styles.headerSub}>
						<Image source={require('../assets/icons/Back.png')} style={styles.Icon}/>
						<Text style={styles.headerText}>{tripNumber}</Text>
					</View>
					<Image source={require('../assets/icons/edit.png')} style={styles.Icon}/>
				</View>
				<View style={[styles.header]}>
					<View style={styles.headerSub}>
						<Image source={require('../assets/images/Group.png')} style={styles.groupIcon}/>
						<View>
							<Text style={styles.groupText}>From <Text
								style={styles.groupTextBold}>{fromUser}</Text></Text>
							<Text style={styles.groupText}>To <Text style={styles.groupTextBold}>{toUser}</Text></Text>
						</View>
					</View>
					<TouchableOpacity onPress={handleDrawer}>
						<Image source={require('../assets/icons/dots-vertical.png')} style={styles.Icon}/>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.chatWindow}>
				<FlatList
					data={messages}
					keyExtractor={(item) => item.id}
					renderItem={renderMessages}
					showsVerticalScrollIndicator={false}
					inverted
				/>
			</View>
			<View style={{padding: 16, paddingTop: 0}}>
				<View style={styles.replyContainer}>
					<TextInput placeholder="Reply to @Rohit Yadav" style={styles.textInputContainer}/>
					<View style={styles.replyIconButtons}>

						<TouchableOpacity onPress={handleAttachment}>

							<Image source={require('../assets/icons/paperclip.png')} style={styles.Icon}/>
						</TouchableOpacity>
						<TouchableOpacity>

							<Image source={require('../assets/icons/send-03.png')} style={styles.Icon}/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<Modal
				visible={openMenu}
				transparent={true}
				animationType="fade"
				onRequestClose={handleItemClick}
			>
				<TouchableWithoutFeedback onPress={handleItemClick}>
					<View style={styles.modalOverlay}>
						<View style={styles.menuContainer}>
							<View style={styles.modalContent}>
								<TouchableOpacity onPress={handleItemClick}>
									<Image source={require('../assets/icons/Camera.png')} style={styles.Icon}/>
								</TouchableOpacity>
								<TouchableOpacity onPress={handleItemClick}>
									<Image source={require('../assets/icons/video.png')} style={styles.Icon}/>
								</TouchableOpacity>
								<TouchableOpacity onPress={handleItemClick}>
									<Image source={require('../assets/icons/Document.png')} style={styles.Icon}/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Modal>

			<Modal
				visible={openDrawer}
				transparent={true}
				animationType="fade"
				onRequestClose={handleDrawerItem}
			>
				<TouchableWithoutFeedback onPress={handleDrawerItem}>
					<View style={styles.modalOverlay}>
						<View style={styles.drawerContainer}>
							<View style={styles.drawerContent}>

								<TouchableOpacity onPress={handleDrawerItem} style={styles.drawer}>
									<Image source={require('../assets/icons/Members.png')} style={styles.Icon}/>
									<Text>Members</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={handleDrawerItem} style={styles.drawer}>
									<Image source={require('../assets/icons/Call.png')} style={styles.Icon}/>
									<Text>Share Number</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={handleDrawerItem}
												  style={[styles.drawer, {borderBottomWidth: 0}]}>
									<Image source={require('../assets/icons/Report.png')} style={styles.Icon}/>
									<Text>Report</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		</View>
	);
};

export default Chat;

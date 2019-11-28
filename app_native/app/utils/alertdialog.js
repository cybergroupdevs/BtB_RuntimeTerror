import { Alert} from 'react-native'

export const showAlert = (title, message, positiveBtnText) => {
    Alert.alert(
        title,
        message,
        [
            { text: positiveBtnText, onPress: () => console.log('Ok pressed') },
        ],
        { cancelable: false },
    );
}
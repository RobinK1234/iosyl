import { StyleSheet } from "react-native";

import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderWidth: 1,
    },
    image:  {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 40,
        fontWeight: "bold"
    },
    titleContainer: {
        marginVertical: 54
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine:'underline'
    },
    footerText: {
        color: colors.blue,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30
    }
})
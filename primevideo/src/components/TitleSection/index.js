import { StyleSheet, Text } from "react-native"

export const TitleSection = (props) => {
    return <Text style={styles.title}>{props.title}</Text>
}

const styles = StyleSheet.create({
    title: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "700",
        padding: 15,
    }
})
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.primeVideoLogoImg} source={PrimeVideoLogo} />
                <Image style={styles.amazonLogoImg} source={AmazonLogo} />
            </View>

            <View style={styles.category}>
                <TouchableOpacity>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Tv Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Movidasdasdes</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Kids</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "#232F3E",
        backgroundColor: "#eeee",
        alignItems: "flex-start"
    },
    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    amazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,
    },
    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
});

import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";

import MovieTheWheel from "../../assets/movies/the_wheel_of_time.png";

import { MOVIESWATCH } from "../../utils/moviesWatch";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESCRIME } from "../../utils/moviesCrimes";

import { MoviesCard } from "../../components/MoviesCard";
import { TitleSection } from "../../components/TitleSection";
import { useEffect, useState } from "react";

export const Home = () => {
     return (
         <View style={styles.container}>
             <View style={styles.header}>
                 <Image style={styles.primeVideoLogoImg} source={PrimeVideoLogo} />
                 <Image style={styles.amazonLogoImg} source={AmazonLogo} />
             </View>

             <View style={styles.category}>
                 <TouchableOpacity>
                     <Text style={styles.categoryText}>Home</Text>
                 </TouchableOpacity>
                 <TouchableOpacity>
                     <Text style={styles.categoryText}>Tv Shows</Text>
                 </TouchableOpacity>
                 <TouchableOpacity>
                     <Text style={styles.categoryText}>Movies</Text>
                 </TouchableOpacity>
                 <TouchableOpacity>
                     <Text style={styles.categoryText}>Kids</Text>
                 </TouchableOpacity>
             </View>

             <ScrollView showsVerticalScrollIndicator={false}>

                 <TouchableOpacity style={styles.movieImageThumbnail}>
                     <Image source={MovieTheWheel} style={styles.movieImage} />
                 </TouchableOpacity>

                 <TitleSection title="Continue Watching" />
                 <FlatList
                     data={MOVIESWATCHING}
                     keyExtractor={item => item.id}
                     horizontal
                     contentContainerStyle={styles.contentContainerList}
                     showsHorizontalScrollIndicator={false}
                     renderItem={({ item }) => (
                         <MoviesCard moviesURL={item.moviesURL} />
                     )}
                 />

                 <TitleSection title="Crime Movies" />
                 <FlatList
                     data={MOVIESCRIME}
                     keyExtractor={item => item.id}
                     horizontal
                     contentContainerStyle={styles.contentContainerList}
                     showsHorizontalScrollIndicator={false}
                     renderItem={({ item }) => (
                         <MoviesCard moviesURL={item.moviesURL} />
                     )}
                 />

                 <TitleSection title="Watch in your language" />
                 <FlatList
                     data={MOVIESWATCH}
                     keyExtractor={item => item.id}
                     horizontal
                     contentContainerStyle={styles.contentContainerList}
                     showsHorizontalScrollIndicator={false}
                     renderItem={({ item }) => (
                         <MoviesCard moviesURL={item.moviesURL} />
                     )}
                 />

             </ScrollView>
         </View>
     )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
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
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,
    },
    categoryText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#FFF",
    },
    movieImageThumbnail: {
        width: "100%",
        alignItems: "center",
    },
    contentContainerList: {
        paddingLeft: 18,
        paddingRight: 30,
    }
});

import { StyleSheet, Dimensions } from "react-native";
import { View } from "@/components/Themed";
import Swiper from "react-native-swiper";
import { useVideoPlayer, VideoView } from "expo-video";

const { height, width } = Dimensions.get("window");

function VideoItem({ source }: { source: any }) {
  const player = useVideoPlayer(source, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <VideoView
      style={styles.video}
      player={player}
      contentFit="cover"
      nativeControls={false}
    />
  );
}

export default function TabOneScreen() {
  const videos = [
    require("../../assets/sample1.mp4"),
    require("../../assets/sample2.mp4"),
    require("../../assets/sample3.mp4"),
  ];

  return (
    <View style={styles.container}>
      <Swiper loop={false} showsPagination={false} horizontal={false}>
        {videos.map((src, index) => (
          <View key={index} style={styles.videoContainer}>
            <VideoItem source={src} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  videoContainer: {
    width,
    height,
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

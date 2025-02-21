import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function HomeScreen() {
	const [isPlaying, setIsPlaying] = React.useState(true);

	const formatTime = (seconds: number) => {
		const hrs = Math.floor(seconds / 3600);
		const mins = Math.floor((seconds % 3600) / 60);
		const secs = seconds % 60;
		return `${hrs.toString().padStart(2, "0")}:${mins
			.toString()
			.padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
	};

	return (
		<View style={styles.container}>
			<CountdownCircleTimer
				isPlaying={isPlaying}
				duration={16 * 60 * 60} // 16 hours in seconds
				colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
				colorsTime={[10, 6, 3, 0]}
				onComplete={() => ({ shouldRepeat: true, delay: 2 })}
				updateInterval={1}
			>
				{({ remainingTime, color }) => (
					<Text style={{ color, fontSize: 40 }}>
						{formatTime(remainingTime)}
					</Text>
				)}
			</CountdownCircleTimer>
			<View style={{ marginTop: 20 }}>
				<Button
					title="reset button"
					onPress={() => setIsPlaying((prev) => !prev)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#ecf0f1",
		padding: 8,
	},
});

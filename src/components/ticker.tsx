import format from "date-fns/format";
import { FC, useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const formatTime = (time: number, is12Hour: boolean) => {
    if (is12Hour) {
        return format(time, "hh:mm:ss a");
    }
    return format(time, "HH:mm:ss");
}

export const Ticker: FC = () => {
    const [currentTime, setCurrentTime] = useState<number>(Date.now());
    const [is12HourFormat, setIs12HourFormat] = useState<boolean>(false);

    useEffect(() => {
        const tick = () => {
            return setInterval(() => {
                const timeInMs = Date.now();
                setCurrentTime(timeInMs);
            }, 1000);
        }
        const interval = tick();
        return () => clearInterval(interval);
    }, []);

    const handleOnButtonPress = () => {
        setIs12HourFormat((prevState) => !prevState);
    }

    return (
        <View>
            <Text style={styles.textView}>
                {formatTime(currentTime, is12HourFormat)}
            </Text>
            <Button
                onPress={() => handleOnButtonPress()}
                title={is12HourFormat ? "View In 24 Hour Format" : "View In 12 Hour Format"}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    textView: {
        fontSize: 24,
        color: '#FF0000',
        textAlign: 'center'
    }
});
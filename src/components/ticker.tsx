import format from "date-fns/format";
import { FC, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export const Ticker: FC = () => {
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        const timeInMs = Date.now();
        const formattedTime = format(timeInMs, 'yyyy-MM-dd HH:mm:ss a');
        setCurrentTime(formattedTime);
    }, []);

    return (
        <View>
            <Text style={styles.textView}>
                {currentTime}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textView: {
        fontSize: 24,
        color: '#FF0000',
    }
});
import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import AnimatedCircularProgress from './AnimatedCircularProgress';

function App(): JSX.Element {
  const [progress, setProgress] = React.useState(0);
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    if (!trigger) {
      setTrigger(true);
    }
  }, [trigger]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      {trigger ? (
        <AnimatedCircularProgress
          percentage={progress}
          setTrigger={setTrigger}
        />
      ) : (
        <></>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 40,
        }}>
        <Button
          title="Start"
          onPress={() => {
            setProgress(100);
          }}
        />

        <Button
          title="change"
          onPress={() => {
            setTrigger(!trigger);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

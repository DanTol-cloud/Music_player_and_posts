import {Text, View} from 'react-native';

import {SerializedError} from '@reduxjs/toolkit';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

import {styles} from '../screens/PostScreen/styles.ts';

const handleQueryError = ({
  error,
}: {
  error: FetchBaseQueryError | SerializedError;
}) => {
  if (error) {
    if ('status' in error) {
      const errMsg =
        'error' in error ? error.error : JSON.stringify(error.data);
      return (
        <View>
          <Text style={styles.title}>An error has occurred:</Text>
          <Text style={styles.error}>{errMsg}</Text>
        </View>
      );
    } else {
      return <Text style={styles.error}>{error.message}</Text>;
    }
  }
};

export default handleQueryError;

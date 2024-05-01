import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf';


const App = () => {

  const exampleSource = { uri: 'https://www.sharedfilespro.com/shared-files/38/?sample.pdf', cache: true };

  return (
    <View style={ {flex: 1}}>
        <Pdf
        source={exampleSource}
        onLoadComplete={(numberOfPages,filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page,numberOfPages) => {
            console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
            console.log(error);
        }}
        onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
        }}
       style={ {flex: 1}}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
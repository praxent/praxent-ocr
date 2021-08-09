import React from 'react'
import { StyleSheet, View } from 'react-native'

export const VerticalSpacer = ({ padding = 0, margin = 0 }) => {
  return <View style={styles(padding, margin).verticalSpacer} />
}

const styles = (padding: number, margin: number) =>
  StyleSheet.create({
    verticalSpacer: {
      paddingVertical: padding,
      marginVertical: margin,
    },
  })

import React, { useCallback } from 'react'
import { Platform, StatusBar } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

const CustomStatusBar = ({ isDark, isLight, isTranslucentDark, isTranslucentLight }) => {
  useFocusEffect(
    useCallback(() => {
      if (isDark) return StatusBar.setBarStyle('dark-content')
      if (isLight) return StatusBar.setBarStyle('light-content')
      if (isTranslucentDark) {
        StatusBar.setBarStyle('dark-content')
        if (Platform.OS === 'android') {
          StatusBar.setBackgroundColor('rgba(0, 0, 0, 0)')
          StatusBar.setTranslucent(true)
        }
      }
      if (isTranslucentLight) {
        StatusBar.setBarStyle('light-content')
        if (Platform.OS === 'android') {
          StatusBar.setBackgroundColor('rgba(0,0,0,0)')
          StatusBar.setTranslucent(true)
        }
      }
    }, [isDark, isLight, isTranslucentDark, isTranslucentLight]),
  )

  return <StatusBar />
}

export default CustomStatusBar

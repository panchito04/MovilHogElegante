// src/hooks/useToast.js
import { useState, useCallback } from 'react'
import { Toast as CapToast } from '@capacitor/toast'

export const useToast = () => {
  const [toast, setToast] = useState(null)

  const showToast = useCallback((message, type = 'success', duration = 3000) => {
    // Show native system toast popups on iOS/Android
    CapToast.show({
      text: message,
      duration: duration > 3000 ? 'long' : 'short'
    }).catch(err => {
      console.warn('Native toast failed or browser fallback active:', err)
    })

    setToast({ message, type, duration })
  }, [])

  const hideToast = useCallback(() => {
    setToast(null)
  }, [])

  return {
    toast,
    showToast,
    hideToast
  }
}
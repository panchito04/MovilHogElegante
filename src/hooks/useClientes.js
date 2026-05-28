
// ========================================
// hooks/useClientes.js
// ========================================
import { useState } from 'react'
import { API_URL } from '../utils/apiConfig'

export const useClientes = () => {
  const [clientes, setClientes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchClientes = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${API_URL}/api/clientes`)
      
      if (!response.ok) throw new Error('Error al obtener clientes')
      
      const data = await response.json()
      setClientes(data)
      
      return { success: true }
    } catch (error) {
      console.error('Error:', error)
      return { success: false, message: 'Error al cargar clientes' }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    clientes,
    isLoading,
    fetchClientes
  }
}
import type { ContactFormData, FormValidationResult } from '@/types'

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/
  return phoneRegex.test(phone)
}

export const validateContactForm = (data: ContactFormData): FormValidationResult => {
  const errors: string[] = []

  if (!data.name.trim()) {
    errors.push('Name is required')
  }

  if (!data.email.trim()) {
    errors.push('Email is required')
  } else if (!validateEmail(data.email)) {
    errors.push('Please enter a valid email address')
  }

  if (!data.phone.trim()) {
    errors.push('Phone number is required')
  } else if (!validatePhone(data.phone)) {
    errors.push('Please enter a valid phone number')
  }

  if (!data.service) {
    errors.push('Please select a service interest')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}
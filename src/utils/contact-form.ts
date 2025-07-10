import type { ContactFormData } from '@/types'
import { validateContactForm } from './validation'

class ContactFormManager {
  private form: HTMLFormElement | null = null
  private submitButton: HTMLButtonElement | null = null

  constructor() {
    this.init()
  }

  private init(): void {
    this.form = document.getElementById('contactForm') as HTMLFormElement
    if (!this.form) return

    this.submitButton = this.form.querySelector('button[type="submit"]')
    this.setupFormHandling()
    this.setupFieldEffects()
  }

  private setupFormHandling(): void {
    if (!this.form) return

    this.form.addEventListener('submit', (e) => {
      e.preventDefault()
      this.handleSubmit()
    })
  }

  private async handleSubmit(): Promise<void> {
    if (!this.form || !this.submitButton) return

    const formData = this.getFormData()
    const validation = validateContactForm(formData)

    if (!validation.isValid) {
      this.showErrors(validation.errors)
      return
    }

    this.setLoadingState(true)

    try {
      // Simulate form submission
      await this.submitForm(formData)
      this.showSuccessMessage()
      this.form.reset()
    } catch (error) {
      this.showErrorMessage()
    } finally {
      this.setLoadingState(false)
    }
  }

  private getFormData(): ContactFormData {
    if (!this.form) throw new Error('Form not found')

    const formData = new FormData(this.form)
    return {
      name: formData.get('name') as string || '',
      email: formData.get('email') as string || '',
      phone: formData.get('phone') as string || '',
      dueDate: formData.get('due-date') as string || '',
      service: formData.get('service') as string || '',
      message: formData.get('message') as string || ''
    }
  }

  private setLoadingState(isLoading: boolean): void {
    if (!this.submitButton) return

    if (isLoading) {
      this.submitButton.textContent = 'Sending...'
      this.submitButton.disabled = true
    } else {
      this.submitButton.textContent = 'Book Free Consultation'
      this.submitButton.disabled = false
    }
  }

  private async submitForm(data: ContactFormData): Promise<void> {
    // For now, simulate form submission
    // In production, this would submit to your backend
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form submitted:', data)
        // You could integrate with services like:
        // - Netlify Forms
        // - Formspree  
        // - EmailJS
        // - Your own backend API
        resolve()
      }, 1500)
    })
  }

  private showSuccessMessage(): void {
    alert('Thank you for your message! We\'ll get back to you within 4 hours.')
  }

  private showErrorMessage(): void {
    alert('There was an error sending your message. Please try again.')
  }

  private showErrors(errors: string[]): void {
    alert(errors.join('\n'))
  }

  private setupFieldEffects(): void {
    if (!this.form) return

    const fields = this.form.querySelectorAll('input, select, textarea') as NodeListOf<HTMLFormElement>
    
    fields.forEach(field => {
      field.addEventListener('focus', () => {
        field.style.borderColor = 'var(--color-accent-rose)'
        field.style.boxShadow = '0 8px 25px rgba(166, 124, 124, 0.15)'
      })

      field.addEventListener('blur', () => {
        field.style.borderColor = 'rgba(0, 0, 0, 0.08)'
        field.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.02)'
      })
    })
  }
}

export default ContactFormManager
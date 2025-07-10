// Main application entry point
import '@/styles/main.css'
import NavigationManager from '@/utils/navigation'
import ContactFormManager from '@/utils/contact-form'
import { 
  animateOnScroll, 
  setupElementAnimations, 
  setupCounterAnimation, 
  setupParallaxEffect 
} from '@/utils/animations'

class App {
  private navigationManager: NavigationManager
  private contactFormManager: ContactFormManager

  constructor() {
    this.navigationManager = new NavigationManager()
    this.contactFormManager = new ContactFormManager()
    this.init()
  }

  public getManagers() {
    return {
      navigation: this.navigationManager,
      contactForm: this.contactFormManager
    }
  }

  private init(): void {
    this.setupAnimations()
    this.setupInteractiveElements()
    this.setupBackToTopButton()
    this.preloadImages()
    this.markPageAsLoaded()
  }

  private setupAnimations(): void {
    animateOnScroll()
    setupElementAnimations()
    setupCounterAnimation()
    setupParallaxEffect()
  }

  private setupInteractiveElements(): void {
    this.setupPricingCardInteractions()
    this.setupServiceCardInteractions()
  }

  private setupPricingCardInteractions(): void {
    document.querySelectorAll('.pricing-card').forEach(card => {
      const cardElement = card as HTMLElement
      
      card.addEventListener('mouseenter', () => {
        cardElement.style.transform = 'translateY(-10px)'
      })
      
      card.addEventListener('mouseleave', () => {
        if (card.classList.contains('featured')) {
          cardElement.style.transform = 'scale(1.05)'
        } else {
          cardElement.style.transform = 'translateY(0)'
        }
      })
    })
  }

  private setupServiceCardInteractions(): void {
    document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.service-icon') as HTMLElement
        const iconElement = icon?.querySelector('i') as HTMLElement
        
        if (icon && iconElement) {
          icon.style.transform = 'scale(1.1)'
          icon.style.background = 'linear-gradient(135deg, #B8A39A 0%, #A89288 100%)'
          iconElement.style.color = 'white'
        }
      })
      
      card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.service-icon') as HTMLElement
        const iconElement = icon?.querySelector('i') as HTMLElement
        
        if (icon && iconElement) {
          icon.style.transform = 'scale(1)'
          icon.style.background = 'linear-gradient(135deg, #E8D5D1 0%, #DCC5C0 100%)'
          iconElement.style.color = '#6B6B6B'
        }
      })
    })
  }

  private setupBackToTopButton(): void {
    const backToTopButton = document.createElement('button')
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>'
    backToTopButton.className = 'back-to-top'
    backToTopButton.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(135deg, #B8A39A 0%, #A89288 100%);
      color: white;
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      cursor: pointer;
      z-index: 1000;
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `

    document.body.appendChild(backToTopButton)

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })

    // Show/hide back to top button
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.style.opacity = '1'
        backToTopButton.style.transform = 'translateY(0)'
      } else {
        backToTopButton.style.opacity = '0'
        backToTopButton.style.transform = 'translateY(10px)'
      }
    })
  }

  private preloadImages(): void {
    const imagesToPreload = [
      'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ]

    imagesToPreload.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }

  private markPageAsLoaded(): void {
    document.body.classList.add('loaded')
    console.log('Nursing Wisdom for Newborns website loaded successfully!')
  }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new App()
})
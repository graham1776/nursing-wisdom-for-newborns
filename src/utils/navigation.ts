import type { NavigationState } from '@/types'

class NavigationManager {
  private state: NavigationState = {
    isMenuOpen: false,
    activeSection: 'home'
  }

  private hamburger: HTMLElement | null = null
  private navMenu: HTMLElement | null = null
  private navbar: HTMLElement | null = null

  constructor() {
    this.init()
  }

  private init(): void {
    this.hamburger = document.querySelector('.hamburger')
    this.navMenu = document.querySelector('.nav-menu')
    this.navbar = document.querySelector('.navbar')

    this.setupMobileToggle()
    this.setupSmoothScrolling()
    this.setupScrollEffects()
    this.setupKeyboardNavigation()
  }

  private setupMobileToggle(): void {
    if (!this.hamburger || !this.navMenu) return

    this.hamburger.addEventListener('click', () => {
      this.toggleMobileMenu()
    })

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu()
      })
    })
  }

  private toggleMobileMenu(): void {
    if (!this.hamburger || !this.navMenu) return

    this.state.isMenuOpen = !this.state.isMenuOpen
    
    this.hamburger.classList.toggle('active')
    this.navMenu.classList.toggle('active')
  }

  private closeMobileMenu(): void {
    if (!this.hamburger || !this.navMenu) return

    this.state.isMenuOpen = false
    this.hamburger.classList.remove('active')
    this.navMenu.classList.remove('active')
  }

  private setupSmoothScrolling(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (!href) return

        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })
  }

  private setupScrollEffects(): void {
    if (!this.navbar) return

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        this.navbar!.style.background = 'rgba(255, 255, 255, 0.98)'
      } else {
        this.navbar!.style.background = 'rgba(255, 255, 255, 0.95)'
      }
    })
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu()
      }
    })
  }

  public getCurrentSection(): string {
    return this.state.activeSection
  }

  public setActiveSection(section: string): void {
    this.state.activeSection = section
  }
}

export default NavigationManager
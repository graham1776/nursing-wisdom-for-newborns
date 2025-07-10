import type { ObserverOptions, AnimationElement } from '@/types'

export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: ObserverOptions
): IntersectionObserver => {
  return new IntersectionObserver(callback, options)
}

export const animateOnScroll = (): void => {
  const observerOptions: ObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = createIntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loading')
      }
    })
  }, observerOptions)

  // Observe sections for animation
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
  })
}

export const setupElementAnimations = (): void => {
  const animateElements = document.querySelectorAll(
    '.service-card, .pricing-card, .county-card, .difference-item'
  ) as NodeListOf<AnimationElement>

  const animateObserver = createIntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const element = entry.target as AnimationElement
        setTimeout(() => {
          element.style.opacity = '1'
          element.style.transform = 'translateY(0)'
        }, index * 100)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  animateElements.forEach(element => {
    element.style.opacity = '0'
    element.style.transform = 'translateY(20px)'
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
    animateObserver.observe(element)
  })
}

export const setupCounterAnimation = (): void => {
  const counters = document.querySelectorAll('.difference-number') as NodeListOf<HTMLElement>
  
  const counterObserver = createIntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target as HTMLElement
        const target = parseInt(counter.textContent || '0')
        let current = 0
        const increment = target / 100

        const updateCounter = () => {
          if (current < target) {
            current += increment
            counter.textContent = Math.floor(current).toString()
            requestAnimationFrame(updateCounter)
          } else {
            counter.textContent = target.toString()
          }
        }

        updateCounter()
        counterObserver.unobserve(counter)
      }
    })
  }, { threshold: 0.5 })

  counters.forEach(counter => {
    counterObserver.observe(counter)
  })
}

export const setupParallaxEffect = (): void => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    const heroImage = document.querySelector('.hero-image img') as HTMLElement

    if (heroImage && scrolled < window.innerHeight) {
      heroImage.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })
}
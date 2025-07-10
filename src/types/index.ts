// Type definitions for the application

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  dueDate?: string;
  service: string;
  message?: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface NavigationState {
  isMenuOpen: boolean;
  activeSection: string;
}

export interface ObserverOptions {
  threshold: number;
  rootMargin?: string;
}

export interface AnimationElement extends Element {
  style: CSSStyleDeclaration;
}
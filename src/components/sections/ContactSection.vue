<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const errors = ref({})
const submitted = ref(false)

function validate() {
  errors.value = {}
  if (!form.name.trim()) errors.value.name = 'Full name is required'
  if (!form.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.value.email = 'Please enter a valid email address'
  }
  if (!form.subject.trim()) errors.value.subject = 'Subject is required'
  if (!form.message.trim()) errors.value.message = 'Message is required'
  return Object.keys(errors.value).length === 0
}

function handleSubmit() {
  if (validate()) {
    // NOTE: Wire up form submission to email service (e.g. EmailJS or Formspree) before going live
    submitted.value = true
    Object.keys(form).forEach(k => form[k] = '')
    setTimeout(() => { submitted.value = false }, 5000)
  }
}

const contactInfo = [
  { icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z', label: 'Phone', value: '+92 21 1234 5678', link: 'tel:+922112345678' },
  { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6', label: 'Email', value: 'info@seherinternational.com', link: 'mailto:info@seherinternational.com' },
  { icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', label: 'Address', value: '123 Industrial Zone, Karachi, Pakistan', link: null },
  { icon: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z M12 6v6l4 2', label: 'Office Hours', value: 'Mon - Sat: 9:00 AM - 6:00 PM', link: null }
]
</script>

<template>
  <section class="contact-section section" id="contact">
    <div class="container">
      <div class="contact-section__grid">
        <div class="contact-section__info">
          <p class="section-label">Get In Touch</p>
          <h2 class="section-title">Let's Build Something Together</h2>
          <p class="contact-section__intro">
            Have a question or need a quote? Reach out to us and our team will get back to you
            within 24 hours.
          </p>
          <ul class="contact-section__list">
            <li v-for="item in contactInfo" :key="item.label">
              <div class="contact-section__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path :d="item.icon" />
                </svg>
              </div>
              <div>
                <span class="contact-section__label">{{ item.label }}</span>
                <a v-if="item.link" :href="item.link" class="contact-section__value">{{ item.value }}</a>
                <span v-else class="contact-section__value">{{ item.value }}</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="contact-section__form-wrapper">
          <Transition name="fade" mode="out-in">
            <div v-if="submitted" class="contact-section__success" key="success">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <h3>Thank You!</h3>
              <p>We'll be in touch shortly.</p>
            </div>
            <form v-else class="contact-section__form" @submit.prevent="handleSubmit" key="form">
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input id="name" v-model="form.name" type="text" :class="{ 'input-error': errors.name }" />
                <span v-if="errors.name" class="error">{{ errors.name }}</span>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input id="email" v-model="form.email" type="email" :class="{ 'input-error': errors.email }" />
                  <span v-if="errors.email" class="error">{{ errors.email }}</span>
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input id="phone" v-model="form.phone" type="tel" />
                </div>
              </div>
              <div class="form-group">
                <label for="subject">Subject *</label>
                <input id="subject" v-model="form.subject" type="text" :class="{ 'input-error': errors.subject }" />
                <span v-if="errors.subject" class="error">{{ errors.subject }}</span>
              </div>
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" v-model="form.message" rows="4" :class="{ 'input-error': errors.message }"></textarea>
                <span v-if="errors.message" class="error">{{ errors.message }}</span>
              </div>
              <button type="submit" class="btn btn--primary btn--block">Send Message</button>
            </form>
          </Transition>
        </div>
      </div>
    </div>
    <!-- PLACEHOLDER: Replace contact details with real company info -->
  </section>
</template>

<style scoped>
.contact-section__grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-6);
  align-items: start;
}

.contact-section__intro {
  margin-bottom: var(--space-4);
  color: var(--color-text-muted);
}

.contact-section__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.contact-section__list li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
}

.contact-section__icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background-color: var(--color-bg-tint);
  color: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-section__label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.contact-section__value {
  display: block;
  font-size: 0.9375rem;
  color: var(--color-text);
  margin-top: 0.125rem;
}

.contact-section__form-wrapper {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-md);
}

.contact-section__success {
  text-align: center;
  padding: var(--space-6) 0;
  color: var(--color-success);
}

.contact-section__success h3 {
  margin-top: var(--space-2);
  color: var(--color-primary);
}

.contact-section__success p {
  color: var(--color-text-muted);
}

.form-group {
  margin-bottom: var(--space-3);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2);
}

label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  margin-bottom: 0.375rem;
  color: var(--color-text);
}

input,
textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.9375rem;
  font-family: inherit;
  color: var(--color-text);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-secondary);
  box-shadow: 0 0 0 3px rgba(45,106,159,0.1);
}

.input-error {
  border-color: var(--color-error) !important;
}

.error {
  display: block;
  font-size: 0.75rem;
  color: var(--color-error);
  margin-top: 0.25rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-base);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1023px) {
  .contact-section__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>

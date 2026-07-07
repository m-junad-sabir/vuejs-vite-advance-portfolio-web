<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Privacy Policy | Seher International',
  meta: [
    { name: 'description', content: 'Privacy policy for Seher International website.' }
  ]
})

const sections = [
  {
    title: 'Information We Collect',
    content: 'We collect information you provide directly to us, such as your name, email address, phone number, and message content when you fill out our contact form. We may also collect anonymous usage data through cookies and analytics tools.'
  },
  {
    title: 'How We Use Your Information',
    content: 'We use the information we collect to respond to your inquiries, provide our services, send relevant updates, and improve our website. We do not sell or rent your personal information to third parties.'
  },
  {
    title: 'Cookies',
    content: 'We use cookies to improve your browsing experience, analyze website traffic, and understand how visitors use our site. You can choose to decline cookies through our cookie consent banner or your browser settings.'
  },
  {
    title: 'Data Security',
    content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
  },
  {
    title: 'Third-Party Links',
    content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.'
  },
  {
    title: 'Your Rights',
    content: 'You have the right to access, correct, or delete your personal information held by us. To exercise these rights, please contact us using the information provided on our contact page.'
  },
  {
    title: 'Changes to This Policy',
    content: 'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.'
  }
]
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="section-label">Legal</p>
        <h1>Privacy Policy</h1>
        <p>Last updated: June 2025</p>
      </div>
    </section>

    <section class="section">
      <div class="container privacy">
        <div class="privacy__intro">
          <p>Seher International ("we", "us", or "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website.</p>
        </div>
        <div v-for="s in sections" :key="s.title" class="privacy__section">
          <h2>{{ s.title }}</h2>
          <p>{{ s.content }}</p>
        </div>
        <div class="privacy__contact">
          <h2>Contact Us</h2>
          <p>If you have any questions about this privacy policy, please contact us at <a href="mailto:info@seherinternational.com">info@seherinternational.com</a>.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.privacy {
  max-width: 800px;
}

.privacy__intro {
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-border);
}

.privacy__intro p {
  font-size: 1.0625rem;
  line-height: 1.8;
}

.privacy__section,
.privacy__contact {
  margin-bottom: var(--space-4);
}

.privacy__section h2,
.privacy__contact h2 {
  font-size: 1.25rem;
  margin-bottom: var(--space-1);
}

.privacy__section p,
.privacy__contact p {
  line-height: 1.8;
}
</style>

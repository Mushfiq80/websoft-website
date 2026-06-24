"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { SITE_CONFIG } from "@/data/site"
import { MapPin, Phone, Mail, MessageCircle, Send, Building2, Globe, Users } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from Website: ${formData.name} - ${formData.organization || "Individual"}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nOrganization: ${formData.organization}\nService of Interest: ${formData.service}\n\nMessage:\n${formData.message}`
    )

    // Open email client
    window.location.href = `mailto:${SITE_CONFIG.contact.emails[0]}?subject=${subject}&body=${body}`

    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const services = [
    "Web Solution",
    "Mail Solution",
    "Server Solution",
    "Apps Development",
    "Portal Development",
    "A.I. Solution",
    "Automation Solution",
    "System Development",
    "Data Center Solution",
    "Software Development",
    "ERP Development",
    "API Development",
    "Corporate Support",
    "Domain Expert Solution",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[rgb(var(--primary-faint))] to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-6">
              Let's Start a{" "}
              <span className="text-[rgb(var(--primary))]">Conversation</span>
            </h1>
            <p className="text-lg md:text-xl text-[rgb(var(--text-muted))] leading-relaxed">
              Have a project in mind or want to explore how we can help? Reach out and let's discuss your challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))] mb-6">
                Send Us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">Thank you! Your email client has been opened with your message. Please send it to complete your inquiry.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[rgb(var(--text-primary))] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--border-subtle))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[rgb(var(--text-primary))] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--border-subtle))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[rgb(var(--text-primary))] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--border-subtle))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:border-transparent"
                      placeholder="+88 0XXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-[rgb(var(--text-primary))] mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--border-subtle))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:border-transparent"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[rgb(var(--text-primary))] mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--border-subtle))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:border-transparent bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[rgb(var(--text-primary))] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--border-subtle))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))] focus:border-transparent resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto rounded-full bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))] text-white"
                >
                  {isSubmitting ? (
                    "Opening Email Client..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))] mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6 md:space-y-8">
                {/* Registered Office */}
                <div className="bg-[rgb(var(--surface))] rounded-xl p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[rgb(var(--text-primary))]">Registered Office</h3>
                    </div>
                  </div>
                  <p className="text-sm text-[rgb(var(--text-muted))] pl-8">{SITE_CONFIG.contact.registeredOffice}</p>
                </div>

                {/* Sales Office */}
                <div className="bg-[rgb(var(--surface))] rounded-xl p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[rgb(var(--primary))] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[rgb(var(--text-primary))]">Sales Office</h3>
                    </div>
                  </div>
                  <p className="text-sm text-[rgb(var(--text-muted))] pl-8">{SITE_CONFIG.contact.salesOffice}</p>
                </div>

                {/* Phones */}
                <div className="bg-[rgb(var(--surface))] rounded-xl p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-5 h-5 text-[rgb(var(--primary))]" />
                    <h3 className="font-semibold text-[rgb(var(--text-primary))]">Phone</h3>
                  </div>
                  <div className="pl-8 space-y-2">
                    {SITE_CONFIG.contact.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[\s+]/g, "")}`}
                        className="block text-sm text-[rgb(var(--text-muted))] hover:text-[rgb(var(--primary))] transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                  <div className="pl-8 mt-4">
                    <a
                      href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[\s+]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                {/* Emails */}
                <div className="bg-[rgb(var(--surface))] rounded-xl p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-[rgb(var(--primary))]" />
                    <h3 className="font-semibold text-[rgb(var(--text-primary))]">Email</h3>
                  </div>
                  <div className="pl-8 space-y-2">
                    {SITE_CONFIG.contact.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block text-sm text-[rgb(var(--text-muted))] hover:text-[rgb(var(--primary))] transition-colors"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Websites */}
                <div className="bg-[rgb(var(--surface))] rounded-xl p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-5 h-5 text-[rgb(var(--primary))]" />
                    <h3 className="font-semibold text-[rgb(var(--text-primary))]">Website</h3>
                  </div>
                  <div className="pl-8 space-y-2">
                    {SITE_CONFIG.contact.websites.map((website) => (
                      <a
                        key={website}
                        href={`https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-[rgb(var(--text-muted))] hover:text-[rgb(var(--primary))] transition-colors"
                      >
                        {website}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div className="bg-[rgb(var(--surface))] rounded-xl p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-5 h-5 text-[rgb(var(--primary))]" />
                    <h3 className="font-semibold text-[rgb(var(--text-primary))]">Social Media</h3>
                  </div>
                  <div className="pl-8 space-y-2">
                    <a
                      href={SITE_CONFIG.contact.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-[rgb(var(--text-muted))] hover:text-[rgb(var(--primary))] transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href={SITE_CONFIG.contact.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-[rgb(var(--text-muted))] hover:text-[rgb(var(--primary))] transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-[rgb(var(--navy))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Find Us
              </h2>
              <p className="text-white/80 mb-6">
                Visit our sales office at Mirpur, Dhaka. We're located in Pallabi Section-12, easily accessible
                from anywhere in the city.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Sales Office</h3>
                <p className="text-sm text-white/80">
                  Level-2B, House-30, Road-02, Block-B,<br />
                  Pallabi Section-12, Mirpur,<br />
                  Dhaka-1216, Bangladesh
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1101.2780269798823!2d90.36457804736773!3d23.8219236328892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1003ec171d5%3A0x9b15f733f43e73b9!2sWEB%20SOFT%20BD%20-%20Sales%20Office!5e1!3m2!1sen!2ssg!4v1782258439017!5m2!1sen!2ssg"
                width="100%"
                height="400"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
              Other Ways to Reach Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Call Us",
                description: "Speak directly with our team",
                value: SITE_CONFIG.contact.phones[0],
                icon: Phone,
                action: `tel:${SITE_CONFIG.contact.phones[0]}`,
              },
              {
                title: "WhatsApp",
                description: "Quick chat support",
                value: SITE_CONFIG.contact.whatsapp,
                icon: MessageCircle,
                action: `https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[\s+]/g, "")}`,
              },
              {
                title: "Email",
                description: "Send us a detailed message",
                value: SITE_CONFIG.contact.emails[0],
                icon: Mail,
                action: `mailto:${SITE_CONFIG.contact.emails[0]}`,
              },
              {
                title: "Visit",
                description: "Come to our office",
                value: "Sales Office",
                icon: MapPin,
                action: "#map",
              },
            ].map((option) => {
              const Icon = option.icon
              return (
                <a
                  key={option.title}
                  href={option.action}
                  target={option.action.startsWith("http") ? "_blank" : undefined}
                  rel={option.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="bg-white rounded-xl p-6 shadow-sm border border-[rgb(var(--border-subtle))] hover:border-[rgb(var(--primary))] hover:shadow-lg transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 text-[rgb(var(--primary))] mb-4" />
                  <h3 className="font-semibold text-[rgb(var(--text-primary))] mb-1">{option.title}</h3>
                  <p className="text-sm text-[rgb(var(--text-muted))] mb-2">{option.description}</p>
                  <p className="text-sm font-medium text-[rgb(var(--primary))]">{option.value}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

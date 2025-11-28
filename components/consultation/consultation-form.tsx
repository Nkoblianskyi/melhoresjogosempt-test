"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <Card className="elegant-card-premium p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-foreground">Pedido Enviado com Sucesso!</h3>
        <p className="text-muted-foreground">Receberá um email de confirmação em breve com os próximos passos.</p>
      </Card>
    )
  }

  return (
    <Card className="elegant-card-premium p-8 space-y-6">
      <div className="space-y-2">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Agendar Consulta</h2>
        <p className="text-muted-foreground">Preencha o formulário abaixo e entraremos em contacto em até 24 horas.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground font-medium">
            Nome Completo <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="João Silva"
            className="bg-background border-input"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="joao.silva@exemplo.pt"
            className="bg-background border-input"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground font-medium">
            Telefone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+351 912 345 678"
            className="bg-background border-input"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience" className="text-foreground font-medium">
            Experiência com Casinos Online <span className="text-destructive">*</span>
          </Label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Selecione uma opção</option>
            <option value="beginner">Iniciante - Nunca joguei</option>
            <option value="occasional">Ocasional - Jogo de vez em quando</option>
            <option value="regular">Regular - Jogo frequentemente</option>
            <option value="experienced">Experiente - Jogo há anos</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground font-medium">
            Mensagem ou Dúvidas
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Conte-nos mais sobre o que procura numa plataforma de casino..."
            rows={4}
            className="bg-background border-input resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base h-12"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              A enviar...
            </span>
          ) : (
            "Agendar Consulta Gratuita"
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center pt-2">
          Ao enviar este formulário, concorda com a nossa política de privacidade e tratamento de dados pessoais.
        </p>
      </form>
    </Card>
  )
}

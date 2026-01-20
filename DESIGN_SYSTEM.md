# 🎨 DESIGN SYSTEM - PORTFÓLIO SÁVIO PESSÔA AFONSO

## 📋 Visão Geral

Sistema de design completo para portfólio de desenvolvedor Front-End focado em **E-commerce de Alta Performance (VTEX & Wake)**.

**Estilo:** Futurista • Minimalista • High-Tech • Profissional  
**Identidade:** #61DAFB (Cyan Tecnológico)  
**Público-alvo:** Recrutadores técnicos e clientes enterprise

---

## 🎨 IDENTIDADE VISUAL

### Cor de Identidade Única

```css
--accent: #61dafb (Cyan Tecnológico);
```

**Razão:** Representa front-end avançado, tecnologia 3D e interatividade de alto nível.

**⚠️ REGRA CRÍTICA:**

- **NÃO** criar ou usar outras cores fortes além do accent
- **NÃO** usar cyan como fundo grande
- Cyan **APENAS** para: CTAs, links ativos, hover, underline, ícones, glow

---

## 🎨 PALETA DE CORES

### Fundo Base

```css
--bg-base: #000000;
```

### Glass Morphism

```css
/* Containers principais (Header, Modais) */
--glass-primary: rgba(10, 15, 25, 0.55) /* Cards secundários */
  --glass-secondary: rgba(17, 25, 40, 0.6) /* Bordas sutis */
  --glass-border: rgba(255, 255, 255, 0.08);
```

### Accent (Cor de Identidade)

```css
--accent: #61dafb /* Principal */ --accent-hover: #8be6ff /* Hover */
  --accent-soft: rgba(97, 218, 251, 0.25) /* Background/seleção */
  --accent-glow: rgba(97, 218, 251, 0.45) /* Glow/shadow */;
```

### Texto

```css
--text-primary: #e5e7eb /* Títulos e textos principais */
  --text-secondary: #9ca3af /* Textos descritivos */ --text-disabled: #6b7280
  /* Elementos desabilitados */;
```

---

## 📝 TIPOGRAFIA

### Fontes Obrigatórias

#### Space Grotesk (Headings)

- **Uso:** H1, H2, H3, H4, H5, H6
- **Peso:** 300, 400, 500, 600, 700
- **Características:** Geométrica, moderna, tecnológica
- **❌ NÃO usar:** Em textos longos ou parágrafos

```css
font-family: "Space Grotesk", system-ui, sans-serif;
```

#### Inter (Body/UI)

- **Uso:** Textos, parágrafos, UI, navegação, botões
- **Peso:** 300, 400, 500, 600, 700
- **Características:** Alta legibilidade, profissional
- **❌ NÃO usar:** Em títulos grandes

```css
font-family: "Inter", system-ui, sans-serif;
```

### Escala de Tipografia

```css
h1: clamp(2.5rem, 5vw, 4.5rem)  /* 40-72px */
h2: clamp(2rem, 4vw, 3.5rem)    /* 32-56px */
h3: clamp(1.5rem, 3vw, 2.5rem)  /* 24-40px */
```

---

## 🧱 COMPONENTES

### Glass Card

```tsx
<div className="glass-card p-8">{/* Conteúdo */}</div>
```

**Variáveis:**

- `background: var(--glass-secondary)`
- `backdrop-filter: blur(12px)`
- `border: 1px solid var(--glass-border)`
- `border-radius: 1rem`

---

### Button Primary

```tsx
<button className="btn-primary">Texto do Botão</button>
```

**Estilo:**

- Background: `var(--accent)`
- Color: `#000`
- Glow: `0 0 20px var(--accent-glow)`
- Hover: Aumenta glow + translateY(-2px)
- Padding: `px-6 py-3`
- Border-radius: `rounded-full`

---

### Link com Underline Animado

```tsx
<a href="#" className="link-underline">
  Link Texto
</a>
```

**Comportamento:**

- Underline aparece no hover
- Transição suave de 0 a 100% de largura
- Cor: `var(--accent)`

---

### Heading Section

```tsx
<h2 className="heading-section">Título da Seção</h2>
```

**Estilo:**

- Font: `Space Grotesk`
- Size: `text-3xl md:text-4xl`
- Weight: `font-bold`
- Margin-bottom: `mb-8`

---

## 🎯 REGRAS DE USO

### ✅ PERMITIDO

- Usar accent (#61DAFB) para:
  - CTAs (Calls to Action)
  - Links ativos
  - Hover states
  - Underline animado
  - Ícones de destaque
  - Glow effects
  - Marcadores/bullets
- Glass morphism em cards e containers
- Bordas sutis (rgba(255, 255, 255, 0.08))
- Tipografia: Space Grotesk (headings) + Inter (body)

### ❌ PROIBIDO

- Usar cyan como fundo grande
- Criar novas cores fortes (azul, roxo, verde, etc.)
- Usar gradientes chamativos
- Usar mais de uma cor de destaque
- Aplicar estilos que distraiam do fundo 3D
- Usar Space Grotesk em textos longos
- Usar Inter em títulos grandes

---

## 🎨 ACESSIBILIDADE

### Contraste

- Garantir contraste AA ou superior (WCAG 2.1)
- Texto principal (#E5E7EB) sobre fundo preto: ✅ AAA
- Accent (#61DAFB) sobre preto: ✅ AA

### Legibilidade

- Hierarquia visual clara
- Espaçamentos generosos
- Linha de base adequada (line-height: 1.6)
- Tipografia otimizada para leitura sobre fundo 3D animado

---

## 🔧 IMPLEMENTAÇÃO TAILWIND

### Configuração (tailwind.config.js)

```javascript
theme: {
  extend: {
    fontFamily: {
      heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    colors: {
      accent: {
        DEFAULT: '#61DAFB',
        hover: '#8BE6FF',
        soft: 'rgba(97, 218, 251, 0.25)',
        glow: 'rgba(97, 218, 251, 0.45)',
      },
      glass: {
        primary: 'rgba(10, 15, 25, 0.55)',
        secondary: 'rgba(17, 25, 40, 0.60)',
        border: 'rgba(255, 255, 255, 0.08)',
      },
      text: {
        primary: '#E5E7EB',
        secondary: '#9CA3AF',
        disabled: '#6B7280',
      },
    },
  },
}
```

### Classes Utilitárias Customizadas

```css
.glass-card {
  /* Card com glassmorphism */
}
.glass-header {
  /* Header com glassmorphism */
}
.btn-primary {
  /* Botão principal com glow */
}
.heading-section {
  /* Título de seção padrão */
}
.link-underline {
  /* Link com underline animado */
}
```

---

## 📐 ESPAÇAMENTOS

### Sistema de Grid

- Container máximo: `max-w-6xl` (1152px)
- Padding lateral: `px-6 lg:px-20`
- Gap entre elementos: `gap-6` a `gap-12`

### Seções

- Padding vertical: `py-20`
- Min-height: `min-h-screen` (quando apropriado)

---

## 🌟 EFEITOS VISUAIS

### Glassmorphism

```css
backdrop-filter: blur(12px);
background: rgba(17, 25, 40, 0.6);
border: 1px solid rgba(255, 255, 255, 0.08);
```

### Glow (Accent)

```css
box-shadow: 0 0 20px rgba(97, 218, 251, 0.45);
/* Hover: aumenta para 0 0 30px */
```

### Transições

- Padrão: `transition-all duration-300`
- Hover states: suaves e perceptíveis
- Micro-animações: melhoram engajamento

---

## 📊 HIERARQUIA VISUAL

### Ordem de Importância

1. **Heading (Space Grotesk):** Destaque máximo
2. **Accent (#61DAFB):** Elementos interativos e CTAs
3. **Texto Primary (#E5E7EB):** Conteúdo principal
4. **Texto Secondary (#9CA3AF):** Informações adicionais
5. **Glass borders:** Separação sutil

---

## 🎯 QUALIDADE VISUAL

### Checklist de Qualidade

- ✅ Contraste AA ou superior
- ✅ Legibilidade sobre fundo 3D animado
- ✅ Hierarquia visual clara
- ✅ Consistência em todas as páginas
- ✅ Identidade visual forte e única
- ✅ Sem elementos que distraiam da experiência principal

---

## 🚫 RESTRIÇÕES

### NÃO Alterar

- ✋ Fundo 3D espacial (Three.js)
- ✋ Componente `logoCarousel.tsx`

### Pode Alterar

- ✅ Cores e efeito glass do Header
- ✅ Todos os outros componentes (seguindo o design system)

---

## 📚 REFERÊNCIAS

### Inspirações

- Design futurista e minimalista
- Interfaces de alta tecnologia (sci-fi HUD)
- Web design moderno premium
- E-commerce de alto padrão (VTEX, Wake)

### Stack Tecnológico

- React + Vite + TypeScript
- Tailwind CSS
- Three.js (Background 3D)
- Framer Motion (Animações)

---

## 🎓 OBJETIVO FINAL

Criar um portfólio que:

1. ✨ Impressiona visualmente na primeira impressão
2. 💼 Demonstra domínio técnico profissional
3. 🎨 Possui identidade visual forte e autoral
4. ⚡ Mostra atenção aos detalhes e refinamento
5. 🏆 Destaca expertise em front-end de alta performance

---

**Versão:** 1.0.0  
**Última atualização:** Janeiro 2026  
**Autor:** Sávio Pessôa Afonso  
**Stack:** React + Vite + TypeScript + Tailwind CSS

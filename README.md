# 🏠 Vivendas do Parque - Website Comercial

Website responsivo e moderno para o empreendimento Vivendas do Parque, um condomínio residencial exclusivo em Curitiba.

## ✨ Características

* **Design Moderno**: Interface limpa e profissional com Next.js 14
* **Totalmente Responsivo**: Otimizado para todos os dispositivos
* **Animações Suaves**: Framer Motion para transições elegantes
* **Sistema de Analytics**: Rastreamento completo de visitantes
* **Vídeos Integrados**: Dois vídeos em locais estratégicos
* **Galeria Interativa**: Lightbox para visualização das fotos
* **Formulário de Contato**: Integrado com WhatsApp e e-mail
* **Painel de Administração**: Analytics detalhados em `/admin`

## 📱 Funcionalidades

### Seções Principais

1. **Header Fixo**: Logo e informações de contato sempre visíveis
2. **Hero Section**: Slider de imagens com vídeo integrado
3. **Sobre**: Informações do empreendimento com segundo vídeo
4. **Características**: Destaques dos terrenos e preços
5. **Localização**: Pontos de interesse próximos
6. **Galeria**: 17 fotos do empreendimento com lightbox
7. **Contato**: Formulário e múltiplas formas de contato
8. **Administração**: Analytics completos em `/admin`

### Sistema de Analytics

O projeto inclui um sistema completo de analytics que rastreia:

* **Visitantes únicos** e totais
* **Visualizações de página**
* **Tempo médio na sessão**
* **Taxa de rejeição**
* **Páginas mais visitadas**
* **Dispositivos utilizados**
* **Eventos de clique**
* **Localização dos visitantes**
* **Atividade por hora**
* **Submissões de formulário**

## 🚀 Como Usar

### Instalação

1. **Clone o repositório**
   ```bash
   git clone [url-do-repositorio]
   cd vivendas
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute em desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse o site**
   - Site principal: `http://localhost:3000`
   - Painel admin: `http://localhost:3000/admin`

### Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura de Arquivos

```
vivendas/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   ├── admin/
│   │   └── page.tsx        # Painel de administração
│   └── globals.css         # Estilos globais
├── components/
│   ├── Header.tsx          # Cabeçalho fixo
│   ├── Hero.tsx            # Seção hero com vídeo
│   ├── About.tsx           # Sobre o empreendimento
│   ├── Features.tsx        # Características
│   ├── Location.tsx        # Localização
│   ├── Gallery.tsx         # Galeria de fotos
│   ├── Contact.tsx         # Formulário de contato
│   └── Footer.tsx          # Rodapé
├── lib/
│   └── analytics.ts        # Sistema de analytics
├── public/
│   ├── 1.jpg - 17.jpeg    # Fotos do empreendimento
│   ├── video1.mp4         # Vídeo principal
│   └── video2.mp4         # Vídeo secundário
└── package.json
```

## 🎨 Design

### Cores Principais

* **Azul Principal**: #0ea5e9 (primary-600)
* **Azul Escuro**: #0284c7 (primary-700)
* **Cinza Claro**: #f8fafc (gray-50)
* **Branco**: #ffffff
* **Preto**: #0f172a (gray-900)

### Tipografia

* **Fonte Principal**: Inter (Google Fonts)
* **Fonte Secundária**: Playfair Display (Google Fonts)

## 📊 Informações do Empreendimento

### Dados Técnicos

* **Área dos Terrenos**: 400m² a 600m²
* **Localização**: Bairro Santa Cândida, Curitiba - PR
* **Preços**: A partir de R$ 180.000
* **Infraestrutura**: Completa (ruas pavimentadas, iluminação, drenagem)
* **Segurança**: Condomínio fechado com portaria

### Pontos de Interesse Próximos

* **Shopping Palladium**: 3km (8 min de carro)
* **Universidades**: 2km (6 min de carro)
* **Hospitais**: 1.5km (5 min de carro)
* **Centro da Cidade**: 5km (12 min de carro)

## 🔧 Personalização

### Alterar Informações de Contato

Edite os componentes relevantes:

```tsx
// components/Contact.tsx
const phone = '5541999961121'
const email = 'vendas@axis21.com.br'
```

### Alterar Preços

Edite no componente `Features.tsx`:

```tsx
// components/Features.tsx
<div className="text-2xl font-bold mt-2">R$ 180.000</div>
```

### Adicionar/Remover Fotos

1. Adicione as fotos na pasta `public/`
2. Atualize o array `galleryImages` no `components/Gallery.tsx`
3. Atualize o array `heroImages` no `components/Hero.tsx`

### Configurar Analytics

O sistema de analytics é automático e coleta dados em tempo real. Para acessar:

1. Navegue para `/admin`
2. Use as credenciais de acesso:
   - **Usuário**: admin
   - **Senha**: murilo@1987
3. Visualize todas as métricas
4. Use os botões para atualizar ou limpar dados

### Sistema de Autenticação

A página de administração é protegida por autenticação:

- **Sessão válida**: 24 horas
- **Armazenamento**: LocalStorage do navegador
- **Logout automático**: Após expiração da sessão
- **Credenciais**: Configuradas em `lib/config.ts`

## 📱 Responsividade

O website é totalmente responsivo com breakpoints:

* **Mobile**: < 768px
* **Tablet**: 768px - 1024px
* **Desktop**: > 1024px

## 🚀 Otimizações

### Performance

* Next.js 14 com App Router
* Imagens otimizadas
* Lazy loading para componentes
* Animações otimizadas

### SEO

* Meta tags completas
* Estrutura semântica
* Alt text nas imagens
* URLs amigáveis

### Acessibilidade

* Navegação por teclado
* Focus states
* Contraste adequado
* Textos alternativos

## 📞 Contato

Para suporte ou personalizações:

* **WhatsApp**: (41) 99996-1121
* **E-mail**: vendas@axis21.com.br
* **Telefone**: (41) 99996-1121

## 📄 Licença

Este projeto foi criado para fins comerciais. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para maximizar conversões e proporcionar a melhor experiência mobile possível.**

## 🎥 Vídeos

O projeto inclui dois vídeos estrategicamente posicionados:

1. **Vídeo Principal** (`/video1.mp4`): No Hero section, ativado pelo botão "Ver Vídeo"
2. **Vídeo Secundário** (`/video2.mp4`): Na seção "Sobre", com controles nativos

## 📊 Analytics Detalhados

O painel de administração (`/admin`) oferece:

### Métricas Principais
- Visitantes únicos e totais
- Visualizações de página
- Tempo médio na sessão
- Taxa de rejeição

### Análises Detalhadas
- Páginas mais visitadas
- Dispositivos utilizados
- Eventos de clique
- Localização dos visitantes
- Atividade por hora
- Submissões de formulário

### Funcionalidades
- Atualização em tempo real
- Limpeza de dados
- Filtros por período
- Exportação de dados 
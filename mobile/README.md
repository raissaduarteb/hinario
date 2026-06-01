# 🎵 Hinário Mobile - React Native

Aplicativo mobile do Hinário em React Native com Expo.

## 🚀 Quick Start

```bash
# 1. Instalar dependências
npm install

# 2. Converter imagens (importante!)
# Ver MOBILE_IMAGES_SETUP.md para instruções

# 3. Rodar a app
npm start

# 4. Escanear QR code com Expo Go (iOS) ou Expo (Android)
```

## 📱 Telas Disponíveis

| Tela         | Rota         | Função                             |
| ------------ | ------------ | ---------------------------------- |
| **Home**     | `/`          | Teclado numérico + busca por texto |
| **Pesquisa** | `/pesquisa`  | Resultados de busca por texto      |
| **Hino**     | `/hino/[id]` | Visualizar hino com swipe          |
| **Seleção**  | `/selecao`   | Hinos favoritos (placeholder)      |

## 🎮 Recursos Implementados

✅ **Teclado Numérico**

- Buscar hinos por ID (ex: H123, C45)
- Modo Hinário e Harpa Cristã
- Validação de entrada em tempo real

✅ **Busca por Texto**

- Pesquisa em tempo real
- Debounce automático (400ms)
- Cache de resultados com React Query

✅ **Visualizador de Hino**

- Swipe esquerda/direita para navegar
- Tamanho de fonte ajustável (12-30px)
- Dark mode
- Referência do hino (ID)

✅ **Persistência de Dados**

- Dark mode salvo (AsyncStorage)
- Tamanho de fonte salvo (AsyncStorage)
- Cache automático de hinos (React Query)

## 📦 Estrutura do Projeto

```
mobile/
├── app/                     # Rotas Expo Router
│   ├── _layout.js          # Root layout
│   ├── index.js            # Home
│   ├── pesquisa.js         # Pesquisa
│   ├── selecao.js          # Seleção
│   └── hino/[id].js        # Detalhe hino
│
├── src/
│   ├── components/         # Componentes React Native
│   │   ├── hymn/          # Componentes de hino (4)
│   │   ├── keyboard/      # Teclado (4)
│   │   └── ui/            # Shared UI (12)
│   ├── hooks/             # Custom hooks (3)
│   ├── contexts/          # Context API (1)
│   └── utils/             # Utilitários (API, navegação)
│
├── imgs/                  # Imagens (precisa converter SVG→PNG)
├── package.json
└── README.md
```

## 🔧 Instalação & Setup

### Pré-requisitos

- Node.js 18+
- Expo CLI: `npm install -g expo-cli`
- Expo Go app (iOS ou Android)

### Passos

```bash
# 1. Entrar na pasta mobile
cd mobile

# 2. Instalar dependências
npm install

# 3. IMPORTANTE: Converter imagens SVG → PNG
# Siga o guia em: ../MOBILE_IMAGES_SETUP.md
mkdir -p imgs
# (converter arquivos SVG web para PNG)

# 4. Rodar dev server
npm start

# 5. Escolher opção:
#    - Pressione 'i' para iOS simulator
#    - Pressione 'a' para Android emulator
#    - Escaneie QR code para dispositivo físico
```

## 🎨 Funcionalidades

### Home Page

1. **Switch Modo**: Selecione "Hinário" ou "Harpa Cristã"
2. **Teclado**: Digite ID do hino (H123, C45, etc)
3. **Busca**: Pesquise por título ou letra

### Pesquisa

- Digite qualquer termo
- Resultados aparecem em tempo real
- Clique para visualizar hino completo

### Visualizador

- Veja texto completo com letra redimensionável
- Deslize para próximo/anterior hino
- Ajustes de dark mode e fonte no modal

### Ajustes

- Dark mode / Light mode
- Tamanho de fonte (+/-)
- Modo automático via AsyncStorage

## 🌐 API Conectada

**Base URL**: `https://hinario-api.onrender.com/api`

Endpoints:

- `GET /Hino/pesquisar?texto=...` - Buscar por texto
- `GET /Hino/{id}` - Detalhes do hino

## 📚 Documentação

1. **[MOBILE_STRUCTURE.md](./MOBILE_STRUCTURE.md)** - Arquitetura completa
2. **[../MOBILE_IMAGES_SETUP.md](../MOBILE_IMAGES_SETUP.md)** - Como converter imagens
3. **[../MOBILE_CREATION_SUMMARY.md](../MOBILE_CREATION_SUMMARY.md)** - Resumo do que foi criado

## 🐛 Troubleshooting

### Imagens não aparecem

```
Erro: "Cannot load image"
Solução: Converter SVGs para PNG (ver MOBILE_IMAGES_SETUP.md)
```

### App não conecta à API

```
Erro: "Cannot fetch from API"
Solução: Verificar internet e URL base da API
```

### Expo Go não abre

```
Erro: "Cannot open link"
Solução: Instalar Expo Go, escanear QR novamente
```

### Erro de módulo

```
Erro: "Cannot resolve module"
Solução: npm install && npm start
```

## 📝 Componentes Criados (20)

**Hymn** (4):

- Hino.js
- LetraHino.js
- RefHino.js
- Voltar.js

**Keyboard** (4):

- Teclado.js
- Tecla.js
- ApagarBotao.js
- BotaoBusca.js

**UI** (12):

- Loading.js
- Titulo.js
- BottomMenu.js
- AjustesModal.js
- BarraPesquisa.js
- Buscas.js
- HinosPesquisa.js
- LetrasHinosBusca.js
- LinhaBusca.js
- Setas.js
- Switch.js
- ComponenteBuscaHino.js

## 🚀 Próximos Passos

- [ ] Converter SVG → PNG (URGENTE)
- [ ] Testar em Expo Go
- [ ] Corrigir erros de runtime
- [ ] Implementar Seleção (favoritos)
- [ ] Otimizar performance
- [ ] Build para iOS
- [ ] Build para Android
- [ ] Deploy App Store / Play Store

## 📄 Licença

MIT

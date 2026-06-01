# Hinário Mobile - React Native

Versão mobile do app Hinário usando React Native com Expo e Expo Router.

## Estrutura do Projeto

```
mobile/
├── app/                              # Rotas Expo Router
│   ├── _layout.js                   # Layout raiz com FontSizeProvider
│   ├── index.js                     # Tela Home (Teclado + Busca)
│   ├── pesquisa.js                  # Tela de Pesquisa
│   ├── selecao.js                   # Tela de Seleção (placeholder)
│   └── hino/
│       └── [id].js                  # Tela de Hino (dinâmica)
│
├── src/
│   ├── components/
│   │   ├── hymn/                    # Componentes de Hino
│   │   │   ├── Hino.js             # Visualizador de hino completo
│   │   │   ├── LetraHino.js        # Texto do hino
│   │   │   ├── RefHino.js          # Referência (ID)
│   │   │   └── Voltar.js           # Botão voltar
│   │   │
│   │   ├── keyboard/                # Componentes de teclado numérico
│   │   │   ├── Teclado.js          # Teclado completo (ref forward)
│   │   │   ├── Tecla.js            # Tecla individual
│   │   │   ├── ApagarBotao.js      # Botão delete
│   │   │   └── BotaoBusca.js       # Botão buscar
│   │   │
│   │   └── ui/                      # Componentes de UI
│   │       ├── Loading.js           # Spinner de carregamento
│   │       ├── Titulo.js            # Header do app
│   │       ├── BottomMenu.js        # Navegação inferior
│   │       ├── AjustesModal.js      # Modal de configurações
│   │       ├── BarraPesquisa.js     # Input de busca
│   │       ├── Buscas.js            # Tela de busca wrapper
│   │       ├── HinosPesquisa.js     # Lista de resultados
│   │       ├── LetrasHinosBusca.js  # Título + prévia
│   │       ├── LinhaBusca.js        # Divisor
│   │       ├── Setas.js             # Botões próximo/anterior
│   │       ├── Switch.js            # Toggle Hinário/Harpa
│   │       └── ComponenteBuscaHino.js # Wrapper resultados
│   │
│   ├── contexts/
│   │   └── FontSizeContext.js       # Context de tamanho de fonte (AsyncStorage)
│   │
│   ├── hooks/
│   │   ├── useModoState.js          # Estado modo (Hinário/Harpa)
│   │   ├── useBuscaState.js         # Estado de busca
│   │   └── useHinoSelecionado.js    # Estado hino selecionado
│   │
│   └── utils/
│       ├── api/
│       │   └── hinos.js             # Cliente API
│       └── navegacao.js             # Funções de navegação + useSwipe
│
├── app.json                          # Configuração Expo
├── App.js                           # Entry point
├── package.json
└── README.md

```

## Rotas Disponíveis

| Rota         | Componente     | Descrição                                     |
| ------------ | -------------- | --------------------------------------------- |
| `/`          | `index.js`     | Home - Teclado numérico + Switch modo + Busca |
| `/pesquisa`  | `pesquisa.js`  | Pesquisa por texto - Lista de resultados      |
| `/hino/[id]` | `hino/[id].js` | Visualizador de hino com swipe                |
| `/selecao`   | `selecao.js`   | Página de seleção (placeholder)               |

## Componentes Principais

### Home (index.js)

- **Teclado**: Entrada numérica para buscar hinos por ID
- **Switch**: Alternar entre "Hinário" e "Harpa Cristã"
- **BarraPesquisa**: Busca por texto (dispara navegação para `/pesquisa`)
- **HinosPesquisa**: Mostra resultados de pesquisa anterior se existir

### Pesquisa (pesquisa.js)

- **Buscas**: Input com botão voltar
- **ComponenteBuscaHino**: Lista dinâmica de resultados

### Hino ([id].js)

- **LetraHino**: Texto do hino com fonte redimensionável
- **Setas**: Botões para próximo/anterior hino
- **Swipe**: Deslizar esquerda/direita para navegar
- **RefHino**: ID do hino (ex: H123)

## Recursos Implementados

✅ **Navegação**

- Expo Router com stack navigation
- Parâmetros dinâmicos de rota

✅ **Estado Global**

- FontSizeContext com AsyncStorage (persistência)
- useModoState, useBuscaState, useHinoSelecionado hooks

✅ **Interação**

- Teclado numérico customizado
- Swipe detectado com touch events (pageX, pageY)
- Modal de ajustes
- Switch animado

✅ **API**

- TanStack React Query (React Query)
- Client HTTP nativo do React Native
- Cache automático de hinos

✅ **Persistência**

- AsyncStorage para dark mode e font size
- Query cache do React Query

## Imagens Faltando

O app referencia estas imagens que precisam existir em `/imgs`:

- `voltar.png`
- `deletebutton.png`
- `ajustes.png`, `ajusteslaranja.png`
- `casinha.png`, `casinhalaranja.png`
- `selecao.png`, `selecaolaranja.png`
- `Iconsearch.png`
- `text_fields.png`
- `Sun.png`
- `LogoLaranja.png`
- `setahino.png`

## Como Rodar

```bash
cd mobile

# Instalar dependências
npm install

# Rodar com Expo Go
npm start

# Ou em emulador
npm run android
npm run ios
```

## Próximos Passos

1. ✅ Criar todos os componentes mobile
2. ✅ Implementar Expo Router
3. ⏳ Converter SVG para PNG/Imagens
4. ⏳ Implementar tela de Seleção (favoritos)
5. ⏳ Testar em dispositivo físico
6. ⏳ Otimização de performance
7. ⏳ Build para App Store/Play Store

## Diferenças Web vs Mobile

| Aspecto       | Web                  | Mobile                         |
| ------------- | -------------------- | ------------------------------ |
| Router        | React Router         | Expo Router                    |
| Storage       | localStorage         | AsyncStorage                   |
| Eventos Touch | e.touches[0].clientX | e.nativeEvent.touches[0].pageX |
| Styling       | CSS classes          | React Native StyleSheet        |
| Components    | div/span             | View/Text                      |
| Navigation    | useNavigate          | useRouter                      |

## Hooks Compartilhados

Todos os 3 hooks são compartilhados entre web e mobile:

- `useModoState()` - Modo Hinário/Harpa (AsyncStorage em mobile)
- `useBuscaState()` - Texto de busca (localStorage/AsyncStorage)
- `useHinoSelecionado()` - Hino selecionado (estado local)

## Contexto Compartilhado

FontSizeContext funciona em ambas versões:

- **Web**: localStorage
- **Mobile**: AsyncStorage

Fornece `{ fontSize, setFontSize }`

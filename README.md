# 📖 Hinário - Aplicativo de Hinos

Projeto fullstack (web + mobile) para pesquisa e exibição de hinos.

## 📂 Estrutura do Projeto

```
hinario/
├── src/                 # Projeto Web (React + Vite)
│   ├── components/      # Componentes React
│   ├── contexts/        # Context API
│   ├── hooks/           # Custom Hooks
│   ├── utils/           # Funções utilitárias e API
│   └── main.jsx
├── mobile/              # Projeto Mobile (React Native + Expo)
│   ├── src/             # Código source
│   ├── App.js           # App principal
│   ├── app.json         # Configuração Expo
│   └── package.json
├── package.json         # Dependencies web
└── REFACTORING.md       # Documentação de refatoração
```

## 🚀 Iniciando

### Projeto Web

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

Acesse em `http://localhost:5173`

### Projeto Mobile

```bash
# Navegar para pasta mobile
cd mobile

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm start

# Escanear QR code com Expo Go no celular
```

Para mais detalhes, veja [mobile/README_MOBILE.md](mobile/README_MOBILE.md)

## 🛠️ Tecnologias

### Web
- **React 19** - UI framework
- **React Router** - Roteamento
- **Vite** - Build tool
- **TanStack React Query** - Gerenciamento de dados
- **CSS** - Styling

### Mobile
- **React Native** - Cross-platform framework
- **Expo** - Desenvolvimento e build
- **TanStack React Query** - Gerenciamento de dados
- **AsyncStorage** - Persistência local

### Ambos
- **React Query** - Sincronização de dados

## 📚 Recursos Principais

### Gerenciamento de Estado
- Custom hooks para estado local
- Context API para estado global
- AsyncStorage (mobile) / localStorage (web) para persistência

### Componentes Compartilhados
- `useModoState()` - Modo Hinário/Harpa Cristã
- `useBuscaState()` - Estado de busca
- `useHinoSelecionado()` - Hino selecionado
- `FontSizeContext` - Tamanho de fonte

### API
- Base: `https://hinario-api.onrender.com/api`
- Endpoints:
  - `GET /Hino/identificador/{id}` - Busca hino específico
  - `GET /Hino/pesquisar?texto={texto}` - Pesquisa de hinos

## 🎯 Features

- ✅ Pesquisa de hinos
- ✅ Exibição de letra completa
- ✅ Controle de tamanho de fonte
- ✅ Modo escuro/claro
- ✅ Navegação entre hinos
- ✅ Persistência de dados
- ✅ Interface responsiva

## 📝 Documentação

- [REFACTORING.md](REFACTORING.md) - Detalhes da refatoração da arquitetura web
- [mobile/README_MOBILE.md](mobile/README_MOBILE.md) - Guia completo do projeto mobile

## 🤝 Contribuindo

1. Crie uma branch para sua feature
2. Faça commits descritivos
3. Abra um Pull Request

## 📄 Licença

MIT

---

**Última atualização**: 30 de março de 2026

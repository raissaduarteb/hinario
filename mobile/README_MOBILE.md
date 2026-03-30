# Hinário Mobile - Aplicativo React Native

Aplicativo mobile do Hinário construído com React Native e Expo.

## 📋 Requisitos

- Node.js >= 16.x
- npm ou yarn
- Expo CLI: `npm install -g expo-cli`
- Aplicativo Expo Go instalado no seu celular (iOS ou Android)

## 🚀 Começando

### 1. Instalar dependências

```bash
cd mobile
npm install
```

### 2. Iniciar o aplicativo

#### Opção A: Executar no Expo Go (Recomendado para desenvolvimento)

```bash
npm start
```

Isso abrirá um QR code no terminal. Escaneie com o Expo Go no seu celular.

#### Opção B: Executar no simulador/emulador

```bash
# iOS (Mac apenas)
npm run ios

# Android
npm run android
```

#### Opção C: Web

```bash
npm run web
```

## 📁 Estrutura do Projeto

```
mobile/
├── src/
│   ├── components/
│   │   ├── ui/          # Componentes de UI compartilhados
│   │   ├── hymn/        # Componentes de hinos
│   │   └── keyboard/    # Componentes de teclado
│   ├── contexts/        # Context API (FontSizeContext, etc)
│   ├── hooks/           # Custom hooks (useModoState, useBuscaState, etc)
│   └── utils/
│       └── api/         # Chamadas de API
├── App.js               # Arquivo principal
├── app.json             # Configuração Expo
└── package.json
```

## 🔧 Dependências Principais

- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **TanStack React Query** - Gerenciamento de dados assíncronos
- **AsyncStorage** - Persistência de dados local

## 🎨 Componentes Disponíveis

### Contextos

- `FontSizeContext` - Gerencia tamanho da fonte em toda a app

### Hooks Customizados

- `useModoState()` - Gerencia modo (Hinário/Harpa Cristã)
- `useBuscaState()` - Gerencia estado da busca com persistência
- `useHinoSelecionado()` - Gerencia hino selecionado

### API

- `fetchHinoPorIdentificador(id)` - Busca um hino específico
- `fetchHinosPorPesquisa(texto)` - Pesquisa hinos por texto

## 🛠️ Desenvolvimento

### Adicionar um novo componente

1. Crie o arquivo na pasta apropriada (`ui/`, `hymn/`, ou `keyboard/`)
2. Exporte o componente normalmente
3. Importe onde necessário

### Exemplo de Componente

```javascript
import { View, Text, StyleSheet } from "react-native";

export default function MeuComponente() {
  return (
    <View style={styles.container}>
      <Text>Olá!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
```

## 🔗 API

Base URL: `https://hinario-api.onrender.com/api`

### Endpoints

- `GET /Hino/identificador/{id}` - Busca um hino
- `GET /Hino/pesquisar?texto={texto}` - Pesquisa hinos

## 🧪 Testes

```bash
npm test
```

## 📦 Build para Produção

### iOS (Mac apenas)

```bash
eas build --platform ios
```

### Android

```bash
eas build --platform android
```

### Apk para Android

```bash
eas build --platform android --local
```

## 🐛 Debug

### Abrir menu de desenvolvimento

Shake seu celular ou pressione `Ctrl+M` (Android) / `Cmd+D` (iOS)

### Console

```bash
npm start -- --clear
```

## 📝 Notas

- O projeto compartilha a mesma estrutura e lógica do projeto web
- Use `AsyncStorage` em vez de `localStorage` para persistência
- Componentes usam React Native em vez de React DOM
- Imports devem usar caminhos relativos ou path aliases

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
2. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
3. Push para a branch (`git push origin feature/MinhaFeature`)
4. Abra um Pull Request

## 📄 Licença

MIT

---

**Status**: Em desenvolvimento 🚀

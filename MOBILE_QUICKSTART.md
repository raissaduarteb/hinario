# 📱 Guia Rápido - Projeto Mobile

## Estrutura Criada

O projeto mobile foi criado em `/mobile` com a seguinte estrutura:

```
mobile/
├── src/
│   ├── components/
│   │   ├── ui/          # Componentes de interface (botões, cards, etc)
│   │   ├── hymn/        # Componentes de hinos
│   │   └── keyboard/    # Componentes de entrada
│   ├── contexts/
│   │   └── FontSizeContext.js   # Gerenciamento de tamanho de fonte
│   ├── hooks/
│   │   ├── useModoState.js              # Hook de modo
│   │   ├── useBuscaState.js             # Hook de busca com AsyncStorage
│   │   └── useHinoSelecionado.js        # Hook de hino selecionado
│   └── utils/
│       └── api/
│           └── hinos.js          # Chamadas de API
├── App.js               # Arquivo principal
├── app.json             # Configuração Expo
├── package.json         # Dependências
└── README_MOBILE.md     # Documentação completa
```

## 🚀 Como Começar

### 1. Instalar Dependências

```bash
cd mobile
npm install
```

### 2. Iniciar o Servidor de Desenvolvimento

```bash
npm start
```

Isso abrirá um menu no terminal com opções:

```
Press w │ open web
Press a │ open Android
Press i │ open iOS
Press e │ clear console
Press r │ reload app
Press m │ toggle menu
Press q │ quit
```

### 3. Executar no Expo Go

1. **Instale o Expo Go** no seu celular:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Escaneie o QR Code** gerado no terminal com o celular

3. O app abrirá automaticamente!

## 🛠️ Dependências Principais

- **expo**: Framework Expo
- **react-native**: Framework mobile
- **@tanstack/react-query**: Gerenciamento de estado assíncrono
- **@react-native-async-storage/async-storage**: Persistência de dados

## 📝 Próximos Passos

### Implementar Componentes Base

1. **LetraHino.js** - Exibição da letra do hino
2. **HinosPesquisa.js** - Lista de resultados de pesquisa
3. **Teclado.js** - Input de pesquisa
4. **BottomMenu.js** - Navegação inferior

### Exemplo de Componente

```javascript
import { View, Text, StyleSheet } from "react-native";
import { useFontSize } from "../contexts/FontSizeContext";

export default function Hino() {
  const { fontSize } = useFontSize();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize }}>Letras do Hino</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
```

## 🔗 API Disponível

As seguintes funções estão disponíveis em `src/utils/api/hinos.js`:

```javascript
// Buscar hino específico
await fetchHinoPorIdentificador(identificador)

// Pesquisar hinos
await fetchHinosPorPesquisa(texto)
```

## 💾 AsyncStorage

Para persistência de dados, use:

```javascript
import AsyncStorage from "@react-native-async-storage/async-storage";

// Salvar
await AsyncStorage.setItem("chave", "valor");

// Carregar
const valor = await AsyncStorage.getItem("chave");

// Remover
await AsyncStorage.removeItem("chave");
```

Nota: `useBuscaState()` já implementa isso automaticamente!

## 🐛 Debug

### Menu de Debug

Shake no celular ou pressione:
- `Ctrl+M` (Android)
- `Cmd+D` (iOS)

Opções:
- **Reload** - Recarrega o app
- **Debug remote JS** - Abre DevTools
- **Show performance monitor** - Monitor de performance

### Logs

```javascript
console.log("Mensagem");  // Aparecerá no terminal
console.warn("Aviso");
console.error("Erro");
```

## 🚢 Build para Produção

### Android APK

```bash
eas build --platform android --local
```

### iOS (Mac apenas)

```bash
eas build --platform ios
```

## 📚 Recursos

- [Documentação Expo](https://docs.expo.dev/)
- [Documentação React Native](https://reactnative.dev/)
- [API Reference](https://docs.expo.dev/versions/latest/)
- [Expo Go](https://expo.dev/)

## ❓ Dúvidas Frequentes

**P: Como importo um componente?**
R: Use caminhos relativos:
```javascript
import Hino from "../components/hymn/Hino";
```

**P: Como acesso dados persisted?**
R: Use os custom hooks:
```javascript
const { busca, setBusca } = useBuscaState();
```

**P: Como faço requisições à API?**
R: Use as funções em `src/utils/api/hinos.js`:
```javascript
import { fetchHinoPorIdentificador } from "../utils/api/hinos";
const hino = await fetchHinoPorIdentificador("H123");
```

**P: O app é lento?**
R: Verifique o "Show performance monitor" no menu de debug

---

**Dúvidas?** Veja [README_MOBILE.md](README_MOBILE.md) para documentação completa!

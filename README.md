# desafio-asyncstorage-BrunoCSoares

Repositório com o projeto React Native do desafio de AsyncStorage.

Conteúdo
- `AppAsyncStorage/`: código-fonte do app (React Native + TypeScript)

Pré-requisitos
- Node.js (LTS)
- npm ou Yarn
- Para Android: Android SDK e emulador configurado
- Para iOS: Xcode (somente macOS)

Instalação
```powershell
cd AppAsyncStorage
npm install
# ou
yarn
```

Executando (Android)
```powershell
npx react-native run-android
```

Executando (iOS  macOS)
```bash
npx pod-install ios
npx react-native run-ios
```

Observações
- O app usa `@react-native-async-storage/async-storage`.
- Para desenvolvimento assegure-se de ter variáveis de ambiente do Android configuradas (ANDROID_HOME, PATH).
- Testado com versões padrão do React Native  se quiser, adiciono a versão específica do `package.json`.

Estrutura
- `AppAsyncStorage/`  app (TypeScript)
  - `App.tsx`  ponto de entrada
  - `screens/`  telas do app

Licença
- Sem licença definida  consulte o proprietário do código. Posso adicionar uma LICENSE (MIT) se desejar.

Contato
- Bruno (GitHub: @BrunoCSoares)

# Sistema de Controle de Volume de Armazenamento

Este projeto é um sistema de controle de volume de armazenamento de resíduos desenvolvido como **parte de um desafio da B2Blue**.


    O objetivo é monitorar o volume de três estações de armazenamento e gerar pedidos de coleta automaticamente quando estiverem 80% ocupadas.

## Visão Geral do Projeto

- **Tecnologias Utilizadas:** React.js, TypeScript, Material UI, Axios e Sweetalert2
- **Funcionalidades:** 
  - Monitoramento do volume de armazenamento das estações
  - Geração automática de pedidos de coleta
  - Confirmação de coleta e redefinição de volume
  - Feedback visual para ações do usuário

## Estrutura do Projeto

- `src/`
  - `components/`: Contém componentes React como `ControlPanel` e `StationPanel`.
  - `services/`: Contém lógica de interação com dados simulada por `storageService.ts`.
  - `types/`: Define tipos TypeScript para garantir robustez do código.
  - `App.tsx`: Componente raiz que integra todos os outros componentes.
  - `index.tsx`: Ponto de entrada do aplicativo.

## Requisitos

- **Node.js**: Certifique-se de que você tem a versão LTS do Node.js instalada (recomendado v16.x).
- **Yarn**: Utilizado para gerenciamento de pacotes.

## Configuração do Ambiente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/albsondev/b2blue-storage-volume-control-system.git
   cd b2blue-storage-volume-control-system
   ```

2. **Instale as dependências:**

   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   yarn start
   ```

   O aplicativo será aberto em [http://localhost:3000](http://localhost:3000).

## Scripts Disponíveis

- `yarn start` ou `npm start`: Inicia o servidor de desenvolvimento.
- `yarn build` ou `npm build`: Cria a versão de produção do aplicativo.
- `yarn test` ou `npm test`: Executa testes.
- `yarn eject` ou `npm eject`: Eject do projeto para configuração personalizada.

## Como Funciona

1. **Dashboard:** Exibe as estações de armazenamento e permite ajustar o volume de cada uma.
2. **Station:** Componente que representa uma estação única, com controle de slider para volume.
3. **Coleta Automática:** Um pedido de coleta é gerado automaticamente quando o volume atinge 80%.
4. **Confirmação e Redefinição:** Após confirmação da coleta, o volume é redefinido para 0%.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipos e segurança.
- **Material UI**: Biblioteca de componentes React para design moderno e responsivo.
- **SweetAlerts 2**: Biblioteca para alertas e notificações visuais.

## Feedback Visual

Usamos `sweetalerts2` para fornecer feedback visual ao usuário sobre o status das operações (sucesso ou erro).

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para dúvidas ou sugestões, entre em contato via [email@exemplo.com](mailto:albsondev@outlook.com).
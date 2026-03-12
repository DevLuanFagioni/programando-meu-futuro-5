# NPM - Node Package Manager

## O que é?
NPM (Node Package Manager) é o gerenciador de pacotes do Node.js. Permite instalar, gerenciar e compartilhar bibliotecas/dependências de código JavaScript reutilizáveis.

---

## Comandos Principais

### Inicialização do Projeto
- `npm init` - Cria um novo projeto Node/NPM de forma interativa (faz perguntas)
- `npm init -y` - Inicializa rapidamente com configurações padrão (sem perguntas)

### Instalação de Pacotes
- `npm install` - Instala TODOS os pacotes listados no `package.json`
- `npm install <nome-do-pacote>` - Instala um pacote específico (Ex: `npm install axios`)
- `npm install -g <nome-do-pacote>` - Instala globalmente (para usar em qualquer projeto)

### Gerenciamento de Pacotes
- `npm update` - Atualiza todos os pacotes para versões mais recentes compatíveis
- `npm uninstall <nome-do-pacote>` - Remove um pacote do projeto
- `npm list` - Lista todos os pacotes instalados
- `npm search <termo>` - Procura pacotes no repositório NPM

---

## Estrutura de Arquivos

### `package.json`
- Arquivo de configuração do projeto
- Armazena informações: nome, versão, descrição
- Lista de **dependências** (bibliotecas necessárias para o projeto funcionar)
- Lista de **devDependencies** (bibliotecas usadas apenas no desenvolvimento)

### `node_modules/`
- Pasta criada automaticamente quando você executa `npm install`
- Contém TODOS os arquivos das bibliotecas instaladas
- ⚠️ **Nunca commitar no Git!** (muito pesada, deve estar no `.gitignore`)

### `package-lock.json`
- Garante que todos tenham exatamente as mesmas versões dos pacotes
- Importante para manter consistência entre desenvolvedores

---

## ⚙️ Configuração Necessária para ES Modules

Para usar a sintaxe `import` (em vez de `require`), você **PRECISA** adicionar no `package.json`:

```json
{
  "type": "module",
  "name": "seu-projeto",
  "version": "1.0.0"
}
```

**Sem isso, o Node.js não reconhecerá a sintaxe `import`!**

---

## Como Usar uma Biblioteca Instalada

### Passo 1: Instalar
```bash
npm install axios
```

### Passo 2: Importar no seu código
```javascript
import axios from "axios"
```

### Passo 3: Usar a biblioteca
```javascript
const res = await axios.get('https://exemplo.com/api')
console.log(res.data)
```

---

## Exemplo Prático (Axios)

```javascript
// Importar
import axios from "axios"

// Fazer requisição GET
const res = await axios.get('https://api.exemplo.com/dados')

// Acessar os dados
console.log(res.data)
console.log(res.status)

// POST com dados
const novosDados = await axios.post('https://api.exemplo.com/dados', {
  nome: "João",
  idade: 25
})
```

---

## Versões de Pacotes

Ao instalar, você verá versões como: `^1.2.3` ou `~1.2.3`

- **`^1.2.3`** (Caret) - Permite atualizações menores e patches (1.x.x)
- **`~1.2.3`** (Tilde) - Permite apenas patches (1.2.x)
- **`1.2.3`** (Exato) - Usa exatamente essa versão

---

## Dicas Importantes

✅ **Sempre commitar:** `package.json` e `package-lock.json`  
❌ **Nunca commitar:** `node_modules/` (coloque no `.gitignore`)  
✅ **Verificar antes:** A documentação oficial do pacote no npm.org  
✅ **Instalar dependências:** Sempre rodar `npm install` quando clonar um projeto
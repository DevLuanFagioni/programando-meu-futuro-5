# IA (Inteligência Artificial)

## 1. Conceitos Fundamentais
Entender a base é crucial para usar IA de forma eficiente.

- **Prompt**: É a instrução ou pergunta que você envia para a IA. A qualidade da resposta depende diretamente da clareza do prompt.
- **Tokens**: São as unidades básicas de texto que a IA processa (podem ser palavras inteiras ou partes de palavras). ~1000 tokens ≈ 750 palavras.
- **Engenharia de Prompt**: A técnica de criar prompts otimizados e estruturados para obter as melhores respostas possíveis dos modelos.
- **Janela de Contexto (Context Window)**: A quantidade máxima de tokens que o modelo consegue "lembrar" e processar em uma única conversa.
- **Alucinação**: Quando a IA gera informações incorretas ou inventadas com confiança. Sempre verifique fatos importantes.

## 2. Modelos de Linguagem (LLMs)
Os "cérebros" por trás das ferramentas.

### Anthropic (Família Claude)
Focam em segurança, raciocínio complexo e janelas de contexto grandes.
- **Claude 3 Haiku**: O mais rápido e barato, ideal para tarefas simples e respostas imediatas.
- **Claude 3.5 Sonnet**: O equilíbrio perfeito entre inteligência e velocidade. Ótimo para codificação e raciocínio lógico.
- **Claude 3 Opus**: O modelo mais poderoso (e lento), para tarefas que exigem o máximo de raciocínio e criatividade.

### Google (Família Gemini)
Integrados ao ecossistema Google e multimodais (entendem texto, imagem, vídeo e áudio nativamente).
- **Gemini 1.5 Flash**: Modelo leve, projetado para velocidade e eficiência em larga escala.
- **Gemini 1.5 Pro**: Modelo de ponta para raciocínio complexo, com uma janela de contexto massiva (até 2 milhões de tokens).
- **Gemini 2.0 (Preview)**: Próxima geração, prometendo ainda mais velocidade e capacidades multimodais.

### OpenAI (Família GPT)
Pioneiros e muito populares.
- **GPT-4o**: Modelo onisciente (omni), rápido e com capacidades de áudio/voz em tempo real avançadas.
- **GPT-4o mini**: Versão menor e mais eficiente para tarefas rápidas.
- **o1 / o3**: Modelos novos com foco em "raciocínio" profundo (chain of thought), excelentes para matemática e problemas lógicos complexos.

### Outros Modelos Relevantes
- **DeepSeek**: Modelos open-source (código aberto) chineses muito fortes, especialmente em programação (versão V3 e R1).
- **Grok (xAI)**: Modelo da empresa de Elon Musk, com acesso em tempo real a dados do X (Twitter) e uma personalidade mais "rebelde".
- **Llama (Meta)**: A principal família de modelos open-source mantida pela Meta (Facebook).

## 3. Ferramentas de Desenvolvimento (AI IDEs)
Editores de código que integram IA profundamente no fluxo de trabalho.

- **Cursor**: Um fork do VS Code com IA nativa. Permite autocompletar código de forma inteligente, editar múltiplos arquivos e conversar com o código ("Chat with Codebase").
- **Windsurf**: IDE focada em "fluxo", onde a IA age proativamente prevendo seus próximos passos.
- **Copilot**: O pioneiro da GitHub/Microsoft, integrado ao VS Code. Útil para autocompletar linhas e funções.
- **Trae**: Outra opção emergente de IDE com IA.
- **Claude Code**: Ferramenta de linha de comando da Anthropic para auxiliar no desenvolvimento.

## 4. Ecossistema e Tendências
Novas formas de interagir e construir com IA.

### Agentes e Autonomia
IAs que não apenas respondem perguntas, mas **executam ações** (navegam na web, usam terminais, criam arquivos).
- **MCP (Model Context Protocol)**: Um padrão aberto (criado pela Anthropic) que permite conectar IAs a seus dados locais e ferramentas (ex: conectar o Claude ao seu Google Drive, Slack ou banco de dados local). É como um "USB para IAs".

### Ferramentas Úteis
- **NotebookLM (Google)**: Transforma seus documentos (PDFs, textos) em um podcast de áudio ou em um especialista que responde perguntas sobre o material.
- **Antigravity / Gemini CLI**: Ferramentas para usar o poder do Gemini diretamente no seu terminal.



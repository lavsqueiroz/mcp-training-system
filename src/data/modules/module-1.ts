import { Module } from '@/types/course.types'

export const module1: Module = {
  id: 'module-1',
  title: 'Fundamentos do MCP',
  description: 'Aprenda os conceitos fundamentais do Model Context Protocol e crie seu primeiro servidor',
  icon: '📚',
  difficulty: 'beginner',
  estimatedTime: 4,
  prerequisites: [],
  learningObjectives: [
    'Entender o que é o Model Context Protocol',
    'Compreender a arquitetura cliente-servidor do MCP',
    'Conhecer os principais componentes: Tools, Resources e Prompts',
    'Criar seu primeiro servidor MCP funcional',
    'Testar e debugar servidores MCP',
  ],
  lessons: [
    {
      id: 'lesson-1-1',
      title: 'O que é o Model Context Protocol?',
      description: 'Introdução ao MCP e seus casos de uso',
      duration: 15,
      type: 'theory',
      content: `
# O que é o Model Context Protocol (MCP)?

O **Model Context Protocol** é um protocolo aberto que padroniza como aplicações fornecem contexto para Large Language Models (LLMs). 

## Por que o MCP foi criado?

Antes do MCP, cada aplicação precisava criar suas próprias integrações personalizadas com LLMs. Isso criava:

- 🔄 **Duplicação de esforço**: Cada ferramenta precisava reimplementar as mesmas funcionalidades
- 🔌 **Falta de portabilidade**: Integrações específicas para cada LLM
- 🐛 **Dificuldade de manutenção**: Múltiplas implementações para manter

## Como o MCP resolve isso?

O MCP fornece um protocolo universal que:

- ✅ Permite que **qualquer ferramenta** exponha recursos para **qualquer LLM**
- ✅ Define interfaces padronizadas para Tools, Resources e Prompts
- ✅ Funciona com múltiplos transport layers (stdio, HTTP, WebSocket)
- ✅ É open-source e vendor-neutral

## Casos de Uso Principais

### 1. **Data Access** 
Forneça ao LLM acesso a bancos de dados, APIs e arquivos
\`\`\`
LLM: "Qual foi nossa receita em Q4?"
MCP Server → Consulta banco de dados
MCP Server ← Retorna dados
LLM: "A receita foi $X milhões"
\`\`\`

### 2. **Tool Execution**
Permita que o LLM execute ações no mundo real
\`\`\`
LLM: "Crie um ticket no Jira"
MCP Server → Chama API do Jira
MCP Server ← Confirma criação
LLM: "Ticket PROJ-123 criado"
\`\`\`

### 3. **Specialized Knowledge**
Injete conhecimento específico de domínio
\`\`\`
LLM: "Como implementar autenticação OAuth?"
MCP Server → Busca documentação interna
MCP Server ← Retorna guias
LLM: "Aqui está nosso guia..."
\`\`\`

## Arquitetura Básica

\`\`\`
┌─────────────┐         ┌─────────────┐
│   Cliente   │ ←────→  │ MCP Server  │
│   (LLM)     │   MCP   │             │
└─────────────┘         └─────────────┘
                              │
                              ↓
                        ┌──────────────┐
                        │   Recursos   │
                        │  • Database  │
                        │  • APIs      │
                        │  • Files     │
                        └──────────────┘
\`\`\`

## Próximos Passos

Na próxima lição, vamos explorar a arquitetura detalhada do MCP e seus principais componentes!
      `,
      resources: [
        {
          type: 'documentation',
          title: 'MCP Specification',
          url: 'https://spec.modelcontextprotocol.io',
          description: 'Documentação oficial do protocolo'
        },
        {
          type: 'link',
          title: 'MCP GitHub',
          url: 'https://github.com/modelcontextprotocol',
          description: 'Repositório oficial do MCP'
        }
      ]
    },
    {
      id: 'lesson-1-2',
      title: 'Arquitetura do MCP',
      description: 'Compreenda os componentes principais: Cliente, Servidor, Tools, Resources e Prompts',
      duration: 20,
      type: 'theory',
      content: `
# Arquitetura do Model Context Protocol

## Componentes Principais

### 1. **Cliente MCP**
O cliente é tipicamente um aplicativo que usa LLM (como Claude Desktop, IDEs, etc).

**Responsabilidades:**
- Iniciar conexão com servidores MCP
- Descobrir capabilities disponíveis
- Fazer requests (listar tools, chamar functions, etc)
- Gerenciar múltiplos servidores simultaneamente

### 2. **Servidor MCP**
O servidor expõe recursos e funcionalidades para o cliente.

**Responsabilidades:**
- Registrar e expor Tools, Resources e Prompts
- Processar requests do cliente
- Executar operações (queries, API calls, file access)
- Retornar resultados formatados

## Os Três Primitivos do MCP

### 🛠️ **Tools** (Ferramentas)
Functions que o LLM pode chamar para executar ações.

**Exemplo:** Criar um arquivo
\`\`\`typescript
{
  name: "create_file",
  description: "Cria um novo arquivo",
  inputSchema: {
    type: "object",
    properties: {
      path: { type: "string" },
      content: { type: "string" }
    }
  }
}
\`\`\`

### 📄 **Resources** (Recursos)
Dados que o LLM pode ler (mas não modificar diretamente).

**Exemplo:** Ler um arquivo
\`\`\`typescript
{
  uri: "file:///path/to/file.txt",
  name: "Arquivo de configuração",
  description: "Configurações do sistema",
  mimeType: "text/plain"
}
\`\`\`

### 💬 **Prompts** (Templates)
Templates de prompts reutilizáveis com parâmetros.

**Exemplo:** Template de revisão de código
\`\`\`typescript
{
  name: "code_review",
  description: "Revisa código seguindo padrões",
  arguments: [
    {
      name: "code",
      description: "Código a ser revisado",
      required: true
    }
  ]
}
\`\`\`

## Fluxo de Comunicação

\`\`\`
┌─────────┐                          ┌─────────┐
│ Cliente │                          │ Servidor│
└────┬────┘                          └────┬────┘
     │                                     │
     │  1. initialize()                    │
     ├────────────────────────────────────>│
     │                                     │
     │  2. ServerInfo + Capabilities       │
     │<────────────────────────────────────┤
     │                                     │
     │  3. tools/list                      │
     ├────────────────────────────────────>│
     │                                     │
     │  4. Lista de tools disponíveis      │
     │<────────────────────────────────────┤
     │                                     │
     │  5. tools/call (create_file)        │
     ├────────────────────────────────────>│
     │                                     │
     │  6. Resultado da operação           │
     │<────────────────────────────────────┤
\`\`\`

## Transports Suportados

### 1. **stdio** (Standard Input/Output)
- Melhor para processos locais
- Servidor executa como subprocess
- Comunicação via stdin/stdout

### 2. **HTTP + SSE** (Server-Sent Events)
- Melhor para servidores remotos
- Suporta notificações assíncronas
- Mais complexo de implementar

### 3. **WebSocket** (Futuro)
- Comunicação bidirecional
- Ideal para real-time

## Mensagens MCP

Todas mensagens seguem o formato JSON-RPC 2.0:

**Request:**
\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "create_file",
    "arguments": {
      "path": "/tmp/test.txt",
      "content": "Hello MCP!"
    }
  }
}
\`\`\`

**Response:**
\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Arquivo criado com sucesso"
      }
    ]
  }
}
\`\`\`

## Capabilities (Capacidades)

Clientes e servidores negociam capabilities durante a inicialização:

**Cliente pode suportar:**
- `sampling`: Permitir que servidor faça requests ao LLM
- `roots`: Fornecer workspaces/diretórios

**Servidor pode suportar:**
- `tools`: Expor ferramentas executáveis
- `resources`: Fornecer dados legíveis
- `prompts`: Oferecer templates

## Próxima Lição

Agora que você entende a arquitetura, vamos criar nosso primeiro servidor MCP! 🚀
      `
    },
    {
      id: 'lesson-1-3',
      title: 'Seu Primeiro Servidor MCP',
      description: 'Crie um servidor MCP simples do zero',
      duration: 30,
      type: 'practice',
      content: `
# Criando Seu Primeiro Servidor MCP

Vamos criar um servidor MCP simples que expõe uma ferramenta para fazer cálculos matemáticos!

## Setup Inicial

\`\`\`bash
# Crie um novo diretório
mkdir meu-primeiro-mcp
cd meu-primeiro-mcp

# Inicialize o projeto Node.js
npm init -y

# Instale as dependências
npm install @modelcontextprotocol/sdk
npm install -D typescript @types/node

# Inicialize TypeScript
npx tsc --init
\`\`\`

## Estrutura do Projeto

\`\`\`
meu-primeiro-mcp/
├── src/
│   └── index.ts
├── package.json
└── tsconfig.json
\`\`\`

## Código do Servidor

\`\`\`typescript
// src/index.ts
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

// Criar instância do servidor
const server = new Server(
  {
    name: 'calculadora-mcp',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {}, // Indica que o servidor expõe tools
    },
  }
);

// Registrar handler para listar tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'calcular',
        description: 'Realiza operações matemáticas básicas',
        inputSchema: {
          type: 'object',
          properties: {
            operacao: {
              type: 'string',
              enum: ['soma', 'subtracao', 'multiplicacao', 'divisao'],
              description: 'Operação a ser realizada',
            },
            a: {
              type: 'number',
              description: 'Primeiro número',
            },
            b: {
              type: 'number',
              description: 'Segundo número',
            },
          },
          required: ['operacao', 'a', 'b'],
        },
      },
    ],
  };
});

// Registrar handler para executar tools
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === 'calcular') {
    const { operacao, a, b } = request.params.arguments as {
      operacao: string;
      a: number;
      b: number;
    };

    let resultado: number;

    switch (operacao) {
      case 'soma':
        resultado = a + b;
        break;
      case 'subtracao':
        resultado = a - b;
        break;
      case 'multiplicacao':
        resultado = a * b;
        break;
      case 'divisao':
        if (b === 0) {
          throw new Error('Divisão por zero não permitida');
        }
        resultado = a / b;
        break;
      default:
        throw new Error(\`Operação desconhecida: \${operacao}\`);
    }

    return {
      content: [
        {
          type: 'text',
          text: \`Resultado: \${a} \${operacao} \${b} = \${resultado}\`,
        },
      ],
    };
  }

  throw new Error(\`Tool desconhecida: \${request.params.name}\`);
});

// Iniciar servidor
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Calculadora MCP Server rodando em stdio');
}

main().catch((error) => {
  console.error('Erro fatal:', error);
  process.exit(1);
});
\`\`\`

## Configurar package.json

\`\`\`json
{
  "name": "calculadora-mcp",
  "version": "1.0.0",
  "type": "module",
  "bin": {
    "calculadora-mcp": "./build/index.js"
  },
  "scripts": {
    "build": "tsc",
    "start": "node build/index.js"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "latest"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  }
}
\`\`\`

## Compilar e Executar

\`\`\`bash
# Compilar TypeScript
npm run build

# Executar o servidor
npm start
\`\`\`

## Testando com Claude Desktop

1. Adicione ao arquivo de configuração do Claude Desktop (\`claude_desktop_config.json\`):

\`\`\`json
{
  "mcpServers": {
    "calculadora": {
      "command": "node",
      "args": ["/caminho/para/meu-primeiro-mcp/build/index.js"]
    }
  }
}
\`\`\`

2. Reinicie o Claude Desktop

3. Teste com prompts como:
   - "Quanto é 15 + 27?"
   - "Multiplique 8 por 9"
   - "Divida 100 por 4"

## 🎉 Parabéns!

Você criou seu primeiro servidor MCP! Ele pode:
- ✅ Expor ferramentas para o LLM
- ✅ Processar requests
- ✅ Executar operações
- ✅ Retornar resultados formatados

## Exercício Prático

Expanda a calculadora para incluir:
1. Operação de potenciação (ex: 2^3 = 8)
2. Operação de raiz quadrada
3. Validação de inputs (números válidos)

Na próxima lição, vamos adicionar Resources e Prompts! 🚀
      `,
      exercises: [
        {
          id: 'exercise-1-3-1',
          type: 'code',
          question: 'Adicione uma nova operação "potencia" que calcula a^b',
          codeTemplate: `// Adicione a operação 'potencia' ao switch
switch (operacao) {
  case 'soma':
    resultado = a + b;
    break;
  // Adicione seu código aqui
  
  default:
    throw new Error(\`Operação desconhecida: \${operacao}\`);
}`,
          testCases: [
            {
              input: '{"operacao": "potencia", "a": 2, "b": 3}',
              expectedOutput: '8',
              description: '2^3 deve retornar 8'
            },
            {
              input: '{"operacao": "potencia", "a": 5, "b": 2}',
              expectedOutput: '25',
              description: '5^2 deve retornar 25'
            }
          ],
          hint: 'Use Math.pow(a, b) para calcular potência'
        }
      ]
    }
  ]
}

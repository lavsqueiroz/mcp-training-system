# Guia de Desenvolvimento - MCP Training System

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas

```
mcp-training-system/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Rotas de autenticação
│   │   ├── (dashboard)/       # Dashboard do usuário
│   │   ├── modules/           # Páginas dos módulos
│   │   ├── playground/        # Editor e sandbox
│   │   └── api/               # API Routes
│   ├── components/
│   │   ├── editor/            # Monaco Editor config
│   │   ├── lessons/           # Componentes de lições
│   │   ├── sandbox/           # Ambiente de testes MCP
│   │   └── ui/                # Componentes reutilizáveis
│   ├── lib/
│   │   ├── mcp/              # Utilitários MCP
│   │   ├── db/               # Prisma client
│   │   └── auth/             # NextAuth config
│   ├── hooks/                 # React hooks
│   ├── types/                 # TypeScript types
│   └── store/                 # Zustand stores
```

## 🚀 Próximos Passos

### Fase 1: Infraestrutura (Semana 1-2)
- [ ] Setup do banco de dados (Prisma + PostgreSQL)
- [ ] Sistema de autenticação (NextAuth.js)
- [ ] Componentes UI avançados
- [ ] Sistema de rotas protegidas

### Fase 2: Editor e Sandbox (Semana 3-4)
- [ ] Integração do Monaco Editor
- [ ] Syntax highlighting para MCP
- [ ] Sistema de execução de código
- [ ] Sandbox isolado para testes
- [ ] Visualização de resultados

### Fase 3: Módulos de Conteúdo (Semana 5-8)
- [ ] Estrutura de módulos e lições
- [ ] Sistema de progresso do usuário
- [ ] Exercícios interativos
- [ ] Testes de conhecimento
- [ ] Projetos práticos

### Fase 4: Gamificação (Semana 9-10)
- [ ] Sistema de pontos e XP
- [ ] Badges e conquistas
- [ ] Ranking de usuários
- [ ] Certificados

### Fase 5: Comunidade (Semana 11-12)
- [ ] Fórum de discussões
- [ ] Sistema de compartilhamento de projetos
- [ ] Integração com Discord
- [ ] Área de showcase

## 💻 Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start

# Lint
npm run lint
```

## 🔧 Tecnologias Principais

### Frontend
- **Next.js 14**: Framework React com App Router
- **React 18**: Biblioteca UI
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização
- **Radix UI**: Componentes acessíveis
- **Monaco Editor**: Editor de código
- **Zustand**: Gerenciamento de estado

### Backend
- **Next.js API Routes**: Backend serverless
- **Prisma**: ORM
- **PostgreSQL**: Banco de dados
- **NextAuth.js**: Autenticação

## 📝 Convenções de Código

### Commits
Usar conventional commits:
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Tarefas gerais

### Componentes React
```tsx
// PascalCase para componentes
export function ModuleCard({ title, description }: ModuleCardProps) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  )
}
```

### Arquivos
- Componentes: `PascalCase.tsx`
- Utilitários: `camelCase.ts`
- Hooks: `use*.ts`
- Types: `*.types.ts`

## 🎨 Design System

### Cores
- Primary: Blue (Azul) - #3B82F6
- Secondary: Purple (Roxo) - #A855F7
- Accent: Pink (Rosa) - #EC4899
- Success: Green (Verde) - #10B981
- Warning: Orange (Laranja) - #F59E0B
- Error: Red (Vermelho) - #EF4444

### Tipografia
- Font: Inter
- Headings: Bold, 2xl-6xl
- Body: Regular, base-lg
- Code: JetBrains Mono

## 🧪 Testing (Futuro)

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📚 Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [MCP Specification](https://spec.modelcontextprotocol.io)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

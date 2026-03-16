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
      content: 'Conteúdo da lição 1',
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
      description: 'Compreenda os componentes principais',
      duration: 20,
      type: 'theory',
      content: 'Conteúdo da lição 2'
    },
    {
      id: 'lesson-1-3',
      title: 'Seu Primeiro Servidor MCP',
      description: 'Crie um servidor MCP simples do zero',
      duration: 30,
      type: 'practice',
      content: 'Conteúdo da lição 3',
      exercises: [
        {
          id: 'exercise-1-3-1',
          type: 'code',
          question: 'Adicione uma nova operação "potencia" que calcula a^b',
          codeTemplate: '// Seu código aqui',
          testCases: [
            {
              input: '{"operacao": "potencia", "a": 2, "b": 3}',
              expectedOutput: '8',
              description: '2^3 deve retornar 8'
            }
          ],
          hint: 'Use Math.pow(a, b) para calcular potência'
        }
      ]
    }
  ]
}

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BookOpen, Code, Rocket, Award, Terminal, Zap, Users, Trophy } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MCP Training
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/modules" className="text-gray-600 hover:text-gray-900 transition">
              Módulos
            </Link>
            <Link href="/playground" className="text-gray-600 hover:text-gray-900 transition">
              Playground
            </Link>
            <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition">
              Docs
            </Link>
            <Link href="/community" className="text-gray-600 hover:text-gray-900 transition">
              Comunidade
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Começar Grátis</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            🚀 Aprenda o futuro da integração com IA
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Domine o Model Context Protocol
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Aprenda a criar integrações poderosas com LLMs de forma prática e interativa.
            Do básico ao avançado, com exercícios hands-on e projetos reais.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/modules">
                <BookOpen className="mr-2 h-5 w-5" />
                Começar Agora
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link href="/playground">
                <Code className="mr-2 h-5 w-5" />
                Experimentar Playground
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-blue-600">4</div>
              <div className="text-gray-600">Módulos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">20+</div>
              <div className="text-gray-600">Lições</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">100%</div>
              <div className="text-gray-600">Prático</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher o MCP Training?
          </h2>
          <p className="text-xl text-gray-600">
            A forma mais eficiente de dominar o Model Context Protocol
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Módulos Progressivos</h3>
            <p className="text-gray-600">
              Aprenda passo a passo, do básico ao avançado, com conteúdo estruturado e didático
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Code className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Editor Integrado</h3>
            <p className="text-gray-600">
              Escreva e teste código MCP direto no navegador com Monaco Editor
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Rocket className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sandbox de Testes</h3>
            <p className="text-gray-600">
              Ambiente seguro para experimentar e testar seus MCPs em tempo real
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Award className="h-12 w-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certificação</h3>
            <p className="text-gray-600">
              Ganhe badges e certificados reconhecidos pela comunidade
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Zap className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Projetos Práticos</h3>
            <p className="text-gray-600">
              Construa MCPs reais: APIs, bancos de dados, file systems e mais
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Terminal className="h-12 w-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Online</h3>
            <p className="text-gray-600">
              Sem instalação necessária. Tudo funciona direto no navegador
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Users className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Comunidade Ativa</h3>
            <p className="text-gray-600">
              Faça parte de uma comunidade crescente de desenvolvedores MCP
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Trophy className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gamificação</h3>
            <p className="text-gray-600">
              Sistema de pontos, níveis e desafios para manter você motivado
            </p>
          </Card>
        </div>
      </section>

      {/* Learning Path */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seu caminho de aprendizado
          </h2>
          <p className="text-xl text-gray-600">
            4 módulos cuidadosamente estruturados
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Fundamentos do MCP</h3>
                <p className="text-gray-600 mb-4">
                  Entenda a arquitetura, conceitos e crie seu primeiro servidor MCP
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Introdução</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Arquitetura</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Primeiro Server</span>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Tools & Resources</h3>
                <p className="text-gray-600 mb-4">
                  Domine a criação de ferramentas e gerenciamento de recursos
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Tools</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Resources</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Prompts</span>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Integrações</h3>
                <p className="text-gray-600 mb-4">
                  Conecte com APIs, bancos de dados e file systems
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">APIs</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Databases</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">File Systems</span>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Avançado</h3>
                <p className="text-gray-600 mb-4">
                  Performance, segurança e deploy em produção
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Performance</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Segurança</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Deploy</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a centenas de desenvolvedores aprendendo MCP e construindo o futuro da IA
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="text-lg">
              <Link href="/signup">
                <Rocket className="mr-2 h-5 w-5" />
                Criar Conta Gratuita
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg bg-white/10 hover:bg-white/20 border-white text-white">
              <Link href="/modules">
                Ver Módulos
              </Link>
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20 bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="h-5 w-5 text-blue-600" />
                <span className="font-bold">MCP Training</span>
              </div>
              <p className="text-gray-600 text-sm">
                Plataforma educacional para Model Context Protocol
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Aprender</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/modules" className="hover:text-gray-900">Módulos</Link></li>
                <li><Link href="/playground" className="hover:text-gray-900">Playground</Link></li>
                <li><Link href="/docs" className="hover:text-gray-900">Documentação</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Comunidade</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/community" className="hover:text-gray-900">Discord</Link></li>
                <li><Link href="/forum" className="hover:text-gray-900">Fórum</Link></li>
                <li><Link href="/showcase" className="hover:text-gray-900">Projetos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sobre</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-gray-900">Sobre nós</Link></li>
                <li><Link href="/blog" className="hover:text-gray-900">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-gray-900">Contato</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-gray-600 text-sm">
            <p>© 2026 MCP Training System. Desenvolvido com ❤️ para a comunidade de IA</p>
            <p className="mt-2">
              <Link href="https://github.com/lavsqueiroz/mcp-training-system" className="hover:text-gray-900">
                GitHub
              </Link>
              {' · '}
              <Link href="/privacy" className="hover:text-gray-900">
                Privacidade
              </Link>
              {' · '}
              <Link href="/terms" className="hover:text-gray-900">
                Termos
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

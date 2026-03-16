export interface Lesson {
  id: string
  title: string
  description: string
  duration: number // em minutos
  type: 'theory' | 'practice' | 'challenge' | 'project'
  content: string
  exercises?: Exercise[]
  resources?: Resource[]
}

export interface Exercise {
  id: string
  type: 'multiple-choice' | 'code' | 'fill-blank'
  question: string
  options?: string[]
  correctAnswer?: string | number
  codeTemplate?: string
  testCases?: TestCase[]
  hint?: string
}

export interface TestCase {
  input: string
  expectedOutput: string
  description: string
}

export interface Resource {
  type: 'link' | 'video' | 'documentation'
  title: string
  url: string
  description?: string
}

export interface Module {
  id: string
  title: string
  description: string
  icon: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: number // em horas
  lessons: Lesson[]
  prerequisites?: string[]
  learningObjectives: string[]
}

export interface UserProgress {
  userId: string
  moduleId: string
  lessonId: string
  completed: boolean
  score?: number
  timeSpent: number
  lastAccessed: Date
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  criteria: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export interface Certificate {
  id: string
  userId: string
  moduleId: string
  issuedAt: Date
  score: number
  certificateUrl: string
}

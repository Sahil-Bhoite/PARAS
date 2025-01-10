export interface Scenario {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: number;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
}

export interface PersonalityQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    trait: string;
    weight: number;
  }[];
}

export interface UserResponse {
  id: string;
  questionId: string;
  response: string;
  timestamp: Date;
}

export interface UserProfile {
  id: string;
  responses: UserResponse[];
  traits: Record<string, number>;
}
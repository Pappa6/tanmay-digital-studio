export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics?: string;
  imageUrl?: string;
}

export interface Principle {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Sector {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface ProcessStage {
  id: string;
  number: string;
  title: string;
  description: string;
  bullets?: string[];
}

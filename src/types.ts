export interface Question {
  id: string;
  questionText: string;
  options: string[]; // Options usually labelled A, B, C, D
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
}

export interface Topic {
  name: string;
  description: string;
  indicators: string[]; // Indikator Soal (HOTS)
}

export interface CurriculumBlueprint {
  subjectId: string;
  subjectName: string;
  capaianPembelajaran: string;
  topics: Topic[];
  sampleQuestions: Question[];
}

export interface RevisionSummarySection {
  title: string;
  content: string;
  keyPoints: string[];
}

export interface RevisionSummary {
  subjectId: string;
  subjectName: string;
  title: string;
  overview: string;
  sections: RevisionSummarySection[];
}

export interface CustomGeneratorResponse {
  blueprint?: CurriculumBlueprint;
  summary?: RevisionSummary;
  quiz?: Question[];
}

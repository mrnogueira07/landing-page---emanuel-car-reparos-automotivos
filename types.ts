
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface DiagnosisResult {
  possibleCause: string;
  severity: 'low' | 'medium' | 'high';
  advice: string;
}

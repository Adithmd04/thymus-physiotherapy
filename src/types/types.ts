export interface MetricItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tag: string;
  highlights: string[];
}

export interface TreatmentItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  tag: string;
  highlights: string[];
}
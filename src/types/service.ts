export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tag: string;
  highlights: string[];
  /** Which clinic slug this service belongs to */
  clinicSlug?: string;
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

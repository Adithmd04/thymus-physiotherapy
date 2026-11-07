import type { ServiceItem, TreatmentItem } from "@/types/service";

// ─── PHYSIOTHERAPY SERVICES ───────────────────────────────────
export const PHYSIOTHERAPY_SERVICES: ServiceItem[] = [
  {
    id: "back-neck-pain",
    title: "Back & Neck Pain",
    subtitle: "Pain Management & Mobility",
    shortDesc:
      "Physiotherapy focused on managing back and neck pain while improving movement and daily function.",
    fullDesc:
      "Our back and neck pain management approach combines evidence-based physiotherapy techniques, therapeutic exercise, manual therapy, and appropriate electrotherapy modalities. Treatment is tailored to help reduce pain, improve mobility, and support better movement and function in everyday activities.",
    image: "/images/service.jpg",
    tag: "Pain Management",
    highlights: [
      "Pain Relief",
      "Manual Therapy",
      "Therapeutic Exercise",
      "Mobility Improvement",
    ],
    clinicSlug: "physiotherapy",
  },
  {
    id: "sports-injury",
    title: "Sports Injury Rehab",
    subtitle: "Sports Rehabilitation",
    shortDesc:
      "Structured rehabilitation to help active individuals recover from sports-related injuries and return to movement.",
    fullDesc:
      "Our sports rehabilitation programs are designed to support recovery following sports-related injuries. Treatment combines therapeutic exercise, progressive strengthening, mobility work, and rehabilitation techniques according to individual recovery needs, helping patients safely regain strength and functional movement.",
    image: "/images/hero.jpg",
    tag: "Sports Rehab",
    highlights: [
      "Sports Injury Recovery",
      "Progressive Exercise",
      "Strength Training",
      "Functional Rehabilitation",
    ],
    clinicSlug: "physiotherapy",
  },
  {
    id: "post-surgery",
    title: "Post-Surgery Rehab",
    subtitle: "Post-Operative Rehabilitation",
    shortDesc:
      "Structured rehabilitation to restore movement, strength, and function following surgery.",
    fullDesc:
      "Our post-surgery rehabilitation programs provide structured, goal-oriented care following surgical procedures. Treatment may include appropriate electrotherapy, therapeutic exercises, mobility work, and progressive strengthening to support recovery and help patients regain functional movement.",
    image: "/images/clinic.jpg",
    tag: "Post-Surgery",
    highlights: [
      "Post-Operative Care",
      "Mobility Restoration",
      "Progressive Strengthening",
      "Functional Recovery",
    ],
    clinicSlug: "physiotherapy",
  },
  {
    id: "joint-arthritis",
    title: "Joint Pain & Arthritis",
    subtitle: "Joint Mobility & Pain Care",
    shortDesc:
      "Therapeutic care focused on reducing joint discomfort and improving mobility for everyday activities.",
    fullDesc:
      "Physiotherapy for joint pain and arthritis focuses on maintaining and improving mobility while supporting comfortable movement. Individualized exercise therapy, joint mobilisation, pain-relief techniques, and appropriate treatment modalities can be incorporated into a structured rehabilitation program.",
    image: "/images/service.jpg",
    tag: "Joint Care",
    highlights: [
      "Joint Mobility",
      "Pain Management",
      "Joint Mobilisation",
      "Exercise Therapy",
    ],
    clinicSlug: "physiotherapy",
  },
  {
    id: "neuro-rehabilitation",
    title: "Stroke & Neuro Rehab",
    subtitle: "Neurological Rehabilitation",
    shortDesc:
      "Goal-oriented rehabilitation supporting movement, balance, gait, and functional recovery.",
    fullDesc:
      "Our neurological rehabilitation programs provide structured, goal-oriented therapy for individuals requiring neurological rehabilitation. Treatment focuses on functional movement, balance, gait, coordination, and progressive exercise to support greater independence in everyday activities.",
    image: "/images/clinic.jpg",
    tag: "Neuro Rehab",
    highlights: [
      "Stroke Rehabilitation",
      "Balance Training",
      "Gait Training",
      "Functional Exercise",
    ],
    clinicSlug: "physiotherapy",
  },
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    subtitle: "Hands-On Pain Relief",
    shortDesc:
      "Hands-on physiotherapy techniques combined with exercise to improve movement and provide pain relief.",
    fullDesc:
      "Manual therapy uses hands-on techniques including joint and soft-tissue mobilisation to address movement limitations and support pain management. Depending on individual needs, manual techniques can be combined with therapeutic exercise and other physiotherapy modalities.",
    image: "/images/service.jpg",
    tag: "Manual Therapy",
    highlights: [
      "Joint Mobilisation",
      "Soft-Tissue Techniques",
      "Pain Relief",
      "Movement Improvement",
    ],
    clinicSlug: "physiotherapy",
  },
  {
    id: "balance-gait",
    title: "Balance & Gait Training",
    subtitle: "Movement & Functional Training",
    shortDesc:
      "Progressive training to improve balance, walking ability, coordination, and functional movement.",
    fullDesc:
      "Balance and gait training focuses on improving safe and functional movement. Structured exercises are used to work on balance, walking patterns, coordination, and movement control, with progression based on the individual's rehabilitation goals.",
    image: "/images/hero.jpg",
    tag: "Mobility",
    highlights: [
      "Balance Training",
      "Gait Training",
      "Movement Control",
      "Functional Mobility",
    ],
    clinicSlug: "physiotherapy",
  },
  {
    id: "posture-ergonomics",
    title: "Posture Correction",
    subtitle: "Posture & Ergonomics",
    shortDesc:
      "Targeted physiotherapy and exercise to improve posture, movement patterns, and everyday ergonomics.",
    fullDesc:
      "Posture correction combines assessment, therapeutic exercise, movement training, and ergonomic guidance to encourage healthier movement patterns. The program can help individuals improve posture and develop better movement habits for everyday activities.",
    image: "/images/hero.jpg",
    tag: "Ergonomics",
    highlights: [
      "Posture Correction",
      "Ergonomic Guidance",
      "Movement Training",
      "Therapeutic Exercise",
    ],
    clinicSlug: "physiotherapy",
  },
  {
    id: "elderly-care",
    title: "Elderly Care",
    subtitle: "Mobility & Functional Independence",
    shortDesc:
      "Physiotherapy support focused on maintaining mobility, balance, strength, and everyday function.",
    fullDesc:
      "Our elderly care services focus on maintaining functional mobility and supporting independence through appropriately supervised physiotherapy. Programs can include balance training, gait exercises, range-of-motion work, strengthening exercises, and other rehabilitation techniques based on individual requirements.",
    image: "/images/clinic.jpg",
    tag: "Elderly Care",
    highlights: [
      "Mobility Support",
      "Balance Training",
      "Strengthening Exercises",
      "Functional Independence",
    ],
    clinicSlug: "physiotherapy",
  },
];

// ─── DENTAL SERVICES (placeholder for future Thymus Dental) ───
export const DENTAL_SERVICES: ServiceItem[] = [
  {
    id: "dental-checkup",
    title: "General Check-up",
    subtitle: "Preventive Dental Care",
    shortDesc:
      "Routine dental examination and professional cleaning to maintain oral health.",
    fullDesc:
      "Our general dental check-ups include a thorough oral examination, professional cleaning, and personalised advice on maintaining good oral hygiene. Regular visits help identify and address potential concerns early.",
    image: "/images/clinic.jpg",
    tag: "Preventive Care",
    highlights: [
      "Oral Examination",
      "Professional Cleaning",
      "Hygiene Guidance",
      "Early Detection",
    ],
    clinicSlug: "dental",
  },
  {
    id: "dental-restoration",
    title: "Restorative Dentistry",
    subtitle: "Fillings & Restorations",
    shortDesc:
      "Restoring the function and appearance of damaged or decayed teeth.",
    fullDesc:
      "Restorative dentistry focuses on repairing and restoring teeth affected by damage or decay. Treatments may include fillings, crowns, and other appropriate techniques to restore comfortable function and a natural appearance.",
    image: "/images/service.jpg",
    tag: "Restorative",
    highlights: [
      "Dental Fillings",
      "Crown Restoration",
      "Tooth Repair",
      "Functional Restoration",
    ],
    clinicSlug: "dental",
  },
  {
    id: "teeth-cleaning",
    title: "Teeth Cleaning & Scaling",
    subtitle: "Professional Hygiene",
    shortDesc:
      "Professional teeth cleaning and scaling to remove plaque and support gum health.",
    fullDesc:
      "Professional teeth cleaning and scaling removes built-up plaque and tartar that regular brushing cannot address. This procedure supports healthier gums and helps prevent common dental conditions.",
    image: "/images/hero.jpg",
    tag: "Hygiene",
    highlights: [
      "Plaque Removal",
      "Tartar Scaling",
      "Gum Health",
      "Preventive Care",
    ],
    clinicSlug: "dental",
  },
];

// ─── PREGNANCY CARE SERVICES (placeholder for future clinic) ──
export const PREGNANCY_CARE_SERVICES: ServiceItem[] = [
  {
    id: "prenatal-care",
    title: "Prenatal Care",
    subtitle: "Pregnancy Monitoring",
    shortDesc:
      "Routine pregnancy monitoring and maternal health support throughout each trimester.",
    fullDesc:
      "Prenatal care includes regular check-ups, health assessments, and guidance to support a healthy pregnancy. Our approach focuses on monitoring maternal and foetal wellbeing and providing individualised care throughout each stage.",
    image: "/images/clinic.jpg",
    tag: "Prenatal",
    highlights: [
      "Health Monitoring",
      "Trimester Care",
      "Maternal Wellbeing",
      "Personalised Guidance",
    ],
    clinicSlug: "pregnancy-care",
  },
  {
    id: "postnatal-care",
    title: "Postnatal Care",
    subtitle: "Post-Delivery Support",
    shortDesc:
      "Post-delivery care and recovery support for new mothers.",
    fullDesc:
      "Postnatal care provides structured support following delivery. Services focus on maternal recovery, breastfeeding guidance, and general wellbeing assessments to help new mothers transition comfortably into the postnatal period.",
    image: "/images/service.jpg",
    tag: "Postnatal",
    highlights: [
      "Recovery Support",
      "Breastfeeding Guidance",
      "Wellbeing Assessment",
      "Maternal Care",
    ],
    clinicSlug: "pregnancy-care",
  },
  {
    id: "pregnancy-exercise",
    title: "Pregnancy Exercise",
    subtitle: "Safe Prenatal Movement",
    shortDesc:
      "Guided exercise programmes designed to support fitness and comfort during pregnancy.",
    fullDesc:
      "Pregnancy exercise programmes are designed to support physical comfort and prepare the body for delivery. Sessions focus on safe, appropriate exercises including gentle strengthening, flexibility work, and breathing techniques.",
    image: "/images/hero.jpg",
    tag: "Exercise",
    highlights: [
      "Safe Movement",
      "Gentle Strengthening",
      "Flexibility",
      "Breathing Techniques",
    ],
    clinicSlug: "pregnancy-care",
  },
];

// ─── PHYSIOTHERAPY TREATMENTS ────────────────────────────────
export const PHYSIOTHERAPY_TREATMENTS: TreatmentItem[] = [
  {
    id: "ift",
    title: "Interferential Therapy",
    subtitle: "IFT Electrotherapy",
    shortDesc:
      "Medium-frequency electrotherapy used for pain management, oedema reduction, and neuromuscular stimulation.",
    fullDesc:
      "Interferential Therapy (IFT) uses medium-frequency electrical currents. The clinic's treatment information specifies currents of 4000 Hz ± 100 Hz and describes its use for deep tissue analgesia, oedema reduction, and neuromuscular stimulation.",
    tag: "Electrotherapy",
    highlights: [
      "4000 Hz ± 100 Hz",
      "Deep Tissue Analgesia",
      "Oedema Reduction",
      "Neuromuscular Stimulation",
    ],
  },
  {
    id: "tens",
    title: "TENS",
    subtitle: "Transcutaneous Electrical Nerve Stimulation",
    shortDesc:
      "Electrotherapy used for pain modulation through transcutaneous electrical nerve stimulation.",
    fullDesc:
      "TENS, or Transcutaneous Electrical Nerve Stimulation, is listed among the clinic's treatment procedures. The treatment information describes its use for gate-control analgesia and endorphin-mediated pain modulation.",
    tag: "Electrotherapy",
    highlights: [
      "Pain Modulation",
      "Gate-Control Analgesia",
      "Endorphin-Mediated Modulation",
      "Electrical Stimulation",
    ],
  },
  {
    id: "therapeutic-ultrasound",
    title: "Therapeutic Ultrasound",
    subtitle: "1 MHz & 3 MHz Ultrasound",
    shortDesc:
      "Ultrasound therapy using continuous or pulsed modes for therapeutic tissue treatment.",
    fullDesc:
      "Therapeutic Ultrasound is provided using 1 MHz and 3 MHz frequencies in continuous or pulsed modes. The clinic describes its applications as deep tissue heating, phonophoresis, and supporting tissue repair.",
    tag: "Electrotherapy",
    highlights: [
      "1 MHz & 3 MHz",
      "Continuous & Pulsed Modes",
      "Deep Tissue Heating",
      "Phonophoresis",
    ],
  },
  {
    id: "combination-electrotherapy",
    title: "Combination Electrotherapy",
    subtitle: "Multi-Modal Treatment",
    shortDesc:
      "Combined electrotherapy approaches using ultrasound with IFT or TENS.",
    fullDesc:
      "Combination Electrotherapy brings together multiple treatment modalities for simultaneous multi-modal delivery. The clinic specifically lists Ultrasound + IFT and Ultrasound + TENS combinations.",
    tag: "Electrotherapy",
    highlights: [
      "Ultrasound + IFT",
      "Ultrasound + TENS",
      "Multi-Modal Delivery",
      "Combined Treatment",
    ],
  },
  {
    id: "machine-exercise",
    title: "Machine + Exercise",
    subtitle: "Electrotherapy & Exercise",
    shortDesc:
      "A combined approach using electrotherapy followed by targeted therapeutic exercise.",
    fullDesc:
      "The Machine + Exercise approach combines an appropriate electrotherapy modality with targeted therapeutic exercise. The clinic describes this combination as supporting functional restoration through modality-based treatment followed by active exercise.",
    tag: "Combined Therapy",
    highlights: [
      "Electrotherapy",
      "Targeted Exercise",
      "Functional Restoration",
      "Progressive Exercise",
    ],
  },
  {
    id: "machine-exercise-mobilisation",
    title: "Machine + Exercise + Mobilisation",
    subtitle: "Combined Physiotherapy",
    shortDesc:
      "Combines electrotherapy, active exercise, and joint or soft-tissue mobilisation.",
    fullDesc:
      "This combined treatment approach brings together electrotherapy, active therapeutic exercise, and joint or soft-tissue mobilisation techniques as part of a comprehensive physiotherapy session.",
    tag: "Combined Therapy",
    highlights: [
      "Electrotherapy",
      "Active Exercise",
      "Joint Mobilisation",
      "Soft-Tissue Mobilisation",
    ],
  },
  {
    id: "trigger-point-release",
    title: "Trigger Point Release",
    subtitle: "Myofascial & Manual Therapy",
    shortDesc:
      "Manual techniques targeting active and latent trigger points through focused soft-tissue treatment.",
    fullDesc:
      "Trigger Point Release uses manual ischaemic compression and myofascial release techniques. The clinic's treatment information describes these techniques as targeting both active and latent trigger points.",
    tag: "Manual Therapy",
    highlights: [
      "Ischaemic Compression",
      "Myofascial Release",
      "Active Trigger Points",
      "Latent Trigger Points",
    ],
  },
  {
    id: "exercise-therapy",
    title: "Exercise Therapy",
    subtitle: "Strength & Mobility",
    shortDesc:
      "Supervised and progressive exercises focused on range of motion and strengthening.",
    fullDesc:
      "Exercise Therapy includes supervised Range of Motion exercises and Progressive Strengthening exercises. Programs are progressed according to the individual's rehabilitation requirements and functional goals.",
    tag: "Rehabilitation",
    highlights: [
      "Range of Motion",
      "Progressive Strengthening",
      "Supervised Exercise",
      "Functional Training",
    ],
  },
];

// ─── ALL SERVICES (aggregated for homepage / booking) ─────────
export const ALL_SERVICES: ServiceItem[] = [
  ...PHYSIOTHERAPY_SERVICES,
  ...DENTAL_SERVICES,
  ...PREGNANCY_CARE_SERVICES,
];

// ─── Backward-compatible aliases for existing component imports ─
export const SERVICES = PHYSIOTHERAPY_SERVICES;
export const TREATMENTS = PHYSIOTHERAPY_TREATMENTS;

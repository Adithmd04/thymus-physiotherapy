import type { Treatment } from "@/types/service";

export const TREATMENTS: Treatment[] = [
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

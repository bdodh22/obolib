import { ScoreSegment } from "../types";

export interface LocalizedStep {
  step: number;
  title: string;
  desc: string;
  focusNote?: string;
}

export interface LocalizedSegment {
  measureNumber?: number;
  startMeasure?: number;
  endMeasure?: number;
  type?: any;
  title?: string;
  suggestion: string;
  severity?: "tip" | "highlight" | "warning";
}

export const PRACTICE_STEPS_EN_MAP: Record<string, LocalizedStep[]> = {
  "mozart-bassoon-concerto-k191": [
    {
      step: 1,
      title: "Slow Practice for Opening Two-Octave Leaps",
      desc: "Practice the opening measure Bb2 to Bb3 staccato leaps at ♩ = 60. Keep the lower lip relaxed and cushioned, with smooth abdominal diaphragmatic support. Never bite down on the reed to force higher pitch.",
      focusNote: "B♭2 / B♭3"
    },
    {
      step: 2,
      title: "Pearl-like 16th-Note Finger Coordination",
      desc: "For the broken chords in measures 2-3, alternate between 'slur 2, tongue 2' and 'four-note slur' drills. Keep finger lift height strictly within 1 cm to preserve pure, even tone.",
      focusNote: "E♭4 / D4"
    },
    {
      step: 3,
      title: "Classical Trill & Elegant Cadential Resolution",
      desc: "The high Bb3 trill in measure 4 must vibrate evenly from the principal note, naturally introducing the A3-Bb3 turn at the end before smoothly gliding into the low register.",
      focusNote: "B♭3 (Trill)"
    }
  ],
  "peter-and-the-wolf-grandfather": [
    {
      step: 1,
      title: "Metronomic Precision on Dotted Rhythms",
      desc: "Set the metronome to 80 BPM with 16th-note subdivisions. Ensure each dotted eighth note holds exactly three 16th-note values, with the 4th 16th note landing crisply.",
      focusNote: "B♭2 - D3 - F3 - B♭3"
    },
    {
      step: 2,
      title: "Cane-Tapping Articulation Touch",
      desc: "Tongue tip touches the double reed with firm contact. The staccato is short, grounded, and dignified without harshness, evoking a ponderous step.",
      focusNote: "A3 / G3"
    },
    {
      step: 3,
      title: "Theatrical Narrative Inflection",
      desc: "In measures 2-3, mimic Grandfather's grumbling warning with a subtle decrescendo on the phrase endings.",
      focusNote: "F3 / C3"
    }
  ],
  "rite-of-spring-bassoon-solo": [
    {
      step: 1,
      title: "Throat Channel & Embouchure for Extreme High C4",
      desc: "Form an 'Oo' vowel shape in the oral cavity, keep the soft palate raised, and project high-density core airflow to trigger high C4 gently without biting.",
      focusNote: "C4 (High C)"
    },
    {
      step: 2,
      title: "Fluid High Ornamentation & Grace Notes",
      desc: "When shifting up to high D4 in measure 2, roll the left index finger smoothly on the half-hole to prevent air bubbles or sudden timbre cracks.",
      focusNote: "D4 (High D)"
    },
    {
      step: 3,
      title: "Wilderness Fadeout (Morendo) Control",
      desc: "After descending to E3 in measure 3, sustain deep diaphragmatic support while gradually tapering air volume until the sound dissolves into silence.",
      focusNote: "E3 (Morendo)"
    }
  ],
  "sorcerers-apprentice-bassoon": [
    {
      step: 1,
      title: "9/8 Compound Time Downbeat Anchoring",
      desc: "Set dotted quarter to ♩. = 70. Mentally count '1-2-3, 2-2-3, 3-2-3', emphasizing the primary beat downbeat with light, agile follow-through.",
      focusNote: "F2 - C3 - F3"
    },
    {
      step: 2,
      title: "Whispering Needle Staccato Drill",
      desc: "At pp dynamic, the tongue tip touches only the extreme tip of the reed, releasing instantaneously like sparks leaping from water.",
      focusNote: "F2 - G♭2 - G2"
    },
    {
      step: 3,
      title: "Continuous Air Support on Rapid Octave Leaps",
      desc: "Keep the lower lip completely stable when leaping from F2 to F3; let core abdominal air velocity drive the octave crossing.",
      focusNote: "F3 / F2"
    }
  ],
  "spirited-away-always-with-me": [
    {
      step: 1,
      title: "3/4 Cantabile Phrasing & Breathing Anchor",
      desc: "Play at ♩ = 84. Treat every 4 measures as a single vocal breath arch. Inhale smoothly at the ends of M.4, M.8, and M.12.",
      focusNote: "C3 - E3 - G3 - A3"
    },
    {
      step: 2,
      title: "High C4 Climax Air Acceleration",
      desc: "Accelerate airflow smoothly when entering the high C4 peak in measure 6, keeping the lower jaw relaxed to ensure a warm, singing tone.",
      focusNote: "C4 (High C)"
    },
    {
      step: 3,
      title: "Subtle Warm Dynamic Tapering",
      desc: "In measures 13-16, shape the closing phrase with a tender decrescendo down to pp, concluding with rich resonance on tonic F2.",
      focusNote: "F2 (Tonic resolution)"
    }
  ],
  "weber-bassoon-concerto-op75": [
    {
      step: 1,
      title: "Martial Dotted Rhythm Precision",
      desc: "Slow practice at ♩ = 84. Execute the dotted rhythms with military crispness and sword-like precision before transitioning to dolce singing.",
      focusNote: "F2 - A2 - C3 - F3"
    },
    {
      step: 2,
      title: "Instant Shift from Forte to Operatic Dolce",
      desc: "Switch rapidly from powerful low-register projection to singing cantabile warmth without pitch fluctuation.",
      focusNote: "A3 - C4 - F4"
    },
    {
      step: 3,
      title: "Two-Octave Leap Intonation Balance",
      desc: "Keep the throat open and air column steady when executing rapid wide intervals across registers.",
      focusNote: "F2 / F4"
    }
  ],
  "telemann-bassoon-sonata-f-minor": [
    {
      step: 1,
      title: "Smooth Transition for 4-Flat Key Signature",
      desc: "Focus on Db3 and Ab2 fingerings. Ensure the left pinky and right thumb keys seal airtight without key noise.",
      focusNote: "D♭3 / A♭2"
    },
    {
      step: 2,
      title: "Baroque Sighing Appoggiatura Expression",
      desc: "Lean gently into the dissonant appoggiatura notes with subtle messa di voce swelling, then gently resolve into the consonance.",
      focusNote: "E♭3 / D♭3"
    },
    {
      step: 3,
      title: "Noble Cantabile Phrasing",
      desc: "Sustain continuous baroque air arches with straight tone flowering into subtle, warm natural vibrato.",
      focusNote: "F2 - C3 - F3"
    }
  ],
  "in-the-hall-of-the-mountain-king": [
    {
      step: 1,
      title: "Pianissimo Needle-Sharp Staccato",
      desc: "Start at 80 BPM. Tongue tip contacts only the upper third of the reed to produce crisp, eerie, feather-light staccato notes.",
      focusNote: "B2 - C#3 - D3 - E3"
    },
    {
      step: 2,
      title: "B Minor Accidental Finger Agility",
      desc: "Practice clean execution of F#3 and C#3 keys, ensuring zero clatter or leakage.",
      focusNote: "F#3 / C#3"
    },
    {
      step: 3,
      title: "Controlled Accelerando Drive",
      desc: "Gradually accelerate from 80 BPM to 132 BPM while maintaining strict finger economy and crisp staccato clarity.",
      focusNote: "B2 (Root)"
    }
  ],
  "tchaikovsky-swan-lake-little-swans": [
    {
      step: 1,
      title: "Tiptoe Ballet Spring Eighth Notes",
      desc: "Practice with metronome at 100 BPM. Keep eighth notes precisely half-value, crisp and springy between mf and p.",
      focusNote: "F#2 - A2 - C#3"
    },
    {
      step: 2,
      title: "Ensemble Unison Synchronization",
      desc: "Lock in tight rhythmic synchronization with metronomic discipline, avoiding rushing on the repeated figures.",
      focusNote: "D3 / B2"
    },
    {
      step: 3,
      title: "Buoyant Staccato Lift",
      desc: "Release each note crisply to convey the dancers' nimble footwork on pointe.",
      focusNote: "F#2 (Springing)"
    }
  ],
  "scheherazade-kalendar-prince-cadenza": [
    {
      step: 1,
      title: "32nd-Note Slow-Speed Subdivision",
      desc: "Begin at 60 BPM. Practice 32nd notes as steady eighth notes to ensure complete tone-hole seals before accelerating to performance tempo.",
      focusNote: "B2 - D3 - F#3 - B3"
    },
    {
      step: 2,
      title: "Theatrical Rubato Phrasing",
      desc: "Introduce natural elasticity and improvisatory freedom across the unmeasured cadenza passages.",
      focusNote: "A#3 / B3"
    },
    {
      step: 3,
      title: "Oriental Ornamentation Clarity",
      desc: "Crisp rapid finger flicking on high chromatic turns while sustaining centered tone quality.",
      focusNote: "E4 / D4"
    }
  ],
  "weissenborn-op8-no1-tone-method": [
    {
      step: 1,
      title: "Four-Beat Whole Note Mental Subdivision",
      desc: "Practice at ♩ = 76. Mentally count 1-2-3-4 through each whole note to maintain a laser-straight, unwavering air column.",
      focusNote: "F2 - G2 - A2 - B♭2"
    },
    {
      step: 2,
      title: "Ascending Octave Whisper Key Coordination",
      desc: "When ascending from Bb2 to C3 in measure 4, gently engage the left-thumb Whisper key without slapping tone holes.",
      focusNote: "C3 / D3"
    },
    {
      step: 3,
      title: "Descending Long Tone Cushioning",
      desc: "Keep the lower lip cushioned and throat relaxed when descending from F3, maintaining warm bottom resonance without sharpness.",
      focusNote: "F3 - E3 - D3 - C3"
    }
  ],
  "weissenborn-op8-no4-thirds-intervals": [
    {
      step: 1,
      title: "Thirds Interval Finger Economy",
      desc: "Practice F2-A2 and G2-Bb2 slowly. Keep finger pads magnetic to the wood, moving gently without slapping the keys.",
      focusNote: "F2 - A2"
    },
    {
      step: 2,
      title: "Uninterrupted Legato Airflow",
      desc: "Blow a continuous, steady air column across interval leaps, letting finger changes happen inside the air stream.",
      focusNote: "A2 - C3"
    },
    {
      step: 3,
      title: "Descending Leaps Intonation Centering",
      desc: "Avoid biting down on descending leaps; keep the oral cavity wide and resonant.",
      focusNote: "Bb2 - G2"
    }
  ],
  "weissenborn-op8-no10-fast-staccato": [
    {
      step: 1,
      title: "Rhythmic Syllable Vocalization Formula",
      desc: "Vocalize 'Di-Li-Da-Da' with the first two notes smoothly slurred and the last two lightly tapped by the tongue tip like skipping stones.",
      focusNote: "C3 - D3 - E3 - C3"
    },
    {
      step: 2,
      title: "Metronome Velocity Increments",
      desc: "Start at 72 BPM and increase by 4 BPM intervals once 16th notes are completely clean and even.",
      focusNote: "F3 / G3"
    },
    {
      step: 3,
      title: "Consistent Embouchure Pressure",
      desc: "Maintain constant reed cushion during fast staccato runs without jaw biting or embouchure fatigue.",
      focusNote: "C3 (Tonic Anchor)"
    }
  ],
  "weissenborn-op8-no15-andante-cantabile": [
    {
      step: 1,
      title: "High C4 Vent Key Air Support",
      desc: "As you reach the vocal climax C4 in M.4, accelerate airflow smoothly while keeping lower lip cushioned and tone warm and broad.",
      focusNote: "C4 (Tenor peak)"
    },
    {
      step: 2,
      title: "Tenor Clef Fluency & Cello-like Legato",
      desc: "Read tenor clef notes effortlessly and connect phrases with seamless legatissimo phrasing.",
      focusNote: "G3 - A3 - B3 - C4"
    },
    {
      step: 3,
      title: "Expressive Vibrato & Dynamic Bloom",
      desc: "Add natural, gentle vibrato on long notes without causing pitch fluctuation.",
      focusNote: "F3 (Resolution)"
    }
  ],
  "twinkle-twinkle-little-bassoon": [
    {
      step: 1,
      title: "Measure 1 F2 to C3 Six-Hole Smooth Lift",
      desc: "Lift all 6 finger pads simultaneously with light, relaxed motions. Engage Whisper key without slapping keys.",
      focusNote: "F2 - C3"
    },
    {
      step: 2,
      title: "Middle Section Sequential Contrast",
      desc: "Keep the middle C3 tone bright and open in measures 5-8 with smooth breaths every 2 measures.",
      focusNote: "C3 - Bb2 - A2 - G2"
    },
    {
      step: 3,
      title: "Theme Recapitulation & Resonant Finish",
      desc: "Play the return theme with warm buoyancy, sustaining airflow through the final tonic F2 in M.12.",
      focusNote: "F2 (Full resonance)"
    }
  ],
  "pink-panther-jazz-theme": [
    {
      step: 1,
      title: "Grace Note Chromatic Slide",
      desc: "Light right-pinky touch and left-thumb Whisper coordination to glide seamlessly into the jazzy downbeat.",
      focusNote: "C#3 - D3"
    },
    {
      step: 2,
      title: "Laid-Back Swing Offbeat Accents",
      desc: "Play with a relaxed jazz pocket, leaning into syncopated accents without rushing.",
      focusNote: "D#3 - E3"
    },
    {
      step: 3,
      title: "Low Register Character & Growl",
      desc: "Deep, gravelly low-register tone on bottom notes with playful comedic swagger.",
      focusNote: "B1 / C2"
    }
  ],
  "ode-to-joy-beethoven-bassoon": [
    {
      step: 1,
      title: "Solid Low D2 Root Tone Projection",
      desc: "Deep abdominal breath and fully open throat to allow maximum reed vibration and rich bottom resonance.",
      focusNote: "D2 (Low Root)"
    },
    {
      step: 2,
      title: "Noble Hymn Articulation",
      desc: "Even, resonant quarter notes with dignified articulation celebrating Beethoven's iconic theme.",
      focusNote: "F#2 - G2 - A2"
    },
    {
      step: 3,
      title: "Grand Cadential Finish",
      desc: "Full orchestral dynamic expansion leading into the triumphant final chord.",
      focusNote: "D2 (Triumphant tonic)"
    }
  ],
  "weissenborn-op8-no12-staccato-legato": [
    {
      step: 1,
      title: "Crisp Single Tonguing Articulation",
      desc: "Tongue tip touches the upper 1/3 of the reed for snappy, springy staccato while keeping steady internal air velocity.",
      focusNote: "G2 - A2 - B2 - C3"
    },
    {
      step: 2,
      title: "Legato vs Staccato Rapid Shifting",
      desc: "Transition instantly between crisp detached notes and flowing melodic slurs without losing embouchure cushion.",
      focusNote: "D3 - C3 - B2"
    },
    {
      step: 3,
      title: "Register Crossing Evenness",
      desc: "Smooth finger action when crossing across octaves, keeping pitch perfectly centered.",
      focusNote: "G2 (Final anchor)"
    }
  ]
};

export const SEGMENTS_EN_MAP: Record<string, LocalizedSegment[]> = {
  "s_w1": [
    {
      startMeasure: 1,
      endMeasure: 8,
      title: "[Section A] F Major Ascending Scale Long Tones (Measures 1-8)",
      suggestion: "Initiate tones with gentle tongue-tip contact on the reed tip. Maintain deep abdominal breath support for 4 full beats. Engage left-thumb Whisper key gently when crossing to C3 in M.4."
    },
    {
      startMeasure: 9,
      endMeasure: 16,
      title: "[Section B] F Major Descending Scale Long Tones (Measures 9-16)",
      suggestion: "Keep embouchure cushioned without biting when descending from F3 and E3. Take deep breaths every 2 measures to guarantee rich, broad low-register resonance."
    },
    {
      startMeasure: 17,
      endMeasure: 24,
      title: "[Section C] Half-Note Legato & Cadential Resolution (Measures 17-24)",
      suggestion: "Connect pairs of half notes with cantabile legato. Keep finger lifts under 1.5 cm. Conclude on tonic F2 in M.24 with rich, full-bodied resonance."
    }
  ],
  "weissenborn-op8-no1-tone-method": [
    {
      startMeasure: 1,
      endMeasure: 8,
      title: "[Section A] F Major Ascending Scale Long Tones (Measures 1-8)",
      suggestion: "Initiate tones with gentle tongue-tip contact on the reed tip. Maintain deep abdominal breath support for 4 full beats. Engage left-thumb Whisper key gently when crossing to C3 in M.4."
    },
    {
      startMeasure: 9,
      endMeasure: 16,
      title: "[Section B] F Major Descending Scale Long Tones (Measures 9-16)",
      suggestion: "Keep embouchure cushioned without biting when descending from F3 and E3. Take deep breaths every 2 measures to guarantee rich, broad low-register resonance."
    },
    {
      startMeasure: 17,
      endMeasure: 24,
      title: "[Section C] Half-Note Legato & Cadential Resolution (Measures 17-24)",
      suggestion: "Connect pairs of half notes with cantabile legato. Keep finger lifts under 1.5 cm. Conclude on tonic F2 in M.24 with rich, full-bodied resonance."
    }
  ],
  "s1": [
    {
      startMeasure: 1,
      endMeasure: 4,
      title: "[Section A] Theme Exposition (Measures 1-4)",
      suggestion: "Deep breath before entry with a relaxed embouchure. Ensure right-hand fingers seal tone holes firmly when descending from Bb2 to A2."
    },
    {
      startMeasure: 5,
      endMeasure: 8,
      title: "[Section B] Contrast & Development (Measures 5-8)",
      suggestion: "Bright middle C3 tone. Maintain steady airflow on sequential leaps with light breaths every 2 measures."
    },
    {
      startMeasure: 9,
      endMeasure: 12,
      title: "[Section A'] Theme Recapitulation & Coda (Measures 9-12)",
      suggestion: "Warm, buoyant recapitulation. Send airflow steadily through the final tonic F2 in M.12 to complete the piece."
    }
  ],
  "twinkle-twinkle-little-bassoon": [
    {
      startMeasure: 1,
      endMeasure: 4,
      title: "[Section A] Theme Exposition (Measures 1-4)",
      suggestion: "Deep breath before entry with a relaxed embouchure. Ensure right-hand fingers seal tone holes firmly when descending from Bb2 to A2."
    },
    {
      startMeasure: 5,
      endMeasure: 8,
      title: "[Section B] Contrast & Development (Measures 5-8)",
      suggestion: "Bright middle C3 tone. Maintain steady airflow on sequential leaps with light breaths every 2 measures."
    },
    {
      startMeasure: 9,
      endMeasure: 12,
      title: "[Section A'] Theme Recapitulation & Coda (Measures 9-12)",
      suggestion: "Warm, buoyant recapitulation. Send airflow steadily through the final tonic F2 in M.12 to complete the piece."
    }
  ],
  "s3": [
    {
      startMeasure: 1,
      endMeasure: 4,
      title: "[Section A] Nostalgic Waltz Theme (Measures 1-4)",
      suggestion: "Maintain smooth, flowing legato with warm breath support. Take a deep breath at the end of M.4."
    },
    {
      startMeasure: 5,
      endMeasure: 8,
      title: "[Section B] Chorus Climax & High C4 (Measures 5-8)",
      suggestion: "Abundant airflow into high C4 with relaxed lower lip. Keep the sound open and luminous."
    },
    {
      startMeasure: 9,
      endMeasure: 12,
      title: "[Section C] Lyric Development (Measures 9-12)",
      suggestion: "Sustain steady intonation through descending melodic sequences."
    },
    {
      startMeasure: 13,
      endMeasure: 16,
      title: "[Section D] Tender Coda & Resolution (Measures 13-16)",
      suggestion: "Gentle decrescendo to pp on the final tonic F2."
    }
  ],
  "spirited-away-always-with-me": [
    {
      startMeasure: 1,
      endMeasure: 4,
      title: "[Section A] Nostalgic Waltz Theme (Measures 1-4)",
      suggestion: "Maintain smooth, flowing legato with warm breath support. Take a deep breath at the end of M.4."
    },
    {
      startMeasure: 5,
      endMeasure: 8,
      title: "[Section B] Chorus Climax & High C4 (Measures 5-8)",
      suggestion: "Abundant airflow into high C4 with relaxed lower lip. Keep the sound open and luminous."
    },
    {
      startMeasure: 9,
      endMeasure: 12,
      title: "[Section C] Lyric Development (Measures 9-12)",
      suggestion: "Sustain steady intonation through descending melodic sequences."
    },
    {
      startMeasure: 13,
      endMeasure: 16,
      title: "[Section D] Tender Coda & Resolution (Measures 13-16)",
      suggestion: "Gentle decrescendo to pp on the final tonic F2."
    }
  ],
  "s5": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Noble Opening Leap (Measures 1-2)",
      suggestion: "Crisp staccato on the Bb2 to Bb3 octave jump. Keep throat relaxed and tongue tip nimble without biting."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] 16th-Note Classical Arpeggio (Measures 3-4)",
      suggestion: "Maintain fluid finger placement across the arpeggio passage. Do not rush the third beat."
    },
    {
      startMeasure: 5,
      endMeasure: 6,
      title: "[Section C] Classical Trill & Half Cadence (Measures 5-6)",
      suggestion: "Sing through the expressive resolution with clean breath support and warm resonance."
    }
  ],
  "mozart-bassoon-concerto-k191": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Noble Opening Leap (Measures 1-2)",
      suggestion: "Crisp staccato on the Bb2 to Bb3 octave jump. Keep throat relaxed and tongue tip nimble without biting."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] 16th-Note Classical Arpeggio (Measures 3-4)",
      suggestion: "Maintain fluid finger placement across the arpeggio passage. Do not rush the third beat."
    },
    {
      startMeasure: 5,
      endMeasure: 6,
      title: "[Section C] Classical Trill & Half Cadence (Measures 5-6)",
      suggestion: "Sing through the expressive resolution with clean breath support and warm resonance."
    }
  ],
  "s2": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Grumbling Cane Motif (Measures 1-2)",
      suggestion: "Portray Grandfather's slow, stern steps with rhythmic precision on the dotted rhythms. Low Bb2 must be solid and centered."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Comical Pause & Head Shake (Measures 3-4)",
      suggestion: "Clean releases on the rests. Maintain embouchure cushion without biting."
    }
  ],
  "peter-and-the-wolf-grandfather": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Grumbling Cane Motif (Measures 1-2)",
      suggestion: "Portray Grandfather's slow, stern steps with rhythmic precision on the dotted rhythms. Low Bb2 must be solid and centered."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Comical Pause & Head Shake (Measures 3-4)",
      suggestion: "Clean releases on the rests. Maintain embouchure cushion without biting."
    }
  ],
  "s_orch5": [
    {
      startMeasure: 1,
      endMeasure: 1,
      title: "[Section A] Ancient Chant & High C4 Entry (Measure 1)",
      suggestion: "Enter on high C4 with confident, soft pianissimo. Keep lower lip cushioned and let reed vibrate freely."
    },
    {
      startMeasure: 2,
      endMeasure: 2,
      title: "[Section B] Primitive Rubato Ornamentation (Measure 2)",
      suggestion: "Deliver the folk-like grace notes and chromatic turns with expressive, unmeasured fluidity."
    }
  ],
  "rite-of-spring-bassoon-solo": [
    {
      startMeasure: 1,
      endMeasure: 1,
      title: "[Section A] Ancient Chant & High C4 Entry (Measure 1)",
      suggestion: "Enter on high C4 with confident, soft pianissimo. Keep lower lip cushioned and let reed vibrate freely."
    },
    {
      startMeasure: 2,
      endMeasure: 2,
      title: "[Section B] Primitive Rubato Ornamentation (Measure 2)",
      suggestion: "Deliver the folk-like grace notes and chromatic turns with expressive, unmeasured fluidity."
    }
  ],
  "s_orch2": [
    {
      startMeasure: 1,
      endMeasure: 1,
      title: "[Section A] Whispering Staccato Sparks (Measure 1)",
      suggestion: "Ultra-crisp single tonguing at pp dynamic. Tongue touches only the extreme tip of the reed."
    },
    {
      startMeasure: 2,
      endMeasure: 2,
      title: "[Section B] Frantic Broom Velocity (Measure 2)",
      suggestion: "Maintain abdominal drive across the rapid F2 to F3 octave leaps as tempo accelerates."
    }
  ],
  "sorcerers-apprentice-bassoon": [
    {
      startMeasure: 1,
      endMeasure: 1,
      title: "[Section A] Whispering Staccato Sparks (Measure 1)",
      suggestion: "Ultra-crisp single tonguing at pp dynamic. Tongue touches only the extreme tip of the reed."
    },
    {
      startMeasure: 2,
      endMeasure: 2,
      title: "[Section B] Frantic Broom Velocity (Measure 2)",
      suggestion: "Maintain abdominal drive across the rapid F2 to F3 octave leaps as tempo accelerates."
    }
  ],
  "s_weber": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Heroic March Opening (Measures 1-2)",
      suggestion: "Crisp dotted rhythms with authoritative projection. Keep octave jumps in tune."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Dolce Operatic Flow (Measures 3-4)",
      suggestion: "Smooth transition into romantic cantabile warmth."
    }
  ],
  "weber-bassoon-concerto-op75": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Heroic March Opening (Measures 1-2)",
      suggestion: "Crisp dotted rhythms with authoritative projection. Keep octave jumps in tune."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Dolce Operatic Flow (Measures 3-4)",
      suggestion: "Smooth transition into romantic cantabile warmth."
    }
  ],
  "s_telemann": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Baroque Sighing Theme (Measures 1-2)",
      suggestion: "Subtle messa di voce swelling and receding on the appoggiaturas. Pure straight tone leading into gentle vibrato."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Minor Polyphonic Dialogue (Measures 3-4)",
      suggestion: "Clean chromatic finger coordination on Db and Eb passages."
    }
  ],
  "telemann-bassoon-sonata-f-minor": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Baroque Sighing Theme (Measures 1-2)",
      suggestion: "Subtle messa di voce swelling and receding on the appoggiaturas. Pure straight tone leading into gentle vibrato."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Minor Polyphonic Dialogue (Measures 3-4)",
      suggestion: "Clean chromatic finger coordination on Db and Eb passages."
    }
  ],
  "s_orch1": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Creeping Goblin Motif (Measures 1-2)",
      suggestion: "Strict pianissimo staccato. Keep fingers close to the tone holes."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Accelerando & Dynamic Drive (Measures 3-4)",
      suggestion: "Gradually build speed and intensity without losing finger clarity."
    }
  ],
  "in-the-hall-of-the-mountain-king": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Creeping Goblin Motif (Measures 1-2)",
      suggestion: "Strict pianissimo staccato. Keep fingers close to the tone holes."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Accelerando & Dynamic Drive (Measures 3-4)",
      suggestion: "Gradually build speed and intensity without losing finger clarity."
    }
  ],
  "s_orch3": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Crisp Tiptoe Staccato (Measures 1-2)",
      suggestion: "Light, buoyant staccato simulating ballet dancers on pointe. Keep tone centered on F#2."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Synchronized Dialogue (Measures 3-4)",
      suggestion: "Lock in tight rhythmic synchronization with zero rushing."
    }
  ],
  "tchaikovsky-swan-lake-little-swans": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Crisp Tiptoe Staccato (Measures 1-2)",
      suggestion: "Light, buoyant staccato simulating ballet dancers on pointe. Keep tone centered on F#2."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Synchronized Dialogue (Measures 3-4)",
      suggestion: "Lock in tight rhythmic synchronization with zero rushing."
    }
  ],
  "s_scheherazade": [
    {
      startMeasure: 1,
      endMeasure: 1,
      title: "[Section A] Oriental Storyteller Opening (Measure 1)",
      suggestion: "Theatrical pacing and improvisatory freedom across the opening arpeggios."
    },
    {
      startMeasure: 2,
      endMeasure: 2,
      title: "[Section B] Rapid 32nd-Note Flourish (Measure 2)",
      suggestion: "Pearl-like finger velocity with clean reed response on high chromatic turns."
    }
  ],
  "scheherazade-kalendar-prince-cadenza": [
    {
      startMeasure: 1,
      endMeasure: 1,
      title: "[Section A] Oriental Storyteller Opening (Measure 1)",
      suggestion: "Theatrical pacing and improvisatory freedom across the opening arpeggios."
    },
    {
      startMeasure: 2,
      endMeasure: 2,
      title: "[Section B] Rapid 32nd-Note Flourish (Measure 2)",
      suggestion: "Pearl-like finger velocity with clean reed response on high chromatic turns."
    }
  ],
  "s_w2": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Thirds Interval Leaps (Measures 1-2)",
      suggestion: "Continuous air support across interval leaps. Prevent finger accents."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Descending Stepwise Flow (Measures 3-4)",
      suggestion: "Smooth legato transitions and stable embouchure."
    }
  ],
  "weissenborn-op8-no4-thirds-intervals": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Thirds Interval Leaps (Measures 1-2)",
      suggestion: "Continuous air support across interval leaps. Prevent finger accents."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Descending Stepwise Flow (Measures 3-4)",
      suggestion: "Smooth legato transitions and stable embouchure."
    }
  ],
  "s_w3": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Slur 2, Tongue 2 Formula (Measures 1-2)",
      suggestion: "Clean contrast between the slurred pair and staccato pair. Metronomic 16th-note timing."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Tenor Register Agility (Measures 3-4)",
      suggestion: "Nimble finger coordination on high notes without biting."
    }
  ],
  "weissenborn-op8-no10-fast-staccato": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Slur 2, Tongue 2 Formula (Measures 1-2)",
      suggestion: "Clean contrast between the slurred pair and staccato pair. Metronomic 16th-note timing."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Tenor Register Agility (Measures 3-4)",
      suggestion: "Nimble finger coordination on high notes without biting."
    }
  ],
  "s_w4": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Cantabile Tenor Theme (Measures 1-2)",
      suggestion: "Broad cello-like legatissimo in the tenor clef. Warm, natural vibrato."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Dynamic Swell & Resolution (Measures 3-4)",
      suggestion: "Rich expressive dynamic arch leading into the tonic resolution."
    }
  ],
  "weissenborn-op8-no15-andante-cantabile": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Cantabile Tenor Theme (Measures 1-2)",
      suggestion: "Broad cello-like legatissimo in the tenor clef. Warm, natural vibrato."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Dynamic Swell & Resolution (Measures 3-4)",
      suggestion: "Rich expressive dynamic arch leading into the tonic resolution."
    }
  ],
  "s4": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Sneaky Jazz Opening (Measures 1-2)",
      suggestion: "Relaxed swing feel with crisp offbeat accents. Smooth chromatic grace notes."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Low Register Growl (Measures 3-4)",
      suggestion: "Deep resonant tone on low notes with playful phrasing."
    }
  ],
  "pink-panther-jazz-theme": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Sneaky Jazz Opening (Measures 1-2)",
      suggestion: "Relaxed swing feel with crisp offbeat accents. Smooth chromatic grace notes."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Low Register Growl (Measures 3-4)",
      suggestion: "Deep resonant tone on low notes with playful phrasing."
    }
  ],
  "s6": [
    {
      startMeasure: 1,
      endMeasure: 4,
      title: "[Section A] Joyful Theme Exposition (Measures 1-4)",
      suggestion: "Resonant, noble sound with clear articulation on each quarter note."
    },
    {
      startMeasure: 5,
      endMeasure: 8,
      title: "[Section B] Harmonic Modulation (Measures 5-8)",
      suggestion: "Maintain pitch center through the rising line."
    },
    {
      startMeasure: 9,
      endMeasure: 12,
      title: "[Section C] Grand Finale (Measures 9-12)",
      suggestion: "Full orchestral power on the concluding cadence."
    }
  ],
  "ode-to-joy-beethoven-bassoon": [
    {
      startMeasure: 1,
      endMeasure: 4,
      title: "[Section A] Joyful Theme Exposition (Measures 1-4)",
      suggestion: "Resonant, noble sound with clear articulation on each quarter note."
    },
    {
      startMeasure: 5,
      endMeasure: 8,
      title: "[Section B] Harmonic Modulation (Measures 5-8)",
      suggestion: "Maintain pitch center through the rising line."
    },
    {
      startMeasure: 9,
      endMeasure: 12,
      title: "[Section C] Grand Finale (Measures 9-12)",
      suggestion: "Full orchestral power on the concluding cadence."
    }
  ],
  "s7": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Staccato vs Legato Contrast (Measures 1-2)",
      suggestion: "Seamless transition from crisp detached notes to flowing melodic slurs."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Rapid Register Crossing (Measures 3-4)",
      suggestion: "Smooth finger action without clipping the final staccato note."
    }
  ],
  "weissenborn-op8-no12-staccato-legato": [
    {
      startMeasure: 1,
      endMeasure: 2,
      title: "[Section A] Staccato vs Legato Contrast (Measures 1-2)",
      suggestion: "Seamless transition from crisp detached notes to flowing melodic slurs."
    },
    {
      startMeasure: 3,
      endMeasure: 4,
      title: "[Section B] Rapid Register Crossing (Measures 3-4)",
      suggestion: "Smooth finger action without clipping the final staccato note."
    }
  ]
};

export function getLocalizedPracticeSteps(
  slugOrId: string,
  fallbackSteps: LocalizedStep[],
  isEn: boolean
): LocalizedStep[] {
  if (!isEn) return fallbackSteps;
  const enSteps = PRACTICE_STEPS_EN_MAP[slugOrId];
  if (enSteps && enSteps.length > 0) return enSteps;
  return fallbackSteps;
}

export function getLocalizedSegments(
  slugOrId: string,
  originalSegments: (ScoreSegment | LocalizedSegment)[],
  isEn: boolean
): (ScoreSegment | LocalizedSegment)[] {
  if (!isEn || !originalSegments) return originalSegments;
  const enSegments = SEGMENTS_EN_MAP[slugOrId];
  if (enSegments && enSegments.length === originalSegments.length) {
    return originalSegments.map((orig, idx) => ({
      ...orig,
      title: enSegments[idx].title || orig.title,
      suggestion: enSegments[idx].suggestion || orig.suggestion
    }));
  }
  if (enSegments && enSegments.length > 0) {
    return enSegments;
  }

  // Fallback programmatic translation if specific map not matched
  return originalSegments.map((seg) => {
    let t = seg.title || "";
    t = t
      .replace(/\[A段\]/g, "[Section A]")
      .replace(/\[B段\]/g, "[Section B]")
      .replace(/\[C段\]/g, "[Section C]")
      .replace(/\[D段\]/g, "[Section D]")
      .replace(/\[A'段\]/g, "[Section A']")
      .replace(/F大调上行音阶长音/g, "F Major Ascending Long Tones")
      .replace(/F大调下行音阶长音/g, "F Major Descending Long Tones")
      .replace(/二分音符连音级进与完满终止/g, "Half-Note Legato & Cadence")
      .replace(/主题呈示/g, "Theme Exposition")
      .replace(/第一乐段/g, "Part 1")
      .replace(/第二乐段/g, "Part 2")
      .replace(/第三乐段/g, "Part 3")
      .replace(/副歌/g, "Chorus")
      .replace(/主歌/g, "Verse")
      .replace(/华彩/g, "Cadenza")
      .replace(/终曲/g, "Finale")
      .replace(/尾声/g, "Coda")
      .replace(/第(\d+)-(\d+)小节/g, "Measures $1-$2")
      .replace(/第(\d+)小节/g, "Measure $1");

    return {
      ...seg,
      title: t,
      suggestion: seg.suggestion
    };
  });
}

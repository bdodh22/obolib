// Web Audio Synthesizer for Oboe Acoustic Simulation and Orchestral Drone
// Precise double-reed conical bore formant modeling for the complete oboe range (Bb3 to A6)

export interface NoteFreqMap {
  [key: string]: number;
}

export const OBOE_NOTE_FREQUENCIES: NoteFreqMap = {
  // Low Register (Small Octave)
  "B♭3": 233.08, "A#3": 233.08, "Bb3": 233.08,
  "B3": 246.94,
  "C4": 261.63, "C#4": 277.18, "D♭4": 277.18, "Db4": 277.18,
  "D4": 293.66, "D#4": 311.13, "E♭4": 311.13, "Eb4": 311.13,
  "E4": 329.63,
  "F4": 349.23, "F#4": 369.99, "G♭4": 369.99, "Gb4": 369.99,
  "G4": 392.00, "G#4": 415.30, "A♭4": 415.30, "Ab4": 415.30,
  "A4": 440.00, "A#4": 466.16, "B♭4": 466.16, "Bb4": 466.16,
  "B4": 493.88,

  // Middle Register (Two-line Octave)
  "C5": 523.25, "C#5": 554.37, "D♭5": 554.37, "Db5": 554.37,
  "D5": 587.33, "D#5": 622.25, "E♭5": 622.25, "Eb5": 622.25,
  "E5": 659.25,
  "F5": 698.46, "F#5": 739.99, "G♭5": 739.99, "Gb5": 739.99,
  "G5": 783.99, "G#5": 830.61, "A♭5": 830.61, "Ab5": 830.61,
  "A5": 880.00, "A#5": 932.33, "B♭5": 932.33, "Bb5": 932.33,
  "B5": 987.77,

  // High Register (Three-line Octave)
  "C6": 1046.50, "C#6": 1108.73, "D♭6": 1108.73, "Db6": 1108.73,
  "D6": 1174.66, "D#6": 1244.51, "E♭6": 1244.51, "Eb6": 1244.51,
  "E6": 1318.51,
  "F6": 1396.91, "F#6": 1479.98, "G♭6": 1479.98, "Gb6": 1479.98,
  "G6": 1567.98, "G#6": 1661.22, "A♭6": 1661.22, "Ab6": 1661.22,
  "A6": 1760.00
};

export class OboeSynthesizer {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private activeVoices: Set<{ oscs: (AudioNode | OscillatorNode)[]; gains: GainNode[] }> = new Set();
  private droneOsc: OscillatorNode | null = null;
  private droneGain: GainNode | null = null;
  private droneVibrato: OscillatorNode | null = null;

  private initContext() {
    if (typeof window === "undefined") return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public init() {
    this.initContext();
  }

  public stopAll() {
    this.stopDrone();
    if (this.ctx) {
      const now = this.ctx.currentTime;
      this.activeVoices.forEach((voice) => {
        voice.gains.forEach((g) => {
          try {
            g.gain.cancelScheduledValues(now);
            g.gain.setValueAtTime(g.gain.value, now);
            g.gain.linearRampToValueAtTime(0.0001, now + 0.03);
            setTimeout(() => {
              try { g.disconnect(); } catch {}
            }, 50);
          } catch {}
        });
        voice.oscs.forEach((o) => {
          try {
            if ("stop" in o) {
              (o as OscillatorNode).stop(now + 0.04);
            }
            setTimeout(() => {
              try { o.disconnect(); } catch {}
            }, 60);
          } catch {}
        });
      });
      this.activeVoices.clear();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stopAll();
    }
  }

  public noteToFreq(note: string): number {
    const normalized = note.trim();
    if (OBOE_NOTE_FREQUENCIES[normalized]) {
      return OBOE_NOTE_FREQUENCIES[normalized];
    }
    const clean = normalized.replace("b", "♭").replace("#", "♯");
    if (OBOE_NOTE_FREQUENCIES[clean]) {
      return OBOE_NOTE_FREQUENCIES[clean];
    }
    // Fallback: match root note letter and octave
    const match = normalized.match(/^([A-Ga-g])([#b♭♯]?)(\d)$/);
    if (match) {
      const standard = `${match[1].toUpperCase()}${match[2] === "b" ? "♭" : match[2] === "#" ? "♯" : match[2]}${match[3]}`;
      if (OBOE_NOTE_FREQUENCIES[standard]) return OBOE_NOTE_FREQUENCIES[standard];
    }
    return 440.0;
  }

  /**
   * 演奏具有真实双簧共振峰与穿透感歌唱音色的单音
   */
  public playOboeNote(noteName: string, durationSec: number = 1.3, volume: number = 0.5) {
    if (this.isMuted || typeof window === "undefined") return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const freq = this.noteToFreq(noteName);
      const now = this.ctx.currentTime;

      // Master Envelope
      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, now);
      // Oboe articulation: rapid speaking edge
      masterGain.gain.linearRampToValueAtTime(volume * 0.75, now + 0.035);
      masterGain.gain.exponentialRampToValueAtTime(volume * 0.6, now + 0.12);
      masterGain.gain.setValueAtTime(volume * 0.55, now + Math.max(0.15, durationSec - 0.15));
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

      // Oboe Formant 1: 1250 Hz (rich nasal reed core)
      const f1 = this.ctx.createBiquadFilter();
      f1.type = "peaking";
      f1.frequency.setValueAtTime(1250, now);
      f1.Q.setValueAtTime(3.5, now);
      f1.gain.setValueAtTime(7.0, now);

      // Oboe Formant 2: 2900 Hz (high acoustic projection ring)
      const f2 = this.ctx.createBiquadFilter();
      f2.type = "peaking";
      f2.frequency.setValueAtTime(2900, now);
      f2.Q.setValueAtTime(4.2, now);
      f2.gain.setValueAtTime(5.5, now);

      // Low pass to tame harsh buzz above 6.5kHz
      const lpf = this.ctx.createBiquadFilter();
      lpf.type = "lowpass";
      lpf.frequency.setValueAtTime(Math.min(freq * 10, 6500), now);

      // Oscillators (Sawtooth fundamental + slight square for double reed cane buzz)
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const osc3 = this.ctx.createOscillator();

      osc1.type = "sawtooth";
      osc1.frequency.setValueAtTime(freq, now);

      osc2.type = "square";
      osc2.frequency.setValueAtTime(freq * 2, now);

      osc3.type = "sawtooth";
      osc3.frequency.setValueAtTime(freq * 3, now);

      const g1 = this.ctx.createGain();
      const g2 = this.ctx.createGain();
      const g3 = this.ctx.createGain();

      g1.gain.setValueAtTime(0.7, now);
      g2.gain.setValueAtTime(0.28, now);
      g3.gain.setValueAtTime(0.18, now);

      // Subtle natural woodwind vibrato (5.4 Hz, begins smoothly after 0.18s)
      const vibrato = this.ctx.createOscillator();
      const vibratoGain = this.ctx.createGain();
      vibrato.frequency.setValueAtTime(5.4, now);
      vibratoGain.gain.setValueAtTime(0.0001, now);
      vibratoGain.gain.linearRampToValueAtTime(freq * 0.011, now + 0.22);

      vibrato.connect(vibratoGain);
      vibratoGain.connect(osc1.frequency);
      vibratoGain.connect(osc2.frequency);
      vibratoGain.connect(osc3.frequency);

      osc1.connect(g1);
      osc2.connect(g2);
      osc3.connect(g3);

      g1.connect(f1);
      g2.connect(f1);
      g3.connect(f1);

      f1.connect(f2);
      f2.connect(lpf);
      lpf.connect(masterGain);
      masterGain.connect(this.ctx.destination);

      vibrato.start(now);
      osc1.start(now);
      osc2.start(now);
      osc3.start(now);

      vibrato.stop(now + durationSec + 0.05);
      osc1.stop(now + durationSec + 0.05);
      osc2.stop(now + durationSec + 0.05);
      osc3.stop(now + durationSec + 0.05);

      const voice = {
        oscs: [osc1, osc2, osc3, vibrato],
        gains: [masterGain, g1, g2, g3, vibratoGain]
      };
      this.activeVoices.add(voice);

      setTimeout(() => {
        this.activeVoices.delete(voice);
      }, (durationSec + 0.1) * 1000);
    } catch (e) {
      console.warn("Oboe synthesis audio play error:", e);
    }
  }

  /**
   * 启动交响乐乐团标准 Drone 持续音（例如 A4 440Hz / 442Hz）
   */
  public startDrone(frequency: number = 440.0, volume: number = 0.4) {
    if (this.isMuted || typeof window === "undefined") return;
    this.stopDrone();
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      this.droneGain = this.ctx.createGain();
      this.droneGain.gain.setValueAtTime(0.0001, now);
      this.droneGain.gain.linearRampToValueAtTime(volume * 0.7, now + 0.2);

      const f1 = this.ctx.createBiquadFilter();
      f1.type = "peaking";
      f1.frequency.setValueAtTime(1250, now);
      f1.Q.setValueAtTime(3.0, now);
      f1.gain.setValueAtTime(6.0, now);

      this.droneOsc = this.ctx.createOscillator();
      this.droneOsc.type = "sawtooth";
      this.droneOsc.frequency.setValueAtTime(frequency, now);

      // Subtle tuning hum vibrato
      this.droneVibrato = this.ctx.createOscillator();
      const droneVibGain = this.ctx.createGain();
      this.droneVibrato.frequency.setValueAtTime(5.2, now);
      droneVibGain.gain.setValueAtTime(frequency * 0.003, now);

      this.droneVibrato.connect(droneVibGain);
      droneVibGain.connect(this.droneOsc.frequency);

      this.droneOsc.connect(f1);
      f1.connect(this.droneGain);
      this.droneGain.connect(this.ctx.destination);

      this.droneOsc.start(now);
      this.droneVibrato.start(now);
    } catch (e) {
      console.warn("Drone audio error:", e);
    }
  }

  /**
   * 调整持续 Drone 的频率（如平滑切换 440Hz <-> 442Hz）
   */
  public updateDroneFrequency(frequency: number) {
    if (this.ctx && this.droneOsc) {
      this.droneOsc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
    }
  }

  /**
   * 停止 Drone 持续长音
   */
  public stopDrone() {
    if (this.ctx && this.droneGain && this.droneOsc) {
      const now = this.ctx.currentTime;
      try {
        this.droneGain.gain.cancelScheduledValues(now);
        this.droneGain.gain.linearRampToValueAtTime(0.0001, now + 0.15);
        const osc = this.droneOsc;
        const vib = this.droneVibrato;
        setTimeout(() => {
          try { osc.stop(); osc.disconnect(); } catch {}
          try { vib?.stop(); vib?.disconnect(); } catch {}
        }, 180);
      } catch {}
      this.droneOsc = null;
      this.droneGain = null;
      this.droneVibrato = null;
    }
  }

  public startContinuousDrone(frequency: number = 440.0, volume: number = 0.4) {
    this.startDrone(frequency, volume);
  }

  public stopContinuousDrone() {
    this.stopDrone();
  }
}

export const oboeSynth = new OboeSynthesizer();

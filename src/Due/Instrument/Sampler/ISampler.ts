import * as Tone from 'tone';
import { IInstrument } from '../../../vite-env';

export interface ISampler extends IInstrument {
  _instrument: Tone.Sampler | null;
  _schedule: number | null;

  update: (newIntrument: ISampler) => Promise<void>;
}

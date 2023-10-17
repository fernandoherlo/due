/// <reference types="vite/client" />
import { IApp } from '~/src/types/IApp';

export { IEditor } from '~/src/types/IEditor';
export { IParser } from '~/src/types/IParser';
export { ILexer } from '~/src/types/ILexer';
export { IInterpreter } from '~/src/types/IInterpreter';
export { ICompiler } from '~/src/types/ICompiler';
export { IMusic } from '~/src/types/IMusic';
export { ILogger } from '~/src/types/ILogger';
export { IStore } from '~/src/types/IStore';
export { IErrorHandler } from '~/src/types/IErrorHandler';
export { IDebugger } from '~/src/types/IDebugger';
export { IUi } from '~/src/types/IUi';
export { IApp } from '~/src/types/IApp';

export { IInstruction } from '~/src/types/IInstruction';
export { IInstrument } from '~/src/types/IInstrument';
export { ISynth } from '~/src/types/ISynth';
export { ISampler } from '~/src/types/ISampler';
export { IMidiSampler } from '~/src/types/IMidiSampler';
export { IMidiOut } from '~/src/types/IMidiOut';
export { IMidiIn } from '~/src/types/IMidiIn';
export { IMagenta } from '~/src/types/IMagenta';
export { INote } from '~/src/types/INote';
export { IEffect } from '~/src/types/IEffect';
export { IVolumen } from '~/src/types/IVolumen';
export { IReverb } from '~/src/types/IReverb';
export { IChorus } from '~/src/types/IChorus';
export { IDelay } from '~/src/types/IDelay';

export { IVariableLive } from '~/src/types/IVariableLive';

declare global {
  interface Window { App: IApp; }
}

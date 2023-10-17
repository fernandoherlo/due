import { ICompiler, IDebugger, IMusic, IEditor, IErrorHandler, ILogger, IStore, IUi } from '~/src/vite-env';

export interface IApp {
  $debug: boolean;
  $logger: ILogger;
  $store: IStore;
  $error: IErrorHandler
  $debugger: IDebugger;
  $ui: IUi;

  $compiler: ICompiler | undefined;
  $editor: IEditor | undefined;
  $music: IMusic | undefined;

  $valueFactory: any | undefined;
  $variables: any;
  $variablesLive: any;
  $variablesLiveMap: any;

  start: () => void;
  compile: () => void;
}

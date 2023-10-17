import { IApp, ILogger, IStore, IErrorHandler, IDebugger, IMusic, ICompiler, IEditor, IUi } from '~/src/vite-env';
import Logger from './Logger';
import Store from './Store';
import ErrorHandler from './Error/handler';
import Debugger from './Debugger';
import Ui from './Ui';

export default class App implements IApp {
  $debug: boolean;
  $logger: ILogger;
  $store: IStore;
  $error: IErrorHandler;
  $debugger: IDebugger;
  $ui: IUi;

  $compiler: ICompiler | undefined;
  $editor: IEditor | undefined;
  $music: IMusic | undefined;

  $valueFactory: any | undefined;
  $variables: any = {};
  $variablesLive: any = {};
  $variablesLiveMap: any = {};

  constructor (debug: boolean = true, debuggerHtmlId: string = 'debugger') {
    this.$debug = debug;

    this.$logger = new Logger(this);
    this.$store = new Store(this);
    this.$error = new ErrorHandler(this);
    this.$debugger = new Debugger(this, debuggerHtmlId);
    this.$ui = new Ui(this);
  }

  async start () {
    if (!this.$editor || !this.$music) {
      throw Error('Not service set.');
    }

    this.$editor.create();
    await this.$music.start();
    await this.$ui.start();
  }

  async compile () {
    if (!this.$compiler || !this.$editor || !this.$music) {
      throw Error('Not service set.');
    }

    try {
      this.$ui.setWaiting();
      const editorCode = this.$editor.getCode();

      if (editorCode) {
        localStorage.setItem('due#editor', editorCode || '');
        const instructions = this.$compiler.exec(editorCode);

        await this.$music.process(instructions);

        this.$ui.setOk();
      }
    } catch (e: any) {
      this.$ui.setError();
      throw Error(`Error in proxy composer. ${e.message}`);
    }
  }
}

export interface ILoggerOption {
    cacheLimit: number, // * default 100
    displayLog: boolean, // * default true
}

export enum LOG_LEVEL {
    ERROR = 'ERROR',
    WARN = 'WARN',
    INFO = 'INFO',
    LOG = 'LOG',
    DEBUG = 'DEBUG'
}

export interface ILogITem {
    timestamp: string,
    level: LOG_LEVEL;
    scope?: string,
    content: string,
}

export class _Logger {

    private CACHE_LIMIT = 100;
    private DEFAULT_SCOPE = 'DEFAULT';

    private display = true;
    private cached: ILogITem[] = [];

    public init(option: ILoggerOption): void {
        this.CACHE_LIMIT = option.cacheLimit;
        this.display = option.displayLog;
    }

    public log(content: any, scope?: string): void {
        this._log(LOG_LEVEL.LOG, scope, content);
    }

    public error(content: any, scope?: string): void {
        this._log(LOG_LEVEL.ERROR, scope, content);
    }

    public warn(content: any, scope?: string): void {
        this._log(LOG_LEVEL.WARN, scope, content);
    }

    public info(content: any, scope?: string): void {
        this._log(LOG_LEVEL.INFO, scope, content);
    }

    public debug(content: any, scope?: string): void {
        this._log(LOG_LEVEL.DEBUG, scope, content);
    }

    public listHistory(): ILogITem[] {
        return this.cached;
    }

    private _log(
        level: LOG_LEVEL,
        scope: string = this.DEFAULT_SCOPE,
        content: any
    ): void {
        if (typeof content === 'object') {
            content = JSON.stringify(content, null, 4);
        }
        const item: ILogITem = {
            timestamp: this.getDateStr(),
            level: level,
            scope: scope,
            content: content
        }
        this.addItemToCache(item);
        if (this.display) {
            this.LOG_MAP[`${item.level}`](item);
        }
    }

    private addItemToCache(item: ILogITem): void {
        if (this.cached.length === this.CACHE_LIMIT) {
            this.cached.pop();  
        }
        this.cached.unshift(item)
    }

    private getDateStr(): string {
        const current = new Date();
        const month = this.padDigit(current.getMonth() +1) ;
        const date = this.padDigit(current.getDate());
        const hour = this.padDigit(current.getHours());
        const min = this.padDigit(current.getMinutes());
        return `${month}/${date} ${hour}:${min}`;
    }

    private LOG_MAP = {
        'LOG': (item: ILogITem) => {
            console.log(`${item.timestamp} [ ${item.scope} ]  ${item.content}`);
        },
        'WARN': (item: ILogITem) => {
            console.warn(`${item.timestamp} [ ${item.scope} ] ${item.content}`);
        },
        'ERROR': (item: ILogITem) => {
            console.error(`${item.timestamp} [ ${item.scope} ] ${item.content}`);
        },
        'INFO': (item: ILogITem) => {
            console.info(`${item.timestamp} [ ${item.scope} ] ${item.content}`);
        },
        'DEBUG': (item: ILogITem) => {
            console.log(`${item.timestamp} [ ${item.scope} ]`);
            console.log(item.content);
        },
    }

    private padDigit(num: number, padLength = 2): string {
        if (typeof num !== 'number' || !num) {
            return ''.padStart(padLength, '0');
        } else {
            return num.toString().padStart(padLength, '0');
        }
    }
}

export const MethodFormat = (name: string, content: any): string => {
    return `=> (${name}) : ${content}`
}
const Logger: _Logger = new _Logger();
export default Logger;

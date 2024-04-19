export {
  type Config,
  ConfigError,
  configure,
  dispose,
  type LoggerConfig,
  reset,
} from "./config.ts";
export { getFileSink, getRotatingFileSink } from "./filesink.deno.ts";
export {
  type Filter,
  type FilterLike,
  getLevelFilter,
  toFilter,
} from "./filter.ts";
export {
  type ConsoleFormatter,
  defaultConsoleFormatter,
  defaultTextFormatter,
  type TextFormatter,
} from "./formatter.ts";
export { getLogger, type Logger } from "./logger.ts";
export type { LogLevel, LogRecord } from "./record.ts";
export {
  type ConsoleSinkOptions,
  type FileSinkOptions,
  getConsoleSink,
  getStreamSink,
  type RotatingFileSinkOptions,
  type Sink,
  type StreamSinkOptions,
} from "./sink.ts";

// cSpell: ignore filesink

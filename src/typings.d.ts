declare module '*.svg'
declare module '*.eot'
declare module '*.ttf'
declare module '*.otf'
declare module '*.woff'
declare module '*.woff2'

declare module 'locomotive-scroll'

function createRef<T>(): RefObject<T>
interface RefObject<T> {
  readonly current: T | null | undefined;
}
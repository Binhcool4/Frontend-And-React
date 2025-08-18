function withDefault<T = string>(value?: T): T {
  if (value === undefined) {
    return "default" as T;
  }
  return value;
}

const a = withDefault();         
const b = withDefault("hello");    
const c = withDefault<number>(123); 
const d = withDefault<number>();   
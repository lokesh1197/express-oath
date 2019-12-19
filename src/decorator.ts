export const errorHandler = function(handler?: Function) {
    return function(target: any) {
      for (const funcName of Object.getOwnPropertyNames(target.prototype)) {
        const descriptor: any = Object.getOwnPropertyDescriptor(target.prototype, funcName);
        if (!(descriptor.value instanceof Function)) continue;
        const originalMethod = descriptor.value;
        descriptor.value = async function(...args: any[]) {
          try {
            console.log('info', ' Catch : ', funcName);
            return await originalMethod.apply(this, args);
          } catch (error) {
            console.log('error', ` ${funcName} ${target.constructor.name} : `, error);
            if (handler) return handler(error);
            else return Promise.reject(error);
          }
        };
        Object.defineProperty(target.prototype, funcName, descriptor);
      }
      return target;
    }
  }
  export const tryCatch = function (target: any, name: any, descriptor: any) {
      const originalMethod = descriptor.value
    
      descriptor.value = async function(...args: any[]) {
        try {
          console.log('info', ' Catch : ', name);
          return await originalMethod.apply(this, args);
        } catch (error) {
          console.log('error', ` ${name} ${target.constructor.name} : `, error);
          return Promise.reject(error);
        }
      }
    
      return descriptor
    }
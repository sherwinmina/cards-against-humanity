export class HandlerBase {
  constructor(client) {
    this.client = client;
    this._onDespose = [];
  }

   onLogin() {
      
  }
  
  dispose() {
    this._onDisposes.forEach( d => d());
    this._onDisposes = [];
  }

  onDispose(...callbacks) {
    this._onDisposes.push(...callbacks);
  }
}
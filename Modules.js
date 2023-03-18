class MooMoo {
  constructor(started) {
    this.socket = null;
    this.started = started;
    this.fetchSocket = function() {
      WebSocket.prototype.send = new Proxy(WebSocket.prototype.send, {
        apply(target, socket, data) {
          this.socket = socket;
          Reflect.apply(target, socket, data);
        }
      });
    }
  }
}

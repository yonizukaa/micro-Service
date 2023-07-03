class EventBus {
    constructor() {
      this.subscribers = {};
    }
  
    subscribe(eventName, callback) {
      if (!this.subscribers[eventName]) {
        this.subscribers[eventName] = [];
      }
      this.subscribers[eventName].push(callback);
    }
  
    publish(eventName, data) {
      const eventSubscribers = this.subscribers[eventName];
      if (eventSubscribers) {
        eventSubscribers.forEach((callback) => callback(data));
      }
    }
  }
  
  export const eventBus = new EventBus();
  
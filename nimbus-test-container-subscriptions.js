export default [
  {
    eventName: 'one-event',
    /**
     * TO-DO: fix this use of function reserved word
     */
    eventHandler: function() {
      console.log('hello from listener');
      console.log(this);
    }
  }
];
import Ember from 'ember';
import layout from '../templates/components/chat-app';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNames: ['chat'],
  classNameBindings: ['isActive:is-active'],
  isActive: false,

  toggleChatView() {
    this.toggleProperty('isActive');
  },

  actions: {

    triggerShowHideChat() {
      this.toggleChatView();
    }

  }
});

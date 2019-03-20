'use babel';

import Learning2learnView from './learning2learn-view';
import { CompositeDisposable } from 'atom';

export default {

  learning2learnView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.learning2learnView = new Learning2learnView(state.learning2learnViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.learning2learnView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'learning2learn:toggle': () => this.toggle()
    }));

    this.subscriptions.add(textEditor.onDidSave(
    $.ajax({
    	url: "http://127.0.0.1:8080/api",
    	// url: "https://learning2learn-gcp-backend.appspot.com/api",
    	method: "POST",
    	dataType: "json",
    	data: {
    		"code": code.innerText,
    		"timestamp": date,
    		"userid": userid,
			  "name": "Test",
    	}
    })));

  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.learning2learnView.destroy();
  },

  serialize() {
    return {
      learning2learnViewState: this.learning2learnView.serialize()
    };
  },

  toggle() {
    console.log('Learning2learn was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};

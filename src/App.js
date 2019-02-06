import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {
  state = {
    editor: `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
   
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
    
    `
  }

  editorChange = ({ target: { value } }) => this.setState({ editor: value })

  getMarkdownText = () => {
    const rawMarkup = marked(this.state.editor, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    const { editor } = this.state;
    return (
      <div className="App">
        <div className="container">
          {/* Editor */}
          <div className="editor">
            <div className="form-group">
              <label htmlFor="editor" className="d-block bg-info mb-0 py-1 px-3 text-white">Editor</label>
              <textarea onChange={this.editorChange} value={editor} className="form-control" id="editor"></textarea>
            </div>
          </div>

          {/* Output */}

          {editor && (<div id="preview" className="output jumbotron py-2" dangerouslySetInnerHTML={this.getMarkdownText()} />)}
        </div>
      </div>
    );
  }
}

export default App;

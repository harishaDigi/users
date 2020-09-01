import RefTest from './RefTest'
import React from 'react'
class AutoFocusTextInput extends React.Component {
          constructor(props) {
            super(props);
            this.textInput = React.createRef();
          }
        
          componentDidMount() {
            this.textInput.current.focusTextInput();
          }
        
          render() {
            return (
              <RefTest ref={this.textInput} />
            );
          }
        }
        
export default AutoFocusTextInput
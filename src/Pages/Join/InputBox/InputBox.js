import React from 'react';

class InputBox extends React.Component {
  render() {
    const { title, type, text, name, value, onChange, checkText, validation } =
      this.props;

    return (
      <>
        <label className="item">
          {title}
          <span className="required">*</span>
        </label>
        <div className="item">
          <input type={type} name={name} value={value} onChange={onChange} />
          {!validation && name === 'pwCheck' && value.length > 0 && (
            <span>{checkText}</span>
          )}
          {text && <span>{text}</span>}
        </div>
      </>
    );
  }
}
export default InputBox;

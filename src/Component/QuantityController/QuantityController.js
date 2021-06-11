import React from 'react';
import './QuantityController.scss';

class QuantityController extends React.Component {
  minimumNum = this.props.minimumNum ? 1 : this.props.minimumNum;

  minusBefore = () => {
    if (this.props.quantityNumber === 0) return;
    this.props.minus();
  };

  // 글자 입력 시 0으로 변환하는 기능 구현 예정입니다.
  onChangeNumber = e => {
    if (parseInt(e.target.value) < this.minimumNum) {
      alert(`최소 주문수량은 ${this.minimumNum} 입니다.`);
    }
    this.props.insert(e.target.value);
  };

  render() {
    const { quantityNumber, plus } = this.props;

    return (
      <div className="quantityController">
        <i class="fas fa-minus" onClick={this.minusBefore}></i>
        <input
          type="text"
          className="number"
          value={quantityNumber}
          onChange={this.onChangeNumber}
        />
        <i class="fas fa-plus" onClick={plus}></i>
      </div>
    );
  }
}

export default QuantityController;

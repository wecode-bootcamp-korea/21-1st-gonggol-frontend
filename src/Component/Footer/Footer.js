import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footerContainer">
        <div className="footerWrapper">
          <span className="footerLogo">GONGGOL</span>
          <div className="brandInfo">
            <p className="infoTop">
              <Link to="#">
                <strong>이용약관</strong>
              </Link>
              <span>|</span>
              <Link to="#">
                <strong>개인정보처리방침</strong>
              </Link>
            </p>
            <div className="infoMiddle">
              (주)에스제이그룹
              <span>|</span>
              대표 : 이주영
              <span>|</span>
              사업등록 번호 : 211-88-10329
              <Link to="#">[사업정보확인]</Link>
              <br />
              <div className="infoContainer">
                통신판매업 신고번호 : 제2011-서울강남-02294호
                <span>|</span>
                주소 : 06226 서울특별시 강남구 언주로 337 (역삼동) 동영문화 빌딩
                5층,9층
              </div>
              개인정보관리자 : <Link to="#">고명란</Link>
              <span>|</span>
              온라인고객센터(스토어관련문의):1899-0186
              <span>|</span>
              A/S 접수처:080-258-3883
              <span>|</span>
              Fax : 02-3442-3442
              <p className="copyrightContainer">
                COPYRIGHT(C) 2016 GONGGGOLⓇ ALL RIGHT RESERVED
              </p>
            </div>
          </div>
          <div className="verifiedSeal">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnwX1CRsWcDuG1ntUnVrEwnRehdklt11l8w&usqp=CAU"
              alt="인증마크"
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footerContainer">
        <div className="footerWrapper">
          <span className="footer-logo">GONGGOL</span>
          <div className="brandInfo">
            <p className="infoTop">
              <a href="#">
                <strong>이용약관</strong>
              </a>
              <span>|</span>
              <a href="#">
                <strong>개인정보처리방침</strong>
              </a>
            </p>
            <div className="infoMiddle">
              (주)에스제이그룹
              <span>|</span>
              대표 : 이주영
              <span>|</span>
              사업등록 번호 : 211-88-10329
              <a href="#">[사업정보확인]</a>
              <br />
              <div className="infoContainer">
                통신판매업 신고번호 : 제2011-서울강남-02294호
                <span>|</span>
                주소 : 06226 서울특별시 강남구 언주로 337 (역삼동) 동영문화 빌딩
                5층,9층
              </div>
              개인정보관리자 : <a href="#">고명란</a>
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
              src="https://lh3.googleusercontent.com/proxy/6rWkCixGZTQ-q0vRGFhzdO4YGvsm7GxF2q4kohKeqs9W2zHgeMLn3FXqFSGapGpNFBvKA_ya8uW2db8TtbP0redAZkYptKWYzd_vu0GoSsKCTGKO"
              alt="인증마크"
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

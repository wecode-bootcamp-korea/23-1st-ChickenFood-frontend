import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footerWraper">
        <div className="footerNavWraper">
          <div className="footerNavList">
            <li className="footerNavItem">공지사항</li>
            <li className="footerNavItem">이용약관</li>
            <li className="footerNavItem policy">개인정보처리방침</li>
            <li className="footerNavItem">영상정보처리방침</li>
            <li className="footerNavItem">매장안내</li>
            <li className="footerNavItem">고객센터</li>
            <li className="smallSelect">
              <select className="globalSite">
                <option>Global Skinfood</option>
                <option>US</option>
                <option>Japan</option>
                <option>Hong kong</option>
                <option>Iraq</option>
                <option>Turkey</option>
                <option>Vietnam</option>
              </select>
            </li>
            <li className="smallSelect">
              <select className="language">
                <option value="Language">Language</option>
                <option value="Korean">Korean</option>
                <option value="English">English</option>
              </select>
            </li>
          </div>
        </div>
        <div className="companyInfo">
          <ul className="infoList">
            <div className="infoList firstLine">
              <li className="infoItem">상호 (주)스킨푸드</li>
              <li className="infoItem first">대표이사 유근직</li>
              <li className="infoItem first">Tel 080-012-7878</li>
              <li className="infoItem first">Fax 02-597-4199</li>
            </div>
            <div className="infoList secondLine">
              <li className="infoItem">
                주소 경기도 안성시 미양면 제2공단1길 104 스킨푸드
              </li>
            </div>
            <div className="infoList thirdLine">
              <li className="infoItem">사업자등록번호 125-81-54503</li>
              <li className="infoItem third">통신사업자번호 제2005-00050호</li>
              <li className="infoItem third">개인정보 보호 책임자 김현지</li>
            </div>
            <li className="infoItem">제휴문의 webmaster@theskinfood.com</li>
          </ul>
          <div className="cs">
            <div className="csTitle">고객센터</div>
            <div className="csPhone">080-012-7878</div>
            <div className="csWorkTime">
              <p className="dailyWorkTime">평일 09:00 ~ 17:30</p>
              <p className="lunchTime">점심시간 11:30 ~ 12:30</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

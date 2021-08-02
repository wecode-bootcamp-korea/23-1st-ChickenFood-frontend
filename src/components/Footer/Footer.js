import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <Footer className="footerWraper">
        <img src="/images/bg_footer.png" alt="footer-background" />
        <div className="footerNavWraper">
          <ul className="footerNavList">
            <li className="footerNavItem">공지사항</li>
            <li className="footerNavItem">이용약관</li>
            <li className="footerNavItem">개인정보처리방침</li>
            <li className="footerNavItem">영상정보처리방침</li>
            <li className="footerNavItem">매장안내</li>
            <li className="footerNavItem">고객센터</li>
            <li className="smallSelect">
              <select className="golbalSite">
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
          </ul>
        </div>
        <div className="companyInfo">
          <ul className="infoList">
            <li className="infoItem">상호 (주)스킨푸드</li>
            <li className="infoItem">대표이사 유근직</li>
            <li className="infoItem">Tel 080-012-7878</li>
            <li className="infoItem">Fax 02-597-4199</li>
            <li className="infoItem">
              주소 경기도 안성시 미양면 제2공단1길 104 스킨푸드
            </li>
            <li className="infoItem">사업자등록번호 125-81-54503</li>
            <li className="infoItem">통신사업자번호 제2005-00050호</li>
            <li className="infoItem">개인정보 보호 책임자 김현지</li>
            <li className="infoItem">제혀문의 webmaster@theskinfood.com</li>
          </ul>
          <div className="cs">
            <div className="csTitle">고객샌터</div>
            <div className="csPhone">080-012-7878</div>
            <div className="csWorkTime">
              <p className="dailyWorkTime">평일 09:00 ~ 17:30</p>
              <p className="lunchTime">점심시간 11:30 ~ 12:30</p>
            </div>
          </div>
        </div>
      </Footer>
    );
  }
}

export default Footer;

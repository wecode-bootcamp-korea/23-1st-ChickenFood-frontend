import React from 'react';
import BestProductCarousel from './BestProductCarousel';
import './bestItem.scss';

class BestItem extends React.Component {
  render() {
    return (
      <div className="bestContainer">
        <div className="bestTitle">
          <a href="">이번주 베스트</a>
        </div>
        <div className="bestProducts">
          <div className="productsListWrap">
            <ul>
              <li>
                <img className="circle" src="/images/circle.png" alt="circle" />
                <p>스킨케어</p>
              </li>
              <li>
                <img className="circle" src="/images/circle.png" alt="circle" />
                <p>마스크</p>
              </li>
              <li>
                <img className="circle" src="/images/circle.png" alt="circle" />
                <p>선</p>
              </li>
              <li>
                <img className="circle" src="/images/circle.png" alt="circle" />
                <p>클렌징</p>
              </li>
              <li>
                <img className="circle" src="/images/circle.png" alt="circle" />
                <p>바디</p>
              </li>
              <li>
                <img className="circle" src="/images/circle.png" alt="circle" />
                <p>헤어</p>
              </li>
              <li>
                <img className="circle" src="/images/circle.png" alt="circle" />
                <p>남성</p>
              </li>
              <li>
                <img className="circle" src="/images/circle.png" alt="circle" />
                <p>베이스 메이크업</p>
              </li>
              <li>
                <img className="circle" src="/images/circle.png" alt="circle" />
                <p>커러 메이크업</p>
              </li>
              <li>
                <img className="circle" src="/images/circle.png" alt="circle" />
                <p>미용 부자재</p>
              </li>
            </ul>
          </div>
          <BestProductCarousel />
        </div>
      </div>
    );
  }
}

export default BestItem;

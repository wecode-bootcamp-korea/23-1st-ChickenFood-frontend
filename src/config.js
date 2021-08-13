const IP = 'http://10.58.2.134:8000';

/** 
회원 가입의 추천인(recommender)은 null값 허용
회원가입 : Method = POST body{name, email, passwrod, phone_number, address, recommender}
로그인  :Method = POST body{member, password} 
**/
export const SIGN_UP = `${IP}/members/signup`;
export const SIGN_IN = `${IP}/members/signin`;

/** 
URI에 id없으면 첫번째 브랜드 상품 리스트 호출
price : type => decimal(실수)
상품 리스트 : Method = GET Response : { items: [ {name, price, image}]}
**/
export const PRODUCTS = `${IP}/`;
export const ALL_PRODUCTS_LIST = `${IP}/products/`;
export const LATEST_PRODUCTS_LIST = `${IP}/products?filter=recent`;

/**
 디테일 상품 정보 : Method = GET Response : { item : { name, price, thumbnail, brand_name, type_name, detail_image, element},
                                          option : [ {name} ]
                                        } 
 **/
export const DETAIL_PRODUCT_INFO = `${IP}/products/view?no=<int:product_id>`;
export const BRAND_INFO = `${IP}/products/brand`;
export const TYPE_INFO = `${IP}/products/type`;

export const INSERT_CART = `${IP}/member/<int:member_id>/inventory`;
export const VIEW_CART = `${IP}/member/<int:member_id>/inventory`;
export const DELETE_CART = `${IP}/member/<int:member_id>/inventory/<int:inventory_id>`;
export const UPDATE_CART = `${IP}/member/<int:member_id>/inventory/<int:inventory_id>`;

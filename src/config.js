const parkIP = 'http://10.58.4.181:8000';
const sonIP = 'http://10.50.1.180:8000';

/** 
회원 가입의 추천인(recommender)은 null값 허용
회원가입 : Method = POST body{name, email, passwrod, phone_number, address, recommender}
로그인  :Method = POST body{member, password} 
**/
export const SIGN_UP = `${sonIP}/members/signup`;
export const SIGN_IN = `${sonIP}/members/signin`;

/** 
상품 리스트에 관한 api는 전부다 GET

URI에 id없으면 첫번째 브랜드 상품 리스트 호출
price : type => decimal(실수)
상품 리스트 : Method = GET Response : { items: [ {name, price, image}]}
**/
export const ALL_PRODUCTS_LIST = `${parkIP}/products/catalog`;
export const MAIN_PAGE_PRODUCTS_LIST = `${parkIP}/products/catalog?filter=main`;
export const BEST_PRODUCTS_LIST = `${parkIP}/products/catalog?filter=best`;
export const LATEST_PRODUCTS_LIST = `${parkIP}/products/catalog?filter=recent`;
export const BRAND_PRODUCTS_LIST = `${parkIP}/products/catalog?brand=<int:brand_id>`;
export const TYPE_PRODUCTS_LIST = `${parkIP}/products/catalog?type=<int:type_id>`;

/**
 디테일 상품 정보 : Method = GET Response : { item : { name, price, thumbnail, brand_name, type_name, detail_image, element},
                                          option : [ {name} ]
                                        } 
 **/
export const DETAIL_PRODUCT_INFO = `${parkIP}/products/view?no=<int:product_id>`;
export const BRAND_INFO = `${parkIP}/products/brand`;
export const TYPE_INFO = `${parkIP}/products/type`;

export const INSERT_CART = `${sonIP}/member/<int:member_id>/inventory`;
export const VIEW_CART = `${sonIP}/member/<int:member_id>/inventory`;
export const DELETE_CART = `${sonIP}/member/<int:member_id>/inventory/<int:inventory_id>`;
export const UPDATE_CART = `${sonIP}/member/<int:member_id>/inventory/<int:inventory_id>`;

const inputData_list = [
  {
    id: 1,
    label: 'userPw',
    name: 'password',
    type: 'password',
    className: '',
    noti: '비밀번호 (8자리 이상 입력해 주세요.)',
    necessary: 'required',
  },

  {
    id: 2,
    label: 'userPwCheck',
    name: 'passwordCheck',
    type: 'password',
    className: '',
    noti: '비밀번호 확인',
    necessary: 'required',
  },

  {
    id: 3,
    label: 'userPhoneNumber',
    name: 'phone_number',
    type: 'text',
    className: '',
    noti: '전화번호 (ex. 01012345678)',
    necessary: 'required',
  },

  {
    id: 4,
    label: 'userEmail',
    name: 'email',
    type: 'text',
    className: '',
    noti: '이메일',
    necessary: 'required',
  },

  {
    id: 5,
    label: 'userAddress',
    name: 'address',
    type: 'text',
    className: '',
    noti: '주소',
    necessary: 'none',
  },

  {
    id: 6,
    label: 'recommendUserId',
    name: 'recommender_name',
    type: 'text',
    className: '',
    noti: '추천인 아이디',
    necessary: 'none',
  },
];

export default inputData_list;

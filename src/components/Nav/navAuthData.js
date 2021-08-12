const navAuthData_list = {
  isLogin: [
    {
      id: '1',
      name: '로그아웃',
      classname: 'pageMove logout',
      path: '/',
    },

    {
      id: '2',
      name: '마이페이지',
      classname: 'pageMove mypage',
      path: '',
    },

    {
      id: '3',
      name: '멤버십',
      classname: 'pageMove membership',
      path: '',
    },

    {
      id: '4',
      name: '고객센터',
      classname: 'pageMove cs',
      path: '',
    },
  ],

  isNotLogin: [
    {
      id: '1',
      name: '로그인',
      path: '/signin',
    },

    {
      id: '2',
      name: '회원가입',
      path: '/signup',
    },

    {
      id: '3',
      name: '마이페이지',
      path: '',
    },

    {
      id: '4',
      name: '멤버십',
      path: '',
    },

    {
      id: '5',
      name: '고객센터',
      path: '',
    },
  ],
};

export default navAuthData_list;

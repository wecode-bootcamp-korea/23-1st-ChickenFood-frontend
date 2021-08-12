const signInData_list = {
  inputData: [
    {
      id: 1,
      label: 'userId',
      name: 'member',
      type: 'text',
      necessary: 'none',
      noti: '아이디',
    },
    {
      id: 2,
      label: 'userPw',
      name: 'password',
      type: 'password',
      necessary: 'none',
      noti: '비밀번호',
    },
  ],

  listData: [
    {
      id: 1,
      path: '#',
      data: '회원가입',
    },
    {
      id: 2,
      path: '#',
      data: '아이디 찾기',
    },
    {
      id: 3,
      path: '#',
      data: '비밀번호 찾기',
    },
  ],
};

export default signInData_list;

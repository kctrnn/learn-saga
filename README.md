# Student Management 👀

## Overview

A project where I learned how to use the Redux Saga in combination with TypeScript, Redux Toolkit

### Built with

- UI: `Material UI`
- Routing: `react-router-dom`
- Form: `react-hook-form`
- Form validation: `yup`
- HTTP client: `axios`

### Routings

- /login: Login page
- /admin: Master layout for admin page

- /admin/dashboard: Dashboard
- /admin/students: Search students
- /admin/students/add: Add new student
- /admin/students/:studentId: Update student info

## Features

- auth

`authSlice.ts`

```ts
export interface authState {
  currentUser: Partial<User>;
  logging: boolean;
  isLoggedIn: boolean;
}

const initialState: authState = {
  currentUser: {},
  isLoggedIn: false,
  logging: false,
};

export interface LoginPayload {
  email: string;
  password: string;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },

    loginSuccess(state, action: PayloadAction<User>) {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },

    loginFailed(state) {
      state.logging = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = {};
    },
  },
});
```

- dashboard
- student

`studentSlice.ts`

```ts
export interface studentState {
  list: Student[];
  pagination: PaginationResponse;
  filter: Partial<ListParams>;
  loading: boolean;
}

const initialState: studentState = {
  list: [],
  pagination: {
    _limit: 15,
    _page: 1,
    _totalRows: 15,
  },

  filter: {
    _page: 1,
    _limit: 15,
  },

  loading: false,
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    // dispatch(fetchStudentList(filter))
    fetchStudentList(state, action: PayloadAction<Partial<ListParams>>) {
      state.loading = true;
    },

    fetchStudentListSuccess(
      state,
      action: PayloadAction<ListResponse<Student>>
    ) {
      state.loading = false;
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
    },

    fetchStudentListFailed(state) {
      state.loading = false;
    },

    setFilter(state, action: PayloadAction<Partial<ListParams>>) {
      state.filter = action.payload;
    },
  },
});
```

## How to use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/kctrnn/learn-saga

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements

- [cra-template-redux-typescript](https://github.com/reduxjs/cra-template-redux-typescript)
- [Redux-Saga](https://redux-saga.js.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Contact

- GitHub [@kctrnn](https://github.com/kctrnn)
- Twitter [@kctrnn](https://twitter.com/kctrnn)

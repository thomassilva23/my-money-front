# My Money - Frontend

React-based web application for personal finance management.

## Technologies

- React 18
- Redux (with redux-form, redux-thunk, redux-promise)
- React Router 6
- Axios
- Webpack 5
- Babel 7
- AdminLTE 2.3 (UI template)
- Font Awesome 4.7

## Requirements

- Node.js 14+
- Backend API running on port 3003

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run in development mode:
```bash
npm run dev
```

3. Build for production:
```bash
npm run production
```

The application will be available at `http://localhost:8080`

## Project Structure

```
src/
  auth/                 # Authentication (login/signup)
  billingCycle/         # Billing cycles management
  common/
    form/               # Form components (Input)
    layout/             # Layout components (Grid, Row)
    msg/                # Message components
    operator/           # Conditional rendering (If)
    tab/                # Tab components
    template/           # Page template (Header, Sidebar, Footer)
    widget/             # Dashboard widgets (ValueBox)
  dashboard/            # Dashboard with summary
  main/
    app.jsx             # Main app component
    routes.jsx          # Application routes
    reducers.js         # Redux reducers
  index.jsx             # Entry point
```

## Features

- User authentication (login/signup)
- JWT token validation
- Dashboard with credit/debit summary
- Billing cycles CRUD operations
- Form validation
- Toast notifications

## API Configuration

The API URL is configured in `src/consts.js`. Default endpoints:
- Open API: `http://localhost:3003/oapi`
- Protected API: `http://localhost:3003/api`

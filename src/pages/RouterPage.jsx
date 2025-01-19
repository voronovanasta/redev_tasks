import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function RouterPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> React Router</Title>
      <Paragraph style={style} strong>
        Основная цель роутинга в веб-приложениях заключается в том, чтобы позволить пользователям
        перемещаться по различным частям приложения БЕЗ ПЕРЕЗАГРУЗКИ страницы.
      </Paragraph>
      <Title style={style} level={4}>
        {' '}
        Installing
      </Title>
      <Paragraph style={style}>npm install react-router-dom@next</Paragraph>
      <Paragraph style={style} mark strong>
        BrowserRouter :
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        Это компонент, который оборачивает ваше приложение и предоставляет контекст для
        маршрутизации. Он используется для настройки основного маршрутизатора в приложении.{' '}
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark strong>
        Routes:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        Routes - это компонент-контейнер, в котором определяют все маршруты в приложении. Мы
        используем Routes для группировки нескольких Route компонентов.{' '}
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Мое приложение</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark strong>
        Route:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        Route - это компонент, который определяет отдельный маршрут внутри Routes. Каждый Route
        имеет свой путь (path) и элемент (element), который будет отображаться, когда маршрут
        совпадает.{' '}
      </Paragraph>
      <Paragraph style={style} strong>
        Также можно использовать дополнительные атрибуты, такие как exact для точного совпадения
        пути и (*) fallback для отображения компонента-заглушки, если не найден ни один из
        маршрутов.
      </Paragraph>

      <Paragraph style={style}>
        <pre>
          {`import { Routes, Route } from 'react-router-dom';

// ...

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark strong>
        Link:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        Link используется для создания ссылок для навигации между маршрутами в приложении.{' '}
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`
<Link to="/">Главная</Link>
<Link to="/about">О нас</Link>
<Link to="/contact">Контакты</Link>
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark strong>
        NavLink:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        Whenever a NavLink is active, it will automatically have an .active class name for easy
        styling with CSS:
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`
import { NavLink } from "react-router";

export function MyAppNav() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/trending" end>
        Trending Concerts
      </NavLink>
      <NavLink to="/concerts">All Concerts</NavLink>
      <NavLink to="/account">Account</NavLink>
    </nav>
  );
}

a.active {
  color: red;
}
`}
        </pre>
      </Paragraph>

      <Paragraph style={style} strong>
        It also has callback props on className, style, and children with the active state for
        inline styling or conditional rendering:
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`
// className
<NavLink
  to="/messages"
  className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }
>
  Messages
</NavLink>
Copy code to clipboard
// style
<NavLink
  to="/messages"
  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
  })}
>
  Messages
</NavLink>
Copy code to clipboard
// children
<NavLink to="/message">
  {({ isActive }) => (
    <span className={isActive ? "active" : ""}>
      {isActive ? "👉" : ""} Tasks
    </span>
  )}
</NavLink>
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark strong>
        useNavigate:
      </Paragraph>
      <Paragraph style={style}>
        Хук useNavigate используется для программной навигации между маршрутами. Он позволяет вам
        переходить к другим маршрутам из компонентов или обработчиков событий.
      </Paragraph>
      <Paragraph style={style} strong>
        This hook allows the programmer to navigate the user to a new page without the user
        interacting. For ex.:
      </Paragraph>
      <Paragraph style={style}> - After a form submission completes</Paragraph>
      <Paragraph style={style}> - Logging them out after inactivity</Paragraph>
      <Paragraph style={style}> - Timed UIs like quizzes, etc.</Paragraph>
      <Paragraph style={style}>
        <pre>
          {`
import { useNavigate } from "react-router";

export function LoginPage() {
  let navigate = useNavigate();

  return (
    <>
      <MyHeader />
      <MyLoginForm
        onSuccess={() => {
          navigate("/dashboard");
        }}
      />
      <MyFooter />
    </>
  );
}

`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark strong>
        useParams:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        UseParams - это хук, который позволяет получать параметры из маршрута в React Router Dom v6.
        Когда ты используешь useParams, ты можешь получить объект params, который содержит значения
        параметров из текущего маршрута.{' '}
      </Paragraph>
      <Paragraph style={style} strong>
        Чтобы определить параметр маршрута, мы используем двоеточие (:) перед именем параметра в
        пути маршрута. Например:
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`
<Route path="/users/:id" element={<UserDetailPage />} />

import { useParams } from 'react-router-dom';

const UserDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Детали пользователя с ID {id}</h2>
      {/* Дополнительный контент */}
    </div>
  );
};
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong>
        You can have multiple dynamic segments in one route path:
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`
<Route
  path="/c/:categoryId/p/:productId"
  element={<Product />}
/>

import { useParams } from "react-router";

export default function Team() {
  let { categoryId, productId } = useParams();
  // ...
}
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark strong>
        useLocation:
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        useLocation - это хук, который позволяет получать информацию о текущем URL и его параметрах
        в React Router Dom v6.{' '}
      </Paragraph>
      <Paragraph style={style} strong mark>
        Объект location обычно имеет следующие свойства:
      </Paragraph>
      <Paragraph style={style}>
        - pathname: строка, представляющая текущий путь (например, /about).
      </Paragraph>
      <Paragraph style={style}>
        - search: строка, представляющая строку запроса (например, ?query=example).
      </Paragraph>
      <Paragraph style={style}>
        - hash: строка, представляющая фрагмент URL (например, #section1).
      </Paragraph>
      <Paragraph style={style}>
        - state: объект, который может содержать состояние, переданное при навигации.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`
 const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about', {
      state: { fromDashboard: true },
    });
  };

  //в компоненте About
  const location = useLocation();
  const state = location.state;
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark strong>
        Outlet:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        Outlet определяет место, где будут отображаться вложенные маршруты.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`
<Routes>
  <Route path="dashboard" element={<Dashboard />}>
    <Route index element={<Home />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>


import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* will either be <Home/> or <Settings/> */}
      <Outlet />
    </div>
  );
}
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong>
        Важно отметить, что Outlet должен быть расположен внутри компонента, который уже является
        частью маршрутизации, например, внутри компонента, который используется в маршруте.
      </Paragraph>

      <Paragraph style={style} mark strong>
        PrivateRoute:
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ ...props }) => {
  const isAuth = // Логика проверки аутентификации пользователя
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </Router>
  );
};
`}
        </pre>
      </Paragraph>
      <Paragraph style={style}>
        Routes without a path create new nesting for their children, but they dont add any segments
        to the URL.
      </Paragraph>
      <Paragraph style={style} mark strong>
        Index Routes{' '}
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        Index routes render into their parents Outlet at their parents URL (like a default child
        route). They cant have children. They are configured with the index prop:
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`
<Routes>
  <Route path="/" element={<Root />}>
    {/* renders into the outlet in <Root> at "/" */}
    <Route index element={<Home />} />

    <Route path="dashboard" element={<Dashboard />}>
      {/* renders into the outlet in <Dashboard> at "/dashboard" */}
      <Route index element={<DashboardHome />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  </Route>
</Routes>
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark strong>
        {' '}
        Route Prefixes
      </Paragraph>
      <Paragraph style={style}>
        A Route path without an element prop adds a path prefix to its child routes, without
        introducing a parent layout.
        <Paragraph style={style}>
          <pre>
            {`
<Route path="projects">
  <Route index element={<ProjectsHome />} />
  <Route element={<ProjectsLayout />}>
    <Route path=":pid" element={<Project />} />
    <Route path=":pid/edit" element={<EditProject />} />
  </Route>
</Route>
`}
          </pre>
        </Paragraph>
      </Paragraph>
      <Paragraph style={style} mark strong>
        {' '}
        Query Parameters
      </Paragraph>
      <Paragraph style={style}>
        Search params are the values after a ? in the URL. They are accessible from useSearchParams,
        which returns an instance of URLSearchParams
        <Paragraph style={style}>
          <pre>
            {`
function SearchResults() {
  let [searchParams] = useSearchParams();
  return (
    <div>
      <p>
        You searched for <i>{searchParams.get("q")}</i>
      </p>
      <FakeSearchResults />
    </div>
  );
}

`}
          </pre>
        </Paragraph>
      </Paragraph>
    </Layout>
  );
}

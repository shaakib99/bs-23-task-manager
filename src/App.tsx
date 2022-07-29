import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/common/protected-route";
import ErrorPage from "./pages/error";
import Home from "./pages/home";
import Login from "./pages/login";
import Members from "./pages/members";
import Tasks from "./pages/tasks";
import UpdateMember from "./pages/update-member";
import UpdateTask from "./pages/update-task";
import store from "./redux/store";

const NotFound = () => (
  <ErrorPage code={404} message="The page you are looking for, not found" />
);

const RouteNotFound = (props: any) => (
  <Route {...props} element={<NotFound />} />
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/members"
            element={
              <ProtectedRoute>
                <Members />
              </ProtectedRoute>
            }
          />
          <Route path="/update">
            {RouteNotFound({ index: true })}
            <Route path="member">
              {RouteNotFound({ index: true })}
              <Route
                path=":slug"
                element={
                  <ProtectedRoute>
                    <UpdateMember />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="task">
              {RouteNotFound({ index: true })}
              <Route
                path=":slug"
                element={
                  <ProtectedRoute>
                    <UpdateTask />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          {RouteNotFound({ path: "*" })}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

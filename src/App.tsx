import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { mockRoute } from "./common/mock/routes.mock";
import ProtectedRoute from "./components/common/protected-route";
import RedirectRoute from "./components/common/redirect-route";
import ErrorPage from "./pages/error";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Members from "./pages/members";
import Tasks from "./pages/tasks";
import UpdateMember from "./pages/update-member";
import UpdateTask from "./pages/update-task";
import store from "./redux/store";

const NotFound = () => (
  <ErrorPage code={404} message="The page you are looking for, not found" />
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={mockRoute.ROOT}
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path={mockRoute.TASK}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Tasks />
                </ProtectedRoute>
              }
            />
            <Route
              path=":slug"
              element={
                <ProtectedRoute>
                  <UpdateTask />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path={mockRoute.MEMBER}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <Members />
                </ProtectedRoute>
              }
            />
            <Route
              path=":slug"
              element={
                <ProtectedRoute>
                  <UpdateMember />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path={mockRoute.LOGIN}
            element={
              <RedirectRoute>
                <Login />
              </RedirectRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

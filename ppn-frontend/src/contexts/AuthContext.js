import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/authReducer";
import setAuthToken from "../utils/setAuthToken";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME, SET_AUTH } from "./constants";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    // đang tải - chưa được xác thực - chưa có thông tin của user
    // state inital
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  //Authenticate user
  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }

    try {
      const response = await axios.get(`${apiUrl}/user`);
      if (response.data.success) {
        dispatch({
          type: SET_AUTH,
          payload: { isAuthenticated: true, user: response.data.user },
        });
      }
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuthToken(null);
      dispatch({
        type: SET_AUTH,
        payload: { isAuthenticated: false, user: null },
      });
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  //login
  const loginUser = async (userFormData) => {
    try {
      const response = await axios.post(`${apiUrl}/user/login`, userFormData);
      if (response.data.success) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
        loadUser();
        // data ở đây là object kết quả mà lúc mình call api
        return response.data;
      }
    } catch (error) {
      if (error.response.data) return error.response.data;
      // lỗi từ server báo về
      // không phải từ server báo về thì nó nằm ở else
      else return { success: false, message: error.message };
    }
  };

  //register
  const registerUser = async (userFormData) => {
    try {
      const response = await axios.post(
        `${apiUrl}/user/register`,
        userFormData
      );
      if (response.data.success) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );

        loadUser();
        // data ở đây là object kết quả mà lúc mình call api
        return response.data;
      }
    } catch (error) {
      if (error.response.data) return error.response.data;
      // lỗi từ server báo về
      // không phải từ server báo về thì nó nằm ở else
      else return { success: false, message: error.message };
    }
  };

  // logout
  const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    dispatch({
      type: SET_AUTH,
      payload: { isAuthenticated: false, user: null },
    });
  };

  //context data
  const authContextData = { loginUser, registerUser, logoutUser, authState };

  // return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

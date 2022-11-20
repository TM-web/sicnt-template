import axios from "axios";

// Authorization Settings
export const AuthApi = axios.create({
  baseURL: process.env.REACT_APP_AUTH_API,
});

export const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

generateInterceptor(request);

function generateInterceptor(request: any) {
  request.interceptors.request.use(
    function (config: any) {
      config.headers.Authorization = "Bearer " + localStorage.getItem("token");
      return config;
    },
    (error: any) => Promise.reject(error)
  );

  request.interceptors.response.use(
    (config: any) => config,
    (error: any) => {
      if (error?.response?.status === 401) {
        AuthApi.post(
          "/oauth/token",
          {
            grant_type: "refresh_token",
            refresh_token: localStorage.getItem("refresh_token"),
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
          .then((result) => {
            const newToken = result?.data?.access_token;
            const newRefreshToken = result?.data?.refresh_token;
            localStorage.setItem("token", newToken);
            localStorage.setItem("refresh_token", newRefreshToken);
          })
          .catch((error) => {
            if (
              error?.response?.status === 401 &&
              error?.response?.data === "Token expired."
            ) {
              console.log("error", error);
            }
          });
      }

      return Promise.reject(error);
    }
  );
}

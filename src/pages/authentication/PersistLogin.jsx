import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { User } from "./UserContext";
import Cookies from "universal-cookie";
import Loading from "../../components/Loading";

const PersistLogin = () => {
  const context = useContext(User);
  const token = context.value.token;
  const [loading, setLoading] = useState(true);

  const cookie = new Cookies();
  const TokenCookie = cookie.get("Bearer");

  useEffect(() => {
    const refresh = async () => {
      try {
        const data = await axios.post(
          "http://naturenestrealty.42web.io/api/refresh",
          null,
          {
            headers: {
              Authorization: "Bearer " + TokenCookie,
            },
          }
        );
        cookie.set("Bearer", data.data.token, { path: "/" });
        cookie.set("userData", data.data.user, { path: "/" });
        context.setValue({
          userData: data.data.user,
          token: data.data.token,
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    !token ? refresh() : setLoading(false);
  }, []);

  return loading ? <Loading /> : <Outlet />;
};

export default PersistLogin;

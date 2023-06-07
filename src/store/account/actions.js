import axiosInst from "@/utility/axiosInst";

import { REQUEST_ACCOUNT_LIST_TO_SPRING } from "./mutation-types";

export default {
  requestSpringToCheckEmail({}, payload) {
    const { accountEmail: email } = payload;
    console.log("email: " + email);

    return axiosInst
      .get(`/account/check-email/${email}`)
      .then((res) => {
        if (res.data) {
          alert("사용 가능한 이메일 입니다.");
          return true;
        } else {
          alert("중복된 이메일 입니다.");
          return false;
        }
      })
      .catch((res) => {
        alert("문제 발생 ! ");
      });
  },

  requestCreateAccountToSpring({}, payload) {
    const { email, password } = payload;

    return axiosInst
      .post("/account/regist", { email, password })
      .then((res) => {
        alert("계정 등록 성공!");
        return res;
      })
      .catch(() => {
        alert("문제 발생!");
      });
  },

  requestAccountListToSpring({ commit }) {
    axiosInst.get("/account/list").then((res) => {
      commit(REQUEST_ACCOUNT_LIST_TO_SPRING, res.data);
    });
  },

  requestLogin({}, payload) {
    axiosInst
      .post("/account/login", payload)
      .then((res) => {
        alert("login success!");
        localStorage.setItem("accountToken", res.data);
        return res;
      })
      .catch(() => alert("ERROR"));
  },

  requestDelete({}, email) {
    return axiosInst
      .delete(`/account/delete/${email}`)
      .then((res) => {
        alert("삭제 하였습니다.");
      })
      .catch(() => {
        alert("문제 발생 ~");
      });
  },
};

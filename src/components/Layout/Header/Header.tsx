import React from "react";
import classes from "./Header.module.scss";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Logo from "assets/images/svg/logo.svg";
// import Language from "../components/Language";
// import { useQuery } from "react-query";
import User from "assets/images/svg/user.svg";
import {Space, Tag} from "antd";
// import { Input } from "../../AntComponents";

export type Props = {};

const Header = (props: Props) => {
  const { t, i18n } = useTranslation();
  // const history = useHistory();

  // const getUser = useQuery(
  //   "getUser",
  //   () => AuthApi.get<any>("/oauth/account"),
  //   {}
  // );
  // const user = getUser?.data?.data;

  const roleNames: any = {
    DEPT_CHIEF: t("Бўлим бошлиғи (ҚҚС маъмурчилиги)"),
    DIRECTOR: t("Раҳбар"),
    INSPECTOR: t("Масъул ходим (ҚҚС маъмурчилиги)"),
    GNK_INSPECTOR: t("Масъул ходим (ДСҚ)"),
    READER: t("Кўриш учун (READER)"),
  };

  return (
    <>
      <div className={classes.header}>
        <div className="container">
          <div className={classes["header-content"]}>
            <Link to={"/"} className={classes.logo}>
              <img src={Logo} alt="" />
              <span>{t("Your Project Main Title")}</span>
            </Link>

            {/*<Input*/}
            {/*  isSearch*/}
            {/*  placeholder={t("СТИР бўйича қидирув")}*/}
            {/*  style={{ width: 400 }}*/}
            {/*  type={"number"}*/}
            {/*  onSearch={(val: string) => {*/}
            {/*    history.push(`/company-info/${val}`);*/}
            {/*  }}*/}
            {/*/>*/}

            <Space>
              <div className={"d-flex"}>
                <div className={classes.user}>
                  <img src={User} alt="avatar" width={50} height={50} />
                  <div className={classes["user-info"]}>
                    <p className={"mb-5"}>
                      {"KAKHRAMONOV TEMIRIDDIN JAVLONBEK O'GLI"}
                    </p>
                    <i style={{ color: "#7e7e7e" }} className={"fz12"}>
                      Инспектор ГНК
                    </i>
                    <Space className={"mt-5"}>
                      <Tag>{String("gnk admin").toLowerCase()}</Tag>
                    </Space>

                    {/*<Space size={"small"}>*/}
                    {/*  <Tag style={{ width: "fit-content" }}>*/}
                    {/*    {(getUser.isFetched &&*/}
                    {/*      user?.roles &&*/}
                    {/*      roleNames[user?.roles["0"]]) ||*/}
                    {/*      "-"}*/}
                    {/*  </Tag>*/}
                    {/*</Space>*/}
                  </div>
                </div>
              </div>
              <div className={classes.lang}>{/*<Language />*/}</div>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

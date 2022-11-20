import React from "react";
import classes from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import { Col, Input, Row, Select } from "antd";
import { Link } from "react-router-dom";
import { langOptions } from "constants/general";
import Logo from "assets/images/svg/logo.svg";
import User from "assets/images/svg/user.svg";

export type Props = {};

const Header = (props: Props) => {
  const { t } = useTranslation();
  const { Search } = Input;
  return (
    <>
      <div className={classes.header}>
        <div className="container">
          <Row gutter={[20, 20]} className={classes["header-content"]}>
            <Col lg={7} className={"d-flex"}>
              <Link to={"/"} className={classes.logo}>
                <img src={Logo} alt="" />
                <span>{t("Your Project Main Title")}</span>
              </Link>
            </Col>

            <Col lg={6} className={"flex-center"}>
              {/*<Search placeholder={t("СТИР") || ""} size={"large"} />*/}
            </Col>

            <Col lg={7}>
              <div className={classes.user}>
                <img src={User} alt="avatar" width={55} height={55} />
                <div className={classes["user-info"]}>
                  <p className={"mb-5 fw500"}>
                    {"FIRST NAME LAST NAME MIDDLE NAME"}
                  </p>
                  <i style={{ color: "#7e7e7e" }} className={"fz12"}>
                    Инспектор ГНК
                  </i>
                  {/*<Space style={{marginTop: 8}}>*/}
                  {/*  <Tag>{String("gnk admin").toLowerCase()}</Tag>*/}
                  {/*</Space>*/}
                </div>
              </div>
            </Col>

            <Col lg={3} className={"flex-end"}>
              <Select
                bordered={false}
                defaultValue={"cyrl"}
                size={"large"}
                style={{ width: 130 }}
                options={langOptions}
                placement={"bottomLeft"}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Header;

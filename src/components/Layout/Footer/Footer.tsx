import React from "react";
import classes from "./Footer.module.scss";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import HelpIcon from "assets/images/svg/help-circle.svg";

export type Props = {};

const Footer = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div className={classes.footer}>
      <div className="container">
        <div className={classes["footer-content"]}>
          <Row>
            <Col lg={7}>
              <div className={classes["footer-col-1"]}>
                <p>
                  © {new Date().getFullYear()}{" "}
                  {t("Государственный налоговый комитет")}.
                </p>
                <p>
                  {t(
                    "Полное или частичное использование материалов возможно только с активной гиперссылкой."
                  )}
                </p>
              </div>
            </Col>
            <Col lg={5}></Col>
            <Col lg={5}></Col>
            <Col lg={7} className={"flex-end"}>
              <div className={classes["footer-help"] + " flex-end"}>
                <a href="#">
                  <div className={classes["circle"]}>
                    <img src={HelpIcon} alt="" />
                  </div>
                  <span>{t("Помощь и поддержка")}</span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Footer;

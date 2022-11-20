import React from "react";
import classes from "./Footer.module.scss";
import { Row, Col } from "antd";
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
						<Col span={7}>
							<div className={classes["footer-col-1"]}>
								<p>© {new Date().getFullYear()} {t("Государственный налоговый комитет")}.</p>
								<p>{t("footer_text")}.</p>
							</div>
						</Col>
						<Col span={5}></Col>
						<Col span={5}></Col>
						<Col span={7}>
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
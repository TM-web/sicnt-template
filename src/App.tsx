import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const asd = "asdasd";
  const temp = "s";

  return (
    <div className={`${asd}`}>
      <h1>{t("Сақлашда хатолик юзберди")}</h1>

      <p className={"fz20"}>
        Давлат солиқ хизмати органлари томонидан замонавий ахборот коммуникация
        технологиялардан фойдаланган ҳолда тадбиркорлик субъектлари ва
        фуқароларга қулай шарт-шароитлар яратиш мақсадида, солиқ ва бошқа
        мажбурий тўловларни банкка бормасдан “CLICK” ва “PAYME” тўлов тизимлари
        ёрдамида мобил телефон ёки интернет орқали онлайн режимида тўлаш
        имконияти мавжуд
      </p>

      <br />
      <br />
    </div>
  );
}

export default App;

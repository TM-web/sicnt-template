import { Button, Table } from "antd";

function App() {
  return (
    <div className={"container"}>
      <h1>Сақлашда хатолик юзберди</h1>
      <p className={"fz20"}>
        Давлат солиқ хизмати органлари томонидан замонавий ахборот коммуникация
        технологиялардан фойдаланган ҳолда тадбиркорлик субъектлари ва
        фуқароларга қулай шарт-шароитлар яратиш мақсадида, солиқ ва бошқа
        мажбурий тўловларни банкка бормасдан “CLICK” ва “PAYME” тўлов тизимлари
        ёрдамида мобил телефон ёки интернет орқали онлайн режимида тўлаш
        имконияти мавжуд
      </p>

      <Button>ad asd asd sa</Button>

      <br />
      <br />

      <Table
        bordered={true}
        size={"small"}
        pagination={{
          pageSize: 20,
          total: 1000,
          size: "default",
          showSizeChanger: false,
        }}
        columns={[
          {
            title: "wqe qwewq e qweqw",
            key: "asd",
            dataIndex: "asd",
          },
          {
            title: "wqe qwewq e qweqw",
            key: "asd",
            dataIndex: "asd",
          },
          {
            title: "wqe qwewq e qweqw",
            key: "asd",
            dataIndex: "asd",
          },
          {
            title: "wqe qwewq e qweqw",
            key: "asd",
            dataIndex: "asd",
          },
          {
            title: "wqe qwewq e qweqw",
            key: "asd",
            dataIndex: "asd",
          },
        ]}
        dataSource={[{ asd: "asd asd sa dasd" }]}
      />
    </div>
  );
}

export default App;

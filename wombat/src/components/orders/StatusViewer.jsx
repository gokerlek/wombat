/**
 * @description - Bu komponent, siparişlerin durumunu gösterir. Uc kisimdan olusur. Her kisim siparis ile ilgli bilgileri gosterir.
  -details: siparisin detaylarini gosterir
                  -Müsteri Adi
                  -Tutar
                  -Siparis Saati
                  -Gecen Sure
                  -Adres
                  -Odeme Tipi

     1. kisim, yeni siparisleri listeler.
        -status: 0
        -action: siparisi iptal et.

     2. kisim, hazirlanan siparisleri listeler.
        -status: 1
        -action: siparisi yolla

     3. kisim, teslim edilmek uzere yola cikan siparisleri listeler.
        -status: 2
        -action: siparisi teslim et

 */
import OrderList from "./new-order-list";
import { groupByStatus } from "./ordersHelper.jsx";

const StatusViewer = ({ list }) => {
  const statusList = groupByStatus(list);

  return (
    <div className="grid grid-cols-3 gap-5 w-full h-full px-3 py-5">
      <OrderList status={0} list={statusList[0]} />
      <OrderList status={1} list={statusList[1]} />
      <OrderList status={2} list={statusList[2]} />
    </div>
  );
};
export default StatusViewer;

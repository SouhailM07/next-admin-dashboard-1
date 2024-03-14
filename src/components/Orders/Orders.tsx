"use client";
import "./orders.css";
// syncfusion
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "@/data/dummy";

export default function Orders() {
  return (
    <>
      <main>
        <GridComponent
          dataSource={ordersData}
          className="border-2 border-red-500"
        >
          <ColumnsDirective>
            {ordersGrid.map((e, i) => {
              return <ColumnDirective key={i} {...e} />;
            })}
          </ColumnsDirective>
        </GridComponent>
      </main>
    </>
  );
}

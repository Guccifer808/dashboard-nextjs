import { GiShoppingBag } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { mockData } from "@/mockData";

const orders = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex justify-between px-4 pt-4">
        <h2 className="text-2xl font-bold">Orders</h2>
        <h2>Welcome back, user</h2>
      </div>
      <div className="p-4">
        <div className="m-auto w-full overflow-y-auto rounded-lg border bg-white p-4">
          <div className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between p-2 sm:grid-cols-3 md:grid-cols-4">
            <span>Order</span>
            <span className="text-right sm:text-left">Status</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {mockData.map((order, id) => (
              <li
                key={id}
                className="my-3 grid grid-cols-2 items-center justify-between rounded-lg bg-slate-50 p-2 hover:bg-slate-100 sm:grid-cols-3 md:grid-cols-4"
              >
                <div className="flex">
                  {/* Icon wrapper */}
                  <div className="rounded-lg bg-rose-100 p-3">
                    <GiShoppingBag className="text-rose-500" />
                  </div>
                  <div className="pl-4">
                    <p className="font-bold text-slate-700">
                      ${order.total.toLocaleString()}
                    </p>
                    <p className="text-sm text-slate-700">{order.name.first}</p>
                  </div>
                </div>
                {/* Status */}
                <p className="text-right text-slate-600 sm:text-left">
                  <span
                    className={
                      order.status == "Completed"
                        ? "rounded-lg bg-green-200 p-2"
                        : order.status == "Pending"
                        ? "rounded-lg bg-blue-200 p-2"
                        : "rounded-lg bg-yellow-200 p-2"
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="hidden items-center justify-between sm:flex">
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;

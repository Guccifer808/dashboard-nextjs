import { mockData } from "@/mockData";
import { GiShoppingBag } from "react-icons/gi";

const RecentOrders = () => {
  return (
    <div className="relative col-span-1 m-auto h-[50vh] w-full overflow-scroll rounded-lg border bg-white p-4 lg:h-[70vh]">
      <h1>Recent Orders</h1>
      <ul>
        {mockData.map((order, id) => (
          <li
            key={id}
            className="rouded-lg my-3 flex cursor-pointer items-center bg-slate-50 p-2 hover:bg-slate-100"
          >
            <div className="rounded-lg bg-rose-50 p-2">
              <GiShoppingBag className="text-rose-500" />
            </div>
            {/* Order info */}
            <div className="pl-4">
              <p className="font-bold text-slate-700">{order.total}</p>
              <p className="text-sm text-slate-400">{order.name.first}</p>
            </div>
            <p className="absolute right-6 text-sm md:hidden lg:flex">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;

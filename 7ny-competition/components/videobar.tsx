import { Home, Reorder, Analytics, Feedback } from "@mui/icons-material";

const List = [
  {
    name: "Home",
    icon: <Home />,
  },
  {
    name: "Posts",
    icon: <Reorder />,
  },
  {
    name: "Analytics",
    icon: <Analytics />,
  },
  {
    name: "Feedback",
    icon: <Feedback />,
  },
];

export default function Videobar() {
  return (
    <>
      <div className="w-[212px] h-screen border-r-[1px] border-gray-200">
        <div className="h-[72px] mx-[8px] py-4 border-b-[1px] border-gray-200">
          <div className="w-[196px] h-10 bg-gray-200  rounded text-center leading-10 text-xs text-gray-400">
            上传
          </div>
        </div>
        <div>
          <ul>
            {List.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex h-[50px] items-center px-[10px]"
                >
                  <div>{item.icon}</div>
                  <div className="ml-[10px] pt-[3px]">{item.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

// export { Videobar };

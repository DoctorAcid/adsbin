import React from "react";

interface Props {
  pathname: string;
}

const Settings = ({ pathname }: Props) => {
  return (
    <div
      className={`group flex items-center py-4 px-6 gap-6 cursor-pointer border-b-[1px] border-b-lightGray bg-white hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-300 ${
        pathname === "/settings" ? "border-r-4 border-primary" : ""
      } `}
    >
      {/* icon */}
      <div className="w-6 h-6 flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`transition-all ease-in-out duration-300 ${
              pathname === "/settings"
                ? "stroke-accent"
                : "group-hover:stroke-primary stroke-black"
            }`}
            d="M10.3426 3.94005C10.433 3.39759 10.9023 3 11.4523 3H12.5462C13.0962 3 13.5655 3.39759 13.6559 3.94005L13.8049 4.83386C13.8756 5.25813 14.1886 5.59838 14.5858 5.76332C14.9832 5.92832 15.4396 5.90629 15.7897 5.65617L16.5273 5.12933C16.9748 4.80969 17.5878 4.86042 17.9767 5.24929L18.7502 6.02284C19.1391 6.41171 19.1898 7.02472 18.8702 7.47223L18.3432 8.21007C18.0931 8.56012 18.0711 9.01633 18.236 9.41363C18.4009 9.81078 18.7411 10.1236 19.1652 10.1943L20.0592 10.3433C20.6017 10.4337 20.9993 10.9031 20.9993 11.453V12.547C20.9993 13.0969 20.6017 13.5663 20.0592 13.6567L19.1654 13.8056C18.7411 13.8764 18.4009 14.1893 18.236 14.5865C18.071 14.9839 18.093 15.4403 18.3431 15.7904L18.8698 16.5278C19.1895 16.9753 19.1388 17.5884 18.7499 17.9772L17.9763 18.7508C17.5875 19.1396 16.9745 19.1904 16.5269 18.8707L15.7893 18.3439C15.4393 18.0938 14.983 18.0718 14.5857 18.2367C14.1885 18.4016 13.8756 18.7418 13.8049 19.166L13.6559 20.0599C13.5655 20.6024 13.0962 21 12.5462 21H11.4523C10.9023 21 10.433 20.6024 10.3426 20.0599L10.1936 19.1661C10.1229 18.7419 9.80999 18.4016 9.41275 18.2367C9.01535 18.0717 8.55902 18.0937 8.20887 18.3438L7.47125 18.8707C7.02374 19.1904 6.41073 19.1396 6.02186 18.7507L5.24831 17.9772C4.85944 17.5883 4.80871 16.9753 5.12835 16.5278L5.65539 15.79C5.90543 15.4399 5.92747 14.9837 5.76252 14.5864C5.59764 14.1892 5.25746 13.8764 4.83329 13.8057L3.93932 13.6567C3.39686 13.5663 2.99927 13.0969 2.99927 12.547V11.453C2.99927 10.9031 3.39686 10.4337 3.93932 10.3433L4.83312 10.1944C5.2574 10.1236 5.59765 9.81071 5.76259 9.41347C5.92759 9.01605 5.90556 8.5597 5.65544 8.20954L5.12875 7.47216C4.8091 7.02465 4.85983 6.41164 5.2487 6.02277L6.02225 5.24922C6.41112 4.86036 7.02413 4.80962 7.47164 5.12927L8.20924 5.65613C8.55931 5.90618 9.01555 5.92822 9.41287 5.76326C9.81004 5.59837 10.1229 5.25819 10.1936 4.834L10.3426 3.94005Z"
            stroke="none"
            strokeWidth={pathname === "/settings" ? "2" : "1.5"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className={`transition-all ease-in-out duration-300 ${
              pathname === "/settings"
                ? "stroke-accent"
                : "group-hover:stroke-primary stroke-black"
            }`}
            d="M15 12C15 13.6569 13.6568 15 12 15C10.3431 15 8.99997 13.6569 8.99997 12C8.99997 10.3432 10.3431 9.00002 12 9.00002C13.6568 9.00002 15 10.3432 15 12Z"
            stroke="none"
            strokeWidth={pathname === "/settings" ? "2" : "1.5"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* title */}
      <div className="flex flex-col text-secondary">
        <h4>SETTINGS</h4>
        <h6 className="">Adjust your preferences</h6>
      </div>
    </div>
  );
};

export default Settings;

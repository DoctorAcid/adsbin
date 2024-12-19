interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export const UploadButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-4 px-6 py-3 rounded bg-primary text-white hover:bg-opacity-10 hover:text-primary active:bg-primary active:text-white outline-none transition-all ease-in-out duration-300"
    >
      <h3>{children}</h3>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="stroke-white group-hover:stroke-primary group-active:stroke-white transition-all ease-in-out duration-300"
          d="M4 16V17C4 17.7956 4.31607 18.5587 4.87868 19.1213C5.44129 19.6839 6.20435 20 7 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V16M16 8L12 4M12 4L8 8M12 4V16"
          stroke="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

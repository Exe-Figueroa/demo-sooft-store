export const Button = ({ children, ...props }) => {
  return <button className="bg-black hover:bg-gray-800 text-white flex items-center py-1.5 px-3 rounded-lg font-semibold" {...props}>{children}</button>;
};

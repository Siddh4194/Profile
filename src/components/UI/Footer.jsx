import toast from "react-hot-toast";

export const Footer = () => {
  return (
    <div className="h[5%] w-full flex items-center text-gray-500 gap-10">
      <h1
        className="text-xl font-semibold cursor-pointer"
        onClick={() => {
          navigator.clipboard
            .writeText("siddhantkadam.career@gmail.com")
            .then(() => {
              toast.success("Email copied to clipboard!");
            })
            .catch(() => {
              toast.error("Failed to copy email.");
            });
        }}
      >
        siddhantkadam.career@gmail.com
      </h1>

      <h1
        className="text-xl font-semibold cursor-pointer"
        onClick={() => (window.location.href = "https://github.com/Siddh4194")}
      >
        Github
      </h1>

      <h1 className="text-xl font-semibold">Twitter</h1>
      <h1 className="text-xl font-semibold">Instagram</h1>

      <h1
        className="text-xl font-semibold cursor-pointer"
        onClick={() =>
          (window.location.href = "https://www.linkedin.com/in/siddhant-kadam/")
        }
      >
        Linkedin
      </h1>
    </div>
  );
};

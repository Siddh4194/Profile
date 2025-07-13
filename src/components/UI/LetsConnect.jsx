export const LetsConnect = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-black pb-6 leading-tight">
        Got a challenging system to design?
        <br />
        <span className="text-gray-600">I’d love to hear about it.</span>
      </h1>

      <p className="text-xl text-gray-700 mt-6 max-w-3xl leading-relaxed">
        Whether it’s event-driven architecture, secure APIs, or scalable data
        flows — I work end-to-end from design to deployment. Let’s talk about
        building something impactful.
      </p>

      <div className="mt-10 w-full border-t pt-8">
        <div className="flex  gap-4">
          <div>
            <label className="block text-lg font-medium text-gray-500 mb-1 ">
              Project in Mind
            </label>
            <a
              href="mailto:siddhantkadam.biz@gmail.com"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
            >
              siddhantkadam.biz@gmail.com
            </a>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-500 mb-1 ">
              Role in Mind
            </label>
            <a
              href="mailto:siddhantkadam.career@gmail.com"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
            >
              siddhantkadam.career@gmail.com
            </a>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-500 mb-1 ">
              Let’s Connect
            </label>
            <a
              href="mailto:siddhantkadam.network@gmail.com"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
            >
              siddhantkadam.network@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

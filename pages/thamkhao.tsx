import StickyNav from "../components/StickyNav";
import TopNav from "../components/TopNav";

export default function Thamkhao() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <TopNav active={"thamkhao"} />
      <div className="ok-content">
        {numbers.map((num) => (
          <a
            key={num}
            className="group mt-3 flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
            href="#"
          >
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    Management
                  </h3>
                  <p className="text-sm text-gray-500">4 job positions</p>
                </div>
                <div className="pl-3">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <StickyNav active={"thamkhao"} zen={false} />
    </>
  );
}

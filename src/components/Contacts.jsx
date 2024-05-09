import Link from "next/link";
import LogoCrop from "./LogoCrop";

function Contacts() {
  return (
    <>
      <hr class="h-px mt-14 bg-gray-500 border-0 dark:bg-gray-700"></hr>
      <div className="max-w-auto text-balance py-12 text-center font-medium md:py-20 justify-center">
        <div
          className="glass-container-oval rounded-full p-1 mx-auto max-w-32 md:rounded-full text-center justify-center"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <Link href="tel:+359886191251">
            <LogoCrop />
          </Link>
        </div>
        <div
          className="flex gap-4 mt-8 text-3xl text-center justify-center"
          data-aos="fade-up"
        >
          Връзка с нас
        </div>
        <button className="mt-6"></button>
      </div>
    </>
  );
}
export default Contacts
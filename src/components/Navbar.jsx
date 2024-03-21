import Navbaritem from "@/components/Navbaritem";

export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 gap-3 justify-center lg:text-lg">
      <Navbaritem title="Tranding" param="fetchTrending" />
      <Navbaritem />
      <Navbaritem title="Top Rated" param="fetchTopRated" />
      <Navbaritem />
    </div>
  );
}
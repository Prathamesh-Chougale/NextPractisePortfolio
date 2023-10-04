import FilterForm from "@/components/FilterForm";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <main className="flex-center sm:p-11 xs:p-8 px-6 py-12 mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center">
            Welcome to my Site
          </h1>
        </div>
        <SearchForm />
      </section>
      <FilterForm />
    </main>
  );
}

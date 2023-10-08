import FilterForm from "@/components/FilterForm";
import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import { Resource, getProject } from "@/sanity/sanity-util";

export const revalidate = 900; //so if we updated any data in sanity, it will update the data in nextjs after 15 minutes

interface Props {
  searchParams: { [key: string]: string | undefined };
}

export default async function Home({ searchParams }: Props) {
  const resource = await getProject({
    category: searchParams?.category || "",
    query: searchParams?.query || "",
    page: "1",
  });

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
      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header
            query={searchParams?.query || ""}
            category={searchParams?.category || ""}
          />
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-center">
            {resource?.length > 0 ? (
              resource.map(
                (p: Resource & { views: number; category: string }) => (
                  <ResourceCard
                    key={p._id}
                    _id={p._id}
                    title={p.title}
                    image={p.image}
                    downloadLink={p.downloadLink}
                    slug={p.slug}
                    views={p.views || 0}
                    category={p.category || "Uncategorized"}
                  />
                )
              )
            ) : (
              <div>no resource found</div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}

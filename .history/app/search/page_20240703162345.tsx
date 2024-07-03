import { notFound } from "next/navigation";

type Props = {
  searchParams: {
    url: URL;
    group_adults: string;
    group_children: string;
    no_rooms: string;
    checkin: string;
    checkout: string;
  };
};
async function page({ searchParams }: Props) {
  //   console.log(props);
  if (!searchParams.url) return notFound();

  const results = await fetch(props.searchParams.url.href);

  return <div>page</div>;
}

export default page;

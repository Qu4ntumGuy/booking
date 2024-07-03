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
function page(props: Props) {
  console.log(props);
  if (!props.searchParams) return notFound();
  return <div>page</div>;
}

export default page;

import Image from "next/legacy/image";
import Link from "next/link";
import moment from "moment";
import "moment/locale/da";
import { Key, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { getBlogpost } from "../../../../services/getBlogpost";

interface Props {
  posts: [];
  count: number;
}

interface Post {
  author: {
    avatar: {
      filename_download: string;
      id: string;
    };
    name: string;
  };
  excerpt: string;
  date_created: number;
  image: {
    filename_download: string;
    id: string;
  };
  slug: string;
  title: string;
}

const Main: React.FC<Props> = ({ posts, count }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["Posts", currentPage],
    queryFn: () => getBlogpost(currentPage),
    keepPreviousData: true,
  });

  let customData = posts;

  if (isLoading) {
    customData = posts;
  } else {
    customData = data;
  }

  return (
    <section>
      <div className="px-5 py-10 sm:px-10 sm:py-20 xl:px-80 bg-csfooter md:px-20 lg:px-40">
        <div className="max-w-3xl mx-auto">
          {customData.map((post: Post, index: Key) => {
            return (
              <div
                className="px-10 py-8 mb-12 bg-white border border-gray-200 rounded-md lg:py-12 text-csblack"
                key={index}
              >
                <h2 className="text-xl lg:text-4xl font-quicksand font-semibold sm:text-3xl">
                  {post.title}
                </h2>
                <div className="flex items-center mt-8 space-x-3">
                  <Image
                    className="border rounded-full bg-light-blue-100"
                    src={`https://www.api.wheelific.com/assets/${post.author.avatar.id}`}
                    width={50}
                    height={50}
                    alt={post.author.name}
                    priority
                  />
                  <div className="flex flex-col items-center">
                    <label className="mr-auto text-left font-quicksand font-semibold text-secondary">
                      {post.author.name}
                    </label>
                    <label className="mr-auto text-sm font-light text-gray-500 font-quicksand">
                      {moment(post.date_created).locale("da").format("LL")}
                    </label>
                  </div>
                </div>
                <div className="mt-4 mb-8 border w-28 boder-b border-secondary"></div>
                {post.date_created === null ? null : (
                  <Image
                    width={686}
                    height={457}
                    alt=""
                    src={`https://www.api.wheelific.com/assets/${post.image.id}`}
                    priority
                  />
                )}
                <div
                  className="mt-8 font-light text-center text-gray-700 font-quicksand sm:text-left line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <Link
                  href={`/${post.slug}`}
                  className="not-italic font-semibold font-quicksand"
                >
                  <button className="flex items-center px-20 py-3 mx-auto mt-8 text-sm text-white rounded-full cursor-pointer lg:text-base bg-csgreen focus:outline-none hover:bg-opacity-90">
                    {"Forsæt Læsning"}
                  </button>
                </Link>
              </div>
            );
          })}
          <div className="flex mx-32 space-x-4">
            {currentPage !== 1 ? (
              <button
                className="flex items-center w-full py-4 mx-auto mt-8 space-x-2 text-sm text-white rounded-md cursor-pointer lg:text-base bg-csgreen"
                onClick={() => {
                  setCurrentPage((page) => page - 1);
                }}
              >
                <span className="mx-auto not-italic font-normal font-filson">
                  Nyere Indlæg
                </span>
              </button>
            ) : null}
            {currentPage <= count / 5 ? (
              <button
                className="flex items-center w-full py-4 mt-8 space-x-2 text-sm text-white bg-red-500 rounded-md cursor-pointer lg:text-base justify-center"
                onClick={() => {
                  setCurrentPage((page) => page + 1);
                }}
              >
                <span className="not-italic font-normal font-filson">
                  Tidligere Indlæg
                </span>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

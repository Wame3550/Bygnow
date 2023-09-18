import Image from "next/legacy/image";
import moment from "moment";
import Prism from "prismjs";
import { useEffect, useState } from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import { Root } from "hast";
import { HiOutlineChevronRight } from "react-icons/hi";
import { AiOutlineCheck } from "react-icons/ai";
import Link from "next/link";

interface Props {
  title: string;
  author: {
    avatar: {
      filename_download: string;
      id: string;
    };
    name: string;
  };
  date_created?: number;
  image: string | null;
  html: string;
}

const Posts: React.FC<Props> = ({
  title,
  author,
  date_created,
  image,
  html,
}: Props) => {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    };

    highlight();
  }, [html]);

  const toc: {
    id: string | number | boolean | (string | number)[] | null | undefined;
    title: string;
  }[] = [];

  const content = unified()
    .use(rehypeParse, { fragment: true })
    .use(() => {
      return (tree: Root) => {
        visit(tree, "element", (node) => {
          if (node.tagName === "h2") {
            const id = (node.children[0] as HTMLInputElement).value
              .toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, "")
              .replace(/[\s_-]+/g, "-")
              .replace(/^-+|-+$/g, "");

            if (node.properties != undefined) {
              node.properties.id = id;
            }

            toc.push({
              id: node.properties?.id,
              title: (node.children[0] as HTMLInputElement).value,
            });
          }
        });
      };
    })
    .use(rehypeStringify)
    .processSync(html)
    .toString();

  const [tocHover, setTocHover] = useState("");

  return (
    <section>
      <div className="px-5 py-10 sm:px-10 sm:py-20 xl:px-36 bg-csfooter md:px-20">
        <div className="xl:max-w-6xl flex gap-x-10 mx-auto">
          <div className="xl:w-3/4 w-full px-12 py-8 bg-white border border-gray-200 rounded-md lg:py-12 text-csblack">
            <div className="flex flex-col min-h-screen">
              <h1 className="text-xl lg:text-4xl font-quicksand font-bold sm:text-3xl">
                {title}
              </h1>
              <div className="flex items-center mt-8 space-x-3">
                <Image
                  className="border rounded-full bg-light-blue-100"
                  src={`https://www.api.wheelific.com/assets/${author.avatar.id}`}
                  width={50}
                  height={50}
                  alt={author.name}
                  priority
                />
                <div className="flex flex-col items-center">
                  <label className="mr-auto text-left font-quicksand font-semibold text-secondary">
                    {author.name}
                  </label>
                  <label className="mr-auto text-sm font-light text-gray-500 font-quicksand">
                    <label>{date_created}</label>
                  </label>
                </div>
              </div>
              <div className="mt-4 mb-8 border w-28 boder-b border-secondary"></div>
              {image === null ? null : (
                <div>
                  <Image
                    src={`https://www.api.wheelific.com/assets/${image}`}
                    objectFit="cover"
                    alt=""
                    priority
                    width={737}
                    height={477}
                  />
                </div>
              )}
              <div
                className="mt-5 prose font-quicksand max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
          <div className="hidden lg:block relative w-1/4">
            <div className="stick py-4 bg-white border border-gray-200 rounded-md top-5 bottom-5">
              <h3 className="uppercase font-quicksand font-bold px-10 py-4">
                On this page
              </h3>
              <ul>
                {toc.map(({ id, title }) => {
                  return (
                    <Link key={title} href={`#${id}`}>
                      <li onMouseEnter={() => setTocHover(title)}>
                        <div className="text-sm font-light text-gray-700 font-quicksand hover:text-gray-900 border-t py-4 px-10 flex items-center space-x-1">
                          <div>
                            <HiOutlineChevronRight
                              className={`${
                                tocHover === title && "text-secondary"
                              }`}
                              fontSize={18}
                            />
                          </div>
                          <div>{title}</div>
                        </div>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;

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
import Link from "next/link";
import AffiliateShopCard from "../../card/AffiliateShopCard";

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
  introduction: string;
  products: {
    image: {
      filename_download: string;
      id: string;
    };
    link: string;
    name: string;
    features: {
      feature: string;
    }[];
    best: string;
    body: string;
  }[];
  conclusion: string;
}

const BestOfPost: React.FC<Props> = ({
  title,
  author,
  date_created,
  introduction,
  products,
  conclusion,
}: Props) => {
  const AddIdToHeading = (html: string) => {
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
            }
          });
        };
      })
      .use(rehypeStringify)
      .processSync(html)
      .toString();

    return content;
  };

  const m = moment(date_created);

  const [tocHover, setTocHover] = useState("");
  const [tocData, setTocData] = useState([{ id: "", title: "", type: "" }]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelector("#body")!.querySelectorAll("h2, h3, h4")
    ).map((elem) => ({
      id: (elem as HTMLElement).innerText
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, ""),
      title: (elem as HTMLElement).innerText,
      type: (elem as HTMLElement).nodeName.toLocaleLowerCase(),
    }));
    setTocData(elements);
  }, []);

  return (
    <section>
      <div className="px-5 py-10 sm:px-10 sm:py-20 xl:px-36 bg-csfooter md:px-20">
        <div className="xl:max-w-6xl flex gap-x-10 mx-auto">
          <div className="xl:w-3/4 w-full px-12 py-8 bg-white border border-gray-200 rounded-md lg:py-12 text-csblack">
            <div className="flex flex-col min-h-screen">
              <h1 className="text-xl lg:text-4xl font-filson sm:text-3xl">
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
                  <label className="mr-auto text-left font-filson text-secondary">
                    {author.name}
                  </label>
                  <label className="mr-auto text-sm font-light text-gray-500 font-filson">
                    <label>{m.format("LL")}</label>
                  </label>
                </div>
              </div>
              <div className="mt-4 mb-8 border w-28 boder-b border-secondary"></div>
              <section id="body">
                <div
                  className="mt-5 prose font-filson"
                  dangerouslySetInnerHTML={{
                    __html: AddIdToHeading(introduction),
                  }}
                />
                {products.map((product, index) => {
                  return (
                    <AffiliateShopCard
                      key={index}
                      position={index}
                      best={product.best}
                      name={product.name}
                      image={product.image}
                      features={product.features}
                      link={product.link}
                      body={AddIdToHeading(product.body)}
                    />
                  );
                })}
                <div
                  className="mt-5 prose font-filson"
                  dangerouslySetInnerHTML={{
                    __html: AddIdToHeading(conclusion),
                  }}
                />
              </section>
            </div>
          </div>
          <div className="hidden lg:block relative w-1/4">
            <div className="stick py-4 bg-white border border-gray-200 rounded-md top-5 bottom-5">
              <h3 className="uppercase font-filson px-10 py-4">On this page</h3>
              <ul>
                {tocData.map(({ id, title, type }) => {
                  return (
                    <Link key={title} href={`#${id}`}>
                      <li
                        onMouseEnter={() => setTocHover(title)}
                        onMouseLeave={() => setTocHover("")}
                      >
                        <div
                          className={`${
                            type === "h3" && "ml-3"
                          } text-sm font-light text-gray-700 font-filson hover:text-gray-900 border-t py-4 px-10 flex items-center space-x-1`}
                        >
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

export default BestOfPost;
function useHeadingsData(): { nestedHeadings: any } {
  throw new Error("Function not implemented.");
}

import CreateBlog from "@/components/blog/create-blog";
import { initialData } from "@/components/editor/data";

const Page = async () => {
    return <CreateBlog initData={initialData} />;
}

export default Page;
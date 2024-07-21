import { ContentLayout } from "@/app/(protected)/_components/layout/content-layout"
import CreateNewBlog from "../editor/new-editor"
import { OutputData } from "@editorjs/editorjs"
import { Blog } from "@/types"

type CreateBlogProps = {
    blog: Blog
    blogId: string | null
}

const CreateBlog: React.FC<CreateBlogProps> = ({ blog, blogId }) => {
    return (
        <ContentLayout title="New doc" >
            <CreateNewBlog blog={blog} blogId={blogId} />
        </ContentLayout>
    )
}

export default CreateBlog
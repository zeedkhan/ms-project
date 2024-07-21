import { ContentLayout } from "@/app/(protected)/_components/layout/content-layout";
import { auth } from "@/auth";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getUserBlogs } from "@/db/blog";
import { StickyNote } from "lucide-react";
import Link from "next/link";
import Landing from "./_component/landing";

const Page = async () => {

    const session = await auth();

    if (!session) {
        return null
    }

    const getData = await getUserBlogs(session.user.id);

    return (
        <ContentLayout title="Your Blogs">
            <Landing blogs={getData} />
        </ContentLayout>
    );
}

export default Page

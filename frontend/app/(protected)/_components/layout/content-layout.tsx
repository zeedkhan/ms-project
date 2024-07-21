import { Navbar } from "@/app/(protected)/_components/layout/navbar";

interface ContentLayoutProps {
    title: string;
    children: React.ReactNode;
}

export async function ContentLayout({ title, children }: ContentLayoutProps) {
    return (
        <>
            <Navbar title={title} />
            <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
        </>
    );
}
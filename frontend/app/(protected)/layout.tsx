import AdminPanelLayout from "@/app/(protected)/_components/layout/layout-wrapper";

export default function ProtectedLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminPanelLayout>{children}</AdminPanelLayout>
  )
} 
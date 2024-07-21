import { ContentLayout } from "../_components/layout/content-layout";
import AccountWrapper from "./_components/account-wrapper";
import CustomBreadCrumb from "@/components/custom-bread-crumb";


const title = "Account";

const routes = [{
    title: "Home",
    url: "/"
}, {
    title: title,
    url: `/${title}`
}]

const Account = () => {
    return (
        <ContentLayout title={title}>
            <CustomBreadCrumb routes={routes} />
            <AccountWrapper />
        </ContentLayout>
    );
}

export default Account;
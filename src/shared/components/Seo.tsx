import { SuperSEO, SuperSEOProps } from "react-super-seo";

interface ISeoProps extends SuperSEOProps {
    title: string;
    description?: string;
}

const Seo = ({
    title,
    children,
    description,
    openGraph,
    lang,
    twitter,
    ...props
}: ISeoProps) => {
    const defaultDescription = description || "Basic description from the page";
    return (
        <SuperSEO
            title={title}
            description={defaultDescription}
            lang={lang || "id"}
            openGraph={{
                ...openGraph,
                ogTitle: title,
                ogDescription: defaultDescription,
            }}
            twitter={{
                ...twitter,
                twitterAppCard: {
                    ...twitter?.twitterAppCard,
                    appCardDescription: defaultDescription,
                },
                twitterPlayerCard: {
                    ...twitter?.twitterPlayerCard,
                    playerCardDescription: defaultDescription,
                    playerCardTitle: title,
                },
                twitterSummaryCard: {
                    ...twitter?.twitterSummaryCard,
                    summaryCardDescription: defaultDescription,
                    summaryCardTitle: title,
                },
                twitterSummaryCardWithLargeImage: {
                    ...twitter?.twitterSummaryCardWithLargeImage,
                    summaryCardDescription: description,
                    summaryCardTitle: title,
                },
            }}
            {...props}
        >
            {children}
        </SuperSEO>
    );
};

export default Seo;

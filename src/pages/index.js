import * as React from "react"
import { LocalesList } from "gatsby-theme-i18n"
import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from "react-intl"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"

const Index = () => {
    const intl = useIntl();
    return (
        <Layout>
        <Seo title={intl.formatMessage({ id: "home" })} />
        <h1>{intl.formatMessage({ id: "helloWorld" })}</h1>
        <p>{intl.formatMessage({ id: "indexNote" })}</p>
        <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
        />
        <h2>{intl.formatMessage({ id: "overviewLang" })}</h2>
        <LocalesList />
        </Layout>
    )
}

export default Index

import * as React from "react"
import { useIntl } from "react-intl"
import {LocalizedLink, useLocalization} from "gatsby-theme-i18n"

export const LangSwitcher = () => {
    const { config } = useLocalization()
    const intl = useIntl();

    return (
        <div style={{
            float: 'right'
        }}>
            {config.map((locale) => (
                <LocalizedLink
                    key={locale.code}
                    to='/'
                    language={locale.code}
                    style={{
                        color: intl.locale === locale.code ? `yellow` : `white`,
                        margin: 10,
                        textDecoration: `underline`,
                        cursor: `pointer`,
                    }}
                >
                    {locale.name}
                </LocalizedLink>
            ))}
        </div>
    )
}

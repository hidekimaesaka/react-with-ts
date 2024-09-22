import { type ReactNode } from "react";

type HintInfoBox = {
    mode: 'hint';
    children: ReactNode
}

type WarningInfoBox = {
    mode: 'warning';
    severety: 'low' | 'medium' | 'high';
    children: ReactNode
}

type InfoBoxProps = WarningInfoBox | HintInfoBox


export default function InfoBox(props: InfoBoxProps) {

    if (props.mode === "hint") {

        return (
            <aside className="infobox infobox-hint">
                <p>
                    {props.children}
                </p>
            </aside>
        )
    }

    return (
        <aside className={`infobox infobox-warning warning--${props.severety}`}>
            <p>
                {props.children}
            </p>
        </aside>
    )
}

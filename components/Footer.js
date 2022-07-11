import { Strip, Link, Icon, ICONS } from '@canonical/react-components'

export default function Nav() {
    return (
        <footer>
            <hr className="u-no-margin--bottom"></hr>
            <Strip type="light" className="u-no-margin--top">
                <p>
                    Copyright 2022 &copy; Archive Data Center Project.
                </p>
                <p>
                    <Link href="https://github.com/archivedc"><Icon name={ICONS.github}></Icon></Link>
                </p>
            </Strip>
        </footer>
    )
}
import { Navigation } from '@canonical/react-components'

export default function Nav() {
    return (
        <Navigation
            logo={{
                title: 'ArchiveDC',
                url: '/'
            }}
            theme="dark"
        />
    )
}
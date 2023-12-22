import { Stack, Text } from '@mantine/core'

function ContentBody({ isMobile }: { isMobile: boolean }) {
    return (
        <>
            <Stack gap={4}>
                <Text
                    fw={300}
                    c={'desaturated-red'}
                    ta={isMobile ? 'center' : 'left'}
                    className="tracking-[.3em] text-5xl lg:text-6xl"
                >
                    WE'RE
                </Text>
                <Text
                    fw={600}
                    c={'dark-grayish-red'}
                    ta={isMobile ? 'center' : 'left'}
                    className="tracking-[.3em] text-5xl lg:text-6xl"
                >
                    COMING
                </Text>
                <Text
                    fw={600}
                    c={'dark-grayish-red'}
                    ta={isMobile ? 'center' : 'left'}
                    className="tracking-[.3em] text-5xl lg:text-6xl"
                >
                    SOON
                </Text>
            </Stack>
            <Text ta={isMobile ? 'center' : 'left'} c={'desaturated-red'}>
                Hello fellow shoppers! We're currently building our new fashion
                store. Add your email below to stay up-to-date with
                announcements and our launch deals.
            </Text>
        </>
    )
}

export default ContentBody

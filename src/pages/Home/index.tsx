import {
    Button,
    Container,
    Grid,
    Group,
    Image,
    Stack,
    Text,
    TextInput,
    getGradient,
    useMantineTheme,
} from '@mantine/core'
import Seo from 'shared/components/Seo'
import HeroDesktop from 'assets/images/hero-desktop.jpg'
import BgPatternDesktop from 'assets/images/bg-pattern-desktop.svg'
import Logo from 'assets/images/logo.svg'
import IconArrow from 'assets/images/icon-arrow.svg'

const Home = () => {
    const theme = useMantineTheme()

    return (
        <>
            <Seo title={'Hello World'} />
            <Container h={'100vh'} mih={'100vh'} p={0} fluid>
                <Grid className="h-full" gutter={0}>
                    <Grid.Col className="h-full relative" span={7}>
                        <Image
                            src={BgPatternDesktop}
                            h={'100vh'}
                            className="absolute top-0 z-0"
                        />
                        <Stack
                            className="h-screen pl-36 pr-52 py-16"
                            bg={getGradient(
                                { deg: 135, from: 'white', to: 'white-red' },
                                theme
                            )}
                            justify="space-around"
                        >
                            <Group className="z-30">
                                <Image src={Logo} />
                            </Group>
                            <Stack justify="center" className="h-full z-30">
                                <Stack gap={4}>
                                    <Text
                                        fw={300}
                                        c={'desaturated-red'}
                                        className="tracking-[.3em] text-6xl"
                                    >
                                        WE'RE
                                    </Text>
                                    <Text
                                        fw={600}
                                        c={'dark-grayish-red'}
                                        className="tracking-[.3em] text-6xl"
                                    >
                                        COMING
                                    </Text>
                                    <Text
                                        fw={600}
                                        c={'dark-grayish-red'}
                                        className="tracking-[.3em] text-6xl"
                                    >
                                        SOON
                                    </Text>
                                </Stack>
                                <Text c={'desaturated-red'}>
                                    Hello fellow shoppers! We're currently
                                    building our new fashion store. Add your
                                    email below to stay up-to-date with
                                    announcements and our launch deals.
                                </Text>
                                <Group mt={50} className='w-full relative'>
                                    <TextInput
                                        className='w-[90%] absolute'
                                        placeholder="Email Address"
                                        radius="xl"
                                        size="lg"
                                        styles={{
                                            wrapper: {
                                                '--_input-placeholder-color':
                                                    '#debaba',
                                                fontWeight: 300,
                                                '--_input-bd': '#debaba',
                                                '--_input-padding-left': '28px',
                                                '--_input-padding-right': '55px',
                                                '--_input-bd-focus': '#ce9797',
                                            },
                                            input: {
                                                backgroundColor: 'transparent',
                                                fontSize: 16,
                                            },
                                        }}
                                    />
                                    <Button
                                        className='absolute w-1/5 right-0'
                                        radius="xl"
                                        size="lg"
                                        styles={{
                                            root: {
                                                '--button-bg': 'linear-gradient(135deg, #f8bfbf 0%, #ee8c8c 100%)',
                                                '--button-hover': '#f9cfd0',
                                            },
                                        }}
                                    >
                                        <Image src={IconArrow}/>
                                    </Button>
                                </Group>
                            </Stack>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col className="h-full" span={'auto'}>
                        <Image src={HeroDesktop} h={'100vh'} />
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}

export default Home

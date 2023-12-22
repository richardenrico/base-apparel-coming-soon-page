import {
    Container,
    Grid,
    Group,
    Image,
    Stack,
    getGradient,
    useMantineTheme,
} from '@mantine/core'
import Seo from 'shared/components/Seo'
import HeroDesktop from 'assets/images/hero-desktop.jpg'
import HeroMobile from 'assets/images/hero-mobile.jpg'
import BgPatternDesktop from 'assets/images/bg-pattern-desktop.svg'
import Logo from 'assets/images/logo.svg'
import { useMediaQuery } from '@mantine/hooks'
import Form from 'pages/Home/components/Form'
import ContentBody from 'pages/Home/components/ContentBody'

const Home = () => {
    const isMobile = useMediaQuery(`(max-width: 48em`)

    const theme = useMantineTheme()

    return (
        <>
            <Seo title={'Base Apparel | HomePage'} />
            <Container h={'100vh'} mih={'100vh'} p={0} bg={'white-red'} fluid>
                <Grid className="h-full" gutter={0}>
                    <Grid.Col
                        className="h-full relative"
                        span={{ base: 12, md: 8.5, lg: 7 }}
                        order={{ base: 2, md: 1 }}
                    >
                        <Image
                            src={BgPatternDesktop}
                            h={'100vh'}
                            className="absolute top-0 z-0"
                            visibleFrom="md"
                        />
                        <Stack
                            className="px-10 py-14 md:h-screen md:pl-36 md:pr-52 md:py-16"
                            bg={
                                isMobile
                                    ? 'white-red'
                                    : getGradient(
                                          {
                                              deg: 135,
                                              from: 'white',
                                              to: 'white-red',
                                          },
                                          theme
                                      )
                            }
                            justify="space-around"
                        >
                            <Group className="z-30" visibleFrom="md">
                                <Image src={Logo} />
                            </Group>
                            <Stack
                                justify="center"
                                className="h-full z-30 md:mt-14"
                            >
                                <ContentBody isMobile={isMobile ?? false} />
                                <Form isMobile={isMobile ?? false} />
                            </Stack>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col
                        className="h-full"
                        span={{ base: 12, md: 'auto', lg: 'auto' }}
                        order={{ base: 1, md: 2 }}
                    >
                        <Group bg={'white'} className="h-20" hiddenFrom="md">
                            <Image src={Logo} className="ml-6 h-6" />
                        </Group>
                        <Image src={HeroMobile} hiddenFrom="md" />
                        <Image src={HeroDesktop} h={'100vh'} visibleFrom="md" />
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}

export default Home

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
import { useForm, zodResolver } from '@mantine/form'
import Seo from 'shared/components/Seo'
import z from 'zod'
import HeroDesktop from 'assets/images/hero-desktop.jpg'
import HeroMobile from 'assets/images/hero-mobile.jpg'
import BgPatternDesktop from 'assets/images/bg-pattern-desktop.svg'
import Logo from 'assets/images/logo.svg'
import IconArrow from 'assets/images/icon-arrow.svg'
import IconError from 'assets/images/icon-error.svg'
import { useState } from 'react'
import { useMediaQuery } from '@mantine/hooks'

const Home = () => {
    const isMobile = useMediaQuery(`(max-width: 48em`)

    const theme = useMantineTheme()

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const schema = z.object({
        email: z.string().email(),
    })

    const form = useForm({
        initialValues: {
            email: '',
        },
        validate: zodResolver(schema),
    })

    return (
        <>
            <Seo title={'Hello World'} />
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
                            <Stack justify="center" className="h-full z-30">
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
                                <Text
                                    ta={isMobile ? 'center' : 'left'}
                                    c={'desaturated-red'}
                                >
                                    Hello fellow shoppers! We're currently
                                    building our new fashion store. Add your
                                    email below to stay up-to-date with
                                    announcements and our launch deals.
                                </Text>
                                <form
                                    onSubmit={(event) => {
                                        setIsSubmitted(true)
                                        event.preventDefault()
                                    }}
                                    onChange={() => setIsSubmitted(false)}
                                >
                                    <Group
                                        mt={isMobile ? 30 : 50}
                                        className="w-full relative"
                                    >
                                        <TextInput
                                            className="w-[95%] absolute"
                                            placeholder="Email Address"
                                            radius="xl"
                                            size="lg"
                                            rightSection={
                                                isSubmitted &&
                                                !form.isValid('email') && (
                                                    <Image src={IconError} />
                                                )
                                            }
                                            error={
                                                isSubmitted &&
                                                !form.isValid('email')
                                            }
                                            styles={{
                                                wrapper: {
                                                    '--_input-placeholder-color':
                                                        '#debaba',
                                                    fontWeight: 300,
                                                    '--_input-bd': '#debaba',
                                                    '--_input-padding-left':
                                                        '7%',
                                                    '--_input-padding-right':
                                                        isSubmitted &&
                                                        !form.isValid('email')
                                                            ? isMobile
                                                                ? '35%'
                                                                : '25%'
                                                            : '20%',
                                                    '--_input-bd-focus':
                                                        '#ce9797',
                                                    color: 'black',
                                                },
                                                input: {
                                                    backgroundColor:
                                                        'transparent',
                                                    fontSize: 16,
                                                },
                                                section: {
                                                    marginRight: isMobile
                                                        ? '18%'
                                                        : '15%',
                                                },
                                            }}
                                            {...form.getInputProps('email', {
                                                withError: false,
                                            })}
                                        />
                                        <Button
                                            className="absolute md:w-1/5 right-0 shadow-2xl"
                                            radius="xl"
                                            size="lg"
                                            type="submit"
                                            // mb={16}
                                            styles={{
                                                root: {
                                                    '--button-bg':
                                                        'linear-gradient(135deg, #f8bfbf 0%, #ee8c8c 100%)',
                                                    '--button-hover': '#f9cfd0',
                                                },
                                            }}
                                        >
                                            <Image src={IconArrow} />
                                        </Button>
                                    </Group>
                                </form>
                                {isSubmitted && !form.isValid('email') ? (
                                    <Text mt={'md'} fz={14} ml={'6%'} c={'red'}>
                                        Please provide a valid email
                                    </Text>
                                ) : (
                                    <Text
                                        mt={'md'}
                                        fz={14}
                                        ml={'6%'}
                                        c={'transparent'}
                                    >
                                        You see nothing okay
                                    </Text>
                                )}
                            </Stack>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col
                        className="h-full"
                        span={{ base: 12, md: 'auto', lg: 'auto' }}
                        order={{ base: 1, md: 2 }}
                    >
                        <Group className="h-20" hiddenFrom="md">
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

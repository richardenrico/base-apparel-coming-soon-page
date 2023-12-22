import { Group, Text, Image, TextInput, Button } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { useState } from 'react'
import { z } from 'zod'
import IconArrow from 'assets/images/icon-arrow.svg'
import IconError from 'assets/images/icon-error.svg'

function Form({ isMobile }: { isMobile: boolean }) {
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
            <form
                onSubmit={(event) => {
                    setIsSubmitted(true)
                    event.preventDefault()
                }}
                onChange={() => setIsSubmitted(false)}
            >
                <Group mt={isMobile ? 30 : 50} className="w-full relative">
                    <TextInput
                        className="w-[95%] absolute"
                        placeholder="Email Address"
                        radius="xl"
                        size="lg"
                        rightSection={
                            isSubmitted &&
                            !form.isValid('email') && <Image src={IconError} />
                        }
                        error={isSubmitted && !form.isValid('email')}
                        styles={{
                            wrapper: {
                                '--_input-placeholder-color': '#debaba',
                                fontWeight: 300,
                                '--_input-bd': '#debaba',
                                '--_input-padding-left': '7%',
                                '--_input-padding-right':
                                    isSubmitted && !form.isValid('email')
                                        ? isMobile
                                            ? '35%'
                                            : '25%'
                                        : '20%',
                                '--_input-bd-focus': '#ce9797',
                                color: 'black',
                            },
                            input: {
                                backgroundColor: 'transparent',
                                fontSize: 16,
                            },
                            section: {
                                marginRight: isMobile ? '18%' : '15%',
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
                <Text mt={'md'} fz={14} ml={'6%'} c={'transparent'}>
                    You see nothing okay
                </Text>
            )}
        </>
    )
}

export default Form

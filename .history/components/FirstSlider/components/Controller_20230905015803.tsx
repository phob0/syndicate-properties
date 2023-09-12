import { 
    VStack,
    HStack,
    Heading,
    Text,
    Container
} from '@chakra-ui/react'

function Controller() {
    return (
        <Container>
            <VStack
                spacing={4}
                align='stretch'
            >
                <Heading sx={{ textAlign: "center" }}>How it works</Heading>
                <Text align="center">Stake is available to savvy investors all over the world</Text>
            </VStack>
        </Container>
    )
}

export default Controller;
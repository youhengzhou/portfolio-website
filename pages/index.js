import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} align="center">
                Hello, my name is Yohannes, and I am a fulltime software
                developer, part time open-source Python package maintainer.
            </Box>

            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title"></Heading>
                </Box>
            </Box>
        </Container>
    );
};

export default Page;

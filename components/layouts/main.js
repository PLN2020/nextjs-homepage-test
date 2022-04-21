import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelPC from '../voxel-pc.js'

const Main = ({children, router}) => {
    return (
        <Box as ="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Patrick-Lam Nguyen - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.lg.md" pt={14}>
                <VoxelPC />
                {children}
            </Container>
        </Box>
    )
}

export default Main
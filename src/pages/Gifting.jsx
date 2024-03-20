import { Container, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Gifting = () => {
    return (
        <>
            <Navbar />
            <Container maxW={"container.xl"} px={0}>
                <Image src="https://www.sogood.in.net/web/image/910859/gifting.jpg" alt="" />
            </Container>
            <Container maxW={"container.xl"} px={0} centerContent>
                <Image src="https://www.sogood.in.net/web/image/934026/gift_sose.jpg" alt="" />
            </Container>
            <Container maxW={"7xl"}>
                <Grid templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(3, 1fr)",
                }}
                mt={3}>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/920310/02.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/920311/03.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/920312/04.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/920314/05.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/920315/06.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/920317/08.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/920318/09.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/920319/10.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/920320/11.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/920321/12.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/920322/13.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/933843/hamper_18.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/933844/hamper_19.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/933845/hamper_20.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3} >
                        <Image src="https://www.sogood.in.net/web/image/933846/hamper_21.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}  mt={3}>
                        <Image src="https://www.sogood.in.net/web/image/933847/hamper_22.jpg" alt="" />
                    </GridItem>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

export default Gifting
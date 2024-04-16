import {
  Container,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  LinkBox,
  LinkOverlay,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const ReadMorePost = ({ postDetails }) => {
  return (
    <Container maxW={{ base: "100vw", lg: "80vw" }} my={12} centerContent>
      <Card
        direction={{ base: "column", lg: "row" }}
        overflow="hidden"
        boxShadow={"none"}
      >
        <Grid
          templateColumns={{
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={8}
        >
          <GridItem>
            <Image
              src={postDetails.image}
              alt={postDetails.title}
              border={"4px"}
              borderColor={"text.500"}
            />
          </GridItem>
          <GridItem>
            <Heading fontWeight={"600"} color="brand.700" size="lg">
              {postDetails.title}
            </Heading>
            <Text textAlign={"justify"} fontSize={14} py={6}>
              {postDetails.content}
            </Text>
            <LinkBox
              as={Button}
              variant="outline"
              color="#C39D89"
              borderColor={"#C39D89"}
              _hover={{
                textDecoration: "none",
                bgColor: "#C39D89",
                color: "white",
              }}
            >
              <LinkOverlay href={postDetails.href}>Read More</LinkOverlay>
            </LinkBox>
          </GridItem>
        </Grid>
      </Card>
    </Container>
  );
};

export default ReadMorePost;

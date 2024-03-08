import { Box, Grid } from "@chakra-ui/layout";
import CosmeticCard from "../components/molecules/CosmeticCard";

function News() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" m={5} gap={6}>
      <Box boxSize="sm">
        <CosmeticCard
          imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          imgAlt="test"
          btnAction={() => true}
          title="Test news"
          description="Test news"
        />
      </Box>
    </Grid>
  );
}

export default News;

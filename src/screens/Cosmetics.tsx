import { Box, Grid } from "@chakra-ui/layout";
import CosmeticCard from "../components/atoms/CosmeticsCard/CosmeticCard";
import SearchBar from "../components/atoms/SearchBar/SearchBar";

const Cosmetics = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" m={5} gap={6}>
      <Box boxSize="sm">
        <SearchBar />
      </Box>
    </Grid>
  );
};

export default Cosmetics;

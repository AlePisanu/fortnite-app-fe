import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routes } from "../../../communication/routes";

type LogoProps = {
  route?: string;
  size: string;
  src: string;
  altName: string;
};

const Logo = ({ route = routes.DASHBOARD, size, src, altName }: LogoProps) => {
  return (
    <Link to={route}>
      <Box display="flex">
        <Image w={size} src={src} alt={altName} />
      </Box>
    </Link>
  );
};

export default Logo;

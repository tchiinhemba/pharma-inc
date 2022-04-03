import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

import styles from "./Header.module.scss";

export function Header(props) {
  const sizePhoto = '50px';

  return (
    <React.Fragment>
      <header className={styles.container}>
        <Box d="flex" alignItems="center" gap="1rem">
          <Image
            src="https://source.unsplash.com/random"
            width={sizePhoto}
            height={sizePhoto}
            objectFit="cover"
          />
          <Text>Pharma Inc</Text>
        </Box>
        <Box>
          <Image
            src="https://source.unsplash.com/random"
            width={sizePhoto}
            height={sizePhoto}
            clipPath="circle(50% at 50% 50%)"
          />
        </Box>
      </header>
    </React.Fragment>
  );
}

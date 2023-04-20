import React from "react";
import { Box, Container, Flex, Text, Heading, Image } from "theme-ui";
import { Link } from "components/link";

import callImage from "assets/cleaning.jpg";

const CallToAction = () => {
  return (
    <Box as="section" id="warum" sx={styles.callToAction}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Text as="span">Immobilienwartungsdienste</Text>
            <Heading as="h3">
              Unser Unternehmen bietet eine Reihe von professionellen
              Reinigungs- und Immobilienwartungsdiensten an, um Ihre Immobilie
              in Top-Zustand zu halten.
            </Heading>
            <Text as="p">
              Kontaktieren Sie uns noch heute, um unsere Dienstleistungen zu
              vereinbaren, einschließlich Büroreinigung, Teppichreinigung,
              Fensterreinigung, Tiefenreinigung, WC-Reinigung, Bodenpflege sowie
              Hauswirtschafts- und Pflegedienstleistungen.
            </Text>
            <Link path="tel:00410764147964" sx={styles.button}>
              Rufen Sie uns an!
            </Link>
          </Box>
          <Box sx={styles.images}>
            <Image src={callImage} alt="call image" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CallToAction;

const styles = {
  callToAction: {
    mt: ["-90px", null, null, null, "0"],
    py: ["50px", null, null, null, "110px", null, "140px"],
  },
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, "row"],
  },
  content: {
    flex: "1",
    textAlign: ["center", null, null, null, "left"],
    pt: ["80px", null, null, null, "0"],
    maxWidth: ["100%", null, null, "80%", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["30px", null, null, null, "0"],
    span: {
      fontSize: "18px",
      fontWeight: 700,
      color: "primary",
      display: "block",
      lineHeight: 1,
    },
    h3: {
      color: "#0F2137",
      fontWeight: 700,
      fontSize: ["16px", null, null, null, "18px", "26px", "34px"],
      maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      lineHeight: 1.36,
      letterSpacing: "-1.5px",
      mt: "20px",
      mb: "30px",
    },
    p: {
      color: "#02073E",
      fontSize: ["16px", null, null, "18px"],
      lineHeight: ["2", null, null, 2.33],
      mb: "30px",
    },
  },
  button: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  images: {
    flex: "1",
    display: ["none", null, null, null, "flex"],
    alignItems: "center",
    alignContent: "center",
    jusitfyContent: "center",
    width: "100%",

    img: {
      borderRadius: "10px",
      maxHeight: ["300px", null, null, null, "600px"],
      alignSelf: "center",
      marginLeft: "auto",
    },
    // flex: ["0 0 100%", null, null, null, "0 0 40.5%"],
  },
};

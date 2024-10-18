import {
    Box,
    Burger,
    Container,
    Group,
    Footer as MantineFooter,
    Paper,
    Stack,
    Transition,
    createStyles,
} from "@mantine/core";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import useConfig from "../../hooks/config.hook";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import useTranslate from "../../hooks/useTranslate.hook";
import useUser from "../../hooks/user.hook";
const FOOTER_HEIGHT = 127;
type NavLink = {
  link?: string;
  label?: string;
  component?: ReactNode;
  action?: () => Promise<void>;
};
const useStyles = createStyles((theme) => ({
    root: {
      position: "fixed",
      bottom: 0,
      zIndex: 1,
    },
  
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    },
    
    copyright: {
      [theme.fn.smallerThan("sm")]: {
        fontWeight: 400,
      },
    },
  
    link: {
      display: "block",
      lineHeight: 1,
      padding: "8px 12px",
      borderRadius: theme.radius.sm,
      textDecoration: "none",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },
  
  }));
  
  const Footer = () => {
    const t = useTranslate();
    const { classes, cx } = useStyles();
    let footerLinks: NavLink[] = [
      {
        link: "https://www.hektor-rydzewski.de/rechtliches/datenschutz.php",
        label: t("footer.links.privacy"),
      },
      {
        link: "/",
        label: t("footer.links.terms"),
      },
      {
        link: "https://www.hektor-rydzewski.de/rechtliches/impressum.php",
        label: t("footer.links.imprint"),
      },
    ];
    const items = (
      <>
        {(footerLinks).map((link, i) => {
          if (link.component) {
            return (
              <Box pl={5} py={20} key={i}>
                {link.component}
              </Box>
            );
          }
          return (
            <Link
              key={link.label}
              href={link.link ?? ""}
              // onClick={() => toggleOpened.toggle()}
              className={cx(classes.link)}
            >
              {link.label}
            </Link>
          );
        })}
      </>
    );
    return(
        <MantineFooter height={FOOTER_HEIGHT} mt={40} className={cx(classes.root)}>
            <Container className={cx(classes.footer)}>
              <Group>
               <div className={cx(classes.copyright)} id="footer.links.copyrigth">{t("footer.links.copyrigth")}</div>  
              </Group>            
              <Group spacing={5} className={cx(classes.link)}>
                <Group>{items} </Group>
              </Group>         
            </Container>
        </MantineFooter>
    )
  }
  
  export default Footer;

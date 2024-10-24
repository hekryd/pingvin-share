import {
  Burger,
  Button,
  Group,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import Logo from "../../Logo";
import useConfig from "../../../hooks/config.hook";

const ConfigurationHeader = ({
  isMobileNavBarOpened,
  setIsMobileNavBarOpened,
}: {
  isMobileNavBarOpened: boolean;
  setIsMobileNavBarOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  const config = useConfig();
  const theme = useMantineTheme();
  return (
    <Header height={60} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={isMobileNavBarOpened}
            onClick={() => setIsMobileNavBarOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Group position="apart" w="100%">
          <Link href="/" passHref>
            <Group>
              <Logo src={"/img/logo.png"} height={20} width={80} />
              <Text weight={600}>{config.get("general.appName")}</Text>
            </Group>
          </Link>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Button variant="light" component={Link} href="/admin">
              <FormattedMessage id="common.button.go-back" />
            </Button>
          </MediaQuery>
        </Group>
      </div>
    </Header>
  );
};

export default ConfigurationHeader;
